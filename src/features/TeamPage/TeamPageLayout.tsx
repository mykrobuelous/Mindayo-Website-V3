// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import AboutTherapistSection from './containers/TherapistSection';
import StaffSection from './containers/StaffSection';
import BackgroundSection from './containers/BackgroundSection';

/* ===================================================================== */
/*
🧩 ABOUT PAGE LAYOUT - The layout of the about us page.
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

const TeamPageLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('', className)}>
            <BackgroundSection />
            <AboutTherapistSection />
            <StaffSection />
        </div>
    );
};

export default TeamPageLayout;
