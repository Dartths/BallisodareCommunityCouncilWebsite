import Donation from "../../components/Common/Donation";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Ballisodare Community Council</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Ballisodare Community Council is a community development group for locals by locals.
            We support activities that improve the social, economic, and environmental well-being of Ballisodare.
          </p>
          <p className="text-lg mb-6">
            Our mission is to foster a strong sense of community and work together to enhance the quality of life
            for all residents of Ballisodare.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Community Development</h3>
            <p>Ballisodare Community Council is a community development group run by and for locals, working to improve the social, economic and environmental wellbeing of Ballisodare. Ballisodare Community Council plays a vital role in securing funding from local and national agencies to create and maintain community amenities that benefit everyone in the area. One of our proudest achievements is the Ballisodare Community, Sports and Amenity Area at Young's Quarry, which opened in September 2020. This modern facility includes 156 square metres of hall space, a canteen area, ample storage and parking, as well as two full-size community pitches suitable for soccer, rugby and various activities, complete with changing rooms and shower facilities.</p>
            <p>We work closely with other local groups including Ballisodare Tidy Towns, Ballisodare United, and Ballisodare Men's Shed to coordinate community initiatives and events. From family fun days and sports camps to developing recreational walking and cycling trails on Coillte lands between Collooney and Ballisodare, we're committed to creating opportunities for everyone. These projects are inclusive to all people in the community from youth, Men's Shed, new communities who have made Ballisodare their new home, to older persons. Sligo Leader We also engage with local representatives on matters affecting the Ballisodare community and oversee the maintenance of community facilities like Abbey Drive. We're always looking for volunteers who want to make a positive contribution to our vibrant community.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Cultural Heritage</h3>
            <p>Ballisodare has a varied and interesting history, with evidence that it was a major gathering place for surrounding districts as early as the second century. Our community is deeply committed to preserving and celebrating this rich heritage for residents and visitors alike. The town developed near a church founded by St. Féichín, who was born locally and died in 664 AD. Today, visitors can explore remarkable historical sites including the Great Temple of St. Féichín with its Romanesque carved doorway, the old graveyard, and the site of a Viking settlement at Knoxpark where research has revealed evidence of a Viking longphort and cemetery containing more than 200 remains.</p>
            <p>Our heritage extends beyond ancient times. The Ballisodare salmon fishery was netting over 10,000 fish annually at its peak in the late 19th century, with salmon packed in ice and transported to London fish markets within 24 hours. Ballisodare Literary heritage is also important to us - Avena House, where W.B. Yeats spent many summers, can be seen from the main street, not far from the Sally Gardens immortalised in his famous poem. Salt pans dating back to the 1600s and the town's position on the Wild Atlantic Way continue to draw visitors interested in our fascinating past. Through our work with heritage groups and the annual Ballisodare Falls Festival, we ensure these stories and landmarks are preserved and shared with future generations.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Environmental Care</h3>
            <p>Protecting and enhancing our natural environment is a core priority for Ballisodare Community Council. We work in close partnership with Ballisodare Tidy Towns, a dedicated group of volunteers who organise regular village clean-ups and enhancement projects to make our local environment and neighbourhood a better place to live, work and visit. Located at the mouth of the Ballisodare River and along the Wild Atlantic Way, our town is blessed with stunning natural beauty, from panoramic views over Ballisodare Bay to brilliant sunsets over nearby Knocknarea.</p>
            <p>Our environmental initiatives extend to developing and maintaining outdoor amenities that allow people to enjoy nature responsibly. We've worked with Sligo County Council to develop recreational walking and cycling trails on Coillte lands, opening up the Union Woods walking trails for greater all-year-round use. These facilities are maintained with the assistance of TÚS programme participants who support the community in keeping our amenities pristine and helping with Tidy Towns initiatives. Whether it's maintaining flowerbeds, promoting environmental awareness, or preserving our riverside and woodland areas, we're committed to ensuring Ballisodare remains one of the most picturesque towns in the Northwest while maintaining its welcoming village atmosphere despite our growing population.</p>

          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Inclusion</h3>
            <p>At Ballisodare Community Council, we believe every member of our community deserves to feel welcomed, valued and involved. Our commitment to social inclusion is reflected in everything we do, from creating accessible facilities to supporting programmes that bring people together across all ages and backgrounds. During times of need, we have provided support services including shopping assistance, collection of fuel and medicine, and phone calls to ensure no one in our community is left isolated.</p>
            <p>Our community facilities are designed to be inclusive spaces where everyone can participate. The Men's Shed, for example, welcomes both male and female members of all ages, providing a safe, friendly environment where people can gather, work on meaningful projects, and advance their health and wellbeing. Our projects actively engage youth, new communities who have made Ballisodare their new home, and older persons. By maintaining close relationships with various community groups and creating diverse opportunities from sports activities to cultural events, we work to ensure that whether you've lived here for generations or have recently arrived, Ballisodare is a place where you can connect, contribute and belong. Our growing community has expanded significantly in recent decades, and we're dedicated to fostering that welcoming village atmosphere where everyone has a place.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Get Involved</h2>
        <p className="text-lg mb-4">
          We welcome new members and volunteers who want to contribute to our community.
          Whether you have ideas, skills, or simply time to share, there's a place for you
          in the Ballisodare Community Council.
        </p>
      </section>

      <section>

        <Donation />
      </section>
    </div>
  );
};

export default About;