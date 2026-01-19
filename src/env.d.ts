/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_ZENCRAFT_SHOP_URL?: string;
  readonly PUBLIC_HQ_ADDRESS?: string;
  readonly PUBLIC_SOCIAL_X?: string;
  readonly PUBLIC_SOCIAL_LINKEDIN?: string;
  readonly PUBLIC_SOCIAL_INSTAGRAM?: string;
  readonly PUBLIC_SOCIAL_FACEBOOK?: string;
  readonly PUBLIC_SOCIAL_YOUTUBE?: string;
  readonly PUBLIC_SOCIAL_TIKTOK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

