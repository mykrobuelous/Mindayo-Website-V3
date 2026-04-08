type ServiceItem = {
    title: string;
    description: string;
    image?: string;
};

const services: ServiceItem[] = [
    {
        title: 'Psychological Screening & Assessment',
        description:
            'Comprehensive evaluations to better understand concerns, identify patterns, and provide clear guidance for the next steps in care.',
    },
    {
        title: 'Counselling & Psychotherapy',
        description:
            'Supportive therapy sessions that help clients process emotions, manage difficulties, and build healthier ways of coping and growing.',
    },
    {
        title: 'Individual Therapy',
        description:
            'One-on-one sessions focused on personal healing, emotional clarity, self-understanding, and long-term mental wellness.',
    },
    {
        title: 'Training & Seminars',
        description:
            'Programs designed for schools, organizations, and communities to strengthen mental health awareness, resilience, and emotional intelligence.',
    },
    {
        title: 'Research & Program Development',
        description:
            'Evidence-based studies and mental health initiatives that contribute to better practices, deeper insight, and meaningful community impact.',
    },
];

export default function FeaturedServicesSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#f4fbf6] via-white to-[#eef8f1] py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Services
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Services thoughtfully designed for healing and growth
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Each service is provided with care, professionalism, and a commitment to
                        helping clients feel supported every step of the way.
                    </p>
                </div>

                <div className="mt-16 space-y-8">
                    {services.map((service, index) => {
                        const isReversed = index % 2 === 1;

                        return (
                            <article
                                key={service.title}
                                className="overflow-hidden rounded-4xl border border-emerald-100 bg-white shadow-[0_20px_50px_-20px_rgba(16,24,40,0.14)]"
                            >
                                <div
                                    className={`grid items-stretch lg:grid-cols-2 ${
                                        isReversed
                                            ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                                            : ''
                                    }`}
                                >
                                    <div className="relative min-h-80 overflow-hidden bg-linear-to-br from-emerald-200 via-emerald-100 to-white">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%)]" />

                                        <div className="absolute top-6 left-6 rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-sm">
                                            0{index + 1}
                                        </div>

                                        <div className="flex h-full items-center justify-center p-8">
                                            <div className="rounded-3xl border border-emerald-300/60 bg-white/70 px-6 py-4 text-sm font-medium text-emerald-800 backdrop-blur">
                                                Service Image Placeholder
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-8 sm:p-10 lg:p-12">
                                        <div className="max-w-xl">
                                            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                                                Featured Service
                                            </p>

                                            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                                                {service.title}
                                            </h3>

                                            <p className="mt-5 text-base leading-8 text-slate-600">
                                                {service.description}
                                            </p>

                                            <div className="mt-8 flex flex-wrap gap-3">
                                                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                                                    Compassionate Care
                                                </span>
                                                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                                                    Professional Support
                                                </span>
                                                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                                                    Client-Centered
                                                </span>
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
