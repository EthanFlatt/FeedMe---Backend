const { Schema } = require('mongoose')

const Country = new Schema(
    {
        name: {type: String, required: true},
        continent: {type: Schema.Types.ObjectId, ref: 'Continent', required: true}
    },
    {timestamps: true}
)

module.exports = Country