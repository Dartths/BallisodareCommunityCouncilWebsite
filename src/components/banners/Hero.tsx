import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[400px]">
      <img 
        src={image} 
        alt="Hero image" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
        {title && <h1 className="text-5xl font-title font-bold mb-4 text-white">{title}</h1>}
        {subtitle && <p className="text-2xl font-title italic text-white/90">{subtitle}</p>}
      </div>
    </section>
  );
};

export default Hero;
