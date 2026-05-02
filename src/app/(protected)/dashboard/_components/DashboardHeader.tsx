import { FC } from "react";

export const DashboardHeader: FC = () => {
  return (
    <section className="flex flex-col tablet:flex-col">
      <div>
        <h1 className="headline1 text-primary-main mb-2">Dashboard</h1>
        <p className="text-secondary-main">
          Welcome back! Here&apos;s what&apos;s happening with your events.
        </p>
      </div>
    </section>
  );
};
