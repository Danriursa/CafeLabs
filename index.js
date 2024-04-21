import express from 'express';
import productosRoutes from "./routes/productosRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import inventarioRoutes from "./routes/inventarioRoutes.js";
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';
import dbConnect from './config/mongo.js'
dotenv.config();



//Crear el servidor
const app= express();

app.use(express.json()); // Para analizar datos JSON en el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));

//Rutas¬
app.use('/api/documentacion',swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api/productos',productosRoutes);
app.use('/api/pedidos',pedidoRoutes);
app.use('/api/inventario',inventarioRoutes);


const direccion = process.env.direccion;
const db = process.env.db;

dbConnect();

//Puerto
const port = process.env.port;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});

