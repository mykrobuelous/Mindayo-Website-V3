// 📦 LIBRARIES IMPORT
import { navLinks } from '@/collection/data/navLinks';
import { Leaf, Menu } from 'lucide-react';
import { useNavigate } from 'react-router';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 HEADER SECTION - Contains the header
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

const HeaderSection: React.FC<Props> = ({ className }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <header
                    className={twMerge('flex items-center justify-between py-5 lg:py-7', className)}
                >
                    <a href="#home" className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
                            <Leaf className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-base font-semibold tracking-tight text-emerald-900">
                                Serenity Wellness
                            </p>
                            <p className="text-sm text-slate-500">
                                Therapy & Psychological Services
                            </p>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                className="cursor-pointer text-sm font-medium text-slate-600 transition hover:text-emerald-700"
                                onClick={() => {
                                    navigate(link.href);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex">
                        <a
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                        >
                            Book a Consultation
                        </a>
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-white text-slate-700 shadow-sm md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </header>
            </div>
        </>
    );
};

export default HeaderSection;
