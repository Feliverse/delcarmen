export function SchedulesSection() {
  return (
    <section id="horarios" className="animate-fade-in-soft scroll-mt-24 rounded-lg bg-white p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-4 font-serif text-2xl font-semibold text-conventual-habit md:mb-6 md:text-3xl">
        Horarios de Misas y Confesiones
      </h2>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="mb-3 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Misas</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li className="flex flex-col gap-1 border-b pb-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">Lunes a Viernes</span>
              <span>6:30 AM, 7:00 PM</span>
            </li>
            <li className="flex flex-col gap-1 border-b pb-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">Sábados</span>
              <span>6:30 AM, 7:00 PM</span>
            </li>
            <li className="flex flex-col gap-1 pb-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">Domingos</span>
              <span>6:30, 11:00 AM, 7:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-serif text-lg font-semibold text-conventual-habit md:text-xl">Confesiones</h3>
          <ul className="space-y-2 text-sm leading-relaxed text-conventual-ash md:text-base">
            <li className="flex flex-col gap-1 border-b pb-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium">Lunes a Viernes</span>
              <span>6:30 - 19:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
