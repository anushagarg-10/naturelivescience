import Image from "next/image";

const QUALITY_PHOTO =
  "https://images.unsplash.com/photo-1577953255778-a35aa68ddd77?auto=format&fit=crop&w=900&q=72";

export default function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Quality &amp; provenance</span>
          <h2>
            Made to a <em>standard</em>, batch after batch.
          </h2>
          <p>
            Manufactured under ISO 9001:2001 and GMP-certified processes, with
            technical support from A.V.C. Nutrition, Dehradun (UK) 248007. Every
            product carries a transparent, quantified composition and clear
            dosing - supported across India from our offices in Hyderabad and
            Chandigarh.
          </p>
          <div className="seals">
            <div className="seal"><div><div className="st">ISO<br />9001</div><div className="ss">2001</div></div></div>
            <div className="seal"><div><div className="st">GMP</div><div className="ss">Certified</div></div></div>
            <div className="seal"><div><div className="st">A.V.C.</div><div className="ss">Dehradun</div></div></div>
          </div>
        </div>
        <div className="q-photo reveal">
          <Image
            src={QUALITY_PHOTO}
            alt="Hens on a farm"
            fill
            sizes="(max-width: 920px) 100vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
