exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        { species_id: 1, species: 'Consumables' },
        { species_id: 2, species: 'Book' },
        { species_id: 3, species: 'Mammal' },
        { species_id: 4, species: 'Apperal' },
        { species_id: 5, species: 'Tech' },
        { species_id: 6, species: 'Consumables' },
        { species_id: 7, species: 'Animation' },
        { species_id: 8, species: 'Mammal' },
        { species_id: 9, species: 'Consumables' },
        { species_id: 3, species: 'Consumables' }
      ])
    })
};
