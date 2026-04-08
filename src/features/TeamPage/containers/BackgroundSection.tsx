const BackgroundSection = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-white via-[#f7fbf8] to-[#eef7f1] py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Story
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        The background behind MINDAYO
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Every healing space begins with a reason. This section shares the heart,
                        history, and purpose behind the company.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
                    <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm sm:p-10">
                        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                            Background
                        </p>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
                            How the company began
                        </h3>

                        <p className="mt-5 text-base leading-8 text-slate-600">
                            MINDAYO was created from a deep desire to provide a safe, thoughtful,
                            and compassionate space where people can seek support for their mental
                            and emotional well-being. It was founded with the belief that healing
                            becomes more possible when people are met with understanding,
                            professionalism, and genuine care.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-600">
                            The company grew from the recognition that many individuals, families,
                            and communities need accessible mental health support that feels both
                            personal and trustworthy. More than a service provider, MINDAYO was
                            envisioned as a place where people can pause, reflect, and begin the
                            work of healing with guidance and hope.
                        </p>
                    </article>

                    <article className="rounded-4xl border border-emerald-100 bg-emerald-950 p-8 text-white shadow-sm sm:p-10">
                        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-200 uppercase">
                            Why It Was Created
                        </p>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                            The purpose behind the practice
                        </h3>

                        <p className="mt-5 text-base leading-8 text-emerald-50/85">
                            MINDAYO was built to respond to the growing need for emotional support,
                            psychological guidance, and mental health care that is grounded in
                            empathy and dignity. Its purpose is to help individuals feel seen,
                            heard, and supported as they move through personal struggles, life
                            transitions, and the process of growth.
                        </p>

                        <p className="mt-5 text-base leading-8 text-emerald-50/85">
                            At its core, the company exists to create opportunities for healing,
                            self-understanding, and transformation. It aims to reduce stigma around
                            seeking help and to remind people that caring for the mind is just as
                            important as caring for the rest of life.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default BackgroundSection;
