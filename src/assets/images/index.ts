// 1x1 pixel transparent PNG as fallback
const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8=';

// Helper function to safely import images
const safeImport = (path: string) => {
  try {
    return new URL(path, import.meta.url).href;
  } catch (error) {
    console.warn(`Image not found: ${path}`);
    return PLACEHOLDER;
  }
};

// Images with fallbacks
const logo = safeImport('./logos/logo.png');
const ballisodareAerial = safeImport('./hero/ballisodare-aerial.jpg');
const communityCentre = safeImport('./facilities/community-centre.jpg');
const stFechinsChurch = safeImport('./heritage/st-fechins-church.jpg');
const ballisodareFalls = safeImport('./heritage/ballisodare-falls.jpg');
const mensShed = safeImport('./activities/mens-shed.jpg');
const communityCleanup = safeImport('./activities/community-cleanup.jpg');

export const images = {
  logo,
  hero: {
    ballisodareAerial,
  },
  facilities: {
    communityCentre,
  },
  heritage: {
    stFechinsChurch,
    ballisodareFalls,
  },
  activities: {
    mensShed,
    communityCleanup,
  },
} as const;

export default images;