import { TOffers } from '../types/offer';

export const filterOffersByCityName = (
  cityOffers: TOffers,
  cityName: string
): TOffers => cityOffers.filter((offer) => offer.city.name === cityName);
