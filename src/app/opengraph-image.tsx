import { ImageResponse } from "next/og";

export const alt = "Peiman Jannatipour — computational neuroscience research";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 78px",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 58%, #0c4a6e 100%)",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(56, 189, 248, 0.18)",
              border: "1px solid rgba(125, 211, 252, 0.48)",
              color: "#bae6fd",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            PJ
          </div>
          <div style={{ fontSize: 24, color: "#bae6fd", fontWeight: 700 }}>
            Research · Software · Neurotechnology
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 800 }}>
            Peiman Jannatipour
          </div>
          <div
            style={{
              maxWidth: 980,
              fontSize: 34,
              lineHeight: 1.25,
              color: "#cbd5e1",
              fontWeight: 600,
            }}
          >
            Computational Neuroscience · EEG · Human Timing · Bayesian Modelling
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#94a3b8" }}>
          <span>peimanjp.com</span>
          <span>NeuroLab OS · NDMS · Developmental Neuroimaging</span>
        </div>
      </div>
    ),
    size,
  );
}
