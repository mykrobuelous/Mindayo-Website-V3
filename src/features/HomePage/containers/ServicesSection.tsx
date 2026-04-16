// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import { servicesData } from '../data/homePageData';

/* ===================================================================== */
/*
🧩 SERVICES SECTION - The services of the company
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

const ServicesSection: React.FC<Props> = ({ className }) => {
    return (
        <section
            id="services"
            className={twMerge(
                'relative overflow-hidden bg-linear-to-b from-white via-[#f6fbf7] to-[#eef8f1] py-20 sm:py-24',
                className
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.10),transparent_30%)]" />
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-emerald-100/50 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Thoughtful care and professional support for every stage of healing
                    </h2>

                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                        We offer compassionate mental health services designed to provide clarity,
                        support, and growth for individuals, families, and organizations.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2">
                    {servicesData.map((service) => (
                        <article
                            key={service.title}
                            className="group overflow-hidden rounded-4xl border border-emerald-100 bg-white shadow-[0_20px_50px_-20px_rgba(16,24,40,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(5,150,105,0.25)]"
                        >
                            <div className="relative h-64 overflow-hidden bg-linear-to-br from-emerald-200 via-emerald-100 to-white">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_35%)]" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <div className="rounded-full border border-emerald-300/60 bg-white/70 px-5 py-2 text-sm font-medium text-emerald-800 backdrop-blur">
                                        Image Placeholder
                                    </div> */}
                                    {service.image ? (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="rounded-full border border-emerald-300/60 bg-white/70 px-5 py-2 text-sm font-medium text-emerald-800 backdrop-blur">
                                            Image Placeholder
                                        </div>
                                    )}
                                </div>

                                <div className="absolute top-5 left-5 rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-sm">
                                    Service
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 p-7 sm:p-8">
                                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                                    {service.title}
                                </h3>
                                <div className="flex flex-col gap-4 px-1">
                                    {service.details.map((detailsItem) => (
                                        <div className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                            <p className="text-sm font-medium text-emerald-800">
                                                {detailsItem}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
