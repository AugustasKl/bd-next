import { FC } from "react";
import clsx from "clsx";

export type NameDetails = {
  firstName: string;
  lastName?: string;
};

interface AvatarProps {
  name: NameDetails;
  size?: "small" | "large";
}

const sizeStyles = {
  small: "size-8 card-label",
  large: "size-10 body-text",
} as const;

export const Avatar: FC<AvatarProps> = ({ name, size = "small" }) => {
  const { firstName, lastName } = name;

  const userInitials = getInitials(firstName, lastName);

  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-full bg-primary font-semibold text-neutral-white",
        sizeStyles[size]
      )}
    >
      {userInitials}
    </div>
  );
};

const getInitials = (firstName: string, lastName?: string): string => {
  return `${firstName[0]}${lastName?.[0] ?? ""}`.toUpperCase();
};
