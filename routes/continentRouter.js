const Router = require('express').Router()
const controller = require('../controllers/continentController')

Router.get('/', controller.getContinents)
Router.get('/:id', controller.getContinentById)
Router.post('/', controller.createContinent)
Router.put('/:id', controller.updateContinent)
Router.delete('/:id', controller.deleteContinent)

module.exports = Router
