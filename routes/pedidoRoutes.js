import express from 'express';
import {nuevoPedido,mostrarPedido, eliminarPedido, actualizarPedido} from '../controllers/pedidoController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Operaciones relacionadas con los pedidos.
 */

/**
 * @swagger
 * /api/pedidos/nuevo:
 *   post:
 *     summary: Crear un nuevo pedido
 *     description: Crea un nuevo pedido con el producto, cantidad, método de pago y ciudad proporcionados, determinando el clima actual de la ciudad proporcionada.
 *     operationId: nuevoPedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto:
 *                 type: string
 *               cantidad:
 *                 type: integer
 *               metodopago:
 *                 type: string
 *               ciudad:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pedido creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       400:
 *         description: Solicitud incorrecta, revise los datos enviados
 */

/**
 * @swagger
 * /api/pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     description: Obtiene una lista de todos los pedidos registrados.
 *     operationId: mostrarPedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: integer
 *         description: Número de página
 *       - in: query
 *         name: porPagina
 *         schema:
 *           type: integer
 *         description: Cantidad de pedidos por página
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pedidos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Pedido'
 *                 paginaSiguiente:
 *                   type: boolean
 *       404:
 *         description: No se encontraron pedidos
 */

/**
 * @swagger
 * /api/pedidos/{id}:
 *   delete:
 *     summary: Eliminar un pedido por ID
 *     description: Elimina un pedido con el ID proporcionado.
 *     operationId: eliminarPedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido a eliminar
 *     responses:
 *       200:
 *         description: Pedido eliminado exitosamente
 *       404:
 *         description: Pedido no encontrado
*/

/**
 * @swagger
 * /api/pedidos/{id}:
 *   put:
 *     summary: Actualizar un pedido por ID
 *     description: Actualiza un pedido con el ID proporcionado.
 *     operationId: actualizarPedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del pedido a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               producto:
 *                 type: string
 *               cantidad:
 *                 type: integer
 *               metodopago:
 *                 type: string
 *               ciudad:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pedido actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       400:
 *         description: Solicitud incorrecta, revise los datos enviados
 *       404:
 *         description: Pedido no encontrado
*/


/**
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - producto
 *         - cantidad
 *         - metodopago
 *         - ciudad
 *       properties:
 *         id:
 *           type: string
 *           description: ID del pedido
 *         producto:
 *           type: string
 *           description: ID del producto
 *         cantidad:
 *           type: integer
 *           description: Cantidad del producto
 *         metodopago:
 *           type: string
 *           description: Método de pago del pedido
 *         ciudad:
 *           type: string
 *           description: Ciudad del pedido
 *         clima:
 *           type: number
 *           description: Temperatura actual en la ciudad del pedido
*/ 



router.route('/').get(mostrarPedido);
router.route('/nuevo').post(nuevoPedido);
router.route('/:id').delete(eliminarPedido).put(actualizarPedido);

export default router;