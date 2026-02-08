
import { type ImageTextSectionProps } from '../components/sections/imageTextDefaults';
import images from '../assets/images';

const content = {
    ardVoltas: {
        imageSrc: images.clubs.ardVoltas,
        imageAlt: 'ArdVoltas Arts Space',
        title: 'ArdVoltas Arts Space',
        paragraphs: [
            'Since May 2022 ArdVoltas studios has been dedicated to bringing the experience of art to any and all',
        ] as const,
        href: 'https://www.facebook.com/p/ArdVoltas-Arts-Space-100089289955150/',
        className: '',
    },
    mensShed: {
        imageSrc: images.clubs.mensShed,
        imageAlt: 'Ballisodare Men\'s Shed',
        title: 'Ballisodare Men\'s Shed',
        paragraphs: [
            'The Shedders slogan is; “Men don’t talk face to face, they talk shoulder to shoulder”',
            'Ballisodare Men’s Shed was founded in 2013 and moved into the community facility at Youngs Quarry in 2015 after upgrading the building interior. The shed is a community based non commercial based organisation, open to all.'
        ],
        href: 'https://www.sligoleader.ie/ballisodare-mens-shed/',
    },
    womensShed: {
        imageSrc: images.clubs.womensShed,
        imageAlt: 'Ballisodare Women\'s Shed',
        title: 'Ballisodare Women\'s Shed',
        paragraphs: [
            'The Shed is a safe, welcoming place for all women to come together for friendship, activities, to learn and share a skill, and have fun! For more information, please follow the link below.',
        ],
        href: 'https://www.facebook.com/groups/240852078988410/'
    },
    scouts: {
        imageSrc: images.clubs.scouts,
        imageAlt: 'Ballisodare Scouts',
        title: 'Ballisodare Scouts',
        paragraphs: [
            'We take in new children every year. If you would like your child to join, please follow the link below to our website and fill in the contact form. We will get back to you as soon as possible.',
        ],
        href: 'https://ballisodarescouts.wordpress.com/how-to-join-the-13th-sligo-scout-group/'
    },
    tidyTowns: {
        imageSrc: images.clubs.tidyTowns,
        imageAlt: 'Ballisodare Tidy Towns',
        title: 'Ballisodare Tidy Towns',
        paragraphs: [
            'Voluntary organisation dedicated to the improvement of the tidiness and visual appearance of Ballisodare.',
        ],
        href: 'https://www.facebook.com/BallisodareTidyTowns/'
    },
    fishingClub: {
        imageSrc: images.clubs.fishingClub,
        imageAlt: 'Ballisodare Fishing Club',
        title: 'Ballisodare Fishing Club',
        paragraphs: [
            'The Ballisodare Fishing Club Board is extremely conscious and concerned about the major decline in salmon numbers returning to our river system over the past decade. In response the Board\'s mission is to maximise the number of Atlantic salmon smolts reaching the sea from our river system. Through our strategy plan, we aim to improve the environmental conditions, necessary for enhanced reproduction.',
        ],
        href: 'https://www.ballisodarefishingclub.ie/'
    }
} as const;

// Export individual content sections for direct use
export const ArdVoltasContent: ImageTextSectionProps = content.ardVoltas;
export const MensShedContent: ImageTextSectionProps = content.mensShed;
export const WomensShedContent: ImageTextSectionProps = content.womensShed;
export const ScoutsContent: ImageTextSectionProps = content.scouts;
export const TidyTownsContent: ImageTextSectionProps = content.tidyTowns;
export const FishingClubContent: ImageTextSectionProps = content.fishingClub;
