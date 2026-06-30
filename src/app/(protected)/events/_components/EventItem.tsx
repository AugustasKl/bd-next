import clsx from "clsx";
import { FC } from "react";
import { CustomFormsIcon, EventIcon, LocationIcon, PeopleIcon, ScheduleIcon } from "@/icons";
import { EventData } from "../_constants/EVENTS_DATA";

type Props = Omit<EventData, "id">;

const statusStyles: Record<EventData["status"], string> = {
  Upcoming: "bg-neutral-black text-neutral-white",
  Past: "bg-gray-200 text-gray-600",
};

export const EventItem: FC<Props> = ({
  eventTitle,
  eventDescription,
  eventDate,
  eventLocation,
  guestCount,
  formCount,
  status,
}) => {
  return (
    <li className="flex flex-col bg-neutral-white border border-divider rounded-m p-4 gap-3">
      <div className="flex justify-between items-start">
        <EventIcon />
        <span className={clsx("body-small font-semibold px-2 py-1 rounded-m", statusStyles[status])}>
          {status}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="headline3">{eventTitle}</h3>
        <p className="body-small text-gray-500">{eventDescription}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ScheduleIcon width={16} height={16} className="text-gray-500 shrink-0" />
          <p className="body-small text-gray-500">{eventDate}</p>
        </div>
        <div className="flex items-center gap-2">
          <LocationIcon width={16} height={16} className="text-gray-500 shrink-0" />
          <p className="body-small text-gray-500">{eventLocation}</p>
        </div>
      </div>
      <hr className="border-divider" />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <PeopleIcon width={16} height={16} className="text-gray-500" />
          <p className="body-small text-gray-500">{guestCount} guests</p>
        </div>
        <div className="flex items-center gap-1">
          <CustomFormsIcon width={16} height={16} className="text-gray-500" />
          <p className="body-small text-gray-500">{formCount} forms</p>
        </div>
      </div>
    </li>
  );
};
