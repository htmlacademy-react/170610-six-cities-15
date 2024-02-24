import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { Offer } from '../types/offer';
import capitalize from './utils';
import { cities } from '../const';

const citiesNames = Object.values(cities);

function getRandomCoordinates(): { latitude: number; longitude: number } {
  const coordinates = [
    { latitude: 52.3909553943508, longitude: 4.85309666406198 },
    { latitude: 52.3609553943508, longitude: 4.85309666406198 },
    { latitude: 52.3909553943508, longitude: 4.929309666406198 },
    { latitude: 52.3809553943508, longitude: 4.939309666406198 },
  ];

  const randomIndex = Math.floor(Math.random() * coordinates.length);
  return coordinates[randomIndex];
}

function generateOfferMock(): Offer {
  let cityCoordinates;
  let cityName;

  // Выбираем случайный город из списка

  const randomCity = faker.random.arrayElement(citiesNames);

  if (randomCity === 'Amsterdam') {
    // Для Амстердама используем фиксированные координаты
    cityCoordinates = { latitude: 52.379189, longitude: 4.899431 };
    cityName = 'Amsterdam';
  } else {
    // Для других городов генерируем случайные координаты
    cityCoordinates = getRandomCoordinates();
    cityName = randomCity;
  }

  const { latitude, longitude } = cityCoordinates;

  return {
    id: uuidv4(),
    title: capitalize(faker.lorem.words()),
    type: faker.random.arrayElement(['apartment', 'house', 'room']),
    price: faker.datatype.number({ min: 50, max: 300 }),
    city: {
      name: cityName,
      location: {
        latitude,
        longitude,
        zoom: faker.datatype.number({ min: 8, max: 12 }),
      },
    },
    location: {
      latitude,
      longitude,
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
      avatarUrl: faker.random.arrayElement([
        'img/avatar-angelina.jpg',
        'img/avatar-max.jpg',
      ]),
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
