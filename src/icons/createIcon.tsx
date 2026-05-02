import { forwardRef, ReactElement, SVGAttributes } from "react";
import { Icon } from "./Icon";
import clsx from "clsx";

export interface IconProps extends SVGAttributes<SVGElement> {
  children?: ReactElement | ReactElement[];
  className?: string;
}

interface CreateIconOptions {
  path: ReactElement;
  displayName?: string;
  viewBox?: string;
  defaultProps?: IconProps;
}

export const createIcon = (options: CreateIconOptions) => {
  const { viewBox = "0 0 24 24", displayName, defaultProps = {} } = options;

  const IconComponent = forwardRef<SVGSVGElement, IconProps>(
    (passedProps, ref) => {
      const filteredProps: IconProps = Object.entries(passedProps).reduce(
        (acc, [key, value]) => {
          if (!value && value !== 0) {
            return acc;
          }

          return {
            ...acc,
            [key]: value,
          };
        },
        {}
      );

      return (
        <Icon
          ref={ref}
          viewBox={viewBox}
          {...defaultProps}
          {...filteredProps}
          className={clsx(defaultProps.className, filteredProps.className)}
        >
          {options.path}
        </Icon>
      );
    }
  );

  IconComponent.displayName = displayName;

  return IconComponent;
};
