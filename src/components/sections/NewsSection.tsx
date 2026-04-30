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

      

      <button className={`${primaryButtonClass} mt-6 w-full border border-amber-400 bg-amber-300 font-semibold text-slate-900 hover:bg-amber-200 hover:text-slate-900`}>
        Ver Más Novedades →
      </button>
    </section>
  );
}
