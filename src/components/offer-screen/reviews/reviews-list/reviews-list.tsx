import { v4 as uuidv4 } from 'uuid';
import { TComment } from '../../../../types/comment.ts';
import ReviewsItem from '../reviews-item/reviews-item.tsx';

type ReviewsListProps = {
  comments: TComment[];
};

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  if (comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <ul className="reviews__list" data-testid="reviews-list">
      {comments.map((comment) => (
        <ReviewsItem key={uuidv4()} comment={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;
