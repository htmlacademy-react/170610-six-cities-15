import dayjs from 'dayjs';
import { TComment } from '../../../../types/comment.ts';
import ReviewsAvatar from '../reviews-avatar/reviews-avatar.tsx';
import ReviewsRating from '../reviews-rating/reviews-rating.tsx';
import ReviewsText from '../reviews-text/reviews-text.tsx';

type ReviewsItemProps = {
  comment: TComment;
};

function ReviewsItem({ comment }: ReviewsItemProps): JSX.Element {
  const { user, rating } = comment;
  const date = dayjs(comment.date);
  const formattedDate = date.format('MMMM YYYY');
  const formattedDateTime = date.format('YYYY-MM-DD');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <ReviewsAvatar user={user} />
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <ReviewsRating rating={rating} />
        <ReviewsText comment={comment} />
        <time className="reviews__time" dateTime={formattedDateTime}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
