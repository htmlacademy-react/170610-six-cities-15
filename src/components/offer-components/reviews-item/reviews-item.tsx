import dayjs from 'dayjs';
import { renderStars } from '../../../utils/common';
import { TComment } from '../../../types/comment';

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
        <div className="reviews__avatar-wrapper user__avatar-wrapper ">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: renderStars(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={formattedDateTime}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
