import Image from "next/image";

const BAND_PHOTO =
  "https://images.unsplash.com/photo-1579088092217-3ed32baa9fa1?auto=format&fit=crop&w=1920&q=72";

export default function Philosophy() {
  return (
    <div className="philo">
      <Image
        className="philo-bg"
        src={BAND_PHOTO}
        alt=""
        fill
        sizes="100vw"
      />
      <div className="philo-scrim" />
      <div className="wrap">
        <blockquote>
          <div className="qmark">&ldquo;</div>
          <h2>
            Healthier flocks come from <em>feeding biology</em>, not fighting it.
          </h2>
          <div className="by">- The Nature Life Science approach</div>
        </blockquote>
      </div>
    </div>
  );
}
