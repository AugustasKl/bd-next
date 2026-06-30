import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  className?: string;
  selectOptions: Array<SelectOption>;
} & ComponentPropsWithoutRef<"select">;

// NOTE: will need to adjust to show proper dropdown and not the default one
export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, selectOptions, ...props }, ref) => (
    <select
      className={clsx(
        "bg-gray-light-300 rounded-m p-2 outline-none cursor-pointer",
        className,
      )}
      {...props}
      ref={ref}
    >
      {selectOptions.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  ),
);

Select.displayName = "Select";
