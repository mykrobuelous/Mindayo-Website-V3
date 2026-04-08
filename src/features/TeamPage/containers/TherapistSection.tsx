type TherapistItem = {
    name: string;
    role: string;
    credentials: string[];
    description: string;
    specialties: string[];
};

const therapists: TherapistItem[] = [
    {
        name: 'Dr. Maria Santos',
        role: 'Clinical Psychologist',
        credentials: [
            'PhD in Clinical Psychology',
            'Licensed Psychologist',
            '10+ years of therapy experience',
        ],
        description:
            'Dr. Maria Santos provides compassionate, evidence-based care for individuals navigating anxiety, emotional stress, trauma, and life transitions. Her approach is warm, structured, and grounded in creating emotional safety for every client.',
        specialties: ['Anxiety', 'Trauma Recovery', 'Emotional Regulation', 'Life Transitions'],
    },
    {
        name: 'Dr. Angela Reyes',
        role: 'Counseling Psychologist',
        credentials: [
            'PsyD in Counseling Psychology',
            'Licensed Psychometrician',
            'Specialized in adolescent and family support',
        ],
        description:
            'Dr. Angela Reyes focuses on helping adolescents, young adults, and families build healthier communication, stronger emotional awareness, and greater resilience. She brings a calm, relational, and client-centered style to her work.',
        specialties: [
            'Family Concerns',
            'Adolescent Counseling',
            'Self-Esteem',
            'Stress Management',
        ],
    },
    {
        name: 'Mr. Daniel Cruz',
        role: 'Psychotherapist',
        credentials: [
            'MA in Psychology',
            'Certified Psychotherapist',
            'Extensive background in individual counseling',
        ],
        description:
            'Daniel Cruz supports clients dealing with grief, burnout, inner conflict, and identity concerns. His sessions emphasize reflective exploration, practical coping tools, and a steady therapeutic presence.',
        specialties: ['Grief', 'Burnout', 'Identity Concerns', 'Personal Growth'],
    },
    {
        name: 'Ms. Patricia Lim',
        role: 'Mental Health Counselor',
        credentials: [
            'MA in Guidance and Counseling',
            'Licensed Professional Teacher',
            'Trained in mindfulness-based approaches',
        ],
        description:
            'Patricia Lim works with clients who want to better understand their emotions, patterns, and relationships. Her therapeutic style combines gentle inquiry, mindfulness, and emotional validation to support sustainable healing.',
        specialties: ['Mindfulness', 'Relationships', 'Emotional Awareness', 'Self-Compassion'],
    },
    {
        name: 'Dr. Christine Tan',
        role: 'Assessment & Research Specialist',
        credentials: [
            'PhD in Psychology',
            'Licensed Psychologist',
            'Expert in psychological assessment and research',
        ],
        description:
            'Dr. Christine Tan specializes in psychological screening, assessments, and research-informed clinical insight. She helps clients and organizations gain clarity through careful evaluation and meaningful interpretation.',
        specialties: ['Psychological Assessment', 'Research', 'Diagnostics', 'Clinical Evaluation'],
    },
];

const AboutTherapistSection = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-[#f4fbf6] via-white to-[#eef8f1] py-20 sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_30%)]" />
            <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        About Our Team
                    </span>

                    <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        Meet the therapists behind MINDAYO
                    </h1>

                    <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                        Our team is committed to offering compassionate, professional, and
                        thoughtful care. Each therapist brings their own expertise, approach, and
                        heart for healing.
                    </p>
                </div>

                <div className="mt-16 space-y-8">
                    {therapists.map((therapist, index) => {
                        const isReversed = index % 2 === 1;

                        return (
                            <article
                                key={therapist.name}
                                className="overflow-hidden rounded-4xl border border-emerald-100 bg-white shadow-[0_20px_50px_-20px_rgba(16,24,40,0.14)]"
                            >
                                <div
                                    className={`grid items-stretch lg:grid-cols-2 ${
                                        isReversed
                                            ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                                            : ''
                                    }`}
                                >
                                    <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-700 p-8 text-white sm:p-10">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(167,243,208,0.18),transparent_35%)]" />

                                        <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
                                            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl font-semibold text-white backdrop-blur">
                                                {therapist.name
                                                    .split(' ')
                                                    .slice(0, 2)
                                                    .map((part) => part[0])
                                                    .join('')}
                                            </div>

                                            <p className="mt-6 text-sm tracking-[0.24em] text-emerald-100/80 uppercase">
                                                Therapist Profile
                                            </p>

                                            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                                                {therapist.name}
                                            </h2>

                                            <p className="mt-2 text-base text-emerald-50/85">
                                                {therapist.role}
                                            </p>

                                            <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 px-5 py-3 text-sm text-emerald-50/85 backdrop-blur">
                                                Photo Placeholder
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 sm:p-10">
                                        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-700 uppercase">
                                            Credentials & Background
                                        </p>

                                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                            Professional qualifications and focus
                                        </h3>

                                        <p className="mt-5 text-base leading-8 text-slate-600">
                                            {therapist.description}
                                        </p>

                                        <div className="mt-8">
                                            <h4 className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
                                                Credentials
                                            </h4>

                                            <div className="mt-4 flex flex-wrap gap-3">
                                                {therapist.credentials.map((credential) => (
                                                    <span
                                                        key={credential}
                                                        className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                                                    >
                                                        {credential}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <h4 className="text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase">
                                                Specialties
                                            </h4>

                                            <div className="mt-4 flex flex-wrap gap-3">
                                                {therapist.specialties.map((specialty) => (
                                                    <span
                                                        key={specialty}
                                                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
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
};

export default AboutTherapistSection;
