import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon (iOS/Android) matching the "L" brand mark. */
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
          background: "linear-gradient(135deg, #247BA0, #163A5C)",
        }}
      >
        <svg width="110" height="110" viewBox="0 0 24 24">
          <path d="M5 19V5h3v11h6v3z" fill="#FFFFFF" />
          <path d="M14 5h5v5h-3V8h-2z" fill="#FF786B" />
        </svg>
      </div>
    ),
    size,
  );
}
