const Estudiante = require("../models/estudiante")

//Dentro de un json se crean las distintas funciones
const controllerEstudiante = {
    create: async (req, res) => {
        try {
            console.log(req.body)
            await Estudiante.create({
                nombre: req.body.nombre,
                materias: req.body.materias,
                asistecia: req.body.asistecia,
                tareas: req.body.tareas
            })
            res.status(201).send("Estudiante creado")
        } catch (error) {
            return res.status(500).send(error.message)
        }
    },
    getEstudiantes: async (req,res) => {
        try {
            const estudiantes = await Estudiante.find({})
            res.json(estudiantes).status(200)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
}

module.exports = controllerEstudiante