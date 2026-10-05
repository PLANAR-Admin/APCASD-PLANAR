import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 6,
        }}
      >
        <svg width="22" height="26" viewBox="0 0 70 84" fill="none">
          <circle cx="14" cy="24" r="12" fill="#dc143c" />
          <circle cx="14" cy="60" r="12" fill="#dc143c" />
          <circle cx="52" cy="10" r="12" fill="#dc143c" />
          <circle cx="52" cy="42" r="12" fill="#00008b" />
          <circle cx="52" cy="74" r="12" fill="#dc143c" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
