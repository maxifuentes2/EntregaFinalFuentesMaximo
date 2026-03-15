import { Router } from 'express';
import adoptionModel from '../models/Adoption.js';
import userModel from '../models/User.js';
import petModel from '../models/Pet.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const adoptions = await adoptionModel.find();
        res.send({ status: "success", payload: adoptions });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
});

router.get('/:aid', async (req, res) => {
    try {
        const adoption = await adoptionModel.findById(req.params.aid);
        if (!adoption) return res.status(404).send({ status: "error", error: "Adoption not found" });
        res.send({ status: "success", payload: adoption });
    } catch (error) {
        res.status(404).send({ status: "error", error: "Adoption not found or invalid ID format" });
    }
});

router.post('/', async (req, res) => {
    const { uid, pid } = req.body;
    if (!uid || !pid) return res.status(400).send({ status: "error", error: "Incomplete values" });

    try {
        const user = await userModel.findById(uid);
        if (!user) return res.status(404).send({ status: "error", error: "User not found" });

        const pet = await petModel.findById(pid);
        if (!pet) return res.status(404).send({ status: "error", error: "Pet not found" });

        if (pet.adopted) return res.status(400).send({ status: "error", error: "Pet is already adopted" });

        pet.adopted = true;
        pet.owner = user._id;
        user.pets.push(pet._id);

        await pet.save();
        await user.save();
        await adoptionModel.create({ owner: user._id, pet: pet._id });

        res.status(201).send({ status: "success", message: "Pet adopted" });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
});

export default router;