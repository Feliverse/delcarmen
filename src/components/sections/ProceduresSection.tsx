export function ProceduresSection() {
  return (
    <section id="tramites" className="scroll-mt-24 rounded-lg bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">Trámites y Sacramentos</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-conventual-light p-4">
          <h3 className="mb-2 font-serif text-lg text-conventual-habit">Bautismo</h3>
          <ul className="space-y-1 text-sm text-conventual-ash">
            <li>• Solicitar cita con la parroquia</li>
            <li>• Certificado de nacimiento</li>
            <li>• Padrino/Madrina confirma su fe</li>
            <li>• Preparación de padres (opcional)</li>
          </ul>
        </div>

        <div className="rounded-lg bg-conventual-light p-4">
          <h3 className="mb-2 font-serif text-lg text-conventual-habit">Matrimonio</h3>
          <ul className="space-y-1 text-sm text-conventual-ash">
            <li>• Solicitar con 6 meses de anticipación</li>
            <li>• Acta de bautismo de ambos</li>
            <li>• Certificado de soltería</li>
            <li>• Preparación matrimonial (obligatoria)</li>
          </ul>
        </div>

        <div className="rounded-lg bg-conventual-light p-4">
          <h3 className="mb-2 font-serif text-lg text-conventual-habit">Confirmación</h3>
          <ul className="space-y-1 text-sm text-conventual-ash">
            <li>• Estar bautizado</li>
            <li>• Estar en gracia de Dios</li>
            <li>• Catecismo de preparación</li>
            <li>• Aceptación personal de la fe</li>
          </ul>
        </div>

        <div className="rounded-lg bg-conventual-light p-4">
          <h3 className="mb-2 font-serif text-lg text-conventual-habit">Reconciliación</h3>
          <ul className="space-y-1 text-sm text-conventual-ash">
            <li>• Disponible durante confesiones</li>
            <li>• No requiere cita previa</li>
            <li>• Confidencialidad garantizada</li>
            <li>• Encuentro personal con el sacerdote</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-sm text-conventual-ash">
        <strong>¿Preguntas?</strong> Contáctanos directamente por teléfono o email para más detalles sobre cualquier trámite.
      </p>
    </section>
  );
}
