// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import AboutTherapistSection from './containers/TherapistSection';
import BackgroundSection from './containers/BackgroundSection';
import PyschometricianSection from './containers/PyschometricianSection';
import AssociatesSection from './containers/AssociatesSection';

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
            <AssociatesSection />
            <PyschometricianSection />
        </div>
    );
};

export default TeamPageLayout;
