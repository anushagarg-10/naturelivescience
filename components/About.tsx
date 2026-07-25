import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import CTABand from "@/components/CTABand";

const PILLARS = [
  {
    no: "i",
    title: "Herbal tradition",
    body: "Time-honoured botanicals — tulsi, turmeric, amla, ashwagandha, neem and more — each with a long history in animal health, drawn from the apothecary.",
  },
  {
    no: "ii",
    title: "Quantified science",
    body: "Every active is standardised and quantified in each batch, with a transparent composition and clear, species-specific dosing on every product.",
  },
  {
    no: "iii",
    title: "Made to a standard",
    body: "Manufactured under ISO 9001:2001 and GMP-certified processes, with technical support from A.V.C. Nutrition, Dehradun.",
  },
  {
    no: "iv",
    title: "Support across India",
    body: "Backed by corporate and marketing offices in Hyderabad and Chandigarh, and technical expertise on call for every enquiry.",
  },
];

const LOCATIONS = [
  {
    lab: "Corporate office",
    place: "SCO 3-16-108, Kamakshi Puram, Hyderabad 500013",
  },
  {
    lab: "Marketing office (North)",
    place: "SCO 23, Block A, Sector 12A, Chandigarh (UT) 160012",
  },
  {
    lab: "Technical support",
    place: "A.V.C. Nutrition, Dehradun (UK) 248007",
  },
];

export default function About() {
  return (
    <>
      <section className="about-intro">
        <div className="about-aurora" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">About us</span>
            <h2>
              A company by <em>AVC&nbsp;Nutrition</em>.
            </h2>
            <p>
              Nature Life Science was founded to give the poultry industry a
              complete materia medica — herbal and nutritional supplements
              formulated with the rigour of modern feed science, and backed by
              A.V.C. Nutrition&rsquo;s technical expertise.
            </p>
            <div className="hero-meta about-meta">
              <span><i /> Est. 2019</span>
              <span><i /> {PRODUCTS.length} formulations</span>
              <span><i /> ISO 9001:2001</span>
              <span><i /> GMP certified</span>
            </div>
          </div>
          <figure className="facility-frame reveal">
            <Image
              className="facility-img"
              src="/about/building.jpg"
              alt="Nature Life Science manufacturing facility — a company by AVC Nutrition"
              fill
              sizes="(max-width: 920px) 100vw, 1130px"
              priority
            />
            <figcaption className="facility-cap">
              Our facility — Nature Life Science, a company by AVC Nutrition.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="about-story medica">
        <div className="wrap about-story-grid">
          <div className="reveal">
            <span className="eyebrow">Our philosophy</span>
            <h3>Feeding biology, not fighting it.</h3>
          </div>
          <div className="about-prose reveal">
            <p>
              Healthier flocks come from working with a bird&rsquo;s biology
              rather than against it. Our range pairs phyto-actives with organic
              minerals, enzymes and probiotics to support immunity, gut health,
              production and fertility — from the first chick to the last lay.
            </p>
            <p>
              Each formulation is built around actives with a long record in
              animal health, then quantified and standardised so growers know
              exactly what goes into their birds, and at what dose.
            </p>
            <blockquote className="about-quote">
              &ldquo;Where herbal tradition meets feed science.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="about-pillars">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What we stand for</span>
            <h2>
              Four principles, <em>every batch</em>.
            </h2>
          </div>
          <div className="pillars">
            {PILLARS.map((p, i) => (
              <div
                key={p.no}
                className="pillar reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="pillar-no">{p.no}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-locations medica">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Where to find us</span>
            <h2>
              Across <em>India</em>.
            </h2>
          </div>
          <div className="loc-grid">
            {LOCATIONS.map((l, i) => (
              <div
                key={l.lab}
                className="loc reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="loc-pin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="loc-lab">{l.lab}</div>
                <div className="loc-place">{l.place}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
