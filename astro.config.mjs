import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://zenovee.com",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  vite: {
    define: {
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
    },
  },
});

