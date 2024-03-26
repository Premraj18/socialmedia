const express = require('express')
const dotenv = require('dotenv')
const connectdb = require('./db');
const cookieParser = require('cookie-parser');
const UserRouter = require('./routes/UserRoutes')

dotenv.config();
connectdb();

const app = express()

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Routes
app.use('/api/users', UserRouter);

//server listening
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})