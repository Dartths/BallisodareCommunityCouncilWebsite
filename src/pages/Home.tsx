import images from '../assets/images';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-title font-bold mb-2 text-primary">Welcome to Ballisodare</h1>
          <p className="text-xl text-dark/80 font-title italic">Baile Easa Dara - 'town of the waterfall of the oak'</p>
        </div>
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
            <a href="/heritage-and-history" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors font-title">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Community Council Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">About Ballisodare Community Council</h2>
        <p className="text-lg mb-6 font-body text-gray-700">
          Ballisodare Community Council is a community development group for locals by locals.
          Supporting activities that improve the social, economic and environmental well being of Ballisodare.
        </p>
        <div className="text-center">
          <a href="/about" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors font-title">
            Read More
          </a>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Community Centre Facilities</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <a href="/facilities" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors font-title">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Book our Facilities</h2>
        <p className="text-lg mb-6 font-body text-gray-700">
          If you wish to speak to us about facility bookings you can contact David Dillon on 086 285 1099 or use the form to request a booking.
        </p>
        <div className="text-center">
          <a href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors font-title">
            Contact Us
          </a>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 font-title text-primary">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 font-title text-secondary">Men's Shed</h3>
              <p className="text-gray-700 mb-4 font-body">Ballisodare Men's shed is open again and welcomes new members...</p>
              <a href="/news/mens-shed" className="text-primary hover:text-secondary transition-colors font-title">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 font-title text-secondary">Tidy Towns Clean Up</h3>
              <p className="text-gray-600 mb-4">From time to time Ballisodare Tidy Towns will organise a village cleanup...</p>
              <a href="/news/tidy-towns" className="text-blue-600 hover:text-blue-800">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Bulk Item Disposal</h3>
              <p className="text-gray-600 mb-4">Information about bulk item disposal at Young's Quarry...</p>
              <a href="/news/bulk-disposal" className="text-blue-600 hover:text-blue-800">Read more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;