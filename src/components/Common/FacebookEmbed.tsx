import React, { useMemo } from 'react';

export type FacebookEmbedProps = {
  /** Either provide the iframe `src` URL or the full iframe HTML via `iframeHtml`. */
  src?: string;
  iframeHtml?: string;
  width?: number | string;
  height?: number | string;
  title?: string;
  /** Additional wrapper classes (merged with card defaults) */
  wrapperClassName?: string;
  /** Additional iframe classes */
  iframeClassName?: string;
  /** Width / Height aspect ratio (e.g. 16/9 -> 1.777...). If provided, overrides parsed values. */
  aspectRatio?: number;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  allowFullScreen?: boolean;
  sandbox?: string;
};

const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
  src,
  iframeHtml,
  width = '100%',
  height = 360,
  title = 'Facebook Embed',
  aspectRatio,
  wrapperClassName,
  iframeClassName,
  style,
  loading = 'lazy',
  allowFullScreen = true,
  sandbox,
}) => {
  const finalSrc = useMemo(() => {
    if (iframeHtml) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(iframeHtml, 'text/html');
        const iframe = doc.querySelector('iframe');
        if (iframe?.src) return iframe.src;
      } catch (e) {
        return src ?? '';
      }
    }
    return src ?? '';
  }, [iframeHtml, src]);

  // If neither a src nor iframeHtml is provided, render nothing
  if (!finalSrc && !iframeHtml) return null;

  // Determine aspect ratio: prefer explicit prop, else parse from iframeHtml or width/height props, else default to 16:9
  const derivedAspectRatio = useMemo(() => {
    if (typeof aspectRatio === 'number' && aspectRatio > 0) return aspectRatio;

    // try parse from iframeHtml
    if (iframeHtml) {
      const wMatch = iframeHtml.match(/width=["']?(\d+)["']?/i);
      const hMatch = iframeHtml.match(/height=["']?(\d+)["']?/i);
      if (wMatch && hMatch) {
        const w = Number(wMatch[1]);
        const h = Number(hMatch[1]);
        if (w > 0 && h > 0) return w / h;
      }
    }

    // try from numeric height/width props
    const numericWidth = typeof width === 'number' ? width : undefined;
    const numericHeight = typeof height === 'number' ? height : undefined;
    if (numericWidth && numericHeight) return numericWidth / numericHeight;

    return 16 / 9;
  }, [aspectRatio, iframeHtml, width, height]);

  const paddingTopPercent = 100 / (derivedAspectRatio ?? (16 / 9));

  const cardClasses = 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden';

  const heightValue = typeof height === 'number' ? `${height}px` : height;

  return (
    <div className={`${cardClasses} ${wrapperClassName ?? ''}`} style={style}>
      <div className="p-0">
        <div className="w-full overflow-hidden rounded-t-md">
          <div style={{ position: 'relative', width: '100%', paddingTop: `${paddingTopPercent}%` }}>
            {iframeHtml ? (
              // parse src and render our own responsive iframe to avoid whitespace from fixed heights
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
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookEmbed;
