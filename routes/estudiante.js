const express = require("express")
const controllerEstudiante = require("../controllers/estudiante")

const router = express.Router()

//Tenemos que construir las rutas del CRUD

// router.get("/", (req,res)=>{
    // console.log("get")
    // res.send("Ruta get")
// })
router.get("/", controllerEstudiante.getEstudiantes)
router.get("/:id", controllerEstudiante.getEstudiantePorId) //()=>console.log("leer estudiante usando el id")
router.post("/", controllerEstudiante.create) //()=>console.log("crear estudiante")
router.put("/:id", controllerEstudiante.upDateEstudiantesPorId) // ()=>console.log("editar estudiante"))
router.delete("/", ()=>console.log("eliminar estudiante"))

module.exports = router