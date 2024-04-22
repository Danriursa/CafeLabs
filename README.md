# CafeLabs

CafeLabs es una aplicación RESTful desarrollada con Node.js, Express y MongoDB que proporciona una API para gestionar inventario, pedidos y productos.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js
- MongoDB
- Git (opcional, pero recomendado)

## Instalación

1. Clona este repositorio en tu máquina local: 

    git clone https://github.com/Danriursa/CafeLabs.git


2. Accede al directorio del proyecto:

    cd CafeLabs


3. Instala las dependencias usando npm:

    npm install


4. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

    PORT = # Puerto en el que se ejecutará el servidor
    DB_ATLAS = tu_url_de_conexión_a_MongoDB


## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

    npm start


La aplicación estará disponible en `https://cafelabs.onrender.com`.

## Documentación de la API

La documentación de la API está generada con Swagger y se encuentra en la ruta `/api/documentacion`. Puedes acceder a ella en tu navegador una vez que el servidor esté en funcionamiento:

    https://cafelabs.onrender.com/api/documentacion/

