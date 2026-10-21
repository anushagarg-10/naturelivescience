import { ImageResponse } from "next/og";

export const alt =
  "Nature Life Science - herbal & nutritional poultry supplements. ISO 9001 & GMP certified.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const gold = "#C9A24B";
  const goldBr = "#E2C272";
  const parch = "#F2EAD8";
  const sage = "#A6C99B";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #17301E 0%, #0E1A12 62%)",
          padding: 76,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            right: 30,
            bottom: 30,
            border: "1px solid rgba(201,162,75,0.35)",
            borderRadius: 10,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            color: goldBr,
            fontSize: 25,
            letterSpacing: 7,
          }}
        >
          A COMPANY BY AVC NUTRITION
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 94,
              color: parch,
              fontWeight: 700,
              lineHeight: 1.04,
            }}
          >
            Nature Life Science
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: gold,
              marginTop: 20,
            }}
          >
            A materia medica for the modern flock
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 25,
            color: sage,
            letterSpacing: 4,
          }}
        >
          ISO 9001 · GMP CERTIFIED · 16 FORMULATIONS
        </div>
      </div>
    ),
    { ...size }
  );
}
