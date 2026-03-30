// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import AppLayout from './shared/layout/AppLayout';

/* ===================================================================== */
/*
🧩 APP - Main App window of the application.
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

const App: React.FC<Props> = ({ className }) => {
    return <AppLayout className={twMerge('', className)} />;
};

export default App;
