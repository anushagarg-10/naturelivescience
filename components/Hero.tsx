import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const HERO_PHOTO =
  "https://images.unsplash.com/photo-1715241463230-1f2e081d47f5?auto=format&fit=crop&w=900&q=74";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="reveal">
            <div className="eyebrow">A company by AVC Nutrition · Est. 2019</div>
            <h1>
              A <em>materia&nbsp;medica</em> for the modern flock.
            </h1>
            <p className="lede">
              Where herbal tradition meets feed science - tulsi, amla, ashwagandha
              and turmeric, formulated with organic minerals, enzymes and
              probiotics to keep poultry well, from the first chick to the last lay.
            </p>
            <div className="hero-meta">
              <span><i /> {PRODUCTS.length} formulations</span>
              <span><i /> ISO 9001:2001</span>
              <span><i /> GMP certified</span>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-gold" href="/formulary">Open the formulary</Link>
              <Link className="arrow-link" href="/actives">
                Meet the botanicals
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="portrait reveal">
            <svg className="sprig tl" width="86" height="86" viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <path d="M14 80C20 56 30 36 52 18" />
              <path d="M30 52c-9-3-14-11-13-20 8 2 13 9 13 20Z" />
              <path d="M40 40c-2-9 2-18 11-22 2 9-2 17-11 22Z" />
              <path d="M44 56c8-4 17-2 22 6-8 4-17 2-22-6Z" />
            </svg>
            <div className="portrait-frame">
              <Image
                className="duoimg"
                src={HERO_PHOTO}
                alt="Free-range poultry"
                fill
                sizes="(max-width: 920px) 360px, 440px"
                priority
              />
            </div>
            <svg className="sprig br" width="80" height="80" viewBox="0 0 90 90" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <path d="M14 80C20 56 30 36 52 18" />
              <path d="M30 52c-9-3-14-11-13-20 8 2 13 9 13 20Z" />
              <path d="M44 56c8-4 17-2 22 6-8 4-17 2-22-6Z" />
            </svg>
            <svg className="stamp" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="46" fill="#0E1A12" stroke="#C9A24B" strokeWidth="1" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A24B" strokeWidth=".6" opacity=".6" />
              <path id="seal-arc" d="M50 18 a32 32 0 0 1 0 64 a32 32 0 0 1 0 -64" fill="none" />
              <text fontFamily="monospace" fontSize="8" letterSpacing="2.4" fill="#C9A24B">
                <textPath href="#seal-arc" startOffset="2%">· HERBAL · NUTRITIONAL · TRUSTED ·</textPath>
              </text>
              <text x="50" y="47" textAnchor="middle" fontFamily="serif" fontSize="16" fill="#E2C272">NLS</text>
              <text x="50" y="62" textAnchor="middle" fontFamily="monospace" fontSize="6.5" letterSpacing="1.5" fill="#7FA178">EST 2019</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
