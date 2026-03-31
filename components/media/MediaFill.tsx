import Image from "next/image";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type MediaFillProps = {
  src: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  mobilePosition?: string;
  tabletPosition?: string;
  desktopPosition?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  sizes?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
};

type MediaCssVars = CSSProperties & {
  "--media-fit"?: string;
  "--media-pos-mobile"?: string;
  "--media-pos-sm"?: string;
  "--media-pos-lg"?: string;
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
  mobileSrc,
  alt,
  className,
  style,
  mobilePosition,
  tabletPosition,
  desktopPosition,
  fit = "cover",
  priority = false,
  sizes = "(max-width: 768px) 92vw, (max-width: 1280px) 50vw, 40vw",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
}: MediaFillProps) {
  const responsiveStyle: MediaCssVars = {
    ...((style ?? {}) as MediaCssVars),
    "--media-fit": fit,
  };

  if (mobilePosition) {
    responsiveStyle["--media-pos-mobile"] = mobilePosition;
  }

  if (tabletPosition) {
    responsiveStyle["--media-pos-sm"] = tabletPosition;
  }

  if (desktopPosition) {
    responsiveStyle["--media-pos-lg"] = desktopPosition;
  }

  if (VIDEO_EXTENSION_PATTERN.test(src)) {
    const renderVideo = (videoSrc: string, extraClassName?: string) => (
      <video
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={priority ? "metadata" : preload}
        aria-label={alt}
        className={cn("media-fill absolute inset-0 h-full w-full", className, extraClassName)}
        style={responsiveStyle}
      >
        <source src={videoSrc} type={getVideoMimeType(videoSrc)} />
      </video>
    );

    if (mobileSrc && mobileSrc !== src) {
      return (
        <>
          <MediaFill
            src={mobileSrc}
            alt={alt}
            className={cn(className, "sm:hidden")}
            style={style}
            mobilePosition={mobilePosition}
            tabletPosition={tabletPosition}
            desktopPosition={desktopPosition}
            fit={fit}
            priority={priority}
            sizes={sizes}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload={preload}
          />
          {renderVideo(src, "hidden sm:block")}
        </>
      );
    }

    return renderVideo(src);
  }

  const renderImage = (imageSrc: string, extraClassName?: string) => (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("media-fill", className, extraClassName)}
      style={responsiveStyle}
    />
  );

  if (mobileSrc && mobileSrc !== src) {
    return (
      <>
        {renderImage(mobileSrc, "sm:hidden")}
        {renderImage(src, "hidden sm:block")}
      </>
    );
  }

  return renderImage(src);
}
