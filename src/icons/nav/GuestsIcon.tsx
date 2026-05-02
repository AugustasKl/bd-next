import { createIcon } from "../createIcon";

export const GuestsIcon = createIcon({
  displayName: "GuestsIcon",
  viewBox: "0 0 24 24",
  path: (
    <>
      <circle
        cx="9"
        cy="7.5"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 19.5c0-3.04 2.46-5.5 5.5-5.5h2c3.04 0 5.5 2.46 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="17"
        cy="8.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17.5 14c1.93 0 3.5 1.57 3.5 3.5v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
});
