import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { Offer } from '../types/offer';
import capitalize from './utils';

function generateOfferMock(): Offer {
  return {
    id: uuidv4(),
    title: capitalize(faker.lorem.words()),
    type: faker.random.arrayElement(['apartment', 'house', 'room']),
    price: faker.datatype.number({ min: 50, max: 300 }),
    city: {
      name: faker.random.arrayElement([
        'Paris',
        'Cologne',
        'Brussels',
        'Amsterdam',
        'Hamburg',
        'Dusseldorf',
      ]),
      location: {
        latitude: parseFloat(faker.address.latitude()),
        longitude: parseFloat(faker.address.longitude()),
        zoom: faker.datatype.number({ min: 8, max: 12 }),
      },
    },
    location: {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
      zoom: faker.datatype.number({ min: 8, max: 12 }),
    },
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    rating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
    description: faker.lorem.paragraph(),
    bedrooms: faker.datatype.number({ min: 1, max: 5 }),
    goods: faker.random.arrayElements([
      'Heating',
      'Kitchen',
      'Wi-Fi',
      'TV',
      'Parking',
      'Washing machine',
      'Towels',
      'Coffee machine',
      'Baby seat',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
      'Fireplace',
    ]),
    host: {
      name: faker.name.firstName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
    images: faker.random.arrayElements([
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ]),
    maxAdults: faker.datatype.number({ min: 1, max: 6 }),
  };
}

export default generateOfferMock;
