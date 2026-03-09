import type { ParishGroup } from '../../types/site';

type GroupsSectionProps = {
  groups: ParishGroup[];
  onSelectGroup: (group: ParishGroup) => void;
};

export function GroupsSection({ groups, onSelectGroup }: GroupsSectionProps) {
  const groupCardVariants = [
    'border-amber-300 bg-amber-50 ring-1 ring-amber-200',
    'border-slate-300 bg-white ring-1 ring-slate-200',
    'border-slate-700 bg-slate-700 text-slate-50 ring-1 ring-slate-500',
  ];

  return (
    <section id="grupos" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-white via-amber-50/30 to-slate-100 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Nuestros Grupos</h2>

      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Somos una comunidad de fe. Únete a los grupos que enriquecen nuestra vida parroquial.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((grupo, index) => (
          <div
            key={grupo.name}
            role="button"
            tabIndex={0}
            onClick={() => onSelectGroup(grupo)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelectGroup(grupo);
              }
            }}
            className={`rounded-xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/70 md:p-6 ${groupCardVariants[index % groupCardVariants.length]}`}
          >
            <h3 className={`font-serif text-lg font-semibold md:text-xl ${index % groupCardVariants.length === 2 ? 'text-slate-50' : 'text-slate-900'}`}>
              {grupo.name}
            </h3>
            <p className={`text-sm leading-relaxed md:text-base ${index % groupCardVariants.length === 2 ? 'text-slate-100' : 'text-slate-700'}`}>
              {grupo.shortDescription}
            </p>
            <button
              type="button"
              onClick={() => onSelectGroup(grupo)}
              className={`mt-3 text-xs font-semibold ${index % groupCardVariants.length === 2 ? 'text-amber-300 hover:text-amber-200' : 'text-slate-900 hover:text-amber-600'}`}
            >
              Conocer grupo →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
