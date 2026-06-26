// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import { ion } from "starlight-ion-theme";


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ZQ Notes",
      plugins: [ion()],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
        {
          label: "Test",
          items: [{ autogenerate: { directory: "test" } }],
        },
      ],
    }),
  ],
});
