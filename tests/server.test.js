const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../db', () => ({
  getThing: (id) => Promise.resolve(
    { id: id, name: 'thing1', url: '', shininess: 5, carbohydrate: 5, stealth: 5 }
  ),
  getThings: () => Promise.resolve([
    { id: 1, name: 'thing1', url: '', shininess: 5, carbohydrate: 5, stealth: 5 },
    { id: 2, name: 'thing2', url: '', shininess: 0, carbohydrate: 0, stealth: 0 }
  ])
}))

const server = require('../server')

test('GET /things shows a list of all things', () => {
  return request(server)
    .get('/things')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const h4s = $('h4').length
      expect(h4s).toBe(2)
    })
    .catch(err => expect(err).toBeNull())
})

test('GET /random calculates the winner of 2 things', () => {
  return request(server)
    .get('/random')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const winner = $('p').text()
      expect(winner).toBe('thing1')
    })
    .catch(err => expect(err).toBeNull())
})
