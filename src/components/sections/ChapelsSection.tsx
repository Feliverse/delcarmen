import type { Chapel } from '../../types/site';

type ChapelsSectionProps = {
  chapels: Chapel[];
  onSelectChapel: (chapel: Chapel) => void;
};

const FEAST_MONTHS: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11,
};

function getFeastMonth(feast: string) {
  const normalized = feast.toLowerCase();
  const match = Object.keys(FEAST_MONTHS).find((month) => normalized.includes(month));
  return match ? FEAST_MONTHS[match] : null;
}

export function ChapelsSection({ chapels, onSelectChapel }: ChapelsSectionProps) {
  const cardVariants = [
    'border-amber-300 bg-amber-50 ring-1 ring-amber-200',
    'border-slate-300 bg-white ring-1 ring-slate-200',
    'border-slate-700 bg-slate-700 text-slate-50 ring-1 ring-slate-500',
  ];

  const currentMonth = new Date().getMonth();

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
          (() => {
            const feastMonth = chapel.feast ? getFeastMonth(chapel.feast) : null;
            const isFeastThisMonth = feastMonth === currentMonth;

            return (
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
            className={`group relative overflow-hidden rounded-xl border p-4 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-300/70 md:p-6 ${cardVariants[index % cardVariants.length]} ${isFeastThisMonth ? 'border-amber-500 ring-2 ring-amber-400/70 shadow-lg shadow-amber-200/50' : 'hover:border-amber-300'}`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isFeastThisMonth ? 'group-hover:opacity-100' : ''}`}
              style={{ backgroundImage: `url(${chapel.image})` }}
            />
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-slate-950/10 transition-colors duration-300 group-hover:bg-slate-950/55 ${isFeastThisMonth ? 'bg-slate-950/20 group-hover:bg-slate-950/60' : ''}`}
            />

            <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="font-serif text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-white md:text-xl">
                  {chapel.name}
                </h3>
                {isFeastThisMonth && (
                  <span className="shrink-0 rounded-full bg-amber-300/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900 transition-colors duration-300 group-hover:bg-amber-200">
                    Fiesta del mes
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-100 md:text-base">
                {chapel.patroness}
              </p>
              {chapel.feast && (
                <p className="mt-0.5 text-xs text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                  Fiesta: {chapel.feast}
                </p>
              )}
              <button
                type="button"
                onClick={() => onSelectChapel(chapel)}
                className="mt-3 text-xs font-semibold text-slate-900 transition-colors duration-300 group-hover:text-amber-200"
              >
                Ver comunidad →
              </button>
            </div>
          </div>
            );
          })()
        ))}
      </div>
    </section>
  );
}
