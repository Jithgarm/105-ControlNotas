const express = require("express")//Traer express


const app = express()//Asignando constante a express
const port = 3005//Determinar puerto

app.set("port",port)//Set=configuración, dentro de configuración le digo que sea el puerto 3005 (el port)

app.get("/",(req,res)=>{//endpoint, ruta que voy a consultar, req = lo que envían, res = me devuelven la información con get
    res.send("Probando el servidor")
})

app.listen(port,()=>{
    console.log(`Escuchando el ${port}`)
})