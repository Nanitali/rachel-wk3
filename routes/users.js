const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/random')
})

router.get('/random', (req, res) => {
  db.getThings()
    .then(things => {
      let thing1 = things[Math.floor(things.length * Math.random())]
      let thing2 = things[Math.floor(things.length * Math.random())]
      res.render('index', { thing1, thing2 })
    })
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
      res.render('thing', thing)
    })
})
module.exports = router
