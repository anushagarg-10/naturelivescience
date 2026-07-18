"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  PRODUCTS,
  CATEGORIES,
  COLOR_HEX,
  ROMAN,
  type Product,
} from "@/lib/products";

function shade(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, (n >> 16) - 36);
  const g = Math.max(0, ((n >> 8) & 255) - 36);
  const b = Math.max(0, (n & 255) - 36);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export default function Formulary() {
  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const list = useMemo(() => {
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      if (activeCat !== "all" && p.cat !== activeCat) return false;
      if (!q) return true;
      const hay = (
        p.name + " " + p.sub + " " + p.blurb + " " +
        p.comp.join(" ") + " " + p.ben.join(" ") + " " + p.catLabel
      ).toLowerCase();
      return hay.includes(q);
    });
  }, [activeCat, query]);

  const open = openId ? PRODUCTS.find((p) => p.id === openId) ?? null : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Position-preserving scroll lock: pin the body while the modal is open,
  // then restore the exact scroll position on close. Works reliably across
  // desktop and mobile regardless of which element is the scroll container.
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const scrollY = window.scrollY;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.paddingRight = prev.paddingRight;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <section id="products">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">The formulary</span>
          <h2>
            The full range, <em>one philosophy</em>.
          </h2>
          <p>
            Search or filter by need, then open any entry for its full
            composition, indications, dosage and pack sizes.
          </p>
        </div>

        <div className="controls reveal">
          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4-4" />
            </svg>
            <input
              type="search"
              placeholder="Search by need — liver, calcium, gut, anaemia…"
              aria-label="Search products"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="chips">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`chip${activeCat === c.id ? " active" : ""}`}
                onClick={() => setActiveCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="prod-grid">
          {list.length === 0 && (
            <div className="empty">
              No entries match that search. Try a different term or clear the
              filter.
            </div>
          )}
          {list.map((p, i) => {
            const idx = PRODUCTS.indexOf(p);
            return (
              <button
                key={p.id}
                className="prod"
                style={{ animationDelay: `${i * 0.04}s` }}
                aria-label={`View details for ${p.name}`}
                onClick={() => setOpenId(p.id)}
              >
                <div className="prod-top">
                  <div className="prod-no">{ROMAN[idx]}</div>
                  <div className="prod-row">
                    <span className="dotcat" style={{ background: COLOR_HEX[p.color] }} />
                    <span className="tag">{p.catLabel}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <div className="sub">{p.sub}</div>
                  <div className="blurb">{p.blurb}</div>
                </div>
                <div className="prod-foot">
                  <span className="pack">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
                      <path d="M3 8l9 5 9-5M12 13v8" />
                    </svg>
                    {p.pack}
                  </span>
                  <span className="view">
                    Open
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <ProductModal product={open} onClose={() => setOpenId(null)} />
    </section>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;
  const c = COLOR_HEX[product.color];
  const modalContent = (
    <div
      className="backdrop open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="m-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div
          className="m-head"
          style={{ background: `linear-gradient(135deg, ${c}, ${shade(c)})` }}
        >
          <button className="m-close" aria-label="Close" onClick={onClose}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <span className="mtag">{product.catLabel}</span>
          <h3 id="m-title">{product.name}</h3>
          <div className="msub">{product.sub}</div>
        </div>
        {product.image && (
          <figure className="m-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.name} product datasheet`}
              loading="lazy"
            />
          </figure>
        )}
        <div className="m-body">
          <div className="m-cols">
            <div className="m-block">
              <h4>Composition</h4>
              <ul className="m-list">
                {product.comp.map((x, i) => (
                  <li key={i}><span className="b" />{x}</li>
                ))}
              </ul>
            </div>
            <div className="m-block">
              <h4>Indications &amp; benefits</h4>
              <ul className="m-list benefits">
                {product.ben.map((x, i) => (
                  <li key={i}><span className="b" />{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="m-dose">
            <div className="dh">Dosage</div>
            {product.dose.map(([k, v], i) => (
              <div className="dose-row" key={i}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
          <div className="m-foot">
            <span className="m-pack">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#264A30" strokeWidth="2">
                <path d="M21 8l-9-5-9 5v8l9 5 9-5z" />
                <path d="M3 8l9 5 9-5M12 13v8" />
              </svg>
              Packing: {product.pack}
            </span>
            {product.note && <span className="m-note">{product.note}</span>}
          </div>
        </div>
      </div>
    </div>
  );

  // Render the modal on <body> so it escapes any ancestor with a transform
  // (e.g. the page-transition wrapper), which would otherwise trap the fixed
  // overlay and mis-position it when the page is scrolled.
  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
}
