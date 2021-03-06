const connectDB = require('./startup/db')
const express = require('express')
const cors = require('cors')
const app = express()

connectDB();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}`)
})

