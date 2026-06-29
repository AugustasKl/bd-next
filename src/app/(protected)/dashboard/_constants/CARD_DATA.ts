import {
  CompleteIcon,
  PeopleIcon,
  ScheduleIcon,
  TimerIcon,
} from "@/icons";

export const CARD_DATA = [
  {
    id: 1,
    cardText: "Total Events",
    icon: ScheduleIcon,
    cardNumber: 4,
    additionalInfo: "2 upcoming",
  },
  {
    id: 2,
    cardText: "Total Guests",
    icon: PeopleIcon,
    cardNumber: 423,
    additionalInfo: "Across all events",
  },
  {
    id: 3,
    cardText: "RSVP Accepted",
    icon: CompleteIcon,
    cardNumber: 245,
    additionalInfo: "70% acceptance rate",
  },
  {
    id: 4,
    cardText: "Pending RSVPs",
    icon: TimerIcon,
    cardNumber: 60,
    additionalInfo: "45 declined",
  },
];
