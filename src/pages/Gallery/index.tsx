import React, { useMemo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { homeGalleryPreviewConfig } from '../../config/gallery/homeGalleryPreviewConfig';
import { gallery } from '../../config/routes';
import type { PreviewRow } from '../../config/gallery/homeGalleryPreviewConfig';

const Gallery: React.FC = () => {
  const [index, setIndex] = useState<number | undefined>(undefined);
  const [targetRowHeight, setTargetRowHeight] = useState<number>(400);
  const location = useLocation();
  const navigate = useNavigate();

  // Compute pixel height from the baseRowHeight value (e.g. '40vh')
  useEffect(() => {
    const parseBase = (s: string) => {
      if (s.endsWith('vh')) {
        const num = parseFloat(s.replace('vh', ''));
        return Math.round((window.innerHeight * num) / 100);
      }
      // If px specified, parse px
      if (s.endsWith('px')) return parseInt(s.replace('px', ''), 10);
      // fallback to a number
      const parsed = parseInt(s, 10);
      return Number.isNaN(parsed) ? 400 : parsed;
    };

    const update = () => {
      setTargetRowHeight(parseBase(homeGalleryPreviewConfig.preview.baseRowHeight));
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // If the page is opened with ?img=<n>, open that image in the lightbox
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const img = params.get('img');
    if (img !== null) {
      const n = parseInt(img, 10);
      if (!Number.isNaN(n) && n >= 0) setIndex(n);
    }
  }, [location.search]);

  // Flatten gallery config rows into an array expected by react-photo-album
  const photos = useMemo(() => {
    const out: Array<{ src: string; width: number; height: number; alt?: string; title?: string; }> = [];
    homeGalleryPreviewConfig.preview.rows.forEach((row: PreviewRow) => {
      row.images.forEach((img) => {
        // prefer provided width/height if available
        const w = img.width ?? 4;
        const h = img.height ?? 3;
        out.push({ src: img.src, width: w, height: h, alt: img.alt, title: img.alt });
      });
    });
    return out;
  }, []);

  const slides = useMemo(
    () => photos.map((p) => ({ src: p.src, title: p.title || p.alt })),
    [photos]
  );

  return (
    <div className="min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 font-title text-primary">Gallery</h1>
      </div>

      <div className="w-full">
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={targetRowHeight}
            spacing={0}
            onClick={({ index: clickedIndex }) => setIndex(clickedIndex)}
        />

        <Lightbox
          open={index !== undefined}
          index={index}
          close={() => {
            setIndex(undefined);
            // Remove any ?img= parameter from the URL when closing
            try {
              navigate(gallery, { replace: true });
            } catch (e) {
              /* ignore navigation errors */
            }
          }}
          slides={slides}
          plugins={[Fullscreen, Zoom]}
        />
      </div>
    </div>
  );
};

export default Gallery;
