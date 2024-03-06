import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
// import { toggleFavoriteAction } from '../../store/api-actions';

type BookmarkButtonProps = {
  isOfferScreen?: boolean;
  isFavorite: boolean;
  width: string;
  height: string;
  id: string | undefined;
};

function BookmarkButton({
  isOfferScreen,
  isFavorite,
  width,
  height,
  id,
}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

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
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
    }

    dispatch(
      toggleFavoriteAction({
        id: id,
        status: isFavorite ? 0 : 1,
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
