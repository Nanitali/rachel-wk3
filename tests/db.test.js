const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getThings gets all things', () => {
  const expected = 3
  return db.getThings(testDb)
    .then(things => {
      const actual = things.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getThing gets a single thing', () => {
  const expected = 'thing2'
  return db.getThing(2, testDb)
    .then(thing => {
      const actual = thing.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('addThing adds a thing', () => {
  const expectedLength = 4
  const expectedName = 'test3'
  return db.addThing('test3', '', 5, 5, 5, testDb)
    .then(() => {
      return db.getThings(testDb)
    })
    .then(things => {
      const actual = things.length
      expect(actual).toBe(expectedLength)
    })
    .then(() => {
      return db.getThing(4, testDb)
    })
    .then(thing => {
      const actual = thing.name
      expect(actual).toBe(expectedName)
    })
    .catch(err => expect(err).toBeNull())
})

test('editThing changes a thing', () => {
  const expected = 'newName'
  return db.editThing(2, 'newName', 'newUrl', 2, 2, 2, testDb)
    .then(() => {
      return db.getThing(2, testDb)
    })
    .then(thing => {
      const actual = thing.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
