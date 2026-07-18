import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/">
              <svg className="seal-mark" width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#C9A24B" strokeWidth="1" />
                <path d="M24 14C19 19 17.5 25 24 34C30.5 25 29 19 24 14Z" fill="none" stroke="#C9A24B" strokeWidth="1.3" />
                <line x1="24" y1="17" x2="24" y2="32" stroke="#C9A24B" strokeWidth="1" />
              </svg>
              <span>
                <span className="bn" style={{ color: "var(--parch)" }}>Nature Life Science</span>
                <span className="bt">A company by AVC Nutrition</span>
              </span>
            </Link>
            <p className="foot-about">
              A complete range of herbal and nutritional supplements for
              poultry — immunity, gut health, production, minerals and more.
            </p>
            <div className="foot-cert">
              <span>ISO 9001:2015</span>
              <span>GMP CERTIFIED</span>
              <span>REG. TRADEMARK</span>
            </div>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <Link href="/about">About</Link>
            <Link href="/actives">The actives</Link>
            <Link href="/formulary">The formulary</Link>
            <Link href="/quality">Quality &amp; provenance</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <p>Technical: 0184-7964609 · 9817023461</p>
            <p>www.naturelifescience.in</p>
            <p>Corporate: Kamakshi Puram, Hyderabad 500013</p>
            <p>Marketing (North): Sector 12A, Chandigarh 160012</p>
            <p>Technical support: A.V.C. Nutrition, Dehradun</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Nature Life Science · For animal use only</span>
          <span>Scientific &amp; natural solution for Poultry Health</span>
        </div>
      </div>
    </footer>
  );
}
