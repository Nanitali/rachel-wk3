exports.up = (knex, Promise) => {
  return knex.schema.createTable('things', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('url')
    table.integer('shininess')
    table.integer('carbohydrate')
    table.integer('stealth')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('things')
}
