import express from 'express';
import mongoose from 'mongoose';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import mocksRouter from './routes/mocks.router.js';
import adoptionRouter from './routes/adoption.router.js';
import userModel from './models/User.js';
import petModel from './models/Pet.js';

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/entrega-final';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de API - Entrega Final',
            description: 'API pensada para la gestión de adopción de mascotas.'
        }
    },
    apis: ['./docs/**/*.yaml']
};

const specs = swaggerJSDoc(swaggerOptions);
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

mongoose.connect(MONGO_URL)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(error => console.error(error));

app.use('/api/mocks', mocksRouter);
app.use('/api/adoptions', adoptionRouter);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Adopción de Mascotas. Maximo Fuentes'); 
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await userModel.find();
        res.send({ status: "success", payload: users });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
});

app.get('/api/pets', async (req, res) => {
    try {
        const pets = await petModel.find();
        res.send({ status: "success", payload: pets });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});