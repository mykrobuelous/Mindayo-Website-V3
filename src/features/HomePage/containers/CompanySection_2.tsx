// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 COMPANY SECTION - Company Section version 2
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

const meanings = [
    {
        letter: 'M',
        word: 'Mindfulness',
        description:
            'Encouraging awareness of thoughts, emotions, and the present moment with gentleness and clarity.',
    },
    {
        letter: 'I',
        word: 'Inner Healing',
        description:
            'Supporting the process of understanding pain, restoring balance, and reconnecting with oneself.',
    },
    {
        letter: 'N',
        word: 'Nurture',
        description:
            'Providing a safe, caring space where growth, self-compassion, and emotional strength can develop.',
    },
    {
        letter: 'D',
        word: 'Discovery',
        description:
            'Helping clients explore their experiences, patterns, and personal truths with openness and courage.',
    },
    {
        letter: 'A',
        word: 'Acceptance',
        description:
            'Promoting self-understanding and emotional validation as an important part of healing.',
    },
    {
        letter: 'Y',
        word: 'Yielding to Growth',
        description:
            'Learning to soften resistance, trust the process, and allow positive change to happen over time.',
    },
    {
        letter: 'O',
        word: 'Opportunity',
        description:
            'Seeing each session and each challenge as a chance for healing, transformation, and hope.',
    },
];

interface Props {
    className?: string;
}

const CompanySection_2: React.FC<Props> = ({ className }) => {
    return (
        <section
            className={twMerge(
                'relative overflow-hidden bg-emerald-950 py-20 text-white sm:py-24',
                className
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(110,231,183,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.14),transparent_35%),linear-gradient(to_bottom,rgba(6,78,59,0.96),rgba(2,44,34,1))]" />
            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-300/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-300/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-emerald-100 backdrop-blur">
                        The Meaning Behind Our Name
                    </span>

                    <h2 className="mt-6 text-4xl font-semibold tracking-[0.18em] text-white sm:text-5xl">
                        MINDAYO
                    </h2>

                    <div className="mx-auto mt-5 h-px w-24 bg-emerald-300/40" />

                    <p className="mt-6 text-base leading-8 text-emerald-50/85 sm:text-lg">
                        Our name reflects the heart of our practice. Each letter represents a core
                        value that guides the way we support healing, self-understanding, and
                        emotional growth.
                    </p>
                </div>

                <div className="mt-16 overflow-hidden rounded-4xl border border-emerald-200/10 bg-white/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                    <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
                        <div className="border-b border-emerald-200/10 bg-linear-to-b from-emerald-400/10 to-transparent p-8 lg:border-r lg:border-b-0 lg:p-10">
                            <p className="text-sm tracking-[0.3em] text-emerald-200/80 uppercase">
                                Identity
                            </p>

                            <h3 className="mt-4 text-5xl font-semibold tracking-[0.22em] text-white lg:text-6xl">
                                M
                                <br />
                                I
                                <br />
                                N
                                <br />
                                D
                                <br />
                                A
                                <br />
                                Y
                                <br />O
                            </h3>

                            <p className="mt-8 max-w-56 text-sm leading-7 text-emerald-50/75">
                                A name shaped by calm presence, compassion, and the belief that
                                healing unfolds with care and time.
                            </p>
                        </div>

                        <div className="divide-y divide-emerald-200/10">
                            {meanings.map((item) => (
                                <article
                                    key={item.letter}
                                    className="grid gap-4 px-6 py-6 transition hover:bg-white/5 sm:px-8 lg:grid-cols-[90px_minmax(0,1fr)] lg:gap-6 lg:px-10"
                                >
                                    <div className="flex items-start lg:items-center">
                                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200/20 bg-emerald-300/10 text-xl font-semibold text-emerald-100 shadow-inner shadow-emerald-100/5">
                                            {item.letter}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-2xl font-semibold tracking-tight text-white">
                                            {item.word}
                                        </h4>

                                        <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-50/80 sm:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanySection_2;
