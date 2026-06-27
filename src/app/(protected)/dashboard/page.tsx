import { FC } from "react";
import { Card, PageHeader } from "../components";
import { Button } from "@/components";
import PlusIcon from "./../../../../public/icons/plusIcon.svg";
import { CARD_DATA } from "./_constants/CARD_DATA";

const Dashboard: FC = () => {
  return (
    //  NOTE: check all pages widths
    <div className="flex flex-col max-w-[1140px] mx-auto">
      <PageHeader
        description="Welcome back! Here's what's happening with your events."
        headerTitle="Dashboard"
      >
        <Button
          className="rounded-m h-9 "
          title="Create Event"
          iconSrc={PlusIcon}
        />
      </PageHeader>
      <div className="flex flex-wrap gap-4 justify-between my-8">
        {CARD_DATA.map(
          ({ cardText, cardNumber, iconSrc, id, additionalInfo }) => (
            <Card
              key={id}
              cardText={cardText}
              cardNumber={cardNumber}
              iconSrc={iconSrc}
              additionalInfo={additionalInfo}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Dashboard;
