type NewsSectionProps = {
  primaryButtonClass: string;
};

export function NewsSection({ primaryButtonClass }: NewsSectionProps) {
  return (
    <section id="noticias" className="animate-fade-in-soft scroll-mt-24 rounded-lg bg-white p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-4 font-serif text-2xl font-semibold text-conventual-habit md:mb-6 md:text-3xl">Noticias y Eventos</h2>

      <div className="space-y-4">
        <div className="border-l-4 border-conventual-gold bg-conventual-light p-4 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-conventual-habit md:text-xl">Triduo Pascual</h3>
              <p className="text-sm leading-relaxed text-conventual-ash md:text-base">
                Acompáñanos en la celebración más importante del año cristiano.
              </p>
            </div>
            <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">Próximo</span>
          </div>
        </div>

        <div className="border-l-4 border-conventual-gold bg-conventual-light p-4 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-conventual-habit md:text-xl">Jornada de Adoración Eucarística</h3>
              <p className="text-sm leading-relaxed text-conventual-ash md:text-base">Primer viernes de cada mes de 6 PM a medianoche.</p>
            </div>
            <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">Mensual</span>
          </div>
        </div>

        <div className="border-l-4 border-conventual-gold bg-conventual-light p-4 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-conventual-habit md:text-xl">Retiro Espiritual</h3>
              <p className="text-sm leading-relaxed text-conventual-ash md:text-base">Profundiza en tu fe con nuestros retiros trimestrales.</p>
            </div>
            <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">Trimestral</span>
          </div>
        </div>
      </div>

      <button className={`${primaryButtonClass} mt-6 w-full`}>Ver Boletín Completo</button>
    </section>
  );
}
