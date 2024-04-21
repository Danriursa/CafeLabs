import Productos from '../models/Productos.js';

const nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body);
    try {
        console.log(req.body)
        const nuevoProducto = await producto.save();
        res.json(nuevoProducto);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const mostrarProducto = async (req, res, next) => {
    try {
        const productos = await Productos.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const mostrarProductoCategoria = async (req, res, next) => {
    try {
        const categoria = req.params.categoria;
        const productos = await Productos.find({categoria});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const eliminarProducto = async (req, res, next) => {
    const { id } = req.params;
    const producto = await Productos.findById(id);
    if(!producto)
    {
        const error = new Error("No encontrado");
    }

    try {
        await producto.deleteOne();
        res.json({mensaje:'El producto se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};

const actualizarProducto = async (req, res, next) => {
    const { id } = req.params;
    
    const producto = await Productos.findByIdAndUpdate(id);

    producto.nombre = req.body.nombre || producto.nombre;
    producto.valor = req.body.valor || producto.valor;
    producto.categoria = req.body.categoria || producto.categoria;

    try {
        const actualizadoProducto = await producto.save();
        res.json(actualizadoProducto);
    } catch (error) {
        console.log(error);
    }
};

export {
    nuevoProducto,
    mostrarProducto,
    eliminarProducto,
    actualizarProducto,
    mostrarProductoCategoria
};
