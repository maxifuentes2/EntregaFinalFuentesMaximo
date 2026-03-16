import mongoose from 'mongoose';

const petCollection = 'pets';

const petSchema = new mongoose.Schema({
    name: String,
    specie: String,
    birthDate: Date,
    image: String,
    adopted: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const petModel = mongoose.model(petCollection, petSchema);
export default petModel;