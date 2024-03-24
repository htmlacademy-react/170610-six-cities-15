import Logo from '../../ui/logo/logo';

function Footer() {
  return (
    <footer className="footer container" data-testid="footerElement">
      <Logo classPrefix="footer" width="64" height="33" />
    </footer>
  );
}

export default Footer;
