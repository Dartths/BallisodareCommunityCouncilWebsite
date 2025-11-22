import qrcode from '../assets/images/contact/qrcode.png';
const Donation: React.FC = () => {
  return (

          <div>
            <h2 className="text-2xl font-semibold mb-6">Donate here</h2>
            <img src={qrcode} alt="Donate QR code" className="max-w-xs">
            </img>
            <p><a href='https://pay.sumup.com/b2c/QE563G0O'>Or you can follow this link by clicking here!</a></p>
          </div>
  );
};

export default Donation;