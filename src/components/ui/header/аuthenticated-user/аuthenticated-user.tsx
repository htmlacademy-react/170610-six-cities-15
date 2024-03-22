import HeaderNavItemUser from '../header-nav-item-user/header-nav-item-user';
import HeaderNavItemListItem from '../header-nav-item-list-item/header-nav-item-list-item';

type AuthenticatedUserProps = {
  userData: { email: string; avatarUrl: string };
  favoriteOffersCount: number;
  onLogout: (evt: React.FormEvent) => void;
};

function AuthenticatedUser({
  userData,
  favoriteOffersCount,
  onLogout,
}: AuthenticatedUserProps) {
  return (
    <>
      <HeaderNavItemUser
        userData={userData}
        favoriteOffersCount={favoriteOffersCount}
        data-testid="header-nav-item-user"
      />
      <HeaderNavItemListItem onLogout={onLogout} />
    </>
  );
}

export default AuthenticatedUser;
