import express from 'express';
import {nuevoProducto,mostrarProducto, eliminarProducto, actualizarProducto,mostrarProductoCategoria} from '../controllers/productosController.js';

const router = express.Router();

router.route('/').get(mostrarProducto).post(nuevoProducto);
router.route('/:id').delete(eliminarProducto).put(actualizarProducto);
router.route('/:categoria').get(mostrarProductoCategoria);

export default router;