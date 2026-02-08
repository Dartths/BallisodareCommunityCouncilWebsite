
import images from '../../assets/images';
import BookingCTA from '../../components/sections/BookingSection';

const Facilities = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Community Centre Facilities</h1>

      {/* Facilities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Community Grass Pitch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={images.facilities.communityGrassPitch}
              alt="Community Grass Pitch"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-lg mb-4 font-body text-gray-700">
              Championship size GAA pitch with goalposts, 2.4m high fencing to perimeter. Playing dimensions 86m*140 approx. Can be used for Gaelic, soccer, rugby or other suitable sports.
            </p>
            <p className="text-lg mb-4 font-body text-gray-700">
              Pitched is serviced by male and female public toilets, 2 dry changing rooms and 2 shower changing rooms each with hot water for 5 shower heads, toilet cubicles, urinals and WHBS in each shower changing area with benches etc.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Abbey Drive Pitch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={images.facilities.abbeyDrivePitch}
              alt="Abbey Drive Pitch"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-lg mb-4 font-body text-gray-700">
              Championship size GAA pitch with goalposts, 2.4m high fencing to perimeter. Playing dimensions 86m*140 approx. Can be used for Gaelic, soccer, rugby or other suitable sports.
            </p>
            <p className="text-lg mb-4 font-body text-gray-700">
              Picnic benches beside community playground. Car park adjacent.
            </p>
          </div>
        </div>
      </section>


      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Community Hall</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={images.facilities.communityCentre}
              alt="Community Centre"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-lg mb-4 font-body text-gray-700">
              Hall served internally by wheelchair accessible WC, ladies toilets with 3 cubicles and 2 WHBs, Mens toilets with 2 cubicles, 3 urinals and WHB.
              <br /> <br />
              Hall is heated and cooled by air conditioning units. Remaining areas served by electric radiators. Hot and cold water to all WCs and canteen areas. Vinyl floor finishes in the hall and 3 phase power supply.
              <br /> <br />
              Car parking is available to front of building.
              <br /> <br />
              Space: Floor area 156m² / Canteen 25m² / Storage 52m²
            </p>
          </div>
        </div>
      </section>


        {/* Booking CTA */}
        <BookingCTA />
    </div>
  );
};

export default Facilities;
