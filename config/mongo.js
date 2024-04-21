import mongoose from 'mongoose';

const dbConnect = () =>{
    const DB_ATLAS = process.env.DB_ATLAS;
    mongoose.connect(DB_ATLAS,{
    }).then(() => {
        console.log('Conexión a MongoDB Atlas establecida');
    }).catch(err => {
        console.error('Error al conectar a MongoDB:', err.message);
    });
}

export default dbConnect;