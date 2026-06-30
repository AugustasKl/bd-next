import { FC } from "react";
import { PageHeader } from "../../components";
import { Button } from "@/components";
import { PlusIcon } from "@/icons";

export const DashboardHeader: FC = () => {
  return (
    <PageHeader
      description="Welcome back! Here's what's happening with your events."
      headerTitle="Dashboard"
    >
      <Button
        className="rounded-m h-9 "
        title="Create Event"
        icon={PlusIcon}
        isIconFromLeft
      />
    </PageHeader>
  );
};
