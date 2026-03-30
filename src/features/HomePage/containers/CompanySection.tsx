// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 COMPANY SECTION - Description of the company
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

const CompanySection: React.FC<Props> = ({ className }) => {
    return (
        <section className={twMerge('bg-white py-20 sm:py-24', className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Name, Our Meaning
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        MINDAYO
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Our company name reflects the values at the heart of our practice. Each
                        letter represents a guiding principle in the journey of healing, growth, and
                        emotional well-being.
                    </p>
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {meanings.map((item) => (
                        <article
                            key={item.letter}
                            className="rounded-[1.75rem] border border-emerald-100 bg-[#f8fcf9] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-7"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white">
                                    {item.letter}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900">
                                        {item.word}
                                    </h3>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanySection;
