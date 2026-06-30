import { FC } from "react";
import { CARD_DATA } from "../_constants/CARD_DATA";
import { Card } from "../../components";

export const CardSection: FC = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4 my-8">
      {CARD_DATA.map(({ cardText, cardNumber, icon, id, additionalInfo }) => (
        <Card
          key={id}
          cardText={cardText}
          cardNumber={cardNumber}
          icon={icon}
          additionalInfo={additionalInfo}
        />
      ))}
    </div>
  );
};
