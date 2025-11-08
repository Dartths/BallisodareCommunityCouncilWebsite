import ImageCollage from './ImageCollage';
import { gallery } from '../../config/routes';
import type { PreviewRow } from '../../config/gallerypreview';

interface GalleryProps {
  title?: string;
  rows: PreviewRow[];
  baseRowHeight?: string;
  isPreview?: boolean;
  galleryPath?: string;
}

const Gallery = ({
  title = "Gallery",
  rows,
  baseRowHeight = "40vh",
  isPreview = true,
  galleryPath = gallery
}: GalleryProps) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-3xl font-bold font-title text-primary">{title}</h2>
      </div>
      <ImageCollage
        rows={rows}
        isPreview={isPreview}
        galleryPath={galleryPath}
        baseRowHeight={baseRowHeight}
      />
    </div>
  );
};

export default Gallery;