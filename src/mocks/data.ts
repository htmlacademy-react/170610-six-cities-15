import faker from 'faker';
import generateOfferMock from './offer';
import generateCommentMock from './review';
import { Comment } from '../types/comment';
import { OfferWithComments } from '../types/offerWithComments';
import { Setting } from './const';

const generateOffersWithComments = (): OfferWithComments[] => {
  const offersWithComments: OfferWithComments[] = [];
  for (let i = 0; i < Setting.RentalPlacesCount; i++) {
    const offer = generateOfferMock();
    const numComments = faker.datatype.number({ min: 0, max: 5 });
    const comments: Comment[] = [];
    for (let j = 0; j < numComments; j++) {
      comments.push(generateCommentMock(offer.id));
    }
    offersWithComments.push({ offer, comments });
  }
  return offersWithComments;
};

export default generateOffersWithComments;
