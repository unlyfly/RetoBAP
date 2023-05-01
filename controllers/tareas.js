const Tarea = require("../models/Tarea");

//Exportamos las funciones que daran la logica de la aplicacion
module.exports = {
  //Funcion para el metodo GET, retornara todas las tareas existentes y un conteo de las tareas incompletas
  getTareas: async (req, res) => {
    try {
      //Tomamos todas las tareas
      const tareaItems = await Tarea.find();
      //Contar tareas pendientes
      const tareasPendientes = await Tarea.countDocuments({
        completado: false,
      });
      res.json({ tareas: tareaItems, pendientes: tareasPendientes });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  //Funcion para el metodo GET, retornara la tarea selecciona por su id
  getTarea: async (req, res) => {
    try {
      //Tomamos una tarea por id
      const tareaItem = await Tarea.findById(req.params.id);
      res.json(tareaItem);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  //Funcion para el metodo POST, ingresara la informacion que le proporcionaremos en formato json
  createTarea: async (req, res) => {
    try {
      const nuevaTarea = await Tarea.create(req.body);
      console.log("Se agrego tarea!");
      res.json(nuevaTarea);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  //Funcion para el metodo PUT, modificaremos una tarea existente selecionada por su id
  updateTarea: async (req, res) => {
    try {
      const tarea = await Tarea.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      console.log("Modificacion Completada!");
      res.json(tarea);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  //Funcion para el metodo DELETE, borra una tarea existente selecionada por su id
  deleteTarea: async (req, res) => {
    try {
      await Tarea.findOneAndDelete({ _id: req.params.id });
      console.log(`Tarea ${req.params.id} borrada!`);
      res.json(`Tarea ${req.params.id} borrada!`);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};
