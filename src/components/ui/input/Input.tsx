import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type Props = { className?: string } & ComponentPropsWithoutRef<"input">;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx("bg-gray-light-300 rounded-m p-2 w-full outline-none", className)}
      {...props}
    />
  ),
);

Input.displayName = "Input";
