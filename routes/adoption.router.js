import { Router } from 'express';
import adoptionModel from '../models/Adoption.js';

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

export default router;