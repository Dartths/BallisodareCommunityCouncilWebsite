import React from 'react';
import ReadMoreButton from '../buttons/ReadMoreButton';

interface NewsCardProps {
  title: string;
  description: string;
  link: string;
  image:any;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, link, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 font-title text-secondary">{title}</h3>
        <img src={image?.src} alt={image?.alt}></img>
        <p className="text-gray-700 mb-4 font-body">{description}</p>
           <div className="text-center">
            <ReadMoreButton href={link} text="Read More" />
          </div>
      </div>
    </div>
  );
};

export default NewsCard;
