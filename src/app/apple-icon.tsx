import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
          background: "linear-gradient(145deg, #020617 0%, #0f172a 58%, #0c4a6e 100%)",
          color: "#f8fafc",
          fontSize: 68,
          fontWeight: 800,
          letterSpacing: "-0.06em",
        }}
      >
        PJ
      </div>
    ),
    size,
  );
}
