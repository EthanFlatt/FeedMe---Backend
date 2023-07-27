const Router = require('express').Router()
const controller = require('../controllers/countryController')

Router.get('/', controller.getCountries)
Router.get('/:id', controller.getCountryById)
Router.post('/', controller.createCountry)
Router.put('/:id', controller.updateCountry)
Router.delete('/:id', controller.deleteCountry)

module.exports = Router
