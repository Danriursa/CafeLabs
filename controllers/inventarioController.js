import Inventario from '../models/Inventario.js'

const nuevoInventario = async (req, res, next) => {
    const inventario = new Inventario(req.body);
    try {
        console.log(req.body)
        const nuevoInventario = await inventario.save();
        res.json(nuevoInventario);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

const mostrarInventario = async (req, res, next) => {
    try {
        const inventario = await Inventario.find({});
        res.json(inventario);
    } catch (error) {
        console.log(error);
        next(error);
        
    }
};

const eliminarInventario = async (req, res, next) => {
    const { id } = req.params;
    const inventario = await Inventario.findById(id);
    if(!inventario)
    {
        const error = new Error("No encontrado");
    }

    try {
        await inventario.deleteOne();
        res.json({mensaje:'El inventario se ha eliminado'});
    } catch (error) {
        console.log(error);
    }
};

const actualizarInventario = async (req, res, next) => {
    const { id } = req.params;
    
    const inventario = await Inventario.findByIdAndUpdate(id);

    inventario.nombre = req.body.nombre || inventario.nombre;
    inventario.valor = req.body.valor || inventario.valor;
    inventario.categoria = req.body.categoria || inventario.categoria;

    try {
        const actualizadoInventario = await inventario.save();
        res.json(actualizadoInventario);
    } catch (error) {
        console.log(error);
    }
};

const actualizarInventarioNuevo = async (req, res, next) => {
    const { id } = req.params;
    const { vendido } = req.body;
    const { stock } = req.params;
    
    try {
        // Actualizar el inventario directamente con findByIdAndUpdate

        const nuevoStock = stock-vendido
        if (nuevoStock >= 0) {
            return res.status(400).json({ message: "No se puede vender más de lo que hay en stock" });
        }
        const actualizadoInventario = await Inventario.findByIdAndUpdate(id, {
            $inc: { stock: -vendido, vendido: vendido }
        }, { new: true });

        // Verificar si el inventario fue encontrado y actualizado
        if (!actualizadoInventario) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }

        // Responder con el inventario actualizado
        res.json(actualizadoInventario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al actualizar el inventario" });
    }
};


export {
    nuevoInventario,
    mostrarInventario,
    eliminarInventario,
    actualizarInventario,
    actualizarInventarioNuevo
};