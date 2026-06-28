import { FC } from "react";
import { EVENTS_DATA } from "../../_constants/EVENTS_DATA";
import { EventItem } from "./EventItem";

export const EventsList: FC = () => {
  return (
    <ul className="mt-6">
      {EVENTS_DATA.map(
        ({ id, eventDate, eventLocation, eventTitle, guestCount }) => (
          <EventItem
            key={id}
            eventDate={eventDate}
            eventLocation={eventLocation}
            eventTitle={eventTitle}
            guestCount={guestCount}
          />
        ),
      )}
    </ul>
  );
};
