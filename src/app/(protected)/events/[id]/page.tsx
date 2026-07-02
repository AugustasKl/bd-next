"use client";
import { useParams } from "next/navigation";
import { FC } from "react";

const EventPage: FC = () => {
  const { id } = useParams();

  console.log(id);

  return <>Event {id}</>;
};

export default EventPage;
