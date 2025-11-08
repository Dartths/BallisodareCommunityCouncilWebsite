// Images to be used in the gallery
import ballisodareFalls from '../assets/images/activities/fisheries-and-waterfalledited.jpg';
import communityCentre from '../assets/images/facilities/community-centre.jpg';
import ballisodareAerial from '../assets/images/hero/ballisodare-aerial.jpg';

export interface PreviewImage {
  src: string;
  alt: string;
}

export interface PreviewRow {
  images: PreviewImage[];
}

export const galleryPreviewConfig: PreviewRow[] = [
  {
    images: [
      {
        src: ballisodareFalls,
        alt: "Ballisodare Falls - A scenic view of the historic falls"
      },
      {
        src: communityCentre,
        alt: "Community Centre - Modern facilities for local activities"
      }
    ]
  },
  {
    images: [
      {
        src: ballisodareAerial,
        alt: "Aerial View - Stunning overview of Ballisodare town"
      }
    ]
  }
];

// Future configuration options can be added here
export const galleryConfig = {
  preview: {
    rows: galleryPreviewConfig,
    baseRowHeight: '40vh'  // can be adjusted as needed
  }
} as const;