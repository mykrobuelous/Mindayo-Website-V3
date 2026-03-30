// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 MISSION SECTION - Mission and vision section of the website.
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

const MissionSection: React.FC<Props> = ({ className }) => {
    return (
        <section className={twMerge('w-full bg-[#f7fdf8] px-16 py-20', className)}>
            {/* Section label */}
            <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-green-500/35" />
                <span className="text-[10.5px] font-normal tracking-[0.13em] text-green-600 uppercase">
                    Who we are
                </span>
                <div className="h-px w-10 bg-green-500/35" />
            </div>

            {/* Intro */}
            <div className="mb-16 text-center">
                <h2
                    className="mb-4 text-[42px] leading-snug font-medium tracking-tight text-green-950"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    Rooted in care,
                    <br />
                    <em className="text-green-700 italic">guided by purpose</em>
                </h2>
                <p className="mx-auto max-w-md text-sm leading-relaxed font-light text-green-800/70">
                    Everything we do is shaped by a deep commitment to your healing journey — from
                    the values we hold to the vision we work toward every day.
                </p>
            </div>

            {/* Mission + Vision cards */}
            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6">
                {/* Mission */}
                <div className="relative overflow-hidden rounded-2xl border border-green-500/15 bg-white p-9">
                    <div className="absolute top-0 right-0 left-0 h-0.75 rounded-t-2xl bg-green-700" />
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9" stroke="#3a7d50" strokeWidth="1.5" />
                            <path
                                d="M12 7v5l3 3"
                                stroke="#3a7d50"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p className="mb-2.5 text-[10px] font-medium tracking-[0.13em] text-green-600 uppercase">
                        Our Mission
                    </p>
                    <h3
                        className="mb-4 text-[26px] leading-snug font-medium tracking-tight text-green-950"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        To walk with you, every step of the way
                    </h3>
                    <p className="text-[13.5px] leading-relaxed font-light text-green-800/75">
                        We provide compassionate, evidence-based mental health support in a safe and
                        non-judgmental space — empowering individuals to understand themselves,
                        overcome challenges, and live fuller lives.
                    </p>
                </div>

                {/* Vision */}
                <div className="relative overflow-hidden rounded-2xl border border-green-500/15 bg-white p-9">
                    <div className="absolute top-0 right-0 left-0 h-0.75 rounded-t-2xl bg-green-500/30" />
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M12 3C12 3 7 8 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 8 12 3 12 3Z"
                                fill="rgba(58,125,80,0.2)"
                                stroke="#3a7d50"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M12 18V21"
                                stroke="#3a7d50"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <p className="mb-2.5 text-[10px] font-medium tracking-[0.13em] text-green-600 uppercase">
                        Our Vision
                    </p>
                    <h3
                        className="mb-4 text-[26px] leading-snug font-medium tracking-tight text-green-950"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        A world where mental wellness is within reach for all
                    </h3>
                    <p className="text-[13.5px] leading-relaxed font-light text-green-800/75">
                        We envision a community where seeking help is met with dignity, access is
                        never a barrier, and every person has the tools to thrive — not just
                        survive.
                    </p>
                </div>
            </div>

            {/* Core values strip */}
            <div className="mx-auto mt-6 flex max-w-3xl items-center gap-8 rounded-2xl border border-green-500/15 bg-white px-10 py-8">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-green-500/25 bg-green-500/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 21C12 21 4 15 4 9C4 6.24 6.24 4 9 4C10.5 4 11.86 4.66 12.83 5.72C13.14 5.38 13.5 5.08 13.9 4.84"
                            stroke="#3a7d50"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M15 4C17.76 4 20 6.24 20 9C20 15 12 21 12 21"
                            stroke="#3a7d50"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="flex-1">
                    <h3
                        className="mb-3 text-[22px] font-medium text-green-950"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Our core values
                    </h3>
                    <div className="flex flex-col gap-2.5">
                        {[
                            { label: 'Compassion', desc: 'meeting you exactly where you are' },
                            { label: 'Integrity', desc: 'honest, ethical, and transparent care' },
                            {
                                label: 'Growth',
                                desc: 'believing in your capacity to heal and thrive',
                            },
                        ].map(({ label, desc }) => (
                            <div key={label} className="flex items-start gap-2.5">
                                <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                                <p className="text-[13px] leading-relaxed font-light text-green-800/80">
                                    <strong className="font-medium text-green-950">{label}</strong>{' '}
                                    — {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="shrink-0 cursor-pointer rounded-full border-none bg-green-700 px-6 py-3 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-green-800">
                    Meet our therapist
                </button>
            </div>
        </section>
    );
};

export default MissionSection;
