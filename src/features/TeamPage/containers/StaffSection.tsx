type StaffItem = {
    name: string;
    role: string;
    description: string;
};

const staffMembers: StaffItem[] = [
    {
        name: 'Anna Lopez',
        role: 'Administrative Assistant',
        description:
            'Supports daily operations, scheduling, client coordination, and front desk communication with warmth and professionalism.',
    },
    {
        name: 'Mark Reyes',
        role: 'Office Staff',
        description:
            'Assists with office organization, records, and day-to-day support to help the clinic run smoothly and efficiently.',
    },
    {
        name: 'Claire Santos',
        role: 'Client Relations Staff',
        description:
            'Helps clients with inquiries, appointment concerns, and general assistance while maintaining a welcoming environment.',
    },
    {
        name: 'John Cruz',
        role: 'Operations Support',
        description:
            'Provides practical support for internal coordination, materials, and general clinic needs behind the scenes.',
    },
];

export default function StaffSection() {
    return (
        <section className="bg-[#f7fbf8] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Staff
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Meet the team behind the care
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Our staff helps create a welcoming, organized, and supportive environment
                        for every client and every session.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {staffMembers.map((staff) => (
                        <article
                            key={staff.name}
                            className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-2xl font-semibold text-emerald-700">
                                {staff.name
                                    .split(' ')
                                    .map((part) => part[0])
                                    .join('')}
                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                {staff.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-emerald-700">
                                {staff.role}
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {staff.description}
                            </p>

                            <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                                Staff Photo Placeholder
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
