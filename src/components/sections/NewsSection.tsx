type NewsSectionProps = {
  primaryButtonClass: string;
};

export function NewsSection({ primaryButtonClass }: NewsSectionProps) {
  const holyWeekImage = `${import.meta.env.BASE_URL}noticias/semana_santa.jpeg`;
  const palmSundayImage = `${import.meta.env.BASE_URL}noticias/domingo_de_ramos.jpeg`;

  return (
    <section id="noticias" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-white via-amber-50/30 to-slate-50 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Noticias y Eventos</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Mantente al día con las celebraciones y encuentros de nuestra comunidad franciscana conventual.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="overflow-hidden rounded-xl border border-amber-300 bg-amber-50 shadow-sm ring-1 ring-amber-200">
          <img
            src={holyWeekImage}
            alt="Programación de Semana Santa"
            className="max-h-[42rem] w-full bg-white object-contain"
            loading="lazy"
          />
          <div className="space-y-2 p-4 md:p-5">
            <span className="inline-flex items-center rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900">Semana Santa</span>
            <h3 className="font-serif text-lg font-semibold text-slate-900 md:text-xl">Programación de Semana Santa</h3>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Revisa los horarios de celebraciones y acompáñanos en este camino de fe.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm ring-1 ring-slate-200">
          <img
            src={palmSundayImage}
            alt="Programación de Domingo de Ramos"
            className="max-h-[42rem] w-full bg-white object-contain"
            loading="lazy"
          />
          <div className="space-y-2 p-4 md:p-5">
            <span className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-100">Celebración</span>
            <h3 className="font-serif text-lg font-semibold text-slate-900 md:text-xl">Domingo de Ramos</h3>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Consulta el afiche oficial para participar en la celebración de inicio de Semana Santa.
            </p>
          </div>
        </article>
      </div>

      <button className={`${primaryButtonClass} mt-6 w-full border border-amber-400 bg-amber-300 font-semibold text-slate-900 hover:bg-amber-200 hover:text-slate-900`}>
        Ver Más Novedades →
      </button>
    </section>
  );
}
