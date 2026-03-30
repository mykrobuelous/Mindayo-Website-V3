// 📦 LIBRARIES IMPORT
import { Eye, Target } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 MISSION & VISION SECTION - Where the mission and vision section.
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

const MissionSection_2: React.FC<Props> = ({ className }) => {
    return (
        <section id="about" className={twMerge('bg-[#f8fcf9] py-20 sm:py-24', className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Foundation
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Guided by purpose, compassion, and healing
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Our practice is rooted in a clear mission and a hopeful vision: to provide a
                        safe, supportive space where individuals and families can heal, grow, and
                        move forward with confidence.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 lg:grid-cols-2">
                    <article className="group relative overflow-hidden rounded-4xl border border-emerald-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
                        <div className="absolute top-0 left-0 h-1.5 w-full bg-emerald-600" />

                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                                <Target className="h-7 w-7" />
                            </div>

                            <div>
                                <p className="text-sm font-medium tracking-[0.2em] text-emerald-700 uppercase">
                                    Mission
                                </p>
                                <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                                    Why we do what we do
                                </h3>
                            </div>
                        </div>

                        <p className="mt-8 text-base leading-8 text-slate-600">
                            Our mission is to provide compassionate, evidence-based, and
                            client-centered mental health care that helps individuals, couples, and
                            families find clarity, resilience, and emotional well-being in every
                            stage of life.
                        </p>

                        <div className="mt-8 rounded-2xl bg-emerald-50 p-5">
                            <p className="text-sm font-semibold text-emerald-800">Core focus</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Safe space • Genuine support • Professional guidance • Personal
                                growth
                            </p>
                        </div>
                    </article>

                    <article className="group relative overflow-hidden rounded-4xl border border-emerald-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
                        <div className="absolute top-0 left-0 h-1.5 w-full bg-emerald-400" />

                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                                <Eye className="h-7 w-7" />
                            </div>

                            <div>
                                <p className="text-sm font-medium tracking-[0.2em] text-emerald-700 uppercase">
                                    Vision
                                </p>
                                <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                                    What we hope to build
                                </h3>
                            </div>
                        </div>

                        <p className="mt-8 text-base leading-8 text-slate-600">
                            Our vision is to become a trusted center for healing and transformation,
                            where mental health support is accessible, stigma-free, and empowering
                            for every person seeking peace, restoration, and lasting change.
                        </p>

                        <div className="mt-8 rounded-2xl bg-emerald-50 p-5">
                            <p className="text-sm font-semibold text-emerald-800">Long-term hope</p>
                            <p className="mt-2 text-sm leading-7 text-slate-600">
                                Stronger individuals • Healthier relationships • A more
                                compassionate community
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MissionSection_2;
