import SocialMedia from "../../components/Common/SocialMedia";
import ImageTextSection from "../../components/sections/ImageTextSection";
import { facilitiesContent } from "../../content/Facilities";
import { contactDetails } from "../../config/constants/contactDetails";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 gap-12 mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="mb-4">
              The community council are always working on something, so if you
              want more information, or you want to find out how to help you can
              reach us by phone or email or on social media
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Facility Bookings</h3>
                <p>
                  Call {contactDetails.name}:{" "}
                  <a href={`tel:${contactDetails.phoneNumber}`} className="text-blue-500">
                    {contactDetails.phoneNumber}
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-blue-500"
                  >
                    {contactDetails.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          </div>

      </section>
      <SocialMedia />

        <ImageTextSection {...facilitiesContent} />
    </div>
  );
};

export default Contact;
