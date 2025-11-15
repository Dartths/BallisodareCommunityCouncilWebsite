// Route configuration for internal navigation
export const routes = {
  home: '/',
  about: {
    index: '/about',
    projects: '/about/projects'
  },
  facilities: {
    index: '/facilities',
    booking: '/facilities/booking'
  },
  heritage: {
    index: '/heritage-and-history',
    landmarks: '/heritage-and-history/landmarks',
    yeats: '/heritage-and-history/yeats-connection'
  },
  activities: {
    index: '/things-to-do',
    mensShed: '/things-to-do/mens-shed',
    tidyTowns: '/things-to-do/tidy-towns',
    unionWoods: '/things-to-do/union-woods',
    knoxpark: '/things-to-do/knoxpark',
    falls: '/things-to-do/the-falls'
  },
  news: {
    index: '/latest-news',
    archive: '/latest-news/archive'
  },
  contact: '/contact',
  clubs: '/clubs-and-organisations',
  gallery: '/gallery'
} as const;

// Helper function to ensure type safety when accessing routes
export type Routes = typeof routes;
export type RouteKeys = keyof Routes;

// Helper function to get a route path
export const getRoute = <T extends RouteKeys>(key: T): Routes[T] => routes[key];

// Export individual route sections for direct use
export const {
  home,
  about,
  facilities,
  heritage,
  activities,
  news,
  contact,
  clubs,
  gallery
} = routes;