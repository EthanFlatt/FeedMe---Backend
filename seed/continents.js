const db = require('../db')
const { Continent } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const continents = [

        {
            name: 'africa'
        },
        {
            name: 'asia'
        },
        {
            name: 'europe'
        },
        {
            name: 'north america'
        },
        {
            name: 'south america'
        },
        {
            name: 'oceania'
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