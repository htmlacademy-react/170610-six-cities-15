import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';

export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

interface City {
  name: string;
  location: Location;
}

interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateOfferMock(): Offer {
  return {
    id: uuidv4(),
    title: capitalize(faker.lorem.words()),
    type: faker.random.arrayElement(['apartment', 'house', 'room']),
    price: faker.datatype.number({ min: 50, max: 300 }),
    city: {
      name: faker.address.city(),
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
    goods: faker.random.arrayElements(['Heating', 'Kitchen', 'Wi-Fi', 'TV', 'Parking']),
    host: {
      name: faker.name.firstName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
    images: [faker.image.imageUrl()],
    maxAdults: faker.datatype.number({ min: 1, max: 6 }),
  };
}

export default generateOfferMock;
