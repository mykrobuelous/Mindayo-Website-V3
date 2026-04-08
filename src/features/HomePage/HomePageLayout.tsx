// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import ServicesSection from './containers/ServicesSection';
import TestimonialSection from './containers/TestimonialSection';
import HeroSection from './containers/HeroSection';
import MissionSection from './containers/MissionSection';
import CompanySection from './containers/CompanySection';

/* ===================================================================== */
/*
🧩 HOMEPAGE LAYOUT - The homepage of the website.
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

const HomePageLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('', className)}>
            <HeroSection />
            <MissionSection />
            <CompanySection />
            <ServicesSection />
            <TestimonialSection />
        </div>
    );
};

export default HomePageLayout;
