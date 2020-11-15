const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
//Import Routs
const authRout = require('./routs/auth')
const postRout = require('./routs/posts')
dotenv.config()


//Connect to db
// The following mongoose.set solves deprication worning problems
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect(
  process.env.DB_CONNECT, //Contains the db url & password
  () => console.log('Connected to DB')
)

//HOME ROUT TEST
app.get('/', (req, res) => {
  res.send('HOME OF ALL USERS')
})


//Middlewares
app.use(express.json())

//Rout Middlewares
app.use('/api/user', authRout)
app.use('/api/posts', postRout)

app.listen(5000, () => console.log('server running on port 5000'))
