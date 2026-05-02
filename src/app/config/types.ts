export enum AppEnvEnum {
  Development = "development",
  Production = "production",
  Sandbox = "sandbox",
}

export type AppEnvTypes =
  | AppEnvEnum.Development
  | AppEnvEnum.Production
  | AppEnvEnum.Sandbox;
