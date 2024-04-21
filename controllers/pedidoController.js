import Pedido from '../models/Pedido.js';

const nuevoPedido = async (req, res, next) => {
    const pedido = new Pedido(req.body);
    try {
        console.log(req.body)
        const nuevoPedido = await pedido.save();
        res.json(nuevoPedido);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const mostrarPedido = async (req, res, next) => {
    try {
        const pedido = await Pedido.find({});
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const eliminarPedido = async (req, res, next) => {
    const { id } = req.params;
    const pedido = await Pedido.findById(id);
    if(!pedido)
    {
        const error = new Error("No encontrado");
    }

    try {
        await pedido.deleteOne();
        res.json({mensaje:'El pedido se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};

const actualizarPedido = async (req, res, next) => {
    const { id } = req.params;
    
    const pedido = await Pedido.findByIdAndUpdate(id);

    pedido.producto = req.body.producto || producto.producto;
    pedido.cantidad = req.body.cantidad || producto.cantidad;
    pedido.metodopago = req.body.metodopago || producto.metodopago;

    try {
        const actualizadoPedido = await pedido.save();
        res.json(actualizadoPedido);
    } catch (error) {
        console.log(error);
    }
};

export {
    nuevoPedido,
    mostrarPedido,
    eliminarPedido,
    actualizarPedido
};