//// Import Express
const express = require('express')
const mongoose = require('mongoose')
const apiroute = require('./routes/api_route')
const cors = require('cors')
const dotenv = require('dotenv')


//Intialize the application
const app = express()

//set server port
const port = 4003
app.use(express.json(),cors()) //Set Content Type to Json

// send message for your localhost
app.use('/api/users', apiroute)

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser:true} )
.then(() =>{
    console.log('Database Connected')
}).catch(err => console.log(err))


// Launch the ecommerce backend app
app.listen(port, () =>{
    console.log(`running app on port: 'http://localhost:${port}/`)
})