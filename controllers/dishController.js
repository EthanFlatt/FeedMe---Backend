const { Continent, Country, Dish } = require('../models/')

const getDishes = async (req, res) => {
    const search = req.query.search?.toLowerCase()
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
        } else {
            dishes = await Dish.find({}).pop
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
        const dish = await new Dish(req.body)
        await dish.save()
        return res.status(201).json({ dish })
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
}

const updateDish = async (req, res) => {
    try {
        let { id } = req.params
        let dish = await Dish.findByIdAndUpdate(id, req.body, { new: true})
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