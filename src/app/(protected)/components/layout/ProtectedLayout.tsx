"use client";
import { FC, ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { useBreakPoint } from "../../hooks";
import { Breakpoint } from "@/app/styles";
import { MobileNav } from "./MobileNav";


interface Props {
  children: ReactNode;
  isMobileDevice?: boolean;
}

export const ProtectedLayout: FC<Props> = ({ children, isMobileDevice }) => {
  const isTablet = useBreakPoint(Breakpoint.Tablet, !isMobileDevice);

  return (
    <div className="flex flex-col min-h-screen tablet:flex-row">
      {isTablet ? <Sidebar /> : <MobileNav />}
      <main className="p-8 flex-1">{children}</main>
    </div>
  );
};
