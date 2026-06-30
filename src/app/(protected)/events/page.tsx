import { FC } from "react";
import { EventsHeader, EventsList } from "./_components";

// NOTE: all pages are using server components but doesn't fetch anything (update accordingly)
const Events: FC = () => (

  
  <div className="flex flex-col">
    <EventsHeader />
    <EventsList />
  </div>
);

export default Events;
