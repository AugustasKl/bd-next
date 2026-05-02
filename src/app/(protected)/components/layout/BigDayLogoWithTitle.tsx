import { BigDayLogo } from "@/icons";
import { FC } from "react";

export const BigDayLogoWithTitle: FC = () => {
  return (
    <div className="flex gap-1">
      <BigDayLogo className="size-8!" />
      <h3 className="headline3">BigDay</h3>
    </div>
  );
};
