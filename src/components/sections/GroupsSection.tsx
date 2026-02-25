import type { ParishGroup } from '../../types/site';

type GroupsSectionProps = {
  groups: ParishGroup[];
  onSelectGroup: (group: ParishGroup) => void;
};

export function GroupsSection({ groups, onSelectGroup }: GroupsSectionProps) {
  return (
    <section id="grupos" className="scroll-mt-24 rounded-lg bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">Nuestros Grupos</h2>

      <p className="mb-6 text-conventual-ash">
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
            className="rounded-lg border-2 border-conventual-ash p-4 text-left transition hover:border-conventual-gold hover:bg-conventual-light focus:outline-none focus:ring-2 focus:ring-conventual-gold/60"
          >
            <h3 className="font-serif font-semibold text-conventual-habit">{grupo.name}</h3>
            <p className="text-sm text-conventual-ash">{grupo.shortDescription}</p>
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
