/**
 * Business facts shared by both languages: contact channels, location, socials.
 * This is the single place to update them.
 *
 * Empty strings hide the related buttons and links everywhere on the site,
 * so nothing ships with a fake number or a broken profile URL.
 */
export const site = {
  name: "AF Marketing",
  founder: "Adrián Fernández",
  // As printed on the brand poster. A domain address (e.g. hola@tudominio.mx)
  // reads as more established than Gmail: switch it here once available.
  email: "afmarketing123@gmail.com",
  // WhatsApp Business number, digits only, with country code. Example: 526641234567
  whatsapp: "526641516867",
  // Full profile URLs, e.g. https://www.instagram.com/usuario/
  social: {
    instagram: "https://www.instagram.com/adrianfernandez333/",
    facebook: "",
    linkedin: "",
  },
  location: {
    city: "Tijuana",
    region: "Baja California",
    regionCode: "B.C.",
    country: "MX",
    // City centre, used for local SEO (no street address is published).
    latitude: 32.5149,
    longitude: -117.0382,
    timeZone: "America/Tijuana",
  },
  areaServed: [
    "Tijuana",
    "Playas de Rosarito",
    "Ensenada",
    "Valle de Guadalupe",
    "Tecate",
    "Mexicali",
    "San Diego",
  ],
} as const;

export function whatsappHref(message?: string): string | null {
  if (!site.whatsapp) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}

/** +52 664 123 4567 / +1 (619) 555-0100 style display for the stored digits. */
export function formatPhone(digits: string): string {
  if (digits.startsWith("52") && digits.length === 12) {
    return `+52 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  }
  if (digits.startsWith("1") && digits.length === 11) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return `+${digits}`;
}

export const socialLinks = (
  [
    ["instagram", "Instagram", site.social.instagram],
    ["facebook", "Facebook", site.social.facebook],
    ["linkedin", "LinkedIn", site.social.linkedin],
  ] as const
).filter(([, , href]) => href.length > 0);
