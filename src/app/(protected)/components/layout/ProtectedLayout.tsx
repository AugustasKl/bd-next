"use client";
import { FC, ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { useBreakPoint } from "../../hooks";
import { Breakpoint } from "@/app/styles";
import { MobileNav } from "./nav/MobileNav";

interface Props {
  children: ReactNode;
  isMobileDevice?: boolean;
}

export const ProtectedLayout: FC<Props> = ({ children, isMobileDevice }) => {
  const isTablet = useBreakPoint(Breakpoint.Tablet, !isMobileDevice);

  return (
    <div className="flex flex-col min-h-screen tablet:flex-row ">
      {isTablet ? <Sidebar /> : <MobileNav />}
      <main className="tablet:p-6 desktop:p-8 flex-1 w-full max-w-[21.4375rem] tablet:max-w-[71.25rem] mx-auto">
        {children}
      </main>
    </div>
  );
};
