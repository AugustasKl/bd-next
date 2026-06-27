import clsx from "clsx";
import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";

type ButtonColor = "primary" | "secondary" | "danger";

const colorMap: Record<ButtonColor, string> = {
  primary: "bg-black text-white",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

interface ButtonProps {
  title: string;
  color?: ButtonColor;
  iconSrc?: string;
  titleClassName?: string;
  iconClassName?: string;
}

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

export const Button: React.FC<Props> = ({
  title,
  color = "primary",
  iconSrc,
  className,
  titleClassName,
  iconClassName,
  ...props
}) => {
  const isIconUsed = Boolean(iconSrc);

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
        {isIconUsed && (
          <Image
            src={iconSrc!}
            alt={iconSrc!}
            height={16}
            width={16}
            className={iconClassName}
          />
        )}
        <p className={titleClassName}>{title}</p>
      </div>
    </button>
  );
};
