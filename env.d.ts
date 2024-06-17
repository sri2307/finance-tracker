interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly AUTH0_DOMAIN: string;
    readonly AUTH0_CLIENT_ID: string;
    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  