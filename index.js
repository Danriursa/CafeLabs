import express from 'express'

const app= express()

const port = 4000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});