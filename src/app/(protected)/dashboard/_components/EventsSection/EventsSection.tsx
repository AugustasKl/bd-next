import { FC } from "react";
import { EventsHeader } from "./EventsHeader";
import { EventsList } from "./EventsList";

export const EventsSection: FC = () => {
  return (
    <section className="max-w-[46.125rem] border border-divider desktop:p-6 p-4 rounded-m bg-neutral-white">
      <EventsHeader />
      <EventsList />
    </section>
  );
};
