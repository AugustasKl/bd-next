import { FC } from "react";
import { IconProps } from "@/icons/createIcon";

interface Props {
  label: string;
  icon: React.ComponentType<IconProps>;
  onClick?: () => void;
}

export const QuickActionItem: FC<Props> = ({ label, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 w-full border border-divider rounded-m p-3 hover:opacity-70 cursor-pointer"
    >
      <Icon className="size-5 text-primary-main" />
      <p className="body-medium">{label}</p>
    </button>
  );
};
