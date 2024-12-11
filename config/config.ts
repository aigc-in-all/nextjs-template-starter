import { isDevelopment } from "@/lib/utils";

export const config = {
    baseUrl: isDevelopment() ? "http://localhost:3000" : "https://example.com",
    adsense: {
        pid: "", // 7105881377542983
    },
    analytics: {
        google: {
            gaId: "G-XYZ",
        },
        clarity: {
            id: "xxx",
        },
    },
    sharethis: {
        id: "", // 67342d16f1297b00124e7f46
    },
};
