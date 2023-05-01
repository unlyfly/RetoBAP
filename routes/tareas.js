//Importamos express y archivo controlador
const express = require("express");
const router = express.Router();
const tareasController = require("../controllers/tareas");

// Define la ruta y el método HTTP "GET" para obtener todas las tareas
router.get("/", tareasController.getTareas);

// Define la ruta y el método HTTP "GET" para obtener una tarea por su ID
router.get("/:id", tareasController.getTarea);

// Define la ruta y el método HTTP "POST" para registrar una nueva tarea
router.post("/", tareasController.createTarea);

// Define la ruta y el método HTTP "PUT" para actualizar una tarea existente por su ID
router.put("/:id", tareasController.updateTarea);

// Define la ruta y el método HTTP "DELETE" para eliminar una tarea existente por su ID
router.delete("/:id", tareasController.deleteTarea);

//Exportamos el router para poder ser utilizado en otro archivo
module.exports = router;