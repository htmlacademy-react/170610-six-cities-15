// ReviewsForm.tsx
import React, { useState } from 'react';
import RatingInput from '../rating-input/rating-Input';

function ReviewsForm(): JSX.Element {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingInput
          value="5"
          onChange={handleRatingChange}
          checked={rating === '5'}
          title="perfect"
        />
        <RatingInput
          value="4"
          onChange={handleRatingChange}
          checked={rating === '4'}
          title="good"
        />
        <RatingInput
          value="3"
          onChange={handleRatingChange}
          checked={rating === '3'}
          title="not bad"
        />
        <RatingInput
          value="2"
          onChange={handleRatingChange}
          checked={rating === '2'}
          title="badly"
        />
        <RatingInput
          value="1"
          onChange={handleRatingChange}
          checked={rating === '1'}
          title="terribly"
        />
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
          disabled={!rating || !review || review.trim().length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
