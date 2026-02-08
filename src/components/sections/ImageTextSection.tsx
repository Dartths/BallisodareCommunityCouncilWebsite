
import React from 'react';
import ReadMoreButton from '../buttons/ReadMoreButton';
import ContentSection from './ContentSection';
import { type ImageTextSectionProps} from './imageTextDefaults';


/**
 * ImageTextSection
 * A focused two-column section with an image on the left and text + CTA on the right.
 */
const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  imageAlt,
  title,
  paragraphs,
  href,
  className,
}) => {
  return (
    <ContentSection title={title} className={className + ' mb-16'}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img src={imageSrc} alt={imageAlt} className="object-cover w-full h-full" />
        </div>
        <div>
          {(paragraphs ?? []).map((p, i) => (
            <p key={i} className="text-lg mb-4 font-body text-gray-700">
              {p}
            </p>
          ))}
          {href && href.trim() !== '' && (
            <div>
              <ReadMoreButton href={href} />
            </div>
          )}
        </div>
      </div>
    </ContentSection>
  );
};

export default ImageTextSection;
