import React from 'react';
import Facebook from '../assets/images/socials/facebook.svg';
import Twitter from '../assets/images/socials/x.svg';
import Instagram from '../assets/images/socials/instagram.svg';

import { socialUrls } from '../config/socials';

const SocialMedia: React.FC = () => {
  return (
    
        <section className="mb-16">
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4 font-title text-secondary">Follow Us</h2>
      <div className="flex justify-around">
        <a
          href={socialUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex flex-col items-center gap-1 text-center hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
        >
          <img src={Facebook} alt="Facebook" className="h-8 w-8" />
          <span className="text-sm font-sans text-secondary">Facebook</span>
        </a>

        <a
          href={socialUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="flex flex-col items-center gap-1 text-center hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
        >
          <img src={Twitter} alt="Twitter" className="h-8 w-8" />
          <span className="text-sm font-sans text-secondary">Twitter</span>
        </a>

        <a
          href={socialUrls.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex flex-col items-center gap-1 text-center hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
        >
          <img src={Instagram} alt="Instagram" className="h-8 w-8" />
          <span className="text-sm font-sans text-secondary">Instagram</span>
        </a>
      </div>
    </div>
    </section>
  );
};

export default SocialMedia;