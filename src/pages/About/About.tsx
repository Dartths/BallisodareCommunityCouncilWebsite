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
            <p>Supporting local initiatives and projects that benefit the community</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Cultural Heritage</h3>
            <p>Preserving and promoting our rich local history and traditions</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Environmental Care</h3>
            <p>Working to maintain and improve our local environment</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Inclusion</h3>
            <p>Ensuring all members of our community feel welcomed and involved</p>
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