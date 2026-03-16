# 🐾 Entrega Final - API de Adopción de Mascotas

¡Hola! Este es el proyecto final para el curso, donde construí una API REST encargada de gestionar y simular adopciones de mascotas. 

Está desarrollado con Node.js y Express, utiliza MongoDB para la base de datos y, como requisito principal de esta entrega, el proyecto se encuentra totalmente dockerizado para que sea fácil de ejecutar sin conflictos de entorno.

## 🐳 Imagen en Docker Hub

La imagen oficial del proyecto ha sido generada y subida a Docker Hub. Podés encontrarla en el siguiente enlace:
**[https://hub.docker.com/r/maxifuentes2/entrega-final](https://hub.docker.com/r/maxifuentes2/entrega-final)**

## 🚀 Instrucciones para ejecutar con Docker

Para garantizar que el backend y la base de datos MongoDB se conecten correctamente, el proyecto utiliza **Docker Compose**. 

Si querés correr el proyecto localmente, seguí estos pasos:

1. Cloná este repositorio en tu computadora y abrí una terminal en la carpeta raíz.
2. Asegurate de tener Docker Desktop abierto y en ejecución.
3. Ejecutá el siguiente comando para construir la imagen y levantar ambos contenedores (API y Base de Datos) en simultáneo:
   ```bash
   docker compose up --build