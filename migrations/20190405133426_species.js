exports.up = (knex, Promise) => {
  return knex.schema.createTable('species', (table) => {
    table.increments('id').primary()
    table.integer('things_id').references('things.id')
    table.string('species')  
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('species')
}