const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const tareasRoutes = require('./routes/tareas')

require('dotenv').config({path: './config/.env'})

connectDB()

app.use(express.json())

app.use('/api/Tareas', tareasRoutes)

app.all("*", (req,res)=>{
    res.status(404).json({
        status: 'error',
        menssange: `No se pudo encontrar la ruta ${req.originalUrl}`
    })
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running!')
})  