# 🐾 Entrega Final - API de Adopción de Mascotas

¡Hola! Este es el proyecto final para el curso, donde construí una API REST encargada de gestionar y simular adopciones de mascotas. 

Está desarrollado con Node.js y Express, utiliza MongoDB para la base de datos y, como requisito principal de esta entrega, el proyecto se encuentra totalmente dockerizado para que sea fácil de ejecutar sin conflictos de entorno.

## 🐳 Imagen en Docker Hub

La imagen oficial del proyecto ha sido generada y subida a Docker Hub. Podés encontrarla en el siguiente enlace:
**[https://hub.docker.com/r/maxifuentes2/entrega-final](https://hub.docker.com/r/maxifuentes2/entrega-final)**

## 🚀 Instrucciones para ejecutar con Docker

Para facilitar la evaluación, el proyecto cuenta con un archivo `docker-compose.yml` configurado para descargar la imagen oficial directamente desde Docker Hub y conectarla automáticamente con una base de datos MongoDB.

Si querés correr el proyecto localmente, seguí estos pasos:

1. Cloná este repositorio en tu computadora y abrí una terminal en la carpeta raíz.
2. Asegurate de tener Docker Desktop abierto y en ejecución.
3. Ejecutá el siguiente comando para descargar la imagen y levantar ambos contenedores (API y Base de Datos) en segundo plano:
   ```bash
   docker compose up -d
   ```
4. ¡Listo! La API ya va a estar conectada a Mongo y corriendo en **http://localhost:8080**

*(Nota: Si deseás detener los contenedores más tarde, podés usar `docker compose down`)*

## 🧪 Testing

Para comprobar que todo funciona correctamente, desarrollé tests funcionales para la ruta de adopciones usando Mocha, Chai y Supertest. Podés ejecutarlos corriendo:
```bash
npm test
```

## 📖 Documentación

Toda la documentación de los endpoints fue realizada con Swagger. Una vez que levantes el proyecto con Docker Compose, podés visualizarla e interactuar con ella entrando a:
**http://localhost:8080/apidocs**