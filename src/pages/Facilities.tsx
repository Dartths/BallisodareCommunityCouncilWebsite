const Facilities = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Community Centre Facilities</h1>

      <section className="mb-16">
        <div className="prose max-w-none mb-8">
          <p className="text-lg">
            The Ballisodare Community, Sports and Amenity Area was fully completed and opened in September 2020.
            Our modern facilities provide a hub for community activities, sports, and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Indoor Facilities</h2>
              <ul className="space-y-2">
                <li>• 156 square metres of hall space</li>
                <li>• Modern canteen area</li>
                <li>• Ample storage space</li>
                <li>• Clean, modern changing rooms</li>
                <li>• Hot shower facilities</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Outdoor Facilities</h2>
              <ul className="space-y-2">
                <li>• Two full-size community pitches</li>
                <li>• Full-size GAA pitch</li>
                <li>• Suitable for multiple sports</li>
                <li>• Ample parking space</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Booking Information</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-lg mb-4">
            To book our facilities or make an inquiry, you can:
          </p>
          <ul className="space-y-2">
            <li>• Call David Dillon at 086 285 1099</li>
            <li>• Use our contact form</li>
            <li>• Email us at hello@ballisodare.ie</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Facilities;