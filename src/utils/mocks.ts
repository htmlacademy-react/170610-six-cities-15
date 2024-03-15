import { address, datatype, lorem, random, name, image } from 'faker';
import { TOffer } from '../types/offer';
import { TComment } from '../types/comment';

const numGoods = Math.floor(Math.random() * 6) + 1;
const goods = Array.from({ length: numGoods }, () => lorem.word());
export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function makeFakeOffer(): TOffer {
  const offer = {
    id: datatype.uuid(),
    title: lorem.words(),
    type: random.arrayElement(['apartment', 'house', 'hotel']),
    price: datatype.number(),
    city: {
      name: address.city(),
      location: {
        latitude: datatype.number(),
        longitude: datatype.number(),
        zoom: datatype.number({ min: 10, max: 15 }),
      },
    },
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

export function makeFakeUser(): TComment['user'] {
  const user = {
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
