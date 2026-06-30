import { FC } from "react";
import { EventsHeader } from "./EventsHeader";
import { EventsList } from "./EventsList";

export const EventsSection: FC = () => {
  return (
    <section>
      <EventsHeader />
      <EventsList />
    </section>
  );
};
