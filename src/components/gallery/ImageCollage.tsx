import { useNavigate } from 'react-router-dom';

export interface CollageImage {
  src: string;
  alt: string;
}

export interface CollageRow {
  images: CollageImage[];
}

interface ImageCollageProps {
  rows: CollageRow[];
  isPreview?: boolean;
  baseRowHeight?: string;
  galleryPath?: string;
}

const ImageCollage = ({ 
  rows, 
  isPreview = false, 
  baseRowHeight = '40vh',
  galleryPath 
}: ImageCollageProps) => {
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    if (isPreview && galleryPath) {
      navigate(galleryPath);
    }
  };

  return (
    <div 
      className={`w-full ${isPreview ? 'cursor-pointer' : ''}`}
      onClick={isPreview ? handleGalleryClick : undefined}
    >
      {rows.map((row, rowIndex) => {
        const totalImages = row.images.length;
        return (
          <div 
            key={rowIndex}
            className="w-full flex"
            style={{ height: baseRowHeight }}
          >
            {row.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative"
                style={{ 
                  width: `${(1 / totalImages) * 100}%`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ImageCollage;