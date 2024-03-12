import { useMemo } from 'react';
import {
  AuthorizationStatus,
  MAX_OFFER_SCREEN_COMMENTS_COUNT,
} from '../../../../const.ts';
import { useAppSelector } from '../../../../hooks';
import { getAuthorizationStatus } from '../../../../store/user-process/user-process.selectors.ts';
import { TComments } from '../../../../types/comment.ts';
import ReviewsForm from '../../reviews/reviews-form/reviews-form.tsx';
import ReviewsList from '../../reviews/reviews-list/reviews-list.tsx';

type OfferReviewsProps = {
  comments: TComments;
};

function OfferReviews({ comments }: OfferReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const sortedComments = useMemo(
    () =>
      [...comments]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, MAX_OFFER_SCREEN_COMMENTS_COUNT),
    [comments]
  );

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
