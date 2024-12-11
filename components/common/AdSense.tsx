import { config } from "@/config/config";
import { isDevelopment } from "@/lib/utils";
import Script from "next/script";

const AdSense = () => {

    if (isDevelopment()) return null;

    const pid = config.adsense.pid;

    if (!pid) return null;

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}

export default AdSense;