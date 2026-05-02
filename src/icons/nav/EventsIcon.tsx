import { createIcon } from "../createIcon";

export const EventsIcon = createIcon({
  displayName: "EventsIcon",
  viewBox: "0 0 24 24",
  path: (
    <>
      <rect
        x="3"
        y="4.5"
        width="18"
        height="16.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 3v3M7.5 3v3M3 9h18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
