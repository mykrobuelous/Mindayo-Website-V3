import { testimonials } from '@/collection/data/testimonialData';
import { Quote } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import StarRow from '../components/StarRow';

interface Props {
    className?: string;
}

export const TestimonialSection: React.FC<Props> = ({ className }) => {
    return (
        <section
            className={twMerge(
                'relative overflow-hidden bg-linear-to-b from-[#f4fbf6] via-white to-[#eef8f1] py-20 sm:py-24',
                className
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]" />
            <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Testimonials
                    </span>

                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        Words of trust, healing, and growth
                    </h1>

                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                        Every healing journey is personal. These sample testimonials reflect the
                        kind of compassionate support, emotional safety, and professional care that
                        clients may experience.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-4xl border border-emerald-100 bg-emerald-950 p-8 text-white shadow-[0_25px_70px_-20px_rgba(0,0,0,0.35)] sm:p-10">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-100">
                            <Quote className="h-7 w-7" />
                        </div>

                        <h2 className="mt-8 text-3xl font-semibold tracking-tight">
                            A calm and caring space for every step of healing
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-emerald-50/80">
                            Our practice is committed to offering thoughtful, client-centered care
                            where individuals and families feel heard, respected, and supported.
                            This section can be used to highlight stories of growth, resilience, and
                            renewed hope.
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                                <p className="text-3xl font-semibold text-white">200+</p>
                                <p className="mt-2 text-sm leading-6 text-emerald-50/75">
                                    Sessions of compassionate care and support
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                                <p className="text-3xl font-semibold text-white">Safe</p>
                                <p className="mt-2 text-sm leading-6 text-emerald-50/75">
                                    Confidential, warm, and professional environment
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 rounded-[1.75rem] border border-emerald-300/15 bg-white/5 p-6">
                            <p className="text-sm tracking-[0.2em] text-emerald-200/80 uppercase">
                                Note
                            </p>
                            <p className="mt-3 text-sm leading-7 text-emerald-50/80">
                                These are mock testimonials for layout purposes only. Replace them
                                with real client feedback only when appropriate and ethically
                                permitted.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={`${testimonial.name}-${index}`}
                                className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(16,24,40,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(5,150,105,0.22)] sm:p-7"
                            >
                                <StarRow />

                                <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                    “{testimonial.message}”
                                </p>

                                <div className="mt-6 border-t border-emerald-100 pt-5">
                                    <h3 className="text-base font-semibold text-slate-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-emerald-700">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
