import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//     },
//     sitemap: `${siteConfig.url}/sitemap.xml`,
//   };
// }


export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vibesrealty.in/sitemap.xml",
  };
}
