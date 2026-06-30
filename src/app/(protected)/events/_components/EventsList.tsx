"use client";

import { FC, useState } from "react";
import { EVENTS_DATA } from "../_constants/EVENTS_DATA";
import { EventItem } from "./EventItem";
import { Input, Select } from "@/components";

const options = [
  {
    value: "all",
    label: "All events",
  },
  {
    value: "upcoming",
    label: "Upcoming",
  },
  {
    value: "past",
    label: "Past",
  },
];

export const EventsList: FC = () => {
  const [queryValue, setQueryValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredEvents = EVENTS_DATA.filter(
    ({ eventTitle, status }) =>
      eventTitle.toLowerCase().includes(queryValue.toLowerCase()) &&
      (selectedStatus === "all" || status.toLowerCase() === selectedStatus),
  );

  return (
    <>
      <div className="flex flex-col tablet:flex-row items-center gap-3 mt-4">
        <Input
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
          placeholder="Search events..."
        />
        <Select
          selectOptions={options}
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="w-full tablet:w-auto"
        />
      </div>
      <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4 mt-8">
        {filteredEvents.map(({ id, ...event }) => (
          <EventItem key={id} {...event} />
        ))}
      </ul>
    </>
  );
};
