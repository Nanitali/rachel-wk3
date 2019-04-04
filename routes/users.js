const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/random', (req, res) => {
  db.getThings()
    .then((things) => {
      let thing1 = things[Math.Floor(things.length * Math.random())]
      let thing2 = things[Math.Floor(things.length * Math.random())]
       //let thing1 = things[Math.floor(Math.random()*things.length)]
      //let thing2 = things[Math.floor(Math.random()*things.length)]

    })
    .then(randomThings => {
      res.redirect('/', randomThings)
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
