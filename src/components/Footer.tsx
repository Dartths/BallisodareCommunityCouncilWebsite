const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Facility Bookings: 086 285 1099</p>
            <p>Email: hello@ballisodare.ie</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ballisodarecommunitycouncil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                Facebook
              </a>
              <a href="https://www.instagram.com/ballisodare_community_council/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Ballisodare Community Council</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;