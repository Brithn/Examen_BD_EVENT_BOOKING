

*/ Comando para ejecutar el proyecto*/

npm run dev

*/ Comando para ejecutar las migraciones*/

npx sequelize-cli migration:generate --name create_event
npx sequelize-cli migration:generate --name create_booking
npx sequelize-cli migration:generate --name add-event-id-to-bookings



*/ Para ejecutar una migración*/

npm run migration:run

*/ Endpoints*/

http://localhost:3000

EVENTOS:

GET /api/v1/eventos - Obtener todas las eventos
POST /api/v1/eventos - Crear nueva eventos
PATCH /api/v1/eventos/:id - Actualizar eventos
DELETE /api/v1/eventos/:id - Eliminar eventos

BOOKINGS:

GET /api/v1/bookings - Obtener todas las bookings
POST /api/v1/bookings - Crear un nuevo bookings
PATCH /api/v1/bookings/:id - Actualizar bookings
DELETE /api/v1/bookings/:id - Eliminar bookings



