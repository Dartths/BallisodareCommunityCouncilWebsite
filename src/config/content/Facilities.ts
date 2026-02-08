
import { type ImageTextSectionProps} from '../../components/sections/imageTextDefaults';
import images from '../../assets/images';
import { facilities } from '../routes';

export const imageTextContent = {
  facilities: {
    imageSrc: images.facilities.communityCentre,
    imageAlt: 'Community Centre',
    title: 'Community Centre Facilities',
    paragraphs: [
      'The Ballisodare Community, Sports and Amenity Area was fully completed and opened in September 2020.',
      'The modern bright facility incorporates 156 square metres of hall space, a canteen area and ample storage and parking.',
      'The two full size community pitches, a large community pitch and a full size GAA pitch are suitable for soccer, rugby and many other activities and are complimented by spacious, clean, male and female changing and hot shower areas.',
    ] as const,
    href: facilities.index,
    className: '',
  },
} as const;

// Export individual content sections for direct use
export const facilitiesContent: ImageTextSectionProps = imageTextContent.facilities;
