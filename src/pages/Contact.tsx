
import Donation from '../components/Donation';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Facility Bookings</h3>
                <p>Call David Dillon: 086 285 1099</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p>hello@ballisodare.ie</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/ballisodarecommunitycouncil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/ballisodare_community_council/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>

<Donation />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Facilities</h2>
        <div>
          <h3 className="text-lg font-medium mb-2">Facility Bookings</h3>
          <p>Call David Dillon: 086 285 1099</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Main Grass Pitch & Toilets & Dry Changing Rooms</h3>
            <p>
              Rate: €40 per hour
              <br /><br />
              School Sessions: €40 per session non-community
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Showers</h3>
            <p>
              Rate: €20 per hour
              <br /><br />
              School Sessions: N/A
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Abbey Drive Grass Pitch
            </h3>
            <p>
              Rate: €40 per hour
              <br /><br />
              School Sessions: €40 per session non-community
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hall Hire</h3>
            <p>
              Hour Rate: €25 per hour
              <br /><br />
              Day Rate: €250 per day
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;