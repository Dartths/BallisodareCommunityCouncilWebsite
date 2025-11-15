import ReadMoreButton from '../components/buttons/ReadMoreButton';
import { about } from '../config/routes';

const HeritageAndHistory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Heritage & History of Ballisodare</h1>

      {/* Introduction Section */}
      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <p className="text-lg mb-6 font-body text-gray-700">
          Ballisodare (Baile Easa Dara - 'town of the waterfall of the oak') is steeped in history with evidence that it was a major gathering place for surrounding districts as early as the second century. Few spots in County Sligo have as varied and interesting a history as Ballisodare, making it a fascinating destination for those interested in Irish heritage.
        </p>
        <p className="text-lg mb-6 font-body text-gray-700">
          The town is situated at the mouth of the Ballisodare River and is one of the most picturesque towns in the Northwest on the Wild Atlantic Way. From early Viking settlements to medieval religious sites, Ballisodare's rich heritage is visible throughout the community today.
        </p>
      </section>

      {/* Viking Settlement Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Viking Settlement & Burial Sites</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4 font-body text-gray-700">
              Evidence of Viking presence in Ballisodare dates back centuries. The town and its surrounding areas contain archaeological remains of Viking settlements and burial sites that provide fascinating insights into the Norse influence on the northwest coast of Ireland.
            </p>
            <p className="text-lg mb-4 font-body text-gray-700">
              These ancient sites are a testament to the strategic importance of the Ballisodare area as a major gathering and trading place. The Viking heritage remains an integral part of Ballisodare's cultural identity and continues to attract historians and heritage enthusiasts from around the world.
            </p>
            <p className="text-lg font-body text-gray-700">
              The preservation and study of these sites helps us understand the complex history of settlement and cultural exchange that shaped modern Ireland.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <p className="text-center text-gray-500">Heritage Site Image</p>
          </div>
        </div>
      </section>

      {/* Religious Heritage Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Religious Heritage</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <p className="text-center text-gray-500">Church Image</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 font-title text-primary">St. Fechin's Church & Graveyard</h3>
            <p className="text-lg mb-4 font-body text-gray-700">
              St. Fechin's Church and its associated graveyard are among the most important religious heritage sites in Ballisodare. The church holds centuries of history and spirituality, serving as a focal point for the community throughout generations.
            </p>
            <p className="text-lg mb-4 font-body text-gray-700">
              The graveyard contains numerous ancient graves and headstones, many dating back several centuries, providing a window into the lives and families that have called Ballisodare home over the ages.
            </p>
            <p className="text-lg font-body text-gray-700">
              Visitors to St. Fechin's can explore the peaceful grounds and marvel at the architectural features and stonework that have survived the centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Salt Pans Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Historic Salt Pans</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4 font-body text-gray-700">
              Ballisodare's historic salt pans represent a unique industrial heritage that stretches back to the 1600s. These salt production facilities were crucial to the local economy and demonstrate the ingenuity of our ancestors in utilizing the unique coastal resources available.
            </p>
            <p className="text-lg mb-4 font-body text-gray-700">
              The salt pans were operated for centuries, taking advantage of the Atlantic tides and the mineral-rich waters at the mouth of the Ballisodare River. This valuable commodity was used for preservation of food and had wide-ranging trade importance.
            </p>
            <p className="text-lg font-body text-gray-700">
              Today, the remains of these salt pans serve as a reminder of Ballisodare's maritime and commercial significance in Irish history.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <p className="text-center text-gray-500">Salt Pans Image</p>
          </div>
        </div>
      </section>

      {/* Yeats Connection Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Literary Heritage: W.B. Yeats Connection</h2>
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <p className="text-lg mb-4 font-body text-gray-700">
            One of the most celebrated aspects of Ballisodare's heritage is its connection to William Butler Yeats, one of Ireland's greatest literary figures. Yeats spent many summers visiting the town and drew inspiration from its beauty and character.
          </p>
          <p className="text-lg font-body text-gray-700">
            Avena House, where Yeats frequently stayed, can be seen from the main street and is a must-visit for literary enthusiasts and Yeats admirers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-title text-primary">"The Sally Gardens"</h3>
            <p className="text-lg mb-4 font-body text-gray-700">
              Perhaps most famously, Yeats's poem "The Sally Gardens" is intrinsically linked to Ballisodare. The poem, set in this picturesque town, has become one of Yeats's most beloved works, immortalizing the beauty of the Sally Gardens that inspired it.
            </p>
            <p className="text-lg mb-4 font-body text-gray-700 italic">
              "Down by the Sally Gardens my love and I did meet;<br/>
              She passed the Sally Gardens with little snow-white feet;<br/>
              She bid me take love easy, as the leaves grow on the tree;<br/>
              But I, being young and foolish, with her did not agree."
            </p>
            <p className="text-lg font-body text-gray-700">
              The poem captures a moment of romantic encounter and youthful longing, and remains a testament to the inspirational quality of Ballisodare's natural landscape.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <p className="text-center text-gray-500">Yeats/Literary Image</p>
          </div>
        </div>
      </section>

      {/* Community Heritage Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 font-title text-primary">Living Heritage</h2>
        <p className="text-lg mb-6 font-body text-gray-700">
          The heritage of Ballisodare is not confined to ancient history. The community continues to preserve and celebrate its rich cultural identity through various initiatives, events, and community projects. The Ballisodare Community Council plays a vital role in maintaining this heritage for future generations.
        </p>
        <p className="text-lg mb-6 font-body text-gray-700">
          Through documentation, preservation efforts, and community engagement, we ensure that the stories, traditions, and landmarks that define Ballisodare remain vibrant and accessible to all.
        </p>
        <div className="text-center">
          <ReadMoreButton href={about.index} text="Learn More About Our Community" />
        </div>
      </section>
    </div>
  );
};

export default HeritageAndHistory;
