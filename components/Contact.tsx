"use client";

import { useState } from "react";

// WhatsApp number in international format, digits only (for wa.me links).
const WHATSAPP = "919466964266"; // +91 94669 64266

type Status = "idle" | "error" | "opened";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    type: "Layer / egg producer",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit() {
    if (!form.name || !form.contact) {
      setStatus("error");
      return;
    }
    const text = [
      "New enquiry - Nature Life Science",
      "",
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      `I am a: ${form.type}`,
      "",
      `Enquiry: ${form.message || "-"}`,
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("opened");
  }

  const label =
    status === "error"
      ? "Please add your name and contact"
      : status === "opened"
      ? "Opening WhatsApp..."
      : "Send enquiry on WhatsApp";

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="cta-box">
          <div className="ctitle reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>
              Speak with our <em>technical team</em>.
            </h2>
            <p>
              For product advice, dosing guidance or distribution enquiries,
              reach us directly - the fastest way is WhatsApp.
            </p>
            <div className="contact-list">
              <a
                className="ci ci-link"
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="cic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.77-.88-2.93-1.57-4.1-3.57-.3-.52.3-.48.87-1.6.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.5.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2z" />
                  </svg>
                </div>
                <div>
                  <div className="lab">WhatsApp</div>
                  <div className="val">+91 94669 64266</div>
                </div>
              </a>
              <div className="ci">
                <div className="cic">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
                  </svg>
                </div>
                <div>
                  <div className="lab">Technical query</div>
                  <div className="val">
                    <a href="tel:+911847964609">0184-7964609</a>
                    &nbsp;·&nbsp;
                    <a href="tel:+919817023461">9817023461</a>
                  </div>
                </div>
              </div>
              <div className="ci">
                <div className="cic">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <div className="lab">Website</div>
                  <div className="val">
                    <a href="https://naturelifescience.in" target="_blank" rel="noopener noreferrer">
                      www.naturelifescience.in
                    </a>
                  </div>
                </div>
              </div>
              <div className="ci">
                <div className="cic">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="lab">Corporate office</div>
                  <div className="val">SCO 3-16-108, Kamakshi Puram, Hyderabad 500013</div>
                </div>
              </div>
              <div className="ci">
                <div className="cic">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="lab">Marketing office (North)</div>
                  <div className="val">SCO 23, Block A, Sector 12A, Chandigarh (UT) 160012</div>
                </div>
              </div>
            </div>
          </div>

          <div className="form reveal">
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" value={form.name} onChange={update("name")} />
            </div>
            <div>
              <label htmlFor="contact">Email or phone</label>
              <input id="contact" type="text" placeholder="How can we reach you" value={form.contact} onChange={update("contact")} />
            </div>
            <div>
              <label htmlFor="type">I am a...</label>
              <select id="type" value={form.type} onChange={update("type")}>
                <option>Layer / egg producer</option>
                <option>Broiler producer</option>
                <option>Breeder farm</option>
                <option>Distributor / dealer</option>
                <option>Veterinarian / consultant</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="msg">Your enquiry</label>
              <textarea id="msg" rows={3} placeholder="Flock size, challenge, or products of interest..." value={form.message} onChange={update("message")} />
            </div>
            <button
              className="btn btn-gold"
              type="button"
              onClick={submit}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.77-.88-2.93-1.57-4.1-3.57-.3-.52.3-.48.87-1.6.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.5.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2z" />
              </svg>
              {label}
            </button>
            <p className="form-note">
              Tap <strong>Send</strong> and your enquiry opens in WhatsApp,
              ready to send. On a computer it opens WhatsApp Web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
