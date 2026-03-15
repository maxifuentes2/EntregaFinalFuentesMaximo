import supertest from 'supertest';
import { expect } from 'chai';
import mongoose from 'mongoose';
import adoptionModel from '../models/Adoption.js';

const requester = supertest('http://localhost:8080');

describe('Router de Adopciones', () => {
    let testAdoptionId;

    before(async () => {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect('mongodb://127.0.0.1:27017/entrega-mocks');
        }
        const newAdoption = await adoptionModel.create({
            owner: new mongoose.Types.ObjectId(),
            pet: new mongoose.Types.ObjectId()
        });
        testAdoptionId = newAdoption._id.toString();
    });

    after(async () => {
        await adoptionModel.findByIdAndDelete(testAdoptionId);
    });

    it('Debe retornar todos los registros de adopciones con método GET', async () => {
        const { statusCode, body } = await requester.get('/api/adoptions');
        expect(statusCode).to.be.equal(200);
        expect(body.status).to.be.equal('success');
        expect(Array.isArray(body.payload)).to.be.true;
    });

    it('Debe retornar una adopción específica por ID', async () => {
        const { statusCode, body } = await requester.get(`/api/adoptions/${testAdoptionId}`);
        expect(statusCode).to.be.equal(200);
        expect(body.status).to.be.equal('success');
        expect(body.payload._id).to.be.equal(testAdoptionId);
    });

    it('Debe retornar error 404 si se busca una adopción inexistente', async () => {
        const fakeId = new mongoose.Types.ObjectId().toString();
        const { statusCode } = await requester.get(`/api/adoptions/${fakeId}`);
        expect(statusCode).to.be.equal(404);
    });
});