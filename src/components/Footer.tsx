import { routes } from '../config/routes';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-title">Get in touch</h3>
            <div className="space-y-3">
              <p className="font-sans flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+353871914368" className="hover:text-accent transition-colors">
                  +353 (0)71 9143686
                </a>
              </p>
              <p className="font-sans flex items-start">
                <span className="mr-2">✉️</span>
                <a href="mailto:hello@ballisodare.ie" className="hover:text-accent transition-colors">
                  message us
                </a>
              </p>
            </div>
          </div>

          {/* Customer Info - Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-title">Customer Info</h3>
            <div className="space-y-2">
              <p><a href={routes.home} className="hover:text-accent transition-colors font-sans">Home</a></p>
              <p><a href={routes.about.index} className="hover:text-accent transition-colors font-sans">About us</a></p>
              <p><a href={routes.facilities.index} className="hover:text-accent transition-colors font-sans">Facilities</a></p>
              <p><a href={routes.heritage.index} className="hover:text-accent transition-colors font-sans">Heritage & History</a></p>
              <p><a href={routes.clubs} className="hover:text-accent transition-colors font-sans">Clubs & Organisations</a></p>
              <p><a href={routes.contact} className="hover:text-accent transition-colors font-sans">Contact Us</a></p>
            </div>
          </div>

          {/* Browse - Activities & Content */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-title">Browse</h3>
            <div className="space-y-2">
              <p><a href={routes.activities.index} className="hover:text-accent transition-colors font-sans">Things to Do</a></p>
              <p><a href={routes.news.index} className="hover:text-accent transition-colors font-sans">Latest News</a></p>
              <p><a href={routes.gallery} className="hover:text-accent transition-colors font-sans">Gallery</a></p>
              <p><a href={routes.about.index} className="hover:text-accent transition-colors font-sans">About the Council</a></p>
            </div>
          </div>

          {/* Social & Copyright */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-title">social:</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.facebook.com/ballisodarecommunitycouncil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                f
              </a>
              <a 
                href="https://www.instagram.com/ballisodare_community_council/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-accent transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
            <p className="text-sm font-sans">&copy; {new Date().getFullYear()} Ballisodare Community Council</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;