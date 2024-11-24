import { defineConfig, loadEnv } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT);
    const spaEntryPoints = "src/app/spa.tsx";

    return {
        plugins: [
            tsconfigPaths(),
            nodePolyfills(),
            vitePluginSingleSpa({
                serverPort,
                spaEntryPoints,
            }),
        ],
    };
});
