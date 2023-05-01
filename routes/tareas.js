const express = require('express')
const router = express.Router()
const tareasController = require('../controllers/tareas') 

router.get('/', tareasController.getTareas)

router.post('/', tareasController.createTarea)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router