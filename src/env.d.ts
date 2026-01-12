/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_ZENCRAFT_SHOP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

