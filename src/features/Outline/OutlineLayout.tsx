// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import HeaderSection from './containers/HeaderSection';
import { Outlet } from 'react-router';
import FooterSection from './containers/FooterSection';

/* ===================================================================== */
/*
🧩 OUTLINE LAYOUT - Outlines the header and footer.
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

const OutlineLayout = () => {
    return (
        <>
            <HeaderSection />
            <Outlet />
            <FooterSection />
        </>
    );
};

export default OutlineLayout;
