type EventStatus = "Upcoming" | "Past";

export interface EventData {
  id: number;
  eventTitle: string;
  eventDescription: string;
  eventDate: string;
  eventLocation: string;
  guestCount: number;
  formCount: number;
  status: EventStatus;
}

export const EVENTS_DATA: EventData[] = [
  {
    id: 1,
    eventTitle: "Sarah & Michael's Wedding",
    eventDescription:
      "Join us for our special day as we celebrate our love and commitment",
    eventDate: "June 20, 2026",
    eventLocation: "Sunset Gardens, Malibu, CA",
    guestCount: 150,
    formCount: 2,
    status: "Upcoming",
  },
  {
    id: 2,
    eventTitle: "Emma's 30th Birthday Bash",
    eventDescription: "A surprise party for Emma - please keep it secret!",
    eventDate: "April 15, 2026",
    eventLocation: "The Rooftop Bar, Downtown LA",
    guestCount: 45,
    formCount: 1,
    status: "Past",
  },
  {
    id: 3,
    eventTitle: "Johnson Family Reunion",
    eventDescription:
      "Annual family gathering with fun activities for all ages",
    eventDate: "July 4, 2026",
    eventLocation: "Lakeside Park, Portland, OR",
    guestCount: 80,
    formCount: 1,
    status: "Upcoming",
  },
  {
    id: 4,
    eventTitle: "Corporate Anniversary Gala",
    eventDescription: "Celebrating 10 years of success",
    eventDate: "March 10, 2026",
    eventLocation: "Grand Ballroom, Hilton Hotel",
    guestCount: 200,
    formCount: 3,
    status: "Past",
  },
];
