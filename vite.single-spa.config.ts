import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import federation from "@originjs/vite-plugin-federation";
import vitePluginSingleSpa, {
    SingleSpaPluginOptions,
} from "vite-plugin-single-spa";

// https://github.com/WJSoftware/vite-plugin-single-spa
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버 포트
    const styleguideUrl = process.env.VITE_STYLEGUIDE_URL!; // 스타일가이드 URL

    // single-spa 옵션 설정
    const vitePluginSingleSpaOptions: SingleSpaPluginOptions = {
        serverPort,
        spaEntryPoints: "src/app/main.tsx",
    };

    // single-spa 빌드 진입점 설정
    switch (process.env.VITE_MF_TYPE) {
        case "application":
            vitePluginSingleSpaOptions.spaEntryPoints =
                "src/app/application.tsx";
            break;
        case "parcel":
            vitePluginSingleSpaOptions.spaEntryPoints = "src/app/parcel.tsx";
            break;
    }

    // vite 설정
    return {
        plugins: [
            react(), // React 라이브러리 적용
            federation({
                // 모듈 페더레이션 적용
                remotes: {
                    "@styleguide": styleguideUrl,
                },
                shared: {
                    react: {
                        requiredVersion: "^18.3.1",
                    },
                    "react-dom": {
                        requiredVersion: "^18.3.1",
                    },
                    "@chakra-ui/react": {
                        requiredVersion: "^3.2.3",
                    },
                }, // 공유 모듈 중복 번들링 방지
            }),
            tsconfigPaths(), // tsconfig.json의 paths 설정을 적용
            vitePluginSingleSpa(vitePluginSingleSpaOptions), // single-spa 라이브러리 적용
        ],
        build: {
            cssMinify: true, // css 코드 압축 여부
            minify: true, // 빌드시 코드 압축 여부
            cssCodeSplit: false, // css 코드 분할 여부
            emptyOutDir: false, // 빌드시 기존 파일 삭제 여부
            target: "esnext", // 빌드 대상
        },
    };
});
