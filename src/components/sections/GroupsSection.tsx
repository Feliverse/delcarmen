import type { ParishGroup } from '../../types/site';

type GroupsSectionProps = {
  groups: ParishGroup[];
  onSelectGroup: (group: ParishGroup) => void;
};

export function GroupsSection({ groups, onSelectGroup }: GroupsSectionProps) {
  return (
    <section id="grupos" className="animate-fade-in-soft scroll-mt-24 rounded-lg bg-white p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-4 font-serif text-2xl font-semibold text-conventual-habit md:mb-6 md:text-3xl">Nuestros Grupos</h2>

      <p className="mb-5 text-sm leading-relaxed text-conventual-ash md:mb-6 md:text-base">
        Somos una comunidad de fe. Únete a los grupos que enriquecen nuestra vida parroquial.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((grupo) => (
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
            className="rounded-lg border-2 border-conventual-ash p-4 text-left transition hover:border-conventual-gold hover:bg-conventual-light focus:outline-none focus:ring-2 focus:ring-conventual-gold/60 md:p-6"
          >
            <h3 className="font-serif text-lg font-semibold text-conventual-habit md:text-xl">{grupo.name}</h3>
            <p className="text-sm leading-relaxed text-conventual-ash md:text-base">{grupo.shortDescription}</p>
            <button
              type="button"
              onClick={() => onSelectGroup(grupo)}
              className="mt-3 text-xs font-semibold text-conventual-habit hover:text-conventual-gold"
            >
              Saber más →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
