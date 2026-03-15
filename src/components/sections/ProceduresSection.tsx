export function ProceduresSection() {
  return (
    <section id="tramites" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-amber-50 via-white to-slate-50 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Trámites y Sacramentos</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Encuentra aquí los requisitos principales para cada sacramento y proceso pastoral de la comunidad franciscana conventual.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-sm ring-1 ring-amber-200 md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">Sacramento</p>
          <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 md:text-xl">Bautismo</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
            <li>• Solicitar cita con la parroquia de Quintanilla</li>
            <li>• Certificado de nacimiento</li>
            <li>• Padrino/Madrina confirma su fe</li>
            <li>• Preparación de padres (opcional)</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800">Sacramento</p>
          <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 md:text-xl">Matrimonio</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
            <li>• Solicitar con 6 meses de anticipación</li>
            <li>• Acta de bautismo de ambos</li>
            <li>• Certificado de soltería</li>
            <li>• Preparación matrimonial (obligatoria)</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-600 bg-slate-600 p-4 text-slate-50 shadow-sm ring-1 ring-slate-400 md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-slate-200/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">Sacramento</p>
          <h3 className="mb-2 font-serif text-lg font-semibold text-slate-50 md:text-xl">Confirmación</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-slate-100 md:text-base">
            <li>• Estar bautizado</li>
            <li>• Estar en gracia de Dios</li>
            <li>• Catecismo de preparación</li>
            <li>• Aceptación personal de la fe</li>
          </ul>
        </article>

        <article className="rounded-xl border border-amber-400 bg-amber-300 p-4 text-slate-900 shadow-sm ring-1 ring-amber-400/60 md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-white/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">Sacramento</p>
          <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 md:text-xl">Reconciliación</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-slate-800 md:text-base">
            <li>• Disponible durante confesiones</li>
            <li>• No requiere cita previa</li>
            <li>• Confidencialidad garantizada</li>
            <li>• Encuentro personal con el fraile sacerdote</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800">Sacramento</p>
          <h3 className="mb-2 font-serif text-lg font-semibold text-slate-900 md:text-xl">Orden sacerdotal u Orden Sagrado</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-slate-700 md:text-base">
            <li>• Discernimiento vocacional acompañado</li>
            <li>• Formación en seminario o casa de formación</li>
            <li>• Etapas de ministerio según la Iglesia</li>
            <li>• Contacto previo con la parroquia de Quintanilla</li>
          </ul>
        </article>
      </div>

      <p className="mt-5 rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700 md:mt-6 md:text-base">
        <strong>¿Preguntas?</strong> Contáctanos directamente por teléfono o email para más detalles sobre cualquier trámite.
      </p>
    </section>
  );
}
