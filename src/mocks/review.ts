import dayjs from 'dayjs';
import faker from 'faker';
import { Comment } from '../types/review';

function generateCommentMock(offerId: string): Comment {
  const formattedDate = dayjs().toISOString();

  return {
    id: offerId,
    user: {
      name: faker.name.firstName(),
      avatarUrl: faker.random.arrayElement([
        'img/avatar-angelina.jpg',
        'img/avatar-max.jpg',
      ]),
      isPro: faker.datatype.boolean(),
    },
    comment: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 5, precision: 0.1 }),
    date: formattedDate,
  };
}

export default generateCommentMock;
