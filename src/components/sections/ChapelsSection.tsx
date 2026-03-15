import type { Chapel } from '../../types/site';

type ChapelsSectionProps = {
  chapels: Chapel[];
  onSelectChapel: (chapel: Chapel) => void;
};

export function ChapelsSection({ chapels, onSelectChapel }: ChapelsSectionProps) {
  const cardVariants = [
    'border-amber-300 bg-amber-50 ring-1 ring-amber-200',
    'border-slate-300 bg-white ring-1 ring-slate-200',
    'border-slate-700 bg-slate-700 text-slate-50 ring-1 ring-slate-500',
  ];

  return (
    <section
      id="capillas"
      className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-white via-amber-50/30 to-slate-100 p-5 shadow-md md:p-10 lg:p-11"
    >
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">
        Nuestras Capillas
      </h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
        La parroquia cuenta con varias comunidades capilla distribuidas en el área de Quintanilla. Cada una celebra su fe bajo la advocación de su patrona y realiza diversas actividades pastorales.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {chapels.map((chapel, index) => (
          <div
            key={chapel.name}
            role="button"
            tabIndex={0}
            onClick={() => onSelectChapel(chapel)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onSelectChapel(chapel);
              }
            }}
            className={`rounded-xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/70 md:p-6 ${cardVariants[index % cardVariants.length]}`}
          >
            <h3 className={`font-serif text-lg font-semibold md:text-xl ${
              index % cardVariants.length === 2 ? 'text-slate-50' : 'text-slate-900'
            }`}>
              {chapel.name}
            </h3>
            <p className={`text-sm leading-relaxed md:text-base ${
              index % cardVariants.length === 2 ? 'text-slate-100' : 'text-slate-600'
            }`}>
              {chapel.patroness}
            </p>
            {chapel.feast && (
              <p className={`mt-0.5 text-xs ${
                index % cardVariants.length === 2 ? 'text-slate-300' : 'text-slate-500'
              }`}>
                Fiesta: {chapel.feast}
              </p>
            )}
            <button
              type="button"
              onClick={() => onSelectChapel(chapel)}
              className={`mt-3 text-xs font-semibold ${
                index % cardVariants.length === 2
                  ? 'text-amber-300 hover:text-amber-200'
                  : 'text-slate-900 hover:text-amber-600'
              }`}
            >
              Ver comunidad →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
