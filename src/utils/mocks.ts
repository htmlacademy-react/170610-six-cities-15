import { address, datatype, lorem, random, name, image, internet } from 'faker';
import { TOffer } from '../types/offer';
import { TComment } from '../types/comment';
import { TUserData } from '../types/user-data';

const numGoods = Math.floor(Math.random() * 6) + 1;
const goods = Array.from({ length: numGoods }, () => lorem.word());
export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeFakeCity(): TOffer['city'] {
  const city = {
    name: address.city(),
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number({ min: 10, max: 15 }),
    },
  };
  return city;
}

export function makeFakeOffer(): TOffer {
  const offer = {
    id: datatype.uuid(),
    title: lorem.words(),
    type: random.arrayElement(['apartment', 'house', 'hotel']),
    price: datatype.number(),
    city: makeFakeCity(),
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number({ min: 10, max: 15 }),
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({ min: 1, max: 5 }),
    description: lorem.paragraph(),
    bedrooms: datatype.number({ min: 1, max: 5 }),
    goods: goods,
    host: {
      name: name.findName(),
      avatarUrl: image.imageUrl(),
      isPro: datatype.boolean(),
    },
    images: [image.imageUrl(), image.imageUrl(), image.imageUrl()],
    maxAdults: datatype.number({ min: 1, max: 10 }),
    previewImage: image.imageUrl(),
  };
  return offer;
}

export function makeFakeFavoriteOffer() {
  const favoriteOffer = {
    id: datatype.uuid(),
    title: lorem.words(),
    type: random.arrayElement(['apartment', 'house', 'hotel']),
    price: datatype.number(),
    city: makeFakeCity(),
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number({ min: 10, max: 15 }),
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({ min: 1, max: 5 }),
    description: lorem.paragraph(),
  };
  return favoriteOffer;
}

export function makeFakeNearbyOffer() {
  const nearbyOffer = {
    id: datatype.uuid(),
    title: lorem.words(),
    type: random.arrayElement(['apartment', 'house', 'hotel']),
    price: datatype.number(),
    city: makeFakeCity(),
    location: {
      latitude: datatype.number(),
      longitude: datatype.number(),
      zoom: datatype.number({ min: 10, max: 15 }),
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({ min: 1, max: 5 }),
    previewImage: image.imageUrl(),
  };

  return nearbyOffer;
}

export function makeFakeUser(): TUserData {
  const user = {
    email: internet.email(),
    token: datatype.string(),
    name: name.findName(),
    avatarUrl: image.imageUrl(),
    isPro: datatype.boolean(),
  };
  return user;
}
export function makeFakeComment(): TComment {
  const comment = {
    id: datatype.uuid(),
    date: datatype.datetime().toJSON(),
    user: makeFakeUser(),
    comment: lorem.paragraph(),
    rating: datatype.number({ min: 1, max: 5 }),
  };

  return comment;
}
