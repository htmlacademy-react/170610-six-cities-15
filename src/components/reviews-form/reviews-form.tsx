import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ratingsData } from '../../const';
import { postCommentAction } from '../../store/api-actions';
import RatingInput from '../rating-input/rating-Input';
import { TCommentData } from '../../types/comment';

function ReviewsForm(): JSX.Element {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const [rating, setRating] = useState<string>('');
  const [review, setReview] = useState<string>('');

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (
      typeof id === 'string' &&
      typeof rating === 'string' &&
      !isNaN(Number(rating)) &&
      typeof review === 'string' &&
      review.trim().length >= 50 &&
      review.trim().length <= 300
    ) {
      dispatch(
        postCommentAction({
          id,
          rating: Number(rating),
          comment: review.trim(),
        })
      );
    }
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingsData.map((data) => (
          <RatingInput
            key={data.value}
            value={data.value}
            onChange={handleRatingChange}
            checked={rating === data.value}
            title={data.title}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            !rating ||
            !review ||
            review.trim().length < 50 ||
            review.trim().length > 300
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
