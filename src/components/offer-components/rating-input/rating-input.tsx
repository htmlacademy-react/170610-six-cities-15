import React from 'react';

type RatingInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  title: string;
  disabled: boolean; // Проп для управления доступностью компонента
};

const RatingInput: React.FC<RatingInputProps> = ({
  value,
  onChange,
  checked,
  title,
  disabled, // Передаем проп disabled
}) => (
  <>
    <input
      className="form__rating-input visually-hidden"
      name="rating"
      value={value}
      id={`${value}-stars`}
      type="radio"
      onChange={onChange}
      checked={checked}
      disabled={disabled} // Используем проп disabled для управления доступностью компонента
    />
    <label
      htmlFor={`${value}-stars`}
      className="reviews__rating-label form__rating-label"
      title={title}
    >
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default RatingInput;
