// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import ServicesOverviewSection from './containers/ServicesOverviewSection';
// import DetailedServiceSection from './containers/DetailedServiceSection';

/* ===================================================================== */
/*
🧩 SERVICES PAGE - It shows the services of the company
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

const ServicesPageLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('', className)}>
            <ServicesOverviewSection />
            {/* <DetailedServiceSection /> */}
        </div>
    );
};

export default ServicesPageLayout;
