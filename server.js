const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db')
const APPRouter = require('./routes/AppRouter')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Server works'))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))