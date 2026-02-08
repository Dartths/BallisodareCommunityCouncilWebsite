import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

interface SubmenuItem {
  label: string;
  to: string;
}

interface NavbarSubmenuMobileProps {
  name: string;
  items: SubmenuItem[];
  onLinkClick: () => void;
}

const NavbarSubmenuMobile = ({ name, items, onLinkClick }: NavbarSubmenuMobileProps) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setSubmenuOpen(!isSubmenuOpen)}
        className="text-white hover:bg-secondary block w-full text-left px-3 py-2 rounded-md text-base font-medium font-title"
      >
        {name}
      </button>
      <Transition
        show={isSubmenuOpen}
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
};

export default NavbarSubmenuMobile;
