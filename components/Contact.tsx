"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

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

  async function submit() {
    if (!form.name || !form.contact) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const label =
    status === "sending"
      ? "Sending…"
      : status === "sent"
      ? "Thank you — we will be in touch"
      : status === "error"
      ? "Something went wrong — try again"
      : "Send enquiry";

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
              reach us directly.
            </p>
            <div className="contact-list">
              <div className="ci">
                <div className="cic">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" />
                  </svg>
                </div>
                <div>
                  <div className="lab">Technical query</div>
                  <div className="val">0184-7964609 &nbsp;·&nbsp; 9817023461</div>
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
                  <div className="val">www.naturelifescience.in</div>
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
              <label htmlFor="type">I am a…</label>
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
              <textarea id="msg" rows={3} placeholder="Flock size, challenge, or products of interest…" value={form.message} onChange={update("message")} />
            </div>
            <button
              className="btn btn-gold"
              type="button"
              onClick={submit}
              disabled={status === "sending" || status === "sent"}
            >
              {label}
            </button>
            <p className="form-note">
              Add your <code>RESEND_API_KEY</code> in environment variables to
              deliver enquiries by email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
