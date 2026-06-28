"use client";

import Link from "next/link";
import { FC } from "react";
import { NavItems } from "./components";
import { UserDetails } from "../../ui";
import { ProtectedLayouts } from "@/lib";

import { BigDayLogoWithTitle } from "../BigDayLogoWithTitle";

export const Sidebar: FC = () => {
  return (
    <aside className="sticky left-0 top-0 flex h-screen w-60 flex-col border-r border-divider py-6">
      <Link
        href={ProtectedLayouts.Dashboard}
        className="mb-8 flex items-center gap-2 px-4"
      >
        <BigDayLogoWithTitle />
      </Link>
      <div className="flex-1 px-4">
        <NavItems />
      </div>
      <UserDetails />
    </aside>
  );
};
