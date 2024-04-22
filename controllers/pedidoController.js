import Pedido from '../models/Pedido.js';
import axios from 'axios';


const obtenerPronosticoDelClima = async (ciudad) => {
    const API_KEY = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`;
    
    try {
        const respuesta = await axios.get(url);
        const temperatura = respuesta.data.main.temp;
        return temperatura;
    } catch (error) {
        console.error('Error al obtener el clima:', error);
        throw new Error('Error al obtener el clima');
    }
};

const nuevoPedido = async (req, res, next) => {
    try {
        const ciudad = req.body.ciudad;
        const temperatura = await obtenerPronosticoDelClima(ciudad);

        const pedido = new Pedido({
            ...req.body,
            clima: temperatura
        });

        const nuevoPedido = await pedido.save();

        res.json(nuevoPedido);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const mostrarPedido = async (req, res, next) => {
    const { pagina = 1, porPagina = 5 } = req.query;

    try {
        const totalPedidos = await Pedido.countDocuments();
        const pedidos = await Pedido.find({})
            .skip((pagina - 1) * porPagina)
            .limit(porPagina);

        const totalPaginas = Math.ceil(totalPedidos / porPagina);
        const paginaSiguiente = pagina < totalPaginas;

        res.json({
            pedidos,
            paginaSiguiente,
            pagina
        });
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

    pedido.producto = req.body.producto || pedido.producto;
    pedido.cantidad = req.body.cantidad || pedido.cantidad;
    pedido.metodopago = req.body.metodopago || pedido.metodopago;
    pedido.ciudad = req.body.ciudad || pedido.ciudad;

    const ciudad = req.body.ciudad;
    const temperatura = await obtenerPronosticoDelClima(ciudad);

    pedido.clima = temperatura || pedido.clima;

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