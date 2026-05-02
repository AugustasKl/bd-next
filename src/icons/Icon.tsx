import { forwardRef } from "react";
import { IconProps } from "./createIcon";
import clsx from "clsx";

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { children, className, viewBox, ...rest } = props;

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      fill="none"
      className={clsx(
        "inline-block shrink-0 align-middle leading-none",
        className
      )}
      {...rest}
    >
      {children}
    </svg>
  );
});

Icon.displayName = "Icon";
