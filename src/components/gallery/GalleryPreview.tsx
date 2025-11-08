import PhotoAlbum from 'react-photo-album';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gallery } from '../../config/routes';
import type { PreviewRow } from '../../config/homeGalleryPreviewConfig';

interface GalleryProps {
  title?: string;
  rows: PreviewRow[];
  baseRowHeight?: string; // e.g. '40vh' or '200px'
  isPreview?: boolean;
  galleryPath?: string;
}

const GalleryPreview = ({
  title = 'Gallery',
  rows,
  baseRowHeight = '40vh',
  isPreview = true,
  galleryPath = gallery,
}: GalleryProps) => {
  const navigate = useNavigate();
  const [targetRowHeight, setTargetRowHeight] = useState<number>(400);

  // Convert baseRowHeight (vh/px/number) to pixels for react-photo-album
  useEffect(() => {
    const parseBase = (s: string) => {
      if (s.endsWith('vh')) {
        const num = parseFloat(s.replace('vh', ''));
        return Math.round((window.innerHeight * num) / 100);
      }
      if (s.endsWith('px')) return parseInt(s.replace('px', ''), 10);
      const parsed = parseInt(s, 10);
      return Number.isNaN(parsed) ? 400 : parsed;
    };

    const update = () => setTargetRowHeight(parseBase(baseRowHeight));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [baseRowHeight]);

  // Flatten rows -> photos for react-photo-album
  const photos = useMemo(() => {
    const out: Array<{ src: string; width: number; height: number; alt?: string }> = [];
    rows.forEach((row) => {
      row.images.forEach((img) => {
        // prefer provided width/height, fallback to 4:3
        const w = img.width ?? 4;
        const h = img.height ?? 3;
        out.push({ src: img.src, width: w, height: h, alt: img.alt });
      });
    });
    return out;
  }, [rows]);

  // Clicking a preview image should open the gallery page with ?img=index
  const handlePhotoClick = ({ index }: { index: number }) => {
    if (!isPreview) return;
    navigate(`${galleryPath}?img=${index}`);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-3xl font-bold font-title text-primary">{title}</h2>
      </div>

      <div className="w-full gallery-preview">
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={targetRowHeight}
          spacing={0}
          onClick={handlePhotoClick}
        />
      </div>
    </div>
  );
};

export default GalleryPreview;