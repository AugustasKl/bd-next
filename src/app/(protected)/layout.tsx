import { FC, ReactNode } from "react";
import { ProtectedLayout } from "./components";
import { headers } from "next/headers";
import { DeviceType } from "@/types";
import { getDeviceType } from "./utils";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = async ({ children }) => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const deviceType = getDeviceType(userAgent);

  const isMobileDevice = deviceType === DeviceType.Mobile;

  return (
    <ProtectedLayout isMobileDevice={isMobileDevice}>
      {children}
    </ProtectedLayout>
  );
};

export default Layout;
