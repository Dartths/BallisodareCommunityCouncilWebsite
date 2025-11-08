import images from '../assets/images';
import { activities } from '../config/routes';

const ThingsToDo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <img
            src={images.activities.ballisodareFalls}
            alt="View of ballisodare falls and fishing club"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 font-title text-primary">Things to do in Ballisodare</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            There are no shortage of things to do in Ballisodare with outdoor lovers particularly well catered for. There is direct access to Union Wood and the trail brings you to Union Rock Coolooney and on many other adventures for hikers, walkers, cyclists and wildlife lovers.
            If history is your thing, Ballisodare has it in spades with early Viking settlements (and burial sites) St Fechins Church and graveyard and salt pans which can trace their history back to the 1600’s.
            The falls are a big feature of Ballisodare on the right hand side as you enter from the Sligo Town direction and featured the very first fish pass in Europe and still attracting many keen anglers for the world class salmon along with sea otters, herons and other wildlife.
            Ballisodare has a huge amount to interest nearly every visitor and we look forward to welcoming you.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 font-title text-secondary">Men's Shed</h3>
              <p className="text-gray-700 mb-4 font-body">Our shed is a community-based organisation that is open to all , where the primary activity is the provision of a safe, friendly, and inclusive environment, where members are able to gather and /or work together on meaningful projects in the company of others, where the primary objective is to advance the health and well being of the participants.</p>
              <a href={activities.mensShed} className="text-primary hover:text-secondary transition-colors font-title">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 font-title text-secondary">Union Woods</h3>
              <p className="text-gray-600 mb-4">The walk through Union Wood is approximately 5 kilometers in one direction and joins Ballisodare and Collooney via union Wood. It is a beautiful Woodland walk some of the walk...</p>
              <a href={activities.tidyTowns} className="text-blue-600 hover:text-blue-800">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Knoxpark</h3>
              <p className="text-gray-600 mb-4">Knoxpark wild-park was officially opened in 2001. A sculpture trail was designed by the artists, Martina Coyle, Hilary Gilligan and Pauline O'Connell with input from the local community, naturalists and archaeologists. The sculpture trail forms a walkway incorporating a 'Pillow Stone' inspired by discoveries on the significant archaeological site here. Stone benches are placed to invite the visitor to relax and enjoy the views.</p>
              <a href={activities.knoxpark} className="text-blue-600 hover:text-blue-800">Read more</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">The Falls</h3>
              <p className="text-gray-600 mb-4">In Ballisodare Village the river forms a series of ledges, pools, glides and mini falls and continues to the mouth of Ballisodare Bay where the river empties over...</p>
              <a href={activities.falls} className="text-blue-600 hover:text-blue-800">Read more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThingsToDo;