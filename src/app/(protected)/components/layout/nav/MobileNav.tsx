import { usePathname } from "next/navigation";
import { MobileHeader } from "./MobileHeader";
import { FC, useCallback, useEffect, useState } from "react";
import { SideMenu } from "./SideMenu";

export const MobileNav: FC = () => {
  const pathname = usePathname();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsSideMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <MobileHeader onClickMenu={toggleMenu} />
      <SideMenu isOpen={isSideMenuOpen} closeSideMenu={toggleMenu} />
    </>
  );
};
