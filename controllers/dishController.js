const { Dish } = require('../models/')

const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find()
        return res.status(200).json({ dishes })
    } catch (error) {
        return res.staus(500).send(error.message)
    }
}

const getDishById = async (req, res) => {
    try {
        const { id } = req.params
        const dish = await Dish.findById(id)
        if (dish) {
            return res.status(200).json({ dish })
        }
        return res.status(404).send('Dish with the specified id does not exist')
    } catch (error) {
        return res.staus(500).send(error.message)
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