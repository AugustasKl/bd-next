import { Button } from "@/components";
import { FC } from "react";
import ArrowRightIcon from "../../../../../../public/icons/arrowRightIcon.svg";

export const EventsHeader: FC = () => {
  return (
    <div className="flex flex-col gap-3 items-start desktop:flex-row desktop:items-center desktop:justify-between">
      <div className="flex flex-col">
        <h2 className="headline2">Upcoming Events</h2>
        <p className="text-gray-500 font-regular">
          Your next scheduled events
        </p>
      </div>
      <Button
        color="secondary"
        iconSrc={ArrowRightIcon}
        title="View all"
        className="rounded-m"
      />
    </div>
  );
};
