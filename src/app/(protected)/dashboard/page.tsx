import { FC } from "react";

import {
  CardSection,
  DashboardHeader,
  EventsSection,
  QuickActions,
} from "./_components";

const Dashboard: FC = () => (
  <div className="flex flex-col">
    <DashboardHeader />
    <CardSection />
    <div className="flex flex-col desktop:flex-row gap-4">
      <EventsSection />
      <QuickActions />
    </div>
  </div>
);

export default Dashboard;
