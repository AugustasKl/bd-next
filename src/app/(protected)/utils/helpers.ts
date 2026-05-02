import { DeviceType } from "@/types";

export const getDeviceType = (userAgent: string): DeviceType => {
  const isMobileDevice = /mobile/i.test(userAgent);

  if (isMobileDevice) {
    return DeviceType.Mobile;
  }

  return DeviceType.Desktop;
};
