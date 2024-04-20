import mongoose from 'mongoose';

const productosSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true
    },
    valor:{
        type: Number
    },
    stock:{
        type: Number
    },
    vendidos:{
        type: Number
    }
});

const Productos = mongoose.model('Productos', productosSchema);
export default Productos;
