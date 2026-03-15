import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generatePets = (cantidad) => {
    const pets = [];
    for (let i = 0; i < cantidad; i++) {
        pets.push({
            name: faker.animal.dog(),
            specie: 'dog',
            birthDate: faker.date.past(),
            image: 'http://imagen-falsa.com/perro.jpg'
        });
    }
    return pets;
};

export const generateUsers = (cantidad) => {
    const users = [];
    const hashedPassword = bcrypt.hashSync('coder123', 10);

    for (let i = 0; i < cantidad; i++) {
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role: Math.random() > 0.5 ? 'admin' : 'user',
            pets: [] 
        });
    }
    return users;
};