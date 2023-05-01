//Importamos las librerias y archivos necesarios
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const tareasRoutes = require("./routes/tareas");

require("dotenv").config({ path: "./config/.env" });

//Conectando a la base de datos
connectDB();

// Analiza el cuerpo de la solicitud en formato JSON
app.use(express.json());

//Define la ruta base
app.use("/api/Tareas", tareasRoutes);

//Para manejar solicitude url no establecidas
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    menssange: `No se pudo encontrar la ruta ${req.originalUrl}`,
  });
});

//Inicia el servidor en el puerto especificado en la variable de entorno
app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});