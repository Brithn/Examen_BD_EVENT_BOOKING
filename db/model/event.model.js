const { Sequelize, Model, DataTypes } = require('sequelize');
const { Booking } = require('./booking.model');  // Verifica que el modelo de Booking esté bien importado

const EVENT_TABLE = 'events';

const EventSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  capacity: {
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

class Event extends Model {
  static associate(models) {
    // Cambia 'eventId' por 'event_id' para que coincida con el nombre de la clave foránea en el modelo de Booking
    this.hasMany(models.Booking, { foreignKey: 'event_id', as: 'bookings' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVENT_TABLE,
      modelName: 'Event',
      timestamps: false,
    };
  }
}


module.exports = { EVENT_TABLE, Event, EventSchema };
