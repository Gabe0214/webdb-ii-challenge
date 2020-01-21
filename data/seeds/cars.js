
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { 
          id: 1, 
          Vin: '1LNLM82W7RY601630',
          Make: 'Ford',
          Mileage: 12000,
          TransmissionType: 'Automatic',
          CarTitle: true
        },

        {
          id: 2, 
          Vin: 'JM1BG2241R0797923',
          Make: 'Toyota',
          Mileage:13000,
          TransmissionType: 'Automatic',
          CarTitle: true 
        },
        {
          id: 3, 
          Vin: 'WBAKF9C52BE619303',
          Make: 'Chevrolet',
          Mileage: 15000,
          TransmissionType: 'Automatic',
          CarTitle: true
        
        }
      ]);
    });
};
