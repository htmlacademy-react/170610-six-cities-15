import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/user-process.selectors';
import { TComments } from '../../../types/comment';
import ReviewsForm from '../../reviews-form/reviews-form';
import ReviewsList from '../../reviews-list/reviews-list';

type OfferReviewsProps = {
  sortedComments: TComments;
};

function OfferReviews({ sortedComments }: OfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{sortedComments.length}</span>
      </h2>
      {sortedComments && <ReviewsList comments={sortedComments} />}
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
    </section>
  );
}

export default OfferReviews;
