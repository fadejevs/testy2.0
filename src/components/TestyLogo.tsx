// src/components/TestyLogo.tsx
import React from "react";

const TestyLogo = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
  >
    {/* Outer dark circle */}
    <circle cx="32" cy="32" r="30" fill="#4b320a" />
    {/* Inner lighter circle for vibrancy */}
    <circle cx="32" cy="32" r="24" fill="#6d430d" />
    {/* Vibrant orange octagon */}
    <polygon
      points="32,16 48,24 56,40 48,56 32,64 16,56 8,40 16,24"
      fill="#FFA800"
    />
    {/* Exclamation mark - centered */}
    <rect x="29" y="28" width="6" height="14" rx="3" fill="#2d220f" />
    <circle cx="32" cy="48" r="3" fill="#2d220f" />
  </svg>
);

export default TestyLogo;