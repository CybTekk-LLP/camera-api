// import staticAdapter from "@sveltejs/adapter-static";
// import preprocess from "svelte-preprocess";
// import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// const adapter = staticAdapter({ fallback: "index.html" });

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   // Consult https://kit.svelte.dev/docs/integrations#preprocessors
//   // for more information about preprocessors
//   preprocess: [
//     vitePreprocess(),
//     preprocess({
//       scss: {},
//     }),
//   ],
//   kit: {
//     // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
//     // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
//     // See https://kit.svelte.dev/docs/adapters for more information about adapters.
//     adapter: adapter,
//     files: {
//       assets: "./src/static",
//     },
//     outDir: "./.svelte-kit",
//     prerender: {
//       handleHttpError: "warn",
//     },
//   },
// };

// export default config;

import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {},
    }),
  ],
  kit: {
    adapter: staticAdapter({
      pages: ".", // Default output directory, will be overridden by custom script
      assets: ".", // Default output directory, will be overridden by custom script
      fallback: "index.html",
    }),
    files: {
      assets: "./src/static",
    },
    prerender: {
      handleHttpError: "warn",
    },
  },
};

export default config;
