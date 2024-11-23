export interface IAppConfig {
  readonly get: <EnvDataType>(key: string) => EnvDataType;
}
