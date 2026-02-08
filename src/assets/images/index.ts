// Images with fallbacks
import logo from '../images/logos/logo.png';
import ballisodareAerial from '../images/hero/ballisodare-aerial.jpg';
import communityCentre from '../images/facilities/community-centre.jpg';
import abbeyDrivePitch from '../images/facilities/abbey-drive-pitch.jpg';
import communityGrassPitch from '../images/facilities/community-grass-pitch.jpeg';
import ballisodareFalls from '../images/activities/fisheries-and-waterfalledited.jpg';
import ballisodareFallsHeritage from '../images/heritage/Ballisodare-Falls-Jane-Shackleton-1898.jpg';
import fishery1 from '../images/heritage/Fisher11280x705.jpg';
import fishery2 from '../images/heritage/Fishery2Falls-Sun-Philip-OBrien-1280x960.jpg';
import viking from '../images/heritage/viking.jpeg';
import sligoCommunityHeritage from '../images/heritage/SligoCommunityHeritage.svg';
import qrcode from '../images/contact/qrcode.png';
import ardVoltas from '../images/clubs/ardvoltas.jpg';
import mensShed from '../images/clubs/mensshed.jpg';
import womensShed from '../images/clubs/womensShed.jpg';
import scouts from '../images/clubs/scouts.png';
import tidyTowns from '../images/clubs/TidyTowns.jpg';
import fishingClub from '../images/clubs/fishingclub.avif';


export const images = {
  logo,
  hero: {
    ballisodareAerial,
    ballisodareFallsHeritage,
  },
  facilities: {
    communityCentre,
    abbeyDrivePitch,
    communityGrassPitch,
  },
  activities: {
    ballisodareFalls,
  },
  heritage: {
    fishery1,
    fishery2,
    viking,
    sligoCommunityHeritage
  },
  contact:{
    qrcode
  },
  clubs: {
    ardVoltas,
    mensShed,
    womensShed,
    scouts,
    tidyTowns,
    fishingClub
  }
} as const;

export default images;