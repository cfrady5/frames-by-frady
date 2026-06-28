/**
 * Frames by Frady brand assets.
 *
 * The mark is two equal overlapping square "frames": a white back frame and a
 * green front frame. The wordmark is lowercase, bold italic "frames by frady"
 * with the connector "by" in brand green.
 *
 * Brand green: #3BAE48
 */

interface MarkProps {
  className?: string;
  /** Fill color for the front frame's interior (so it sits over the back frame). */
  bg?: string;
  /** Stroke color of the back frame. */
  backStroke?: string;
}

export function FramesMark({
  className = "w-9 h-9",
  bg = "#070B14",
  backStroke = "#FFFFFF",
}: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      {/* Back frame — white, offset up-left */}
      <rect
        x="7"
        y="5"
        width="35"
        height="35"
        rx="2"
        stroke={backStroke}
        strokeWidth="4"
      />
      {/* Front frame — green, offset down-right, opaque interior */}
      <rect
        x="22"
        y="24"
        width="35"
        height="35"
        rx="2"
        fill={bg}
        stroke="#3BAE48"
        strokeWidth="4.5"
      />
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
  /** Color for "frames" / "frady". Defaults to ink; pass white for dark surfaces. */
  textColor?: string;
}

export function FramesWordmark({
  className = "text-[17px]",
  textColor = "#FFFFFF",
}: WordmarkProps) {
  return (
    <span
      className={`font-extrabold italic lowercase tracking-tight leading-none ${className}`}
      style={{ color: textColor, fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      frames
      <span className="text-[#3BAE48] mx-[0.26em]">by</span>
      frady
    </span>
  );
}

interface LogoProps {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  textColor?: string;
  bg?: string;
  backStroke?: string;
}

/** Horizontal lockup: mark + wordmark. Used in the header and footer. */
export function FramesLogo({
  className = "",
  markClassName = "w-8 h-8",
  wordmarkClassName = "text-[17px]",
  textColor = "#FFFFFF",
  bg = "#070B14",
  backStroke = "#FFFFFF",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <FramesMark className={markClassName} bg={bg} backStroke={backStroke} />
      <FramesWordmark className={wordmarkClassName} textColor={textColor} />
    </span>
  );
}
