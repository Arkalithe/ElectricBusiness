declare interface Env {
  readonly NODE_ENV: string;
  GOOGLE_MAP_API_KEY: string;

  [key: string]: any;
}

declare interface ImportMeta {
  GOOGLE_MAP_API_KEY: string;
  readonly env: Env;
}

declare const _NGX_ENV_: Env;

// 3. Use process.env.YOUR_ENV_VAR in your code. (deprecated)
declare namespace NodeJS {
  export interface ProcessEnv extends Env {}
}
