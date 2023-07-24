const { Country } = require('../models/')

const getCountries = async (req, res) => {
    try {
        const countries = await Country.find()
        return res.status(200).json({ countries })
    } catch (error) {
        return res.staus(500).send(error.message)
    }
}

const getCountryById = async (req, res) => {
    try {
        const { id } = req.params
        const country = await Country.findById(id)
        if (country) {
            return res.status(200).json({ country })
        }
        return res.status(404).send('Country with the specified id does not exist')
    } catch (error) {
        return res.staus(500).send(error.message)
    }
}

const createCountry = async (req, res) => {
    try {
        const country = await new Country(req.body)
        await country.save()
        return res.status(201).json({ country })
    } catch (error) {
        return res.status(500).json({ erro: error.message })
    }
}

const updateCountry = async (req, res) => {
    try {
        let { id } = req.params
        let country = await Country.findByIdAndUpdate(id, req.body, { new: true})
        if (country) {
            return res.status(200).json(country)
        }
        throw new Error('Country not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deletecountry = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Country.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Country deleted')
        }
        throw new Error('Country not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deletecountry
}