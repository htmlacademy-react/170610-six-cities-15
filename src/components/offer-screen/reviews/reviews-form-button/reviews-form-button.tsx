type ReviewsFormButtonProps = {
  review: string;
  isFormDisabled: boolean;
  rating: string;
};

function ReviewsFormButton({
  review,
  isFormDisabled,
  rating,
}: ReviewsFormButtonProps): JSX.Element {
  return (
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={
        isFormDisabled ||
        !rating ||
        !review ||
        review.trim().length < 50 ||
        review.trim().length > 300
      }
    >
      Submit
    </button>
  );
}

export default ReviewsFormButton;
