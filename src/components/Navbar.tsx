import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Ballisodare
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">
                About
              </Link>
              <Link to="/facilities" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">
                Facilities
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;