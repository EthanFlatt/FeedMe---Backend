const mongoose = require('mongoose')
const continentSchema = require('./continent')
const countrySchema = require('./country')
const dishSchema = require('./dish')

const Continent = mongoose.model('Continent', continentSchema)
const Country = mongoose.model('Country', countrySchema)
const Dish = mongoose.model('Dish', dishSchema)

module.exports = {
    Continent,
    Country,
    Dish
}