import React from 'react';
import NewsCard from './cards/NewsCard';
import testImage from '../assets/images/activities/fisheries-and-waterfalledited.jpg';


const newsArticles = [
  {
    title: "Men's Shed",
    description: "Ballisodare Men's shed is open again and welcomes new members...",
    link: "/news/mens-shed"
  },
  {
    title: "Tidy Towns Clean Up",
    image: {src: testImage, alt: 'image of fishery'},
    description: "From time to time Ballisodare Tidy Towns will organise a village cleanup...",
    link: "/news/tidy-towns"
  },
  {
    title: "Bulk Item Disposal",
    image: {src: testImage, alt: 'image of fishery'},
    description: "Information about bulk item disposal at Young's Quarry...",
    link: "/news/bulk-disposal"
  }
];

const LatestNewsSection: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-title text-primary">Latest News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {newsArticles.map(article => (
          <NewsCard 
            key={article.title}
            title={article.title}
            image={article.image}
            description={article.description}
            link={article.link}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
