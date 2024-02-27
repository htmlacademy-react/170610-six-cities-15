import { Offers } from '../types/offer';

export const filterOffersByCityName = (
  cityOffers: Offers,
  cityName: string
): Offers => cityOffers.filter((offer) => offer.city.name === cityName);
