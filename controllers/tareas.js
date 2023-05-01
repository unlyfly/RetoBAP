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
        }
    },
    createTarea: async (req, res)=>{
        try{
            const nuevaTarea = await Tarea.create(req.body)
            console.log('Se agrego tarea!')
            res.json(nuevaTarea)
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    