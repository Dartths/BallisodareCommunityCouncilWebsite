import ReadMoreButton from '../components/buttons/ReadMoreButton';
import images from '../assets/images';
import Hero from '../components/banners/Hero';
import ballisodareAerial from '../assets/images/hero/ballisodare-aerial.jpg';
import LatestNewsSection from '../components/LatestNewsSection';
import SocialMedia from '../components/SocialMedia';
import { about, facilities, heritage, activities } from '../config/routes';
import BookingCTA from '../components/sections/BookingSection';
import ImageTextSection from '../components/sections/ImageTextSection';
import { facilitiesContent } from '../components/sections/imageTextDefaults';

const Home = () => {
  return (
    <div>
      <Hero
        title="Welcome to Ballisodare"
        subtitle="Baile Easa Dara - 'town of the waterfall of the oak'"
        image={ballisodareAerial}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            The town is situated at the mouth of the Ballisodare River and is one of the most picturesque towns in the Northwest on the Wild Atlantic Way.
            Few spots in the county have as varied and interesting a history as Ballisodare with evidence that it was a major gathering place for surrounding
            districts as early as the second century.
          </p>
          <p className="text-lg mb-6">
            Steeped in history visitors to the town can explore the remnants of our past like the old graveyard, St. Fechin's
            church, the site of a Viking settlement and many more. Avena House where W.B. Yeats spent many summers visiting can be seen from the main street
            not far from the Sally Gardens immortalised in the poem of the same name.
          </p>
          <div className="text-center">
            <ReadMoreButton href={heritage.index} />
          </div>
        </div>

        {/* Community Council Section */}
        <section className="my-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 font-title text-primary">About Ballisodare Community Council</h2>
          <p className="text-lg mb-6 font-body text-gray-700">
            Ballisodare Community Council is a community development group for locals by locals.
            Supporting activities that improve the social, economic and environmental well being of Ballisodare.
          </p>
          <div className="text-center">
            <ReadMoreButton href={about.index} />
          </div>
        </section>

        <ImageTextSection {...facilitiesContent} />

        {/* Booking CTA */}
        <BookingCTA />

        <LatestNewsSection />
        <SocialMedia />



        {/* About Ballisodare */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-title text-primary">More About Ballisodare</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div >
              <h3 className="text-2xl font-bold mb-6 font-title text-primary">Ballisodare Heritage & History</h3>
              <p className="text-lg mb-6 font-body text-gray-700">
                The town is situated at the mouth of the Ballisodare River  and is one of the most picturesque towns in the Northwest on the Wild  Atlantic Way. Few spots in the county have as varied and interesting a history as Ballisodare with evidence that it was a major gathering place for surrounding districts as early as the second century          </p>
              <div className="text-center">
                <ReadMoreButton href={heritage.index} text="Read More" />
              </div>
            </div>
            <div >
              <h3 className="text-2xl font-bold mb-6 font-title text-primary">Things to Do in Ballisodare</h3>
              <p className="text-lg mb-6 font-body text-gray-700">
                There are no shortage of things to do in Ballisodare with outdoor lovers particularly well catered for. Many adventures awaits hikers, walkers, cyclists and wildlife lovers. If history is your thing, Ballisodare has it in spades with early Viking settlements (and burial sites) St Fechins Church and graveyard and salt pans which can trace their history back to the 1600s
              </p>
              <div className="text-center">
                <ReadMoreButton href={activities.index} text="Read More" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
