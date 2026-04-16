import { featuredServices } from '../data/serviceData';

export default function DetailedServiceSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#f4fbf6] via-white to-[#eef8f1] py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="z-100 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Featured Services
                    </p>

                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        In-depth support through specialized mental health services
                    </h1>

                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                        Our services are designed to offer thoughtful care, professional guidance,
                        and meaningful support for healing, insight, and personal growth.
                    </p>
                </div>

                <div className="mt-16 space-y-12">
                    {featuredServices.map((service, index) => {
                        const isReversed = index % 2 === 1;

                        return (
                            <article
                                key={service.title}
                                className="overflow-hidden rounded-4xl border border-emerald-100 bg-white shadow-[0_24px_60px_-24px_rgba(16,24,40,0.16)]"
                            >
                                <div
                                    className={`grid items-stretch lg:grid-cols-[1fr_1.1fr] ${
                                        isReversed
                                            ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                                            : ''
                                    }`}
                                >
                                    <div className="relative min-h-85 overflow-hidden bg-linear-to-br from-emerald-200 via-emerald-100 to-white sm:min-h-105">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_35%)]" />

                                        <div className="absolute top-6 left-6 z-100 rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white uppercase">
                                            Featured Service
                                        </div>

                                        <div className="flex h-full items-center justify-center p-8 sm:p-10">
                                            {service.image ? (
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="h-full w-full rounded-[1.75rem] object-contain shadow-lg"
                                                />
                                            ) : (
                                                <div className="flex h-full min-h-65 w-full items-center justify-center rounded-[1.75rem] border border-emerald-300/60 bg-white/70 px-6 py-4 text-center text-sm font-medium text-emerald-800 backdrop-blur sm:min-h-80">
                                                    {service.title} Image Placeholder
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-8 sm:p-10 lg:p-12">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-base font-semibold text-emerald-700">
                                                0{index + 1}
                                            </div>

                                            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                                                Specialized Care
                                            </p>
                                        </div>

                                        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                            {service.title}
                                        </h2>

                                        <p className="mt-4 text-lg leading-8 text-emerald-800">
                                            {service.shortDescription}
                                        </p>

                                        <p className="mt-6 text-base leading-8 text-slate-600">
                                            {service.fullDescription}
                                        </p>

                                        <div className="mt-8 grid gap-8 xl:grid-cols-2">
                                            <div>
                                                <h3 className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
                                                    Service Details
                                                </h3>

                                                <div className="mt-4 space-y-3">
                                                    {service.details.map((detail) => (
                                                        <div
                                                            key={detail}
                                                            className="flex items-start gap-3 rounded-2xl bg-emerald-50 px-4 py-3"
                                                        >
                                                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                                                            <p className="text-sm leading-7 text-slate-700">
                                                                {detail}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
                                                    May Be Helpful For
                                                </h3>

                                                <div className="mt-4 flex flex-wrap gap-3">
                                                    {service.suitableFor.map((item) => (
                                                        <span
                                                            key={item}
                                                            className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="mt-6 rounded-3xl border border-emerald-100 bg-[#f7fbf8] p-5">
                                                    <p className="text-sm font-semibold text-slate-900">
                                                        Note
                                                    </p>
                                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                                        Service details may be adjusted based on the
                                                        therapist’s actual approach, specialization,
                                                        and scope of practice.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
