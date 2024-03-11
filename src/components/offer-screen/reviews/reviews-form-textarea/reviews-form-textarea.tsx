type ReviewsFormTextareaProps = {
  review: string;
  handleReviewChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isFormDisabled: boolean;
};

function ReviewsFormTextarea({
  review,
  handleReviewChange,
  isFormDisabled,
}: ReviewsFormTextareaProps): JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={review}
      onChange={handleReviewChange}
      disabled={isFormDisabled}
    />
  );
}

export default ReviewsFormTextarea;
