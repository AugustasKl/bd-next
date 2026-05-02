const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

const isProductionEnv = appEnv === "production";
const developmentUrl = "http://localhost:4005";

// TODO: add production URL
export const config = {
  apiUrl: isProductionEnv ? "" : developmentUrl,
  appEnv,
};
