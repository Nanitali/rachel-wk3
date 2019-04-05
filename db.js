const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getThing,
  getThings,
  addThing,
  editThing
}

function getThings (db = connection) {
  return db('things')
    .join('species', 'things.id', 'species.things_id')
    .select('things.id as id', 'things.name', 'species.species', 'things.url', 'things.stealth', 'things.shininess', 'things.carbohydrate')
}

function getThing (id, db = connection) {
  return db('things')
    .where({ id: id })
    .first()
    .select()
}

function addThing (name, url, shininess, carbohydrate, stealth, db = connection) {
  return db('things')
    .insert({ name, url, shininess, carbohydrate, stealth })
}

function editThing (id, name, url, shininess, carbohydrate, stealth, db = connection) {
  return db('things')
    .where({ id: id })
    .update({ name, url, shininess, carbohydrate, stealth })
}
