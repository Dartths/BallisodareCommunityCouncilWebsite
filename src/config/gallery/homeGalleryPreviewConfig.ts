// Images to be used in the gallery
import ballisodareFalls from '../../assets/images/activities/fisheries-and-waterfalledited.jpg';
import communityCentre from '../../assets/images/facilities/community-centre.jpg';
import ballisodareAerial from '../../assets/images/hero/ballisodare-aerial.jpg';

export interface PreviewImage {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export interface PreviewRow {
	images: PreviewImage[];
}

export const galleryRowPreviewConfig: PreviewRow[] = [
	{
		images: [
			{
				src: ballisodareFalls,
				alt: "Ballisodare Falls - A scenic view of the historic falls",
				width: 1600,
				height: 1000,
			},
			{
				src: communityCentre,
				alt: "Community Centre - Modern facilities for local activities",
				width: 1920,
				height: 1080,
			},
		],
	},
	{
		images: [
			{
				src: ballisodareAerial,
				alt: "Aerial View - Stunning overview of Ballisodare town",
				width: 2560,
				height: 1440,
			},
		],
	},
];

// Future configuration options can be added here
export const homeGalleryPreviewConfig = {
	preview: {
		rows: galleryRowPreviewConfig,
		baseRowHeight: '40vh', // can be adjusted as needed
	},
} as const;
