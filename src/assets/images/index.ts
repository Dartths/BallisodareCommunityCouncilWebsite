// Images with fallbacks
import logo from '../images/logos/logo.png';
import ballisodareAerial from '../images/hero/ballisodare-aerial.jpg';
import communityCentre from '../images/facilities/community-centre.jpg';
import abbeyDrivePitch from '../images/facilities/abbey-drive-pitch.jpg';
import communityGrassPitch from '../images/facilities/community-grass-pitch.jpeg';
import ballisodareFalls from '../images/activities/fisheries-and-waterfalledited.jpg';


export const images = {
  logo,
  hero: {
    ballisodareAerial,
  },
  facilities: {
    communityCentre,
    abbeyDrivePitch,
    communityGrassPitch,
  },
  activities: {
    ballisodareFalls,
  },
} as const;

export default images;