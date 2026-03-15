import type { Chapel } from '../../types/site';

type ChapelModalProps = {
  chapel: Chapel;
  onClose: () => void;
};

export function ChapelModal({ chapel, onClose }: ChapelModalProps) {
  return (
    <div className="fixed inset-0 z-[70] bg-slate-950/65 backdrop-blur-sm" onClick={onClose}>
      <div className="h-full w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 shadow-2xl ring-1 ring-slate-900/10 md:mx-auto md:my-[7.5vh] md:h-[85vh] md:w-[85vw] md:rounded-xl">
        <div className="flex h-full flex-col" onClick={(event) => event.stopPropagation()}>

          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-amber-300/60 bg-amber-50 px-4 py-3 md:px-6 md:py-4">
            <div className="min-w-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Comunidad capilla</p>
              <h3 className="min-w-0 break-words font-serif text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">
                {chapel.name}
              </h3>
              <p className="mt-0.5 text-sm text-slate-500">{chapel.location}</p>
            </div>
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={onClose}
              className="rounded-md border border-slate-300 px-3 py-2 text-slate-800 transition hover:bg-slate-700 hover:text-slate-100"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="grid flex-1 gap-6 overflow-y-auto p-4 md:grid-cols-2 md:p-6">

            {/* Info column */}
            <div className="space-y-5 rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-sm ring-1 ring-amber-200 md:p-5">

              {/* Patroness */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Advocación</p>
                <p className="font-serif text-lg font-semibold text-slate-900">{chapel.patroness}</p>
                {chapel.feast && (
                  <p className="text-sm text-slate-600">
                    Fiesta: <span className="font-medium text-slate-800">{chapel.feast}</span>
                  </p>
                )}
              </div>

              {/* Masses */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Horario de Misas</p>
                <p className="text-base text-slate-800">{chapel.masses}</p>
              </div>

              {/* Pastoral */}
              {chapel.pastoral.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Pastoral</p>
                  <ul className="space-y-1.5">
                    {chapel.pastoral.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Image column */}
            <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm ring-1 ring-slate-200/70">
              <img
                src={chapel.image}
                alt={`Capilla ${chapel.name}`}
                className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-64"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://placehold.co/800x600/fef3c7/92400e?text=Foto+próximamente';
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
