import { Offer } from './offer';
import { Comment } from './review';
export type OfferWithComments = {
  offer: Offer;
  comments: Comment[];
}
