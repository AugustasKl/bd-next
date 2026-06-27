import { FC } from "react";
import { PageHeader } from "../components";
import { Button } from "@/components";
import PlusIcon from "./../../../../public/icons/plusIcon.svg";

const Events: FC = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        description="Manage all your events in one place."
        headerTitle="Events"
      >
        <Button
          className="rounded-m h-9 "
          title="Create Event"
          iconSrc={PlusIcon}
        />
      </PageHeader>
    </div>
  );
};

export default Events;
