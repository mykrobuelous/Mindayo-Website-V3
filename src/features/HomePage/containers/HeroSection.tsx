// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import { Phone } from 'lucide-react';
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
        <section
            id="home"
            className={twMerge('relative overflow-hidden bg-white text-slate-800', className)}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(187,247,208,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,252,231,0.55),transparent_40%)]" />

            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
            <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-green-50 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-50 blur-3xl" />

            <div className="relative mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid min-h-[calc(100vh-96px)] items-center gap-14 py-10 lg:grid-cols-2 lg:gap-10 lg:py-5">
                    <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Mind + Well-Being + Mindanao
                        </div>

                        <h1 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            <span className="text-emerald-700">Mindayo</span> Pyschological Care
                            Center
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            We provide thoughtful, professional therapy services for individuals,
                            couples, and families seeking support, emotional balance, and lasting
                            personal growth.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                            >
                                Schedule an Appointment
                            </a>

                            <a
                                href="#services"
                                className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                            >
                                Explore Services
                            </a>
                        </div>

                        <div className="mt-10 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-emerald-100">
                                    <Phone className="h-4 w-4 text-emerald-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Call us</p>
                                    <p>(123) 456-7890</p>
                                </div>
                            </div>

                            <div className="hidden h-10 w-px bg-slate-200 sm:block" />

                            <div>
                                <p className="font-medium text-slate-900">Available for</p>
                                <p>In-person sessions • Online consultations</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-4xl bg-emerald-100/50 blur-2xl" />

                        <div className="relative overflow-hidden rounded-4xl border border-emerald-100 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(16,24,40,0.18)]">
                            <div className="overflow-hidden rounded-3xl bg-emerald-50">
                                <img
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                                    alt="Calm nature landscape representing peace and healing"
                                    className="h-105 w-full object-cover sm:h-125"
                                />
                            </div>

                            <div className="absolute right-8 bottom-8 left-8 rounded-3xl border border-white/50 bg-white/85 p-5 backdrop-blur">
                                <p className="text-sm font-semibold text-emerald-800">
                                    Professional, gentle, and confidential support
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Helping clients navigate anxiety, emotional distress,
                                    relationship concerns, life transitions, and personal healing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
