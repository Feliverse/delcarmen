export function ProceduresSection() {
  return (
    <section id="tramites" className="animate-fade-in-soft scroll-mt-24 rounded-lg bg-white p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-4 font-serif text-2xl font-semibold text-conventual-habit md:mb-6 md:text-3xl">Trámites y Sacramentos</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-conventual-light p-4 md:p-6">
          <h3 className="mb-2 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Bautismo</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li>• Solicitar cita con la parroquia</li>
            <li>• Certificado de nacimiento</li>
            <li>• Padrino/Madrina confirma su fe</li>
            <li>• Preparación de padres (opcional)</li>
          </ul>
        </div>

        <div className="rounded-lg bg-conventual-light p-4 md:p-6">
          <h3 className="mb-2 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Matrimonio</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li>• Solicitar con 6 meses de anticipación</li>
            <li>• Acta de bautismo de ambos</li>
            <li>• Certificado de soltería</li>
            <li>• Preparación matrimonial (obligatoria)</li>
          </ul>
        </div>

        <div className="rounded-lg bg-conventual-light p-4 md:p-6">
          <h3 className="mb-2 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Confirmación</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li>• Estar bautizado</li>
            <li>• Estar en gracia de Dios</li>
            <li>• Catecismo de preparación</li>
            <li>• Aceptación personal de la fe</li>
          </ul>
        </div>

        <div className="rounded-lg bg-conventual-light p-4 md:p-6">
          <h3 className="mb-2 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Reconciliación</h3>
          <ul className="space-y-1 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li>• Disponible durante confesiones</li>
            <li>• No requiere cita previa</li>
            <li>• Confidencialidad garantizada</li>
            <li>• Encuentro personal con el sacerdote</li>
          </ul>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-conventual-ash md:mt-6 md:text-base">
        <strong>¿Preguntas?</strong> Contáctanos directamente por teléfono o email para más detalles sobre cualquier trámite.
      </p>
    </section>
  );
}
