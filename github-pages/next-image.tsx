import type { CSSProperties, ImgHTMLAttributes } from "react";

type StaticImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

export default function StaticImage({
  alt,
  fill,
  priority,
  unoptimized: _unoptimized,
  style,
  ...props
}: StaticImageProps) {
  void _unoptimized;

  const fillStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }
    : style;

  return (
    <img
      {...props}
      alt={alt}
      loading={priority ? "eager" : props.loading ?? "lazy"}
      style={fillStyle}
    />
  );
}
