import Image from "next/image";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type MediaFillProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
};

const VIDEO_EXTENSION_PATTERN = /\.(mp4|webm|ogg|mov)$/i;

function getVideoMimeType(src: string) {
  const normalizedSrc = src.toLowerCase();

  if (normalizedSrc.endsWith(".webm")) {
    return "video/webm";
  }

  if (normalizedSrc.endsWith(".ogg")) {
    return "video/ogg";
  }

  return "video/mp4";
}

export default function MediaFill({
  src,
  alt,
  className,
  style,
  priority = false,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
}: MediaFillProps) {
  if (VIDEO_EXTENSION_PATTERN.test(src)) {
    return (
      <video
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={priority ? "auto" : preload}
        aria-label={alt}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        style={style}
      >
        <source src={src} type={getVideoMimeType(src)} />
      </video>
    );
  }

  return <Image src={src} alt={alt} fill priority={priority} className={className} style={style} />;
}
