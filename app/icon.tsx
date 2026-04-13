import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: "#EFEFED",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#111111",
          letterSpacing: "-1px",
        }}
      >
        LD
      </div>
    ),
    { ...size }
  );
}
