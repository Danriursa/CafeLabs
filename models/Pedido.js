import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    compra:[{
        producto:{
            type: Schema.ObjectId,
            ref: 'Productos'
        },
        cantidad:{
            type: Number
        }
    }],
    metodopago:
    {
        type: String,
        trim: true
    },
    ciudad:
    {
        type : String
    },
    clima:
    {
        type : Number
    }
});

const Productos = mongoose.model('Pedido', pedidoSchema)
export default Productos;