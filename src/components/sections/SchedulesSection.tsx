export function SchedulesSection() {
  return (
    <section id="horarios" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-white p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-conventual-habit md:text-3xl">
        Horarios de Misas y Confesiones
      </h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-conventual-ash md:mb-6 md:text-base">
        Consulta los horarios semanales de la comunidad franciscana conventual para participar en la Eucaristía y acercarte al sacramento de la reconciliación.
      </p>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <article className="rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-sm ring-1 ring-amber-200 md:p-5">
          <h3 className="mb-3 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Misas</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li className="flex flex-col gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-conventual-habit">Lunes a sabado</span>
              <span className="font-semibold text-conventual-habit">6:30 a. m., 7:00 p. m.</span>
            </li>
            <li className="flex flex-col gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-conventual-habit">Domingos</span>
              <span className="font-semibold text-conventual-habit">6:30 a. m., 11:00 a. m., 7:00 p. m.</span>
            </li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-300 bg-slate-100 p-4 shadow-sm ring-1 ring-slate-200 md:p-5">
          <h3 className="mb-3 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Confesiones</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-conventual-habit">Miercoles y viernes</span>
              <span className="font-semibold text-conventual-habit">18:30 p. m.</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
