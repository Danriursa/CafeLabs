import express from 'express'
import {
    nuevoInventario,
    mostrarInventario,
    eliminarInventario,
    actualizarInventario,
    actualizarInventarioNuevo
} from '../controllers/inventarioController.js'

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Inventario
 *   description: Operaciones relacionadas con el inventario.
 */

/**
 * @swagger
 * /api/inventario/nuevo:
 *   post:
 *     summary: Crear un nuevo registro en el inventario
 *     description: Crea un nuevo registro en el inventario con el nombre, valor, categoría, stock y cantidad vendida proporcionados.
 *     operationId: nuevoInventario
 *     tags: [Inventario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventario'
 *     responses:
 *       200:
 *         description: Registro de inventario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventario'
 *       400:
 *         description: Solicitud incorrecta, revise los datos enviados
 */

/**
 * @swagger
 * /api/inventario:
 *   get:
 *     summary: Obtener todos los registros del inventario
 *     description: Obtiene una lista de todos los registros del inventario.
 *     operationId: mostrarInventario
 *     tags: [Inventario]
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
 *         description: Cantidad de registros por página
 *     responses:
 *       200:
 *         description: Lista de registros del inventario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 inventario:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Inventario'
 *                 paginaSiguiente:
 *                   type: boolean
 *       404:
 *         description: No se encontraron registros en el inventario
 */

/**
 * @swagger
 * /api/inventario/{id}:
 *   delete:
 *     summary: Eliminar un registro del inventario por ID
 *     description: Elimina un registro del inventario con el ID proporcionado.
 *     operationId: eliminarInventario
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del registro del inventario a eliminar
 *     responses:
 *       200:
 *         description: Registro del inventario eliminado exitosamente
 *       404:
 *         description: Registro del inventario no encontrado
 */

/**
 * @swagger
 * /api/inventario/{id}:
 *   put:
 *     summary: Actualizar un registro del inventario por ID
 *     description: Actualiza un registro del inventario con el ID proporcionado.
 *     operationId: actualizarInventario
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del registro del inventario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventario'
 *     responses:
 *       200:
 *         description: Registro del inventario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventario'
 *       400:
 *         description: Solicitud incorrecta, revise los datos enviados
 *       404:
 *         description: Registro del inventario no encontrado
 */

/**
 * @swagger
 * /api/inventario/vender/{id}:
 *   patch:
 *     summary: Actualizar el stock y las ventas de un registro del inventario por ID
 *     description: Actualiza el stock y las ventas de un registro del inventario con el ID proporcionado, es necesario registrar el valor que se desea agregar tanto al producto vendido como al stock del prodcuto, esto generará una actualización de cada registro. Si se genera una venta se reducira el mismo numero en la cantidad del stock de ese producto, pero si se agrega un producto al stock no afectara en nada al registro de vendidos.
 *     operationId: actualizarInventarioNuevo
 *     tags: [Inventario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del registro del inventario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vendido:
 *                 type: integer
 *                 description: Cantidad vendida
 *               stock:
 *                 type: integer
 *                 description: Nuevo stock
 *     responses:
 *       200:
 *         description: Registro del inventario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Inventario'
 *       400:
 *         description: No se puede vender más de lo que hay en stock
 *       404:
 *         description: Registro del inventario no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Inventario:
 *       type: object
 *       required:
 *         - producto
 *         - stock
 *         - vendido
 *       properties:
 *         id:
 *           type: string
 *           description: ID del registro del inventario
 *         producto:
 *           type: string
 *           description: ID del producto
 *         stock:
 *           type: integer
 *           description: Stock disponible del producto
 *         vendido:
 *           type: integer
 *           description: Cantidad vendida del producto
 */


router.route('').get(mostrarInventario);
router.route('/nuevo').post(nuevoInventario);
router.route('/vender/:id').delete(eliminarInventario).put(actualizarInventario).patch(actualizarInventarioNuevo);

export default router;