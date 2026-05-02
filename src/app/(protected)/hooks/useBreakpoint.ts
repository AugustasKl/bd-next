import { Breakpoint } from "@/app/styles";
import { useMediaQuery } from "./useMediaQuery";

export const useBreakPoint = (
  breakpoint: Breakpoint,
  initialValue?: boolean,
) => {
  return useMediaQuery(`(min-width: ${breakpoint})`, initialValue);
};
