const Router = require('express').Router()

const continentRouter = require('./continentRouter')
const countryRouter = require('./countryRouter')
const dishRouter = require('./dishRouter')

Router.use('/continents', continentRouter)
Router.use('/countries', countryRouter)
Router.use('/dishes', dishRouter)

module.exports = Router