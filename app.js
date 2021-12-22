require('dotenv').config();
//
const express = require('express');
const { registrarControllers } = require('./controllers');
const { connectToMongoDB, closeSubscribe } = require('./db/db');
//
const app = express();
const port = process.env.PORT || 9000;


//Config  middleware para express
app.use(express.json());//Procesar peticiones de cuerpo json
app.use(express.urlencoded());//Procesar parámetros codificados en la URL


//Settings connections to MongoDB
connectToMongoDB();


//Registrar las configuraciones de las funciones controladoras de Users
registrarControllers(app);


//Setting watchers to close connection when the back-end is ended 
closeSubscribe();


//Acceso a los controllers
app.listen(port, () => {
    console.log(`Backend está corriendo en el puerto: ${port}`);
});