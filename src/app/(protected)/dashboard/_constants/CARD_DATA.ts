import ScheduleIcon from "../../../../../public/icons/scheduleIcon.svg";
import PeopleIcon from "../../../../../public/icons/peopleIcon.svg";
import CompleteIcon from "../../../../../public/icons/completeIcon.svg";
import TimerIcon from "../../../../../public/icons/timerIcon.svg";

export const CARD_DATA = [
  {
    id: 1,
    cardText: "Total Events",
    iconSrc: ScheduleIcon,
    cardNumber: 4,
    additionalInfo: "2 upcoming",
  },
  {
    id: 2,
    cardText: "Total Guests",
    iconSrc: PeopleIcon,
    cardNumber: 423,
    additionalInfo: "Across all events",
  },
  {
    id: 3,
    cardText: "RSVP Accepted",
    iconSrc: CompleteIcon,
    cardNumber: 245,
    additionalInfo: "70% acceptance rate",
  },
  {
    id: 4,
    cardText: "Pending RSVPs",
    iconSrc: TimerIcon,
    cardNumber: 60,
    additionalInfo: "45 declined",
  },
];
