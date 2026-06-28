import { FC } from "react";
import { PeopleIcon, PlusIcon, ScheduleIcon } from "@/icons";
import { QuickActionItem } from "./QuickActionItem";

const QUICK_ACTIONS = [
  { id: 1, label: "Create New Event", icon: PlusIcon },
  { id: 2, label: "Manage Guests", icon: PeopleIcon },
  { id: 3, label: "Send Invitations", icon: ScheduleIcon },
];

export const QuickActions: FC = () => {
  return (
    <section className="border w-full desktop:w-1/3 border-divider desktop:p-6 p-4 rounded-m bg-neutral-white flex flex-col gap-3 self-start">
      <div className="mb-2">
        <h2 className="headline2">Quick Actions</h2>
        <p className="text-secondary-main">Common tasks</p>
      </div>
      {QUICK_ACTIONS.map(({ id, label, icon }) => (
        <QuickActionItem key={id} label={label} icon={icon} />
      ))}
    </section>
  );
};
