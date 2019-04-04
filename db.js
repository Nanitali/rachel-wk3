const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getThing,
  getThings,
  addThing,
  delThing,
  editThing
}

function getThings (db = connection) {
  return db('things').select()
}

function getThing (id, db = connection) {
  return db('things').where('id', id).first()
    .select()
}

function addThing (name, url, shininess, carbohydrate, stealth, db = connection) {
  return db('things')
    .insert({ name, url, shininess, carbohydrate, stealth })
}

function delThing (id, db = connection) {
  return db('things')
    .where({ id: id })
    .del()
}

function editThing (id, name, url, shininess, carbohydrate, stealth, db = connection) {
  return db('things')
    .where({ id: id })
    .update({ name, url, shininess, carbohydrate, stealth })
}
