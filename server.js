const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const tareasRoutes = require('./routes/tareas')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.json())

app.use('/api/Tareas', tareasRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running!')
})  