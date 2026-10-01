import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

/** Variable Archivo: 125% width for headlines, normal width for text. */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

/** Italic serif accents ("en buenas manos"). */
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

/** Small technical labels. Not preloaded: never the LCP element. */
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const fontVariables = `${archivo.variable} ${instrumentSerif.variable} ${plexMono.variable}`;
