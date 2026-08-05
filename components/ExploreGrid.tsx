import Link from "next/link";

const CARDS = [
  {
    href: "/actives",
    no: "i",
    title: "The actives",
    blurb:
      "The phyto-actives at the heart of the range - tulsi, turmeric, amla, ashwagandha and more, each quantified in every batch.",
    cta: "Meet the botanicals",
  },
  {
    href: "/formulary",
    no: "ii",
    title: "The formulary",
    blurb:
      "The complete catalogue - search or filter by need, then open any entry for its full composition, indications and dosage.",
    cta: "Open the formulary",
  },
  {
    href: "/quality",
    no: "iii",
    title: "Quality & provenance",
    blurb:
      "ISO 9001:2001 and GMP-certified processes, transparent quantified composition, and technical support from A.V.C. Nutrition.",
    cta: "See our standard",
  },
  {
    href: "/contact",
    no: "iv",
    title: "Talk to us",
    blurb:
      "For product advice, dosing guidance or distribution enquiries, reach the technical team directly.",
    cta: "Get in touch",
  },
];

export default function ExploreGrid() {
  return (
    <section className="explore">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Explore</span>
          <h2>
            Four ways into the <em>materia medica</em>.
          </h2>
          <p>
            From the botanicals themselves to the finished formulary - begin
            wherever your flock needs it most.
          </p>
        </div>
        <div className="explore-grid">
          {CARDS.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className="xcard reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="xcard-no">{c.no}</span>
              <h3>{c.title}</h3>
              <p>{c.blurb}</p>
              <span className="xcard-cta">
                {c.cta}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
