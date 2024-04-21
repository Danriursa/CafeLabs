import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const inventarioSchema = new Schema({
    producto:{
        type: Schema.ObjectId,
        ref: 'Productos'
    },
    stock:{
        type: Number,
        min:[0,"El minimo no puede ser cero"]
    },
    vendido:{
        type: Number
    }
});


const Productos = mongoose.model('Inventario', inventarioSchema)
export default Productos;