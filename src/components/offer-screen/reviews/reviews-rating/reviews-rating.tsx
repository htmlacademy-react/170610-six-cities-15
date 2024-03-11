import { renderStars } from '../../../../utils/common.ts';

type ReviewsRatingProps = {
  rating: number;
};

function ReviewsRating({ rating }: ReviewsRatingProps): JSX.Element {
  return (
    <div className="reviews__rating rating">
      <div className="reviews__stars rating__stars">
        <span style={{ width: renderStars(rating) }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default ReviewsRating;
