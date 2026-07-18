const ACTIVES = [
  "Tulsi", "Amla", "Ashwagandha", "Shilajit", "Turmeric", "Neem",
  "Garlic", "Ginger", "Gokshura", "Shatavari", "Punarnava", "Kalmegh",
  "Organic minerals", "Probiotics",
];

export default function Marquee() {
  const items = [...ACTIVES, ...ACTIVES];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">
        {items.map((a, i) => (
          <span key={i}>{a}</span>
        ))}
      </div>
    </div>
  );
}
