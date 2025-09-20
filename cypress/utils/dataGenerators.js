import { faker } from "@faker-js/faker";
import items from "../fixtures/items";

const generatePhone = () => {
    const ddd = faker.number.int({ min: 11, max: 99 });
    const prefix = faker.number.int({ min: 1000, max: 9999 });
    const suffix = faker.number.int({ min: 1000, max: 9999 });

    return `(${ddd}) ${prefix}-${suffix}`;
};

const generatePerson = () => {
    return ({
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),

        dateOfBirth: {
            day: faker.date.birthdate().getDate(),
            month: faker.date.birthdate().getMonth(),
            year: faker.date.birthdate().getYear(),
        },

        company: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            street2: faker.location.secondaryAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.helpers.arrayElement([
                "India", "United States", "Canada", "Australia",
                "Israel", "New Zealand", "Singapore"
            ]),
            zipcode: faker.location.zipCode()
        },
        contact: {
            mobileNumber: generatePhone()
        }
    });
};

const { randomValueFrom } = require("rand-select");

const randomProduct = () => {
    return randomValueFrom({
        array: items.products
    });
};

export default {
    generatePerson,
    randomProduct
};