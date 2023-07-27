const db = require('db')
const { Country, Dish } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const nigeria = await Country.findOne({name: 'Nigeria'})
    const morocco = await Country.findOne({name: 'Morocco'})
    const egypt = await Country.findOne({name: 'Egypt'})
    const ethiopia = await Country.findOne({name: 'Ethiopia'})
    const uganda = await Country.findOne({name: 'Uganda'})
    const china = await Country.findOne({name: 'China'})
    const taiwan = await Country.findOne({name: 'Taiwan'})
    const japan = await Country.findOne({name: 'Japan'})
    const southKorea = await Country.findOne({name: 'South Korea'})
    const singapore = await Country.findOne({name: 'Singapore'})
    const indonesia = await Country.findOne({name: 'Indonesia'})
    const india = await Country.findOne({name: 'india'})
    const iran = await Country.findOne({name: 'Iran'})
    const greece = await Country.findOne({name: 'Greece'})
    const italy = await Country.findOne({name: 'Italy'})
    const spain = await Country.findOne({name: 'Spain'})
    const france = await Country.findOne({name: 'France'})
    const unitedKingdom = await Country.findOne({name: 'United Kingdom'})
    const unitedStates = await Country.findOne({name: 'United States'})
    const canada = await Country.findOne({name: 'Canada'})
    const mexico = await Country.findOne({name: 'Mexico'})
    const brazil = await Country.findOne({name: 'Brazil'})
    const argentina = await Country.findOne({name: 'Argentina'})
    const peru = await Country.findOne({name: 'peru'})
    const chile = await Country.findOne({name: 'Chile'})
    const colombia = await Country.findOne({name: 'Colombia'})
    const australia = await Country.findOne({name: 'Australia'})
    const newZealand = await Country.findOne({name: 'New Zealand'})

    const dishes = [
        {
            
        }
        

    ]
    await Dish.deleteMany()
    await Dish.insertMany(dishes)
    console.log('Dishes created')

}

const run = async () => {
    await main()
    db.close()
}

run()