// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import BackgroundImage from '@/shared/assets/Sunlight Forest.png';
/* ===================================================================== */
/*
🧩 HERO SECTION - Hero Section of the website.
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

const HeroSection: React.FC<Props> = ({ className }) => {
    return (
        <div>
            <section className={twMerge('relative min-h-screen w-full overflow-hidden', className)}>
                {/* Background image */}
                <img
                    src={BackgroundImage}
                    alt="Background"
                    className="absolute inset-0 h-full w-full bg-cover bg-center object-cover brightness-90 saturate-50"
                />

                {/* White-green overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-white/80 via-green-50/75 to-green-100/85" />

                {/* Content */}
                <div className="relative z-10 flex min-h-screen flex-col">
                    {/* Navbar */}
                    <nav className="flex items-center justify-between border-b border-green-200/30 bg-white/60 px-11 py-5 backdrop-blur-md">
                        {/* Logo */}
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 3C12 3 7 8 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 8 12 3 12 3Z"
                                        fill="rgba(80,160,100,0.75)"
                                    />
                                    <path
                                        d="M12 18V22"
                                        stroke="rgba(80,160,100,0.6)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <div
                                    className="text-xl font-medium tracking-wide text-green-900"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Serenity Mind
                                </div>
                                <div className="text-[9.5px] tracking-widest text-green-800/50 uppercase">
                                    Therapy & Wellness
                                </div>
                            </div>
                        </div>

                        {/* Nav links */}
                        <ul className="flex list-none items-center gap-8">
                            {['About', 'Services', 'Our Team', 'Contact'].map((link) => (
                                <li
                                    key={link}
                                    className="text-sm tracking-wide text-green-700 no-underline transition-colors hover:text-green-900"
                                >
                                    {link}
                                </li>
                            ))}
                            <li className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-green-800">
                                Book a Session
                            </li>
                        </ul>
                    </nav>

                    {/* Hero body */}
                    <div className="flex flex-1 flex-col items-center justify-center px-10 pb-14 text-center">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-1.5 text-[10.5px] tracking-widest text-green-800 uppercase">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                            Licensed Professional Therapists
                        </div>

                        {/* Headline */}
                        <h1
                            className="mb-5 max-w-2xl text-5xl leading-snug font-medium tracking-tight text-green-950"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            A space to heal,{' '}
                            <em className="text-green-700 italic">grow, and find peace</em>
                        </h1>

                        {/* Subtext */}
                        <p className="mb-9 max-w-md text-sm leading-relaxed font-light text-green-800/70">
                            Compassionate, evidence-based therapy tailored to you. We walk with you
                            through every step of your journey toward wellbeing.
                        </p>

                        {/* CTAs */}
                        <div className="flex items-center gap-3">
                            <button className="cursor-pointer rounded-full border-none bg-green-700 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-green-800">
                                Book a Free Consultation
                            </button>
                            <button className="cursor-pointer rounded-full border border-green-700/30 bg-white/70 px-7 py-3 text-sm text-green-800 transition-colors hover:bg-white/90">
                                Explore Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
