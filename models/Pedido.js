import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    compra:[{
        producto:{
            type: Schema.ObjectId,
            ref: 'Productos'
        },
    }],
    mpago:
    {
        type: String,
        trim: true
    }
});

const Productos = mongoose.model('Pedido', pedidoSchema)
export default Productos;