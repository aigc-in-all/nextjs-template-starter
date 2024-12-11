import { config } from "@/config/config";
import { isDevelopment } from "@/lib/utils";

const ShareThisScript = () => {

    if (isDevelopment()) return null;

    const id = config.sharethis.id;

    if (!id) return null;

    return (
        <script
            src={`https://platform-api.sharethis.com/js/sharethis.js#property=${id}&product=sticky-share-buttons`}
            async
        />
    );
}

export default ShareThisScript;