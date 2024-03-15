import { address, datatype, lorem, random, name, image } from 'faker';
import { TOffer } from '../types/offer';

const numGoods = Math.floor(Math.random() * 6) + 1;
const goods = Array.from({ length: numGoods }, () => lorem.word());

export const makeFakeOffer: () => TOffer = () => {
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
};
