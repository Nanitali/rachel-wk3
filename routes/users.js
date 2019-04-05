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
      let winner
      while (thing2 === thing1) { thing2 = things[Math.floor(things.length * Math.random())] }// J-TAPS: do you understand this?
      let thing1Total = thing1.shininess + thing1.carbohydrate + thing1.stealth
      let thing2Total = thing2.shininess + thing2.carbohydrate + thing2.stealth
      if (thing1Total > thing2Total) {
        winner = thing1.name
      } else if (thing1Total < thing2Total) {
        winner = thing2.name
      } else {
        winner = 'No one'
      }
      res.render('index', { thing1, thing2, winner })
    })
})

//
// if thing1 has 2 wins then thing 1 is winner, else if thing2 wins it is winner else draw

// game logic: run the stats against eachother so the highest number of each property
// shininess vs shininess
// carbohydrates vs carbohydrates
// stealth vs stealth

// strech game logic:
// give a random number for each property of the thing each time it fights i.e no fight will have the same stats as before.
// add wins and losses

router.get('/things', (req, res) => {
  db.getThings()
    .then(things => {
      res.render('things', { things })
    })
})

router.get('/things/add', (req, res) => {

  res.render('add', req.params.id)
})
router.post('/things/add', (req, res) => {
  const formData = {
    name: req.body.name,
    url: req.body.url,
    shininess: req.body.shininess,
    carbohydrate: req.body.carbohydrate,
    stealth: req.body.stealth }
  db.addThing(formData.name, formData.url, formData.shininess, formData.carbohydrate, formData.stealth)
    .then(res.redirect('/things'))

})

router.get('/things/:id', (req, res) => {
  db.getThing(req.params.id)
    .then(thing => {
      res.render('thing', thing)
    })
})


router.get('/things/edit/:id', (req, res) => {
  const id = req.params.id
  db.getThing(id)
    .then(thing => {
      res.render('thingEdit', thing)
    })

})

router.post('/things/edit/:id', (req, res) => {
  const formData = { name: req.body.name,
    url: req.body.url,
    shininess: req.body.shininess,
    carbohydrate: req.body.carbohydrate,
    stealth: req.body.stealth }
  db.editThing(req.params.id, formData.name, formData.url, formData.shininess, formData.carbohydrate, formData.stealth)

    .then(res.redirect('/things'))

})

module.exports = router
