
import { type ImageTextSectionProps} from '../components/sections/imageTextDefaults';
import images from '../assets/images';

export const content = {
  heritage: {
    imageSrc: images.heritage.sligoCommunityHeritage,
    imageAlt: 'Ballisodare and District Heritage',
    title: 'Ballisodare and District Heritage',
    paragraphs: [
      'This website is an evolving project and there are many more stories, memories and photos that we would like to share about Ballisodare and District. We would love to hear from you with any memories, stories or photos that you can share.',
    ] as const,
    href: 'https://ballisodare.sligocommunityheritage.org/',
    className: '',
  },
} as const;

// Export individual content sections for direct use
export const heritageContent: ImageTextSectionProps = content.heritage;
