import Image from "next/image";

export default function Partners() {
  return (
    <section className="partners">
      <div className="wrap">
        <div className="sec-head partner-head reveal">
          <span className="eyebrow">The company</span>
          <h2>
            Nature Life Science, a company by <em>AVC&nbsp;Nutrition</em>.
          </h2>
          <p>
            Herbal and nutritional poultry health — backed by AVC Nutrition,
            with technical consulting from Nutrien Ag Solutions, Braidwood,
            Australia.
          </p>
        </div>
        <div className="partner-logos reveal">
          <div className="partner-card">
            <Image
              src="/logos/nature-life-science.png"
              alt="Nature Life Science logo"
              width={545}
              height={560}
            />
          </div>
          <div className="partner-card">
            <Image
              src="/logos/avc-nutrition.png"
              alt="AVC Nutrition — consulting partner Nutrien Ag Solutions, Braidwood Australia"
              width={541}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
