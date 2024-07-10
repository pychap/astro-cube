import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://astro-cube-boilerplate.netlify.app',
  integrations: [tailwind({
    applyBaseStyles: false
  }), partytown(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});