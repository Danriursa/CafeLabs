import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const clasificacionSchema = new Schema({
    nombre:{
        type: String,
        trim: true
    },
    producto:{
        type: Schema.ObjectId,
        ref: 'Productos'
    }
});


const Productos = mongoose.model('Clasificacion', clasificacionSchema)
export default Productos;