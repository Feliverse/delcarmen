type NewsSectionProps = {
  primaryButtonClass: string;
};

export function NewsSection({ primaryButtonClass }: NewsSectionProps) {
  return (
    <section id="noticias" className="scroll-mt-24 rounded-lg bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">Noticias y Eventos</h2>

      <div className="space-y-4">
        <div className="border-l-4 border-conventual-gold bg-conventual-light p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-conventual-habit">Triduo Pascual</h3>
              <p className="text-sm text-conventual-ash">
                Acompáñanos en la celebración más importante del año cristiano.
              </p>
            </div>
            <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">Próximo</span>
          </div>
        </div>

        <div className="border-l-4 border-conventual-gold bg-conventual-light p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-conventual-habit">Jornada de Adoración Eucarística</h3>
              <p className="text-sm text-conventual-ash">Primer viernes de cada mes de 6 PM a medianoche.</p>
            </div>
            <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">Mensual</span>
          </div>
        </div>

        <div className="border-l-4 border-conventual-gold bg-conventual-light p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif font-semibold text-conventual-habit">Retiro Espiritual</h3>
              <p className="text-sm text-conventual-ash">Profundiza en tu fe con nuestros retiros trimestrales.</p>
            </div>
            <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">Trimestral</span>
          </div>
        </div>
      </div>

      <button className={`${primaryButtonClass} mt-6 w-full`}>Ver Boletín Completo</button>
    </section>
  );
}
