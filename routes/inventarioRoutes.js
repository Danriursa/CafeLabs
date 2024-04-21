import express from 'express'
import {
    nuevoInventario,
    mostrarInventario,
    eliminarInventario,
    actualizarInventario,
    actualizarInventarioNuevo
} from '../controllers/inventarioController.js'

const router = express.Router();

router.route('/').get(mostrarInventario).post(nuevoInventario);
router.route('/:id').delete(eliminarInventario).put(actualizarInventario).patch(actualizarInventarioNuevo);

export default router;