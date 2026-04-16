import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-linear-to-b from-white via-[#f7fbf8] to-[#eef7f1] py-20 sm:py-24"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.07),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Contact Us
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        We are here to support you
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Reach out to us for inquiries, appointments, and service information. We are
                        happy to help you take the next step toward healing and support.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-4xl border border-emerald-100 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(16,24,40,0.12)] sm:p-10">
                        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                            Contact Information
                        </p>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                            Get in touch with MINDAYO
                        </h3>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-4 rounded-[1.25rem] bg-emerald-50 px-5 py-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                                    <MapPin className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Address</p>
                                    <p className="mt-1 text-sm leading-7 text-slate-600 sm:text-base">
                                        Cagayan de Oro City, Philippines
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-[1.25rem] bg-emerald-50 px-5 py-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                                    <Phone className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Phone</p>
                                    <p className="mt-1 text-sm leading-7 text-slate-600 sm:text-base">
                                        +63 912 345 6789
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-[1.25rem] bg-emerald-50 px-5 py-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                                    <Mail className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Email</p>
                                    <p className="mt-1 text-sm leading-7 text-slate-600 sm:text-base">
                                        hello@mindayo.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-[1.25rem] bg-emerald-50 px-5 py-4">
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Facebook Page
                                    </p>
                                    <p className="mt-1 text-sm leading-7 text-slate-600 sm:text-base">
                                        Mindayo Wellness Center
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-4xl border border-emerald-100 bg-emerald-950 p-8 text-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)] sm:p-10">
                        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-200 uppercase">
                            Availability
                        </p>

                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            Visit, call, or message us
                        </h3>

                        <p className="mt-5 text-base leading-8 text-emerald-50/80">
                            Whether you are seeking information, booking an appointment, or simply
                            taking the first step, our team is ready to assist you with care and
                            professionalism.
                        </p>

                        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-100">
                                    <Clock3 className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-white">Office Hours</p>
                                    <div className="mt-3 space-y-2 text-sm leading-7 text-emerald-50/80">
                                        <p>Monday to Friday — 9:00 AM to 6:00 PM</p>
                                        <p>Saturday — 8:00 AM to 12:00 PM</p>
                                        <p>Sunday — Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                            <p className="text-sm font-semibold text-white">Appointment Note</p>
                            <p className="mt-3 text-sm leading-7 text-emerald-50/80">
                                For consultations and therapy sessions, contacting the clinic ahead
                                of time is recommended to confirm availability and scheduling.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
