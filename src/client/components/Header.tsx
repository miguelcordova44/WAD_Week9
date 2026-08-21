export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="HitTastic home">
        <span className="brand-mark">♪</span>
        <span>Hit<span>Tastic</span></span>
      </a>
      <nav aria-label="Main navigation">
        <a className="active" href="#catalogue">Catalogue</a>
        <a href="#journey">Request journey</a>
        <span className="login-pill">● Guest session</span>
      </nav>
    </header>
  );
}
