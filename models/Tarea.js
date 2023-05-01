// Importa Mongoose
const mongoose = require("mongoose");

// Define un nuevo esquema de Mongoose llamado TareaSchema
const TareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  completado: {
    type: Boolean,
    required: true,
    default: false,
  },
  fechaEntrega: {
    type: Date,
    required: true,
  },
  comentarios: {
    type: String,
  },
  responsable: {
    type: String,
    default: "Por definir",
  },
  tags: {
    type: Array,
  },
  autor: {
    type: String,
    default: "anonimo",
  },
});

// Exporta el esquema de Mongoose TareaSchema como un modelo llamado 'Tarea'
module.exports = mongoose.model("Tarea", TareaSchema);