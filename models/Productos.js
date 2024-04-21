import mongoose from 'mongoose';

const productosSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true
    },
    valor:{
        type: Number
    },
    categoria:{
        type: String
    }
});

const Productos = mongoose.model('Productos', productosSchema);
export default Productos;
