import images from '../../assets/images';
import Hero from '../../components/banners/Hero';
import ReadMoreButton from '../../components/buttons/ReadMoreButton';

const ThingsToDo = () => {
  return (
    <div >
      <Hero
        title=""
        subtitle=""
        alt="Ballisodare Falls"
        image={images.activities.ballisodareFalls}
      />
      
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16">

        <h1 className="text-3xl font-bold mb-6 font-title text-primary">Things to do in Ballisodare</h1>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            There are no shortage of things to do in Ballisodare with outdoor lovers particularly well catered for. There is direct access to Union Wood and the trail brings you to Union Rock Coolooney and on many other adventures for hikers, walkers, cyclists and wildlife lovers.
            If history is your thing, Ballisodare has it in spades with early Viking settlements (and burial sites) St Fechins Church and graveyard and salt pans which can trace their history back to the 1600's.
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
              <h3 className="text-xl font-semibold mb-3 font-title text-secondary">Ballisodare Abbey</h3>
              <p className="text-gray-700 mb-4 font-body">Wakeman painted this on 23 October 1878. The Abbey is located close to the shoreline of Ballysadare Bay within the grounds of an active limestone quarry and concrete works. Today it is surrounded by and largely submerged in quarry debris. The only visible remains are parts of the north wall of the nave (13.6m long) and chancel (6m long) of the church, with the lower part of the tower between them. The tower rises from two substantial walls with two pointed arches of dressed stone linking the nave to the chancel. It measures 6.35m north to south by 3.7m east to west and reaches about 6m above present ground level. The chancel arch is depicted in Wakeman's painting.</p>
              <ReadMoreButton href={'https://www.askaboutireland.ie/reading-room/environment-geography/physical-landscape/the-wakeman-drawings/ballysadare/'} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 font-title text-secondary">Union Woods</h3>
              <p className="text-gray-600 mb-4">Union wood is a large area of mixed forestry located between Coolooney, Ballygawley and Ballisodare and provides a wonderful amenity for Sligo. The wood provides a range of walking opportunities through diverse woodland as well as access to Union Rock and its wonderful panorama of the North West of Ireland. There are two waymarked looped walks within Union wood in addition to the Sligo Way long distance waymarked route.</p>
              <ReadMoreButton href={'https://sligowalks.ie/walks/union-wood/'} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Knoxpark</h3>
              <p className="text-gray-600 mb-4">Knoxpark wild-park was officially opened in 2001. A sculpture trail was designed by the artists, Martina Coyle, Hilary Gilligan and Pauline O'Connell with input from the local community, naturalists and archaeologists. The sculpture trail forms a walkway incorporating a 'Pillow Stone' inspired by discoveries on the significant archaeological site here. Stone benches are placed to invite the visitor to relax and enjoy the views.</p>
              <ReadMoreButton href='https://www.facebook.com/ballisodarecommunitycouncil/videos/-new-walk-knoxpark-now-open-access-on-the-ballisodarecollooney-road-collooney-si/849580235373284/' />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default ThingsToDo;
