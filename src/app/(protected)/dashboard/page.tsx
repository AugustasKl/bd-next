import { FC } from "react";
import { PageHeader } from "../components";
import { Button } from "@/components";
import PlusIcon from "./../../../../public/icons/plusIcon.svg";

const Dashboard: FC = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        description="Welcome back! Here's what's happening with your events."
        headerTitle="Dashboard"
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

export default Dashboard;
