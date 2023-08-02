const _ = require('lodash');
const { Continent, Country, Dish } = require('../models/')

const getDishes = async (req, res) => {
    const search = req.query.search?.toLowerCase()
    const ingredients = req.query.ingredients?.toLowerCase()
    let dishes = []

    try {
        if (search) {
            const continent = await Continent.findOne({name: search})
            if (continent) { 
                const countries = await Country.find({continent: continent._id})
                const countryIds = countries.map(country => country._id)
                dishes = await Dish.find({country: {$in: countryIds}}).populate('country')
            } else { 
                const country = await Country.findOne({name: search})
                if (country) {
                    dishes = await Dish.find({country: country._id}).populate('country')
        
                } else {
                    const dish = await Dish.findOne({name: search}).populate('country')
                    if (dish) {
                        dishes = [dish]
                    }
                }
            } 
        } else if (ingredients) {
            const ingredientsArr = ingredients.split(',')
            const unsortedDishes = await Dish.find({ingredients: {$in: ingredientsArr}})
            const dishesByIngredientCount = _.groupBy(unsortedDishes, (dish) => {
               return dish.ingredients.reduce((acc, ingredient) => {
                    if (ingredientsArr.includes(ingredient)) {
                        acc += 1
                    } 
                    return acc
                }, 0)
            })
            const ingredientCounts = _.keys(dishesByIngredientCount).sort().reverse()
            dishes = ingredientCounts.flatMap(ingredientCount => dishesByIngredientCount[ingredientCount])
        } else {
            dishes = await Dish.find({}).populate('country') 
        }
        return res.status(200).json({ dishes })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getDishById = async (req, res) => {
    try {
        const { id } = req.params
        const dish = await Dish.findById(id).populate('country')
        if (dish) {
            return res.status(200).json({ dish })
        }
        return res.status(404).send('Dish with the specified id does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createDish = async (req, res) => {
    try {
        const data = _.clone(req.body)
        data.ingredients = data.ingredients?.toLowerCase().split(', ')
        data.name = data.name?.toLowerCase()
        data.country = (await Country.findOne({name: data.country?.toLowerCase()}))?._id
        const dish = new Dish(data)
        await dish.save()
        return res.status(201).json({ dish })
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
}

const updateDish = async (req, res) => {
    try {
        const data = _.clone(req.body)
        data.ingredients = data.ingredients?.toLowerCase().split(', ')
        data.name = data.name?.toLowerCase()
        data.country = (await Country.findOne({name: data.country?.toLowerCase()}))?._id
        const { id } = req.params
        const dish = await Dish.findByIdAndUpdate(id, data, { new: true})
        if (dish) {
            return res.status(200).json(dish)
        }
        throw new Error('Dish not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteDish = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Dish.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Dish deleted')
        }
        throw new Error('Dish not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getDishes,
    getDishById,
    createDish,
    updateDish,
    deleteDish
}