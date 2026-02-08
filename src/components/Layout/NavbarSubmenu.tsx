import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

interface SubmenuItem {
  label: string;
  to: string;
}

interface NavbarSubmenuProps {
  name: string;
  to: string;
  items: SubmenuItem[];
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const NavbarSubmenu = ({ name, to, items, isMobile = false, onLinkClick }: NavbarSubmenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:bg-secondary block w-full text-left px-3 py-2 rounded-md text-base font-medium font-title"
        >
          {name}
        </button>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="pl-4">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onLinkClick}
                className="text-white hover:bg-secondary block px-3 py-2 rounded-md text-base font-medium font-title"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Transition>
      </div>
    );
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link to={to} className="px-3 py-2 rounded-md text-sm font-medium font-title hover:bg-secondary transition-colors focus:outline-none">
        {name}
      </Link>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default NavbarSubmenu;
