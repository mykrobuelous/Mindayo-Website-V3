import { staffMembers } from '../data/teamData';

export default function AssociatesSection() {
    return (
        <section className="bg-[#f7fbf8] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
                        Our Associates
                    </span>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Meet our associates
                    </h2>

                    <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                        Our associates are dedicated mental health practitioners who provide
                        compassionate, client-centered care — working collaboratively within our
                        team to ensure every individual receives thoughtful and consistent support.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {staffMembers.map((staff) => (
                        <article
                            key={staff.name}
                            className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <img
                                src={staff.image}
                                alt={staff.name}
                                className="mx-auto h-40 w-40 rounded-full object-cover"
                            />

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                {staff.name}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-emerald-700">
                                {staff.role}
                            </p>

                            <p className="mt-4 text-sm leading-7 text-slate-600">
                                {staff.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
