import { BurgerMenuIcon } from "@/icons";
import React, { FC } from "react";
import { BigDayLogoWithTitle } from "./BigDayLogoWithTitle";
import { Avatar } from "../ui";

interface Props {
  onClickMenu: () => void;
}

const MobileHeaderComponent: FC<Props> = ({ onClickMenu }) => (
  <header className="border-b-[0.0625rem] border-divider">
    <div className="flex justify-between items-center py-3 px-4">
      <BigDayLogoWithTitle />
      <div className="flex gap-1">
        <Avatar name={{ firstName: "Augis", lastName: "k" }} />
        <BurgerMenuIcon className="cursor-pointer" onClick={onClickMenu} />
      </div>
    </div>
  </header>
);

export const MobileHeader = React.memo(MobileHeaderComponent);
