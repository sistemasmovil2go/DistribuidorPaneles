declare namespace Express {
  export interface Request {
      hasPermission?: boolean 
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST?: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      MORGAN_MODE: string;
    }
  }
}

export {};
