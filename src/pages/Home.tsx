const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ballisodare</h1>
        <p className="text-xl text-gray-600 italic">Baile Easa Dara - 'town of the waterfall of the oak'</p>
      </section>

      <section className="mb-16">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            The town is situated at the mouth of the Ballisodare River and is one of the most picturesque towns in the Northwest on the Wild Atlantic Way.
            Few spots in the county have as varied and interesting a history as Ballisodare with evidence that it was a major gathering place for surrounding
            districts as early as the second century.
          </p>
          <p className="text-lg mb-4">
            Steeped in history visitors to the town can explore the remnants of our past like the old graveyard, St. Fechin's
            church, the site of a Viking settlement and many more. Avena House where W.B. Yeats spent many summers visiting can be seen from the main street
            not far from the Sally Gardens immortalised in the poem of the same name.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Community Centre</h2>
          <p>Modern facilities including a spacious hall, canteen area, and sports amenities.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Latest News</h2>
          <p>Stay updated with community events, activities, and important announcements.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Get Involved</h2>
          <p>Join our community activities and help make Ballisodare an even better place to live.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;