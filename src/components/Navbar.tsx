export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="brand">
          <span className="brand-icon">ᶻ 𝗓 𐰁 .ᐟ</span>
          <span className="brand-name">frabina</span>
          <span className="brand-sub">/ edwin</span>
        </a>

        <nav className="nav-links">
          <a href="#practice">Practice</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="contact-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}