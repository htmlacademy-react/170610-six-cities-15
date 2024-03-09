import { TOffers } from '../types/offer';

export const filterOffersByCityName = (
  cityOffers: TOffers,
  cityName: string,
): TOffers => cityOffers.filter((offer) => offer.city.name === cityName);

export function renderStars(rating: number): string {
  return `${(Math.round(rating) * 20).toString()}%`;
}

export function pluralize(count: number): string {
  return count > 1 ? 's' : '';
}
