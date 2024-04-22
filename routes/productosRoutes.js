import express from 'express';
import {nuevoProducto,mostrarProducto, eliminarProducto, actualizarProducto,mostrarProductoCategoria} from '../controllers/productosController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con los productos.
*/

/**
 * @swagger
 * /api/productos/nuevo:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: Crea un nuevo producto con el nombre, valor y categoría proporcionados.
 *     operationId: nuevoProducto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               valor:
 *                 type: number
 *               categoria:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Solicitud incorrecta, revise los datos enviados
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Obtiene una lista de todos los productos disponibles.
 *     operationId: mostrarProducto
 *     tags: [Productos]
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
 *         description: Cantidad de productos por página
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 productos:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Producto'
 *                 paginaSiguiente:
 *                   type: boolean
 *                 pagina:
 *                   type: integer
 *       404:
 *         description: No se encontraron productos
 */

/**
 * @swagger
 * /api/productos/categoria/{categoria}:
 *   get:
 *     summary: Obtener productos por categoría
 *     description: Obtiene una lista de productos filtrados por la categoría proporcionada.
 *     operationId: mostrarProductoCategoria
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: categoria
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre de la categoría
 *     responses:
 *       200:
 *         description: Lista de productos filtrados por categoría
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 *       404:
 *         description: No se encontraron productos para la categoría especificada
*/

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     description: Elimina un producto con el ID proporcionado.
 *     operationId: eliminarProducto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     description: Actualiza un producto con el ID proporcionado.
 *     operationId: actualizarProducto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               valor:
 *                 type: number
 *               categoria:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Solicitud incorrecta, revise los datos enviados
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - valor
 *         - categoria
 *       properties:
 *         id:
 *           type: string
 *           description: ID del producto
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         valor:
 *           type: number
 *           description: Valor del producto
 *         categoria:
 *           type: string
 *           description: Categoría del producto
 */


router.route('/nuevo').post(nuevoProducto);
router.route('/').get(mostrarProducto);
router.route('/categoria/:categoria').get(mostrarProductoCategoria);
router.route('/:id').delete(eliminarProducto).put(actualizarProducto);
export default router;