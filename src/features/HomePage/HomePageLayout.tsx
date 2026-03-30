// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import HeroSection_2 from './containers/HeroSection_2';
import MissionSection_2 from './containers/MissionSection_2';
import CompanySection_2 from './containers/CompanySection_2';
import ServicesSection from './containers/ServicesSection';

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
            <HeroSection_2 />
            <MissionSection_2 />
            <CompanySection_2 />
            <ServicesSection />
        </div>
    );
};

export default HomePageLayout;
