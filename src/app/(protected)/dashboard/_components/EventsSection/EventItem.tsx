import { EventIcon } from "@/icons/common";
import { FC } from "react";

interface Props {
  eventTitle: string;
  //   TODO: later update to proper date type
  eventDate: string;
  eventLocation: string;
  guestCount: number;
}

export const EventItem: FC<Props> = ({
  eventTitle,
  eventDate,
  eventLocation,
  guestCount,
}) => {
  // TODO: add onCLikc event
  return (
    <li className="flex w-full justify-between border border-divider desktop:p-4 p-2 rounded-m items-center mb-2">
      <div className="flex gap-3">
        <EventIcon />
        <div className="flex flex-col gap-2">
          <h3 className="headline-3">{eventTitle}</h3>
          <p className=" body-small text-gray-400">{eventDate}</p>
          <p className=" body-small text-gray-400">{eventLocation}</p>
        </div>
      </div>
      <div>
        <p className="bg-gray-200 text-neutral-black p-2 rounded-m body-small font-semibold">
          {guestCount} guests
        </p>
      </div>
    </li>
  );
};
