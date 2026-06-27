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
    <div className="flex bg-white flex-col p-4 desktop:p-6 w-[calc(50%-0.5rem)] desktop:max-w-[15.43rem] border border-gray-light rounded-l">
      <div className="flex justify-between mb-6">
        <p>{cardText}</p>
        <Image
          src={iconSrc}
          alt={iconSrc}
          height={16}
          width={16}
          className={iconClassName}
        />
      </div>
      <h2 className="headline2">{cardNumber}</h2>
      <p className="card-label">{additionalInfo}</p>
    </div>
  );
};
