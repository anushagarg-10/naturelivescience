import Link from "next/link";

export default function CTABand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="cta-band-inner reveal">
          <div className="cta-band-glow" aria-hidden="true" />
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>
              Put the <em>apothecary</em> to work for your flock.
            </h2>
            <p>
              Browse the full formulary or speak with our technical team for
              dosing guidance tailored to your birds.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link className="btn btn-gold" href="/formulary">
              Open the formulary
            </Link>
            <Link className="arrow-link" href="/contact">
              Technical query
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
