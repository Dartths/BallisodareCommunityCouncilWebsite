import ImageCollage from './ImageCollage';
import { gallery } from '../../config/routes';
import images from '../../assets/images';

const GalleryPreview = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-3xl font-bold font-title text-primary">Gallery</h2>
      </div>
      <ImageCollage
        rows={[
          {
            images: [
              { src: images.activities.ballisodareFalls, alt: "Ballisodare Falls" },
              { src: images.facilities.communityCentre, alt: "Community Centre" }
            ]
          },
          {
            images: [
              { src: images.hero.ballisodareAerial, alt: "Aerial View of Ballisodare" }
            ]
          }
        ]}
        isPreview={true}
        galleryPath={gallery}
      />
    </div>
  );
};

export default GalleryPreview;