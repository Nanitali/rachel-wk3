const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/things', (req, res) => {
  db.getThings()
    .then(things => {
      res.render('things', { things })
    })
})

router.get('/things/:id', (req, res) => {
  db.getThing(req.params.id)
    .then(thing => {
      res.render('thing', { thing })
    })
})

router.get('/things/add', (req, res) => {
  res.render('add')
})
router.post('/things/add', (req, res) => {
  const formData = { name: req.body.name, url: req.body.url, shininess: req.body.shininess, carbohydrate: req.body.carbohydrate, stealth: req.body.stealth }
  db.addThing(formData.name, formData.url, formData.shininess, formData.carbohydrate, formData.stealth)
  res.redirect('/things')
})

router.get('/thing/edit/:id', (req, res) => {
  const id = req.params.id
  db.getThing(id) 
  .then(thing => {res.render('thingEdit', thing)
})

router.post('/thing/edit/:id', (req, res) => {
  const formData = { name: req.body.name, url: req.body.url, shininess: req.body.shininess, carbohydrate: req.body.carbohydrate, stealth: req.body.stealth }
  db.editThing(req.params.id, formData.name, formData.url, formData.shininess, formData.carbohydrate, formData.stealth)
  .then(res.redirect('/thing'))

})



module.exports = router