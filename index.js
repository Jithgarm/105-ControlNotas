const express = require("express")//Traer express
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()//Asignando constante a express
const port = 3005//Determinar puerto

//Set=configuración, dentro de configuración le digo que sea el puerto 3005 (el port)
app.set("port",port)

//Conectar usando string utilizado
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>console.log("Conectado a la BD"))
.catch((err)=>console.error(err.message))

//endpoint, ruta que voy a consultar, req = lo que envían, res = me devuelven la información con get
app.get("/",(req,res)=>{
    res.send("Probando el servidor")
})



app.listen(port,()=>{
    console.log(`Escuchando el ${port}`)
})