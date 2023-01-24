const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 1000

app.use(express.json())//if we want to use req.body this middleware is required

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/quiz', require('./routes/quiz'))

connectToMongo();

app.listen(port, () => {
  console.log(`quiz backend listening on port ${port}`)
})


