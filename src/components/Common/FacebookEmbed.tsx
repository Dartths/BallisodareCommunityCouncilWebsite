import React, { useMemo, useRef, useState, useEffect } from 'react';

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
  /** Optional maximum height for the embed (px or number). Will clamp computed height. */
  maxHeight?: number | string;
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
  maxHeight,
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

    if (iframeHtml) {
      const wMatch = iframeHtml.match(/width=["']?(\d+)["']?/i);
      const hMatch = iframeHtml.match(/height=["']?(\d+)["']?/i);
      if (wMatch && hMatch) {
        const w = Number(wMatch[1]);
        const h = Number(hMatch[1]);
        if (w > 0 && h > 0) return w / h;
      }
    }

    const numericWidth = typeof width === 'number' ? width : undefined;
    const numericHeight = typeof height === 'number' ? height : undefined;
    if (numericWidth && numericHeight) return numericWidth / numericHeight;

    return 16 / 9;
  }, [aspectRatio, iframeHtml, width, height]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [computedHeightPx, setComputedHeightPx] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = containerRef.current;
    if (!el) return;

    const compute = () => {
      const w = el.clientWidth || el.getBoundingClientRect().width;
      if (!w) return;
      const ratio = derivedAspectRatio || 16 / 9;
      let h = w / ratio;

      if (typeof maxHeight !== 'undefined') {
        const maxH = typeof maxHeight === 'number' ? maxHeight : Number(String(maxHeight).replace('px', ''));
        if (!Number.isNaN(maxH) && maxH > 0) h = Math.min(h, maxH);
      }

      setComputedHeightPx(Math.round(h));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener('orientationchange', compute);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', compute);
    };
  }, [derivedAspectRatio, maxHeight]);

  const cardClasses = 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden';

  return (
    <div className={`${cardClasses} ${wrapperClassName ?? ''}`} style={style}>
      <div ref={containerRef} className="p-0 m-0">
        <div className="w-full overflow-hidden">
          <iframe
            src={finalSrc}
            title={title}
            className={`w-full block ${iframeClassName ?? ''}`}
            style={{ border: 'none', height: computedHeightPx ? `${computedHeightPx}px` : undefined }}
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

export default FacebookEmbed;
