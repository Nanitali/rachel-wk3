exports.seed = function (knex, Promise) {
  return knex('things').del()
    .then(function () {
      return knex('things').insert([
        { id: 1, name: 'thing1', url: '', shininess: 5, carbohydrate: 5, stealth: 5 },
        { id: 2, name: 'thing2', url: '', shininess: 5, carbohydrate: 5, stealth: 5 },
        { id: 3, name: 'thing3', url: '', shininess: 5, carbohydrate: 5, stealth: 5 }
      ])
    })
}
