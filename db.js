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

function addThing (thing) {
  return db('things')
    .insert(thing)
}
// what are the columns we need to insert
// does db team need to insert or routes team?
// what are handlesbars names used

function delThing (thing) {
  return db('things')
    .del()
}

function editThing (thing) {
  return db('things')
    .where('things')
    .update()
}
