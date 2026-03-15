# Entrega Final - API de Adopción de Mascotas

Este proyecto consiste en una API REST para la gestión y simulación de adopciones de mascotas. Está desarrollado en Node.js con Express, utiliza MongoDB como base de datos y se encuentra totalmente dockerizado.

## Imagen en Docker Hub

Puedes encontrar la imagen oficial de este proyecto en el siguiente enlace:
[https://hub.docker.com/r/tu_usuario_de_docker/entrega-final](https://hub.docker.com/r/tu_usuario_de_docker/entrega-final)

## Instrucciones para ejecutar con Docker

1. Clonar este repositorio.
2. Construir la imagen de Docker localmente:
   docker build -t entrega-final .
3. Levantar el contenedor:
   docker run -p 8080:8080 entrega-final
4. La API estará corriendo en `http://localhost:8080`.

## Testing

Para ejecutar los tests funcionales de la ruta de adopciones, utiliza el comando:
npm test

## Documentación

La documentación de los endpoints (Swagger) se encuentra disponible en la ruta:
http://localhost:8080/apidocs