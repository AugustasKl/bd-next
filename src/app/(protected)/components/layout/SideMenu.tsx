import { CloseIcon } from "@/icons";
import { FC } from "react";
import { NavItems } from "./sidebar/components";
import clsx from "clsx";

interface Props {
  closeSideMenu: () => void;
  isOpen: boolean;
}

export const SideMenu: FC<Props> = ({ closeSideMenu, isOpen }) => {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-neutral-black/50 z-overlay transition-transform duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      />
      <div
        className={clsx(
          "fixed top-0 right-0 w-3/4 h-full bg-neutral-white z-modal transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="border-b-[0.0625rem] border-divider">
          <div className="flex justify-between items-center py-3 px-4">
            <p>Menu</p>
            <CloseIcon className="cursor-pointer" onClick={closeSideMenu} />
          </div>
        </div>
        <div className="py-3">
          <NavItems />
        </div>
      </div>
    </>
  );
};
