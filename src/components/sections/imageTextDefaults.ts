export type ImageTextSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  paragraphs?: readonly string[];
  href?: string | null;
  className?: string;
  /** Position the image on the left when true (default). When false image will be on the right. */
  imageLeft?: boolean;
};

