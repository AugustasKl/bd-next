import {
  AnalyticsIcon,
  CustomFormsIcon,
  DashboardIcon,
  EventsIcon,
  GuestsIcon,
  InvitationsIcon,
} from "@/icons";
import { ProtectedLayouts } from "@/lib";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const navItemsData = [
  {
    label: "Dashboard",
    href: ProtectedLayouts.Dashboard,
    icon: DashboardIcon,
  },
  {
    label: "Events",
    href: ProtectedLayouts.Events,
    icon: EventsIcon,
  },
  {
    label: "Guests",
    href: ProtectedLayouts.Guests,
    icon: GuestsIcon,
  },
  {
    label: "Invitations",
    href: ProtectedLayouts.Invitations,
    icon: InvitationsIcon,
  },
  {
    label: "Custom Forms",
    href: ProtectedLayouts.CustomForms,
    icon: CustomFormsIcon,
  },
  {
    label: "Analytics",
    href: ProtectedLayouts.Analytics,
    icon: AnalyticsIcon,
  },
];

export const NavItems: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {navItemsData.map((navItem) => {
        const isActive = pathname === navItem.href;

        return (
          <Link
            key={navItem.label}
            className={clsx(
              "flex items-center gap-3 rounded-l px-3 py-2.5 body-text transition-colors",
              isActive
                ? "bg-neutral-100 font-semibold text-neutral-black"
                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-black"
            )}
            href={navItem.href}
          >
            <navItem.icon className="size-5" />
            <span>{navItem.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
