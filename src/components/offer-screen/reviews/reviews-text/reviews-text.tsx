import { TComment } from '../../../../types/comment.ts';

type ReviewsTextProps = {
  comment: TComment;
};

function ReviewsText({ comment }: ReviewsTextProps): JSX.Element {
  return <p className="reviews__text">{comment.comment}</p>;
}

export default ReviewsText;
