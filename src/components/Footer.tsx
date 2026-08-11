export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">
            ♡ Frabina Edwin
          </span>

          <span className="footer-copy">
            © 2026 All rights reserved
          </span>
        </div>

        <div className="footer-webring">
          <a
            href="https://cs.utdring.com/#https://frabina.com/?nav=prev"
            className="webring-arrow"
            aria-label="Previous site in the UTD CS Webring"
          >
            ←
          </a>

          <a
            href="https://cs.utdring.com/#https://frabina.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="webring-center"
            aria-label="UTD CS Webring"
          >
            <img
              src="https://cs.utdring.com/icon.white.svg"
              alt=""
            />

            <span>CS Webring</span>
          </a>

          <a
            href="https://cs.utdring.com/#https://frabina.com/?nav=next"
            className="webring-arrow"
            aria-label="Next site in the UTD CS Webring"
          >
            →
          </a>
        </div>

        <span className="footer-built">
         ♡
        </span>
      </div>
    </footer>
  );
}