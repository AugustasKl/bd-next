import { FC } from "react";
import { Card, PageHeader } from "../components";
import { Button } from "@/components";
import PlusIcon from "./../../../../public/icons/plusIcon.svg";
import { CARD_DATA } from "./_constants/CARD_DATA";
import { EventsSection, QuickActions } from "./_components";

const Dashboard: FC = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        description="Welcome back! Here's what's happening with your events."
        headerTitle="Dashboard"
      >
        <Button
          className="rounded-m h-9 "
          title="Create Event"
          iconSrc={PlusIcon}
          isIconFromLeft
        />
      </PageHeader>
      <div className="flex flex-wrap justify-between gap-4 my-8">
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
      <div className="flex flex-col desktop:flex-row gap-4">
        <EventsSection />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;
