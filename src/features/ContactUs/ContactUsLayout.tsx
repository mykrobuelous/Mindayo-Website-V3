// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import ContactSection from './containers/ContactSection';

/* ===================================================================== */
/*
🧩 CONTACT US LAYOUT - Contact Us Page
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
    className?: string;
}

const ContactUsLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('', className)}>
            <ContactSection />
        </div>
    );
};

export default ContactUsLayout;
