import express from 'express';
import {nuevoPedido,mostrarPedido, eliminarPedido, actualizarPedido} from '../controllers/pedidoController.js';

const router = express.Router();

router.route('/').get(mostrarPedido).post(nuevoPedido);
router.route('/:id').delete(eliminarPedido).put(actualizarPedido);

export default router;