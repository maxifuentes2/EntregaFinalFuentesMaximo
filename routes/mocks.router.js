import { Router } from 'express';
import { generateUsers, generatePets } from '../utils/mocking.js';
import userModel from '../models/User.js';
import petModel from '../models/Pet.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
    const pets = generatePets(100); 
    res.send({ status: "success", payload: pets });
});

router.get('/mockingusers', (req, res) => {
    const users = generateUsers(50); 
    res.send({ status: "success", payload: users });
});

router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body; 

    try {
        if (users) {
            const usersList = generateUsers(users);
            await userModel.insertMany(usersList);
        }

        if (pets) {
            const petsList = generatePets(pets);
            await petModel.insertMany(petsList);
        }

        res.status(201).send({ status: "success", message: "Datos generados e insertados con éxito" });

    } catch (error) {
        res.status(500).send({ status: "error", error: "Algo salió mal al insertar" });
    }
});

export default router;