const db = require('db')
const { Continent, Country } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const africa = await Continent.findOne({name: 'africa'})
    const asia = await Continent.findOne({name: 'asia'})
    const europe = await Continent.findOne({name: 'europe'})
    const northAmerica = await Continent.findOne({name: 'north america'})
    const southAmerica = await Continent.findOne({name: 'south america'})
    const oceania = await Continent.findOne({name: 'oceania'})

    const countries = [

        {
            name: 'nigeria',
            continent: africa._id
        },
        {
            name: 'morocco',
            continent: africa._id
        },
        {
            name: 'egypt',
            continent: africa._id
        },
        {
            name: 'ethiopia',
            continent: africa._id
        },
        {
            mame: 'kenya',
            continent: africa._id
        },
        {
            name: 'china',
            continent: asia._id
        },
        {
            name: 'taiwan',
            continent: asia._id
        },
        {
            name: 'japan',
            continent: asia._id
        },
        {
            name: 'south korea',
            continent: asia._id
        },
        {
            name: 'singapore',
            continent: asia._id
        },
        {
            name: 'indonesia',
            continent: asia._id
        },
        {
            name: 'india',
            continent: asia._id
        },
        {
            name: 'iran',
            continent: asia._id
        },
        {
            name: 'greece',
            continent: europe._id
        },
        {
            name: 'italy',
            continent: europe._id
        },
        {
            name: 'spain',
            continent: europe.id
        },
        {
            name: 'france',
            continent: europe._id
        },
        {
            name: 'united kingdom',
            continent: europe._id
        },
        {
            name: 'united states',
            continent: northAmerica._id
        },
        {
            name: 'canada',
            continent: northAmerica._id
        },
        {
            name: 'mexico',
            continent: northAmerica._id
        },
        {
            name: 'brazil',
            continent: southAmerica._id
        },
        {
            name: 'argentina',
            continent: southAmerica._id
        },
        {
            name: 'chile',
            continent: southAmerica._id
        },
        {
            name: 'peru',
            continent: southAmerica._id
        },
        {
            name: 'colombia',
            continent: southAmerica._id
        },
        {
            name: 'australia',
            continent: oceania._id
        },
        {
            name: 'new zealand',
            continent: oceania._id
        }

    ]
    await Country.deleteMany()
    await Country.insertMany(countries)
    console.log('Countries created')

}

const run = async () => {
    await main()
    db.close()
}

run()