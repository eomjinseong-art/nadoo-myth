import Image from "next/image";

type PortraitProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function Portrait({ src, alt, sizes, priority = false, className }: PortraitProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={800}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
