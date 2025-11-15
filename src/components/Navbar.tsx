import { Link } from 'react-router-dom';
import images from '../assets/images';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import NavbarSubmenu from './NavbarSubmenu';
import { home, about, facilities, clubs, activities, news, contact, heritage } from '../config/routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutMenuOpen, setAboutMenuOpen] = useState(false);

  const aboutSubmenuItems = [
    { label: 'About BCC', to: about.index },
    { label: 'Our Facilities', to: facilities.index },
    { label: 'Heritage and History', to: heritage.index },
    { label: 'Projects', to: about.projects },
  ];

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={images.logo} alt="Ballisodare Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to={home} className="px-3 py-2 rounded-md text-sm font-medium font-title hover:bg-secondary transition-colors">
                Home
              </Link>
              <NavbarSubmenu name="About" items={aboutSubmenuItems} />
              <Link to={clubs} className="px-3 py-2 rounded-md text-sm font-medium font-title hover:bg-secondary transition-colors">
                Clubs and Organisations
              </Link>
              <Link to={activities.index} className="px-3 py-2 rounded-md text-sm font-medium font-title hover:bg-secondary transition-colors">
                Things to Do
              </Link>
              <Link to={news.index} className="px-3 py-2 rounded-md text-sm font-medium font-title hover:bg-secondary transition-colors">
                Latest News
              </Link>
              <Link to={contact} className="px-3 py-2 rounded-md text-sm font-medium font-title hover:bg-secondary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
            >
              Home
            </Link>
            <div className="relative">
              <button onClick={() => setAboutMenuOpen(!isAboutMenuOpen)} className="text-white hover:bg-secondary block w-full text-left px-3 py-2 rounded-md text-base font-medium font-title">
                About
              </button>
              <Transition
                show={isAboutMenuOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="pl-4">
                  {aboutSubmenuItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </Transition>
            </div>
            <Link
              to={clubs}
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
            >
              Clubs and Organisations
            </Link>
            <Link
              to={activities.index}
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
            >
              Things to Do
            </Link>
            <Link
              to={news.index}
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
            >
              Latest News
            </Link>
            <Link
              to={contact}
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;