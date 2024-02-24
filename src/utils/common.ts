import { OfferWithComments } from '../types/offerWithComments';

const getRandomArrayElement = <T>(array: T[]): T | undefined => {
  if (array.length === 0) {
    return undefined; // Возвращаем undefined, если массив пуст
  }
  const randomIndex = Math.floor(Math.random() * array.length); // Генерируем случайный индекс
  return array[randomIndex]; // Возвращаем элемент по случайному индексу
};

const filterOffersByCityName = (
  offers: OfferWithComments[],
  cityName: string
): OfferWithComments[] =>
  offers.filter((offer) => offer.offer.city.name === cityName);

export { getRandomArrayElement, filterOffersByCityName };
