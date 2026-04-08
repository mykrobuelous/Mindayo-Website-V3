// 📦 LIBRARIES IMPORT
import { BrowserRouter, Route, Routes } from 'react-router';
import { twMerge } from 'tailwind-merge';
import HomePageLayout from '../../features/HomePage/HomePageLayout';
import OutlineLayout from '@/features/Outline/OutlineLayout';
import TeamPageLayout from '@/features/TeamPage/TeamPageLayout';
import ServicesPageLayout from '@/features/ServicesPage/ServicesPageLayout';
import ContactUsLayout from '@/features/ContactUs/ContactUsLayout';

/* ===================================================================== */
/*
🧩 APP LAYOUT - App layout where routes live.
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

const AppLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge(' ', className)}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OutlineLayout />}>
                        <Route index element={<HomePageLayout />} />
                        <Route path="/team" element={<TeamPageLayout />} />
                        <Route path="/services" element={<ServicesPageLayout />} />
                        <Route path="/contact" element={<ContactUsLayout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppLayout;
