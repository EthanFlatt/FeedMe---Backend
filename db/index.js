const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/FeedMe')
  .then(() => {
    console.log('Established connection to mongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db