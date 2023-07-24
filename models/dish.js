const { Schema } = require('mongoose')

const Dish = new Schema(
    {
        name: {type: String, required: true},
        ingredients: {type: Array, required: true},
        instructions: {type: String, required: true},
        photo: {type: String, required: true},
        country: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Dish