const { Continent } = require('../models/')

const getContinents = async (req, res) => {
    try {
        const continents = await Continent.find()
        return res.status(200).json({ continents })
    } catch (error) {
        return res.staus(500).send(error.message)
    }
}

const getContinentById = async (req, res) => {
    try {
        const { id } = req.params
        const continent = await Continent.findById(id)
        if (continent) {
            return res.status(200).json({ continent })
        }
        return res.status(404).send('Continent with the specified id does not exist')
    } catch (error) {
        return res.staus(500).send(error.message)
    }
}

const createContinent = async (req, res) => {
    try {
        const continent = await new Continent(req.body)
        await continent.save()
        return res.status(201).json({ continent })
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
}

const updateContinent = async (req, res) => {
    try {
        let { id } = req.params
        let continent = await Continent.findByIdAndUpdate(id, req.body, { new: true})
        if (continent) {
            return res.status(200).json(continent)
        }
        throw new Error('Continent not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteContinent = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Continent.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Continent deleted')
        }
        throw new Error('Continent not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getContinents,
    getContinentById,
    createContinent,
    updateContinent,
    deleteContinent
}