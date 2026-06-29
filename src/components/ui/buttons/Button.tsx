import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import { IconProps } from "@/icons";

type ButtonColor = "primary" | "secondary" | "danger";

const colorMap: Record<ButtonColor, string> = {
  primary: "bg-black text-white",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

interface ButtonProps {
  title: string;
  color?: ButtonColor;
  icon?: React.ComponentType<IconProps>;
  titleClassName?: string;
  iconClassName?: string;
  isIconFromLeft?: boolean;
}

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

// TODO: add redirects to different pages
export const Button: React.FC<Props> = ({
  title,
  color = "primary",
  icon: Icon,
  className,
  titleClassName,
  iconClassName,
  isIconFromLeft,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "cursor-pointer hover:opacity-70 w-full desktop:w-[8.938rem] h-8",
        colorMap[color],
        className,
      )}
      {...props}
    >
      <div className="group inline-flex items-center gap-1">
        {Icon && isIconFromLeft && (
          <Icon width={16} height={16} className={iconClassName} />
        )}
        <p className={titleClassName}>{title}</p>
        {Icon && !isIconFromLeft && (
          <Icon width={16} height={16} className={iconClassName} />
        )}
      </div>
    </button>
  );
};
