
import { config } from "@/config/config";
import { isDevelopment } from "@/lib/utils";

const Clarity = () => {

  if (isDevelopment()) return null;

  const id = config.analytics.clarity.id;

  if (!id) return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${id}");
            `,
      }}
    />
  );
}

export default Clarity;