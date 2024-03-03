import { useAppDispatch } from '../../hooks';
import { toggleFavoriteAction } from '../../store/api-actions';

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
  const dispatch = useAppDispatch();

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

  const toggleFavoriteHandler = () => {
    dispatch(
      toggleFavoriteAction({
        id: 'f523f3e1-df8c-49b2-9f8a-0fd2b8d4cb6e',
        status: Math.round(Math.random()),
      })
    );
  };

  return (
    <button
      className={`${buttonClassName} ${isFavoriteClassName} button`}
      type="button"
      onClick={toggleFavoriteHandler}
    >
      <svg className={svgClassName} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
