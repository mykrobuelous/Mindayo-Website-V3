// 📦 LIBRARIES IMPORT
import { Star } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 STAR ROW - For the Testimonial Seciton
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

const StarRow: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex items-center gap-1 text-emerald-500', className)}>
            {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
            ))}
        </div>
    );
};

export default StarRow;
