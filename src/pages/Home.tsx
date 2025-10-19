import ReadMoreButton from '../components/buttons/ReadMoreButton';
import images from '../assets/images';
import Hero from '../components/banners/Hero';
import ballisodareAerial from '../assets/images/hero/ballisodare-aerial.jpg';
import LatestNewsSection from '../components/LatestNewsSection';

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
            <ReadMoreButton href="/heritage-and-history" />
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
            <ReadMoreButton href="/about" />
          </div>
        </section>

        {/* Facilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 font-title text-primary">Community Centre Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src={images.facilities.communityCentre}
                alt="Ballisodare Community Centre"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="text-lg mb-4 font-body text-gray-700">
                The Ballisodare Community, Sports and Amenity Area was fully completed and opened in September 2020.
              </p>
              <p className="text-lg mb-4 font-body text-gray-700">
                The modern bright facility incorporates 156 square metres of hall space, a canteen area and ample storage and parking.
              </p>
              <p className="text-lg mb-6 font-body text-gray-700">
                The two full size community pitches, a large community pitch and a full size GAA pitch are suitable for soccer,
                rugby and many other activities and are complimented by spacious, clean, male and female changing and hot shower areas.
              </p>
              <div>
                <ReadMoreButton href="/facilities" />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="mb-16 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 font-title text-primary">Book our Facilities</h2>
          <p className="text-lg mb-6 font-body text-gray-700">
            If you wish to speak to us about facility bookings you can contact David Dillon on 086 285 1099 or use the form to request a booking.
          </p>
          <div className="text-center">
            <ReadMoreButton href="/contact" text="Contact Us" />
          </div>
        </section>

        <LatestNewsSection />
      </div>
    </div>
  );
};

export default Home;
