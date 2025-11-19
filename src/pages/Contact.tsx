import qrcode from '../assets/images/contact/qrcode.png';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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


        <div>
          <h2 className="text-2xl font-semibold mb-6">Donate here</h2>
          <img src={qrcode} alt="Donate QR code" className="max-w-xs">
          </img>
          <p>Or you can follow this link by clicking <a href='https://pay.sumup.com/b2c/QE563G0O'>here!</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;