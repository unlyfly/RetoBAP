const Tarea = require('../models/Tarea')

module.exports = {
    getTareas: async (req,res)=>{
        try{
            //Tomamos todas las tareas
            const tareaItems = await Tarea.find()
            //Contar tareas pendientes
            const tareasPendientes = await Tarea.countDocuments({completado: false})
            res.json({tareas: tareaItems, pendientes: tareasPendientes})
        }catch(err){
            console.log(err)
            res.json(err)
        }
    },
    getTarea: async (req,res)=>{
        try{
            //Tomamos una tarea por id
            const tareaItem = await Tarea.findById(req.params.id)
            res.json(tareaItem)
        }catch(err){
            console.log(err)
            res.json(err)
        }
    },
    createTarea: async (req, res)=>{
        try{
            const nuevaTarea = await Tarea.create(req.body)
            console.log('Se agrego tarea!')
            res.json(nuevaTarea)
        }catch(err){
            console.log(err)
            res.json(err)
        }
    },
    updateTarea: async (req, res)=>{
        try{
            const tarea = await Tarea.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
            console.log('Modificacion Completada!')
            res.json(tarea)
        }catch(err){
            console.log(err)
            res.json(err)
        }
    },
    deleteTarea: async (req, res)=>{
        try{
            await Tarea.findOneAndDelete({_id:req.params.id})
            console.log(`Tarea ${req.params.id} borrada!`)
            res.json(`Tarea ${req.params.id} borrada!`)
        }catch(err){
            console.log(err)
            res.json(err)
        }
    }
}    