import { faker } from '@faker-js/faker';

let database = { cards: [] };
const threshold = 3;

for (let i = 1; i <= threshold; i++) {
    database.cards.push({
        id: i,
        title: faker.lorem.sentence(4),
        desc: faker.lorem.lines(),
        city: faker.address.city(),
    });
}

console.log(JSON.stringify(database));