// 📦 LIBRARIES IMPORT
import { BrowserRouter, Route, Routes } from 'react-router';
import { twMerge } from 'tailwind-merge';
import HomePageLayout from '../../features/HomePage/HomePageLayout';

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
        <div className={twMerge('', className)}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePageLayout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppLayout;
