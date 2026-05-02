import { createIcon } from "../createIcon";

export const CloseIcon = createIcon({
  displayName: "CloseIcon",
  viewBox: "0 0 20 20",
  path: (
    <>
      <path
        d="M14.9989 4.99963L4.99963 14.9989"
        stroke="#0A0A0A"
        strokeWidth="1.66655"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.99963 4.99963L14.9989 14.9989"
        stroke="#0A0A0A"
        strokeWidth="1.66655"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  defaultProps: {
    className: "size-5",
  },
});
