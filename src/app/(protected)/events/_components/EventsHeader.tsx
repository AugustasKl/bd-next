import { FC } from "react";
import { PageHeader } from "../../components";
import { Button } from "@/components";
import { PlusIcon } from "@/icons";

export const EventsHeader: FC = () => {
  return (
    <PageHeader
      description="Manage all your events in one place."
      headerTitle="Events"
    >
      <Button
        className="rounded-m h-9 "
        title="Create Event"
        isIconFromLeft
        icon={PlusIcon}
      />
    </PageHeader>
  );
};
