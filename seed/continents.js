const db = require('../db')
const { Continent } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const continents = [

        {
            name: 'Africa'
        },
        {
            name: 'Asia'
        },
        {
            name: 'Europe'
        },
        {
            name: 'North America'
        },
        {
            name: 'South America'
        },
        {
            name: 'Oceania'
        }
    ]
    await Continent.deleteMany()
    await Continent.insertMany(continents)
    console.log('continents created')
}

const run = async () => {
    await main()
    db.close()
}

run()