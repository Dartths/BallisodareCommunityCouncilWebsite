import ImageCollage from './ImageCollage';
import { gallery } from '../../config/routes';
import { galleryConfig } from '../../config/gallery';

const GalleryPreview = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-3xl font-bold font-title text-primary">Gallery</h2>
      </div>
      <ImageCollage
        rows={galleryConfig.preview.rows}
        isPreview={true}
        galleryPath={gallery}
        baseRowHeight={galleryConfig.preview.baseRowHeight}
      />
    </div>
  );
};

export default GalleryPreview;