type BookmarkButtonProps = {
  isOfferScreen?: boolean;
  isFavorite: boolean;
  width: string;
  height: string;
};

function BookmarkButton({
  isOfferScreen = false,
  isFavorite = false,
  width,
  height,
}: BookmarkButtonProps): JSX.Element {
  const buttonClassName = isOfferScreen
    ? 'offer__bookmark-button'
    : 'place-card__bookmark-button';

  const svgClassName = isOfferScreen
    ? 'offer__bookmark-icon'
    : 'place-card__bookmark-icon';

  let isFavoriteClassName;
  if (isFavorite) {
    if (isOfferScreen) {
      isFavoriteClassName = 'offer__bookmark-button--active';
    } else {
      isFavoriteClassName = 'place-card__bookmark-button--active';
    }
  } else {
    isFavoriteClassName = '';
  }

  return (
    <button
      className={`${buttonClassName} ${isFavoriteClassName} button`}
      type="button"
    >
      <svg className={svgClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
