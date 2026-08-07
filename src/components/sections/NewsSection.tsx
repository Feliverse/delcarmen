import type { ParishNewsEvent } from '../../types/site';

type NewsSectionProps = {
  events: ParishNewsEvent[];
  parishFacebookUrl: string;
};

export function NewsSection({ events, parishFacebookUrl }: NewsSectionProps) {
  const currentMonth = new Date().getMonth();

  return (
    <section id="noticias" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-white via-amber-50/30 to-slate-50 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Noticias y Eventos</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Mantente al día con las fiestas patronales, celebraciones especiales y encuentros de nuestra comunidad franciscana conventual.
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => {
          const isCurrentMonth = typeof event.monthIndex === 'number' && event.monthIndex === currentMonth;
          const referenceUrl = event.referenceUrl || (isCurrentMonth ? parishFacebookUrl : undefined);
          const referenceLabel = event.referenceLabel || (event.referenceUrl ? 'Ver más' : 'Ver más en Facebook');

          return (
            <article
              key={`${event.title}-${event.dateLabel}`}
              className={`overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 ${event.isFeatured ? 'border-amber-400 ring-1 ring-amber-300' : 'border-slate-200'}`}
            >
              <div className="relative h-44 overflow-hidden">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-amber-200 via-white to-slate-200" />
                )}
                <div className="absolute inset-0 bg-slate-950/30" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-800">
                    {event.dateLabel}
                  </span>
                  {isCurrentMonth && (
                    <span className="rounded-full bg-amber-300/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-900">
                      Evento del mes
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{event.chapelName}</p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-slate-900 md:text-xl">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{event.description}</p>

                {referenceUrl && (
                  <a
                    href={referenceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-amber-300 bg-amber-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-100"
                  >
                    {referenceLabel} →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-5 text-xs text-slate-500">
        Si luego me compartes las fotos de los eventos, las integramos en cada tarjeta correspondiente.
      </p>
    </section>
  );
}
