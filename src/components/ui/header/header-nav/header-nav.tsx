type HeaderNavProps = {
  renderAuthLinks: () => JSX.Element;
};

function HeaderNav({ renderAuthLinks }: HeaderNavProps): JSX.Element {
  return (
    <nav className="header__nav" data-testid="header-nav">
      <ul className="header__nav-list">{renderAuthLinks()}</ul>
    </nav>
  );
}

export default HeaderNav;
