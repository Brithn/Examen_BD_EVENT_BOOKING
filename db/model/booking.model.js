const { Sequelize, Model, DataTypes } = require('sequelize');

const BOOKING_TABLE = 'bookings';

const BookingSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'events', // nombre de la tabla a la que hace referencia
      key: 'id', // clave primaria de la tabla events
    },
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_tickets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.literal('NOW()'),
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.literal('NOW()'),
  },
};

class Booking extends Model {
  static associate(models) {
    // Relación con el modelo Event
    this.belongsTo(models.Event, { foreignKey: 'event_id', as: 'event' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BOOKING_TABLE,
      modelName: 'Booking',
      timestamps: false,
    };
  }
}

module.exports = { BOOKING_TABLE, Booking, BookingSchema };
