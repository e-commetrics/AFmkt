import type { CSSProperties } from "react";
import type { PhotoKey } from "@/content/services";
import manifest from "@/lib/images.generated.json";

interface PhotoProps {
  name: PhotoKey;
  alt: string;
  /** The `sizes` attribute: how wide the image renders at each breakpoint. */
  sizes: string;
  /** Above-the-fold images: eager load with high fetch priority. */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
  /** CSS object-position, e.g. "50% 30%". */
  position?: string;
}

/**
 * Responsive <picture> fed by scripts/images.ts: AVIF first, WebP fallback,
 * intrinsic size to prevent layout shift and a blurred placeholder.
 */
export function Photo({
  name,
  alt,
  sizes,
  priority = false,
  className = "",
  imgClassName = "",
  style,
  position,
}: PhotoProps) {
  const img = manifest[name];
  return (
    <picture className={className} style={style}>
      <source type="image/avif" srcSet={img.avif} sizes={sizes} />
      <source type="image/webp" srcSet={img.webp} sizes={sizes} />
      <img
        src={img.src}
        alt={alt}
        width={img.width}
        height={img.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{
          backgroundImage: `url(${img.placeholder})`,
          backgroundSize: "cover",
          backgroundPosition: position ?? "center",
          objectPosition: position,
        }}
      />
    </picture>
  );
}

export function photoSize(name: PhotoKey) {
  return { width: manifest[name].width, height: manifest[name].height };
}
