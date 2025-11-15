import type { ReactNode } from 'react';
import ReadMoreButton from '../buttons/ReadMoreButton';
import { contact } from '../../config/routes';

interface BookingCTAProps {
  title?: string;
  description?: string | ReactNode;
  contactName?: string;
  contactPhone?: string;
  buttonText?: string;
  containerClassName?: string;
  children?: ReactNode;
}

const BookingCTA = ({
  title = 'Book our Facilities',
  description = 'If you wish to find out more about booking our facilities please view our contact page.',
  buttonText = 'Find out more',
  containerClassName = 'mb-16 bg-gray-50 rounded-lg',
  children,
}: BookingCTAProps) => {
  return (
    <section className={containerClassName}>
      <h2 className="text-3xl font-bold mb-6 font-title text-primary">{title}</h2>
      {children ? (
        <div className="text-lg mb-6 font-body text-gray-700">{children}</div>
      ) : (
        <p className="text-lg mb-6 font-body text-gray-700">{description}</p>
      )}
      <div className="text-center">
        <ReadMoreButton href={contact} text={buttonText} />
      </div>
    </section>
  );
};

export default BookingCTA;
