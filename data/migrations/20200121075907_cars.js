
exports.up = function(knex) {
   return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.string('Vin').unique().notNullable();
        tbl.string('Make').index().notNullable();
        tbl.integer('Mileage').notNullable();
        tbl.string('TransmissionType')
        tbl.boolean('CarTitle').defaultTo(false)
        tbl.timestamps(true, true)
   })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cars');
};
