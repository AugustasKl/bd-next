import React from "react";
import { IconProps } from "@/icons";

interface Props {
  additionalInfo: string;
  cardNumber: number;
  cardText: string;
  icon: React.ComponentType<IconProps>;
  iconClassName?: string;
}

export const Card: React.FC<Props> = ({
  additionalInfo,
  cardNumber,
  cardText,
  icon: Icon,
  iconClassName,
}) => {
  return (
    <div className="flex bg-white flex-col p-4 desktop:p-6 w-[calc(50%-0.5rem)] desktop:max-w-[15.43rem] border border-divider rounded-l">
      <div className="flex gap-2 justify-between mb-6 items-center">
        <p className="desktop:body-medium text-gray-600 font-regular body-small">{cardText}</p>
        <Icon width={16} height={16} className={iconClassName} />
      </div>
      <h2 className="headline2">{cardNumber}</h2>
      <p className="body-small mt-3 text-gray-400">{additionalInfo}</p>
    </div>
  );
};
