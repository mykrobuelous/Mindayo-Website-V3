import { navLinks } from '@/collection/data/navLinks';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router';
import { twMerge } from 'tailwind-merge';

interface Props {
    className?: string;
}

const FooterSection: React.FC<Props> = ({ className }) => {
    const navigate = useNavigate();
    return (
        <footer className={twMerge('bg-emerald-950 text-white', className)}>
            <div className="border-t border-emerald-900/80">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-emerald-700/60 bg-emerald-900/40 px-4 py-2 text-sm font-medium text-emerald-100">
                                MINDAYO
                            </div>

                            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                Gentle support for healing, growth, and clarity.
                            </h3>

                            <p className="mt-4 max-w-md text-sm leading-7 text-emerald-50/75 sm:text-base">
                                A compassionate mental health practice offering a safe and
                                professional space for emotional well-being, self-understanding, and
                                lasting personal growth.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold tracking-[0.22em] text-emerald-200 uppercase">
                                Quick Links
                            </h4>

                            <div className="mt-5 flex flex-col gap-3">
                                {navLinks.map((link) => (
                                    <p
                                        key={link.label}
                                        className="cursor-pointer text-sm text-emerald-50/75 transition hover:text-white"
                                        onClick={() => {
                                            navigate(link.href);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    >
                                        {link.label}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold tracking-[0.22em] text-emerald-200 uppercase">
                                Contact
                            </h4>

                            <div className="mt-5 space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                                    <p className="text-sm leading-6 text-emerald-50/75">
                                        Cagayan de Oro City, Philippines
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                                    <p className="text-sm leading-6 text-emerald-50/75">
                                        +63 912 345 6789
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                                    <p className="text-sm leading-6 text-emerald-50/75">
                                        hello@mindayo.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-emerald-900/80 pt-6">
                        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                            <p className="text-sm text-emerald-50/60">
                                © 2026 MINDAYO. All rights reserved.
                            </p>

                            <p className="text-sm text-emerald-50/60">
                                Designed for calm, clarity, and care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
