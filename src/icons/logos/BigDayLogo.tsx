import { createIcon } from "../createIcon";

export const BigDayLogo = createIcon({
  displayName: "BigDayIcon",
  viewBox: "0 0 24 24",
  path: (
    <>
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>

        <clipPath id="flowerClip">
          <circle cx="12" cy="7.875" r="3" />
          <circle cx="12" cy="16.125" r="3" />
          <circle cx="7.875" cy="12" r="3" />
          <circle cx="16.125" cy="12" r="3" />
          <circle cx="12" cy="12" r="2.25" />
        </clipPath>
      </defs>

      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="6.75"
        fill="url(#bgGrad)"
      />

      <g clipPath="url(#flowerClip)">
        <rect x="0" y="0" width="24" height="24" fill="#ffffff" />
      </g>
      <circle cx="12" cy="12" r="1.5" fill="#F59E0B" />
    </>
  ),
  defaultProps:{
    className: 'size-16'
  }
});
