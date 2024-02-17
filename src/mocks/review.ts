import faker from 'faker';
import { Comment } from '../types/review';


function generateCommentMock(offerId: string): Comment {
  return {
    id: offerId,
    user: {
      name: faker.name.firstName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
    comment: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
    date: faker.date.past(),
  };
}

export default generateCommentMock;
