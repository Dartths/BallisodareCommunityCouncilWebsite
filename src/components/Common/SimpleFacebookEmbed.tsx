import React, { useMemo } from 'react';

export type SimpleFacebookEmbedProps = {
  iframeHtml?: string;
  src?: string;
  /** explicit aspect ratio (width / height). If omitted we'll try to parse from embed or use 16/9 */
  aspectRatio?: number;
  title?: string;
  wrapperClassName?: string;
  iframeClassName?: string;
  loading?: 'lazy' | 'eager';
  allowFullScreen?: boolean;
  sandbox?: string;
};

const SimpleFacebookEmbed: React.FC<SimpleFacebookEmbedProps> = ({
  iframeHtml,
  src,
  aspectRatio,
  title = 'Facebook Embed',
  wrapperClassName,
  iframeClassName,
  loading = 'lazy',
  allowFullScreen = true,
  sandbox,
}) => {
  const { finalSrc, parsedRatio } = useMemo(() => {
    let final = src ?? '';
    let ratio: number | undefined;

    if (iframeHtml) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(iframeHtml, 'text/html');
        const iframe = doc.querySelector('iframe');
        if (iframe) {
          if (!final && iframe.src) final = iframe.src;
          const w = iframe.getAttribute('width');
          const h = iframe.getAttribute('height');
          const wn = w ? Number(w.replace(/px$/, '')) : NaN;
          const hn = h ? Number(h.replace(/px$/, '')) : NaN;
          if (!Number.isNaN(wn) && !Number.isNaN(hn) && wn > 0 && hn > 0) {
            ratio = wn / hn;
          }
        }
      } catch (e) {
        // ignore
      }
    }

    return { finalSrc: final, parsedRatio: ratio };
  }, [iframeHtml, src]);

  const ratio = aspectRatio || parsedRatio || 16 / 9;
  const paddingTop = 100 / ratio; // percent

  if (!finalSrc) return null;

  const cardClasses = 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden';

  return (
    <div className={`${cardClasses} ${wrapperClassName ?? ''}`}>
      <div className="p-0">
        <div style={{ position: 'relative', width: '100%', paddingTop: `${paddingTop}%` }}>
          <iframe
            src={finalSrc}
            title={title}
            className={`absolute top-0 left-0 w-full h-full ${iframeClassName ?? ''}`}
            style={{ border: 'none' }}
            loading={loading}
            scrolling="no"
            allowFullScreen={Boolean(allowFullScreen)}
            sandbox={sandbox}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleFacebookEmbed;
