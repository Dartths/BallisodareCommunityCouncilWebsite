import React from 'react';
import NewsCard from '../../components/cards/NewsCard';
import FacebookEmbed from '../../components/Common/FacebookEmbed';

export type NewsArticle = NewsCardArticle | FacebookEmbedArticle;

interface BaseArticle {
  title: string;
  description?: string;
}

interface NewsCardArticle extends BaseArticle {
  kind: 'card';
  /** internal route or external URL to the article page */
  link: string;
}

interface FacebookEmbedArticle extends BaseArticle {
  kind: 'facebook';
  /** either the iframe HTML snippet or the iframe src */
  iframeHtml?: string;
  src?: string;
}

const newsArticles: NewsArticle[] = [
  {
    kind: 'facebook',
    title: 'Ballisodare Community Council AGM',
    description: '',
    iframeHtml:
      '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fballisodarecommunitycouncil%2Fposts%2Fpfbid0hM6xgTDqjtXjhxLRrYQFhijLrqnTnLnQtJGWmX8UNuZwRWXJ7b3VGd8XQuk2KAX8l&show_text=false&width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
  },
    {
    kind: 'facebook',
    title: 'Connecting Ballisodare',
    description: '',
    iframeHtml:
      '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fballisodarecommunitycouncil%2Fposts%2Fpfbid04d51trWcf6cEAzKHsfR5L9a5bxTkjyLVzbfmC88fnVUMh7HBk8jbX8QG852PzBg7l&show_text=false&width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
  },
    {
    kind: 'facebook',
    title: 'Connecting Ballisodare',
    description: '',
    iframeHtml:
      '  <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fballisodarecommunitycouncil%2Fposts%2Fpfbid02T4R7vd2ugP8X2gS8nshjM3poADrseodbKyhYCJbx9oM9Gt8Tsfeo5HVXW4H6sKq8l&show_text=false&width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
  },

];

const LatestNewsSection: React.FC = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 font-title text-primary">Latest News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {newsArticles.map(article => {
          if (article.kind === 'facebook') {
            return (
              <div key={article.title} className="col-span-1">
                <FacebookEmbed iframeHtml={article.iframeHtml} src={article.src} width="100%" />
              </div>
            );
          }

          return (
            <NewsCard
              key={article.title}
              title={article.title}
              description={article.description || ''}
              link={(article as NewsCardArticle).link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LatestNewsSection;
