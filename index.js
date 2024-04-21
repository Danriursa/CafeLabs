import express from 'express';
import productosRoutes from "./routes/productosRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import inventarioRoutes from "./routes/inventarioRoutes.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


//Crear el servidor
const app= express();

app.use(express.json()); // Para analizar datos JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));

//Rutas¬
app.use('/productos',productosRoutes);
app.use('/pedido',pedidoRoutes);
app.use('/inventario',inventarioRoutes);


const direccion = process.env.direccion;
const db = process.env.db;


mongoose.connect(`mongodb://${direccion}/${db}`,{
}).then(() => {
    console.log(`Conexión a MongoDB establecida con ${db}`);
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err.message);
});


//Puerto
const port = process.env.port;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});