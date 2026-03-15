# 🐾 Entrega Final - API de Adopción de Mascotas

¡Hola! Este es el proyecto final para el curso, donde construí una API REST encargada de gestionar y simular adopciones de mascotas. 

Está desarrollado con Node.js y Express, utiliza MongoDB para la base de datos y, como requisito principal de esta entrega, el proyecto se encuentra totalmente dockerizado para que sea súper fácil de ejecutar.

## 🐳 Imagen en Docker Hub

Podés encontrar la imagen oficial y lista para usar en el siguiente enlace:
https://hub.docker.com/r/maxifuentes2/entrega-final

## 🚀 Instrucciones para ejecutar con Docker

Si querés correr el proyecto localmente, seguí estos pasos:

1. Cloná este repositorio en tu computadora.
2. Construí la imagen de Docker corriendo este comando en la terminal:
   docker build -t maxifuentes2/entrega-final .
3. Levantá el contenedor:
   docker run -p 8080:8080 maxifuentes2/entrega-final
4. ¡Listo! La API ya va a estar corriendo en http://localhost:8080

## 🧪 Testing

Para comprobar que todo funciona correctamente, desarrollé tests funcionales para la ruta de adopciones. Podés ejecutarlos con:
npm test

## 📖 Documentación

Toda la documentación de los endpoints está hecha con Swagger. Una vez que levantes el proyecto, podés verla entrando a:
http://localhost:8080/apidocs