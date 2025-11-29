import qrcode from '../assets/images/contact/qrcode.png';
import ReadMoreButton from './buttons/ReadMoreButton';

const Donation: React.FC = () => {
  return (
    <div className="  my-16">
      <h2 className="text-3xl font-bold font-title text-primary mb-6">Support the Community Council</h2>
      
      <div className="grid md:grid-cols-2 items-start gap-6 md:gap-4">
        {/* Left Column - Donation Info & Button */}
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-6 font-body text-gray-700">
            The community council is always running efforts to fund local projects. If you're interested in helping but can't find the time, donations are welcome!
          </p>
          <div className="text-center md:text-left">
            <ReadMoreButton href="https://pay.sumup.com/b2c/QE563G0O" text="Donate Now" />
          </div>
        </div>

        {/* Right Column - QR Code */}
        <div className="flex justify-center md:justify-end">
          <a 
            href="https://pay.sumup.com/b2c/QE563G0O"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <p className="text-sm text-gray-600 mb-4 text-center">Scan to donate</p>
            <img 
              src={qrcode} 
              alt="Donate QR code" 
              className="w-48 h-48 object-contain hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donation;