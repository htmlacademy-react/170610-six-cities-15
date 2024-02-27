import { v4 as uuidv4 } from 'uuid';
import { Comment } from '../../types/comment';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  comments: Comment[];
};

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  if (comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem key={uuidv4()} comment={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;
