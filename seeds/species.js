exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {id: 101 ,things_id: 1, species: 'Consumables' },
        {id: 102,things_id: 2, species: 'Book' },
        {id: 103 ,things_id: 3, species: 'Mammal' },
        {id: 104 ,things_id: 4, species: 'Apparel' },
        {id: 105 ,things_id: 5, species: 'Tech' },
        {id: 106 ,things_id: 6, species: 'Consumables' },
        {id: 107 ,things_id: 7, species: 'Animation' },
        {id: 108 ,things_id: 8, species: 'Mammal' },
        {id: 109 ,things_id: 9, species: 'Consumables' },
        {id: 110 ,things_id: 10, species: 'Consumables' }
      ])
    })
};
