const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const APPRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3001
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Server works'))
app.use('/api', AppRouter)

db.on('error', console.error.bind(console, 'MongoDb connection error:'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))