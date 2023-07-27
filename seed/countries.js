const db = require('db')
const { Continent, Country } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const africa = await Continent.findOne({name: 'Africa'})
    const asia = await Continent.findOne({name: 'Asia'})
    const europe = await Continent.findOne({name: 'Europe'})
    const northAmerica = await Continent.findOne({name: 'North America'})
    const southAmerica = await Continent.findOne({name: 'South America'})
    const oceania = await Continent.findOne({name: 'Oceania'})

    const countries = [

        {
            name: 'Nigeria',
            continent: africa._id
        },
        {
            name: 'Morocco',
            continent: africa._id
        },
        {
            name: 'Egypt',
            continent: africa._id
        },
        {
            name: 'Ethiopia',
            continent: africa._id
        },
        {
            mame: 'Kenya',
            continent: africa._id
        },
        {
            name: 'China',
            continent: asia._id
        },
        {
            name: 'Taiwan',
            continent: asia._id
        },
        {
            name: 'Japan',
            continent: asia._id
        },
        {
            name: 'South Korea',
            continent: asia._id
        },
        {
            name: 'Singapore',
            continent: asia._id
        },
        {
            name: 'Indonesia',
            continent: asia._id
        },
        {
            name: 'India',
            continent: asia._id
        },
        {
            name: 'Iran',
            continent: asia._id
        },
        {
            name: 'Greece',
            continent: europe._id
        },
        {
            name: 'Italy',
            continent: europe._id
        },
        {
            name: 'Spain',
            continent: europe.id
        },
        {
            name: 'France',
            continent: europe._id
        },
        {
            name: 'United Kingdom',
            continent: europe._id
        },
        {
            name: 'United States',
            continent: northAmerica._id
        },
        {
            name: 'Canada',
            continent: northAmerica._id
        },
        {
            name: 'Mexico',
            continent: northAmerica._id
        },
        {
            name: 'Brazil',
            continent: southAmerica._id
        },
        {
            name: 'Argentina',
            continent: southAmerica._id
        },
        {
            name: 'Chile',
            continent: southAmerica._id
        },
        {
            name: 'Peru',
            continent: southAmerica._id
        },
        {
            name: 'Colombia',
            continent: southAmerica._id
        },
        {
            name: 'Australia',
            continent: oceania._id
        },
        {
            name: 'New Zealand',
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