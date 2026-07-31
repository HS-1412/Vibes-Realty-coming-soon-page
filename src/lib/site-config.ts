/**
 * Single source of truth for brand, contact and SEO details.
 * Update the values here and they will propagate through the whole site.
 */

export const siteConfig = {
  name: "Vibes Realty",
  tagline: "Buy · Sell · Rent · Lease",
  description:
    "Vibes Realty is launching soon. Premium real estate solutions in Surat.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vibesreality.in",
  domain: "vibesreality.in",
  locale: "en_IN",

  // Contact
  phone: {
    raw: "9974781999",
    display: "+91 99747 81999",
    href: "tel:+919974781999",
  },
  whatsapp: {
    raw: "9825153999",
    display: "+91 98251 53999",
    href: "https://wa.me/919825153999?text=Hi%20Vibes%20Realty%2C%20I%27d%20like%20to%20know%20more.",
  },
  email: {
    display: "info@vibeasrealty.in",
    href: "mailto:info@vibeasrealty.in",
  },

  // Location
  address: {
    line1: "G-22, J9 High Street",
    line2: "G D Goenka Canal Road, SBI Bank Complex",
    line3: "Vesu, Surat, Gujarat",
    full: "G-22, J9 High Street, G D Goenka Canal Road, SBI Bank Complex, Vesu, Surat, Gujarat",
    mapsHref: "https://maps.app.goo.gl/iD8zMcZYnv3kU6or9",
  },

  // Social
  social: {
    instagram: "https://www.instagram.com/shree_vibesrealty/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
