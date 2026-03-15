type NewsSectionProps = {
  primaryButtonClass: string;
};

export function NewsSection({ primaryButtonClass }: NewsSectionProps) {
  return (
    <section id="noticias" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-white via-amber-50/30 to-slate-50 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Noticias y Eventos</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Mantente al día con las celebraciones y encuentros de nuestra comunidad franciscana conventual.
      </p>

      <div className="space-y-4">
        <article className="rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-sm ring-1 ring-amber-200 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-slate-900 md:text-xl">Papa León XIV proclama Año Jubilar Franciscano
por el 800 aniversario del tránsito de San Francisco de Asís</h3>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                Acompáñanos en la celebración más importante de la vida franciscana.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900">Próximo</span>
          </div>
        </article>

        <article className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-slate-900 md:text-xl">Jornada de Adoración Eucarística</h3>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">Primer viernes de cada mes de 6 PM a medianoche.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-100">Mensual</span>
          </div>
        </article>

        <article className="rounded-xl border border-slate-700 bg-slate-700 p-4 text-slate-50 shadow-sm ring-1 ring-slate-500 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-slate-50 md:text-xl">Retiro Espiritual</h3>
              <p className="text-sm leading-relaxed text-slate-100 md:text-base">Profundiza en tu fe con nuestros retiros trimestrales.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-slate-900">Trimestral</span>
          </div>
        </article>
      </div>

      <button className={`${primaryButtonClass} mt-6 w-full border border-amber-400 bg-amber-300 font-semibold text-slate-900 hover:bg-amber-200 hover:text-slate-900`}>
        Ver Boletín Completo →
      </button>
    </section>
  );
}
