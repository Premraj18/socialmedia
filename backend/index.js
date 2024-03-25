const express = require('express')
const dotenv = require('dotenv')
const connectdb = require('./db')

dotenv.config();
connectdb();

const app = express()

app.get('/', (req,res) => {
    res.send('hello from server')
})

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})