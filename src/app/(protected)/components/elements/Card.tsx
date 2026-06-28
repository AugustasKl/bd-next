import Image from "next/image";
import React from "react";

interface Props {
  additionalInfo: string;
  cardNumber: number;
  cardText: string;
  iconSrc: string;
  iconClassName?: string;
}

export const Card: React.FC<Props> = ({
  additionalInfo,
  cardNumber,
  cardText,
  iconSrc,
  iconClassName,
}) => {
  return (
    <div className="flex bg-white flex-col p-4 desktop:p-6 w-[calc(50%-0.5rem)] desktop:max-w-[15.43rem] border border-divider rounded-l">
      <div className="flex gap-2 justify-between mb-6 items-center">
        <p className="desktop:body-medium text-gray-600 font-regular body-small">{cardText}</p>
        <Image
          src={iconSrc}
          alt={iconSrc}
          height={16}
          width={16}
          className={iconClassName}
        />
      </div>
      <h2 className="headline2">{cardNumber}</h2>
      <p className="body-small mt-3 text-gray-400">{additionalInfo}</p>
    </div>
  );
};
