import React from "react";

type Size = "sm" | "md" | "lg";

const heights: Record<Size, number> = {
  sm: 24,
  md: 32,
  lg: 44,
};

interface ATSLogoProps {
  size?: Size;
  className?: string;
  /** Apply white filter for use on dark backgrounds */
  white?: boolean;
  /** Show only the lines mark (no text) — ATS_logo_lines.png */
  mark?: boolean;
}

const ATSLogo = ({ size = "md", className = "", white = false, mark = false }: ATSLogoProps) => {
  const h = heights[size];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={mark ? "/images/ATS_logo_lines.png" : "/images/ATS_logo.png"}
      alt="ATS Corporation"
      height={h}
      style={{ height: h, width: "auto", filter: white ? "brightness(0) invert(1)" : undefined }}
      className={`object-contain shrink-0 ${className}`}
    />
  );
};

export default ATSLogo;
