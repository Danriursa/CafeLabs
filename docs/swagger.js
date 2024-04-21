import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const direccion = process.env.direccion;
const db = process.env.db;

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'CafeLabAPI',
        version: '1.0.0',
        description: 'Descripción de mi API',
        contact: {
            email: 'danriursa@hotmail.com'
        },
    },
    servers: [
        {
            url: 'http://localhost:4000',
            description: 'Servidor local',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Especifica aquí todos los archivos de rutas que contienen las operaciones que deseas documentar
    apis: ['./routes/productosRoutes.js', './routes/pedidoRoutes.js', './routes/inventarioRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
