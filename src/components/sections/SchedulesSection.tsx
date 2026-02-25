export function SchedulesSection() {
  return (
    <section id="horarios" className="scroll-mt-24 rounded-lg bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">
        Horarios de Misas y Confesiones
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-serif text-xl text-conventual-habit">Misas</h3>
          <ul className="space-y-2 text-conventual-ash">
            <li className="flex justify-between border-b pb-2">
              <span className="font-medium">Lunes a Viernes</span>
              <span>6:30 AM, 7:00 PM</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="font-medium">Sábados</span>
              <span>6:30 AM, 7:00 PM</span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="font-medium">Domingos</span>
              <span>6:30, 11:00 AM, 7:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl text-conventual-habit">Confesiones</h3>
          <ul className="space-y-2 text-conventual-ash">
            <li className="flex justify-between border-b pb-2">
              <span className="font-medium">Lunes a Viernes</span>
              <span>6:30 - 19:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
