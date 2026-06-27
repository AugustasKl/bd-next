"use client";
import { BigDayLogo } from "@/icons";
import Link from "next/link";
import { FC } from "react";
import { NavItems } from "./components";
import { UserDetails } from "../../ui";
import { ProtectedLayouts } from "@/lib";

import { BigDayLogoWithTitle } from "../BigDayLogoWithTitle";

export const Sidebar: FC = () => {
  return (
    <aside className="sticky left-0 top-0 flex h-screen w-60 flex-col border-r border-neutral-200 px-4 py-6">
      <Link
        href={ProtectedLayouts.Dashboard}
        className="mb-8 flex items-center gap-2 px-3"
      >
        <BigDayLogoWithTitle />
      </Link>
      <div className="flex-1">
        <NavItems />
      </div>
      <UserDetails />
    </aside>
  );
};
