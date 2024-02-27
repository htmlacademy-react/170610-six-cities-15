import { Offers } from './../types/offer';

const filterOffersByCityName = (offers: Offers[], cityName: string): Offers[] =>
  offers.filter((offer) => offer.city.name === cityName);

export { filterOffersByCityName };
