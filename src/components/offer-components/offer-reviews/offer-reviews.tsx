import {
  AuthorizationStatus,
  MAX_OFFER_SCREEN_COMMENTS_COUNT,
} from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import { TComments } from '../../../types/comment';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';

type OfferReviewsProps = {
  comments: TComments;
};

function OfferReviews({ comments }: OfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  let sortedComments = [...comments];

  sortedComments = sortedComments
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_OFFER_SCREEN_COMMENTS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      {comments && <ReviewsList comments={sortedComments} />}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
    </section>
  );
}

export default OfferReviews;
