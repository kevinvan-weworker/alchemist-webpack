export enum NodeEnv {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export enum AppEnv {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

interface Setting {
  APP_NAME: string;
}

declare const process: {
  env: {
    readonly NODE_ENV: NodeEnv;
    readonly APP_ENV: AppEnv;
    readonly SETTINGS: Setting;
  };
};

export const { APP_ENV, SETTINGS } = process.env;