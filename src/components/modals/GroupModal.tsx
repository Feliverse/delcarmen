import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import type { ParishGroup } from '../../types/site';

type GroupModalProps = {
  group: ParishGroup;
  onClose: () => void;
  whatsappLink: string;
};

export function GroupModal({ group, onClose, whatsappLink }: GroupModalProps) {
  return (
    <div className="fixed inset-0 z-[70] bg-slate-950/65 backdrop-blur-sm" onClick={onClose}>
      <div className="h-full w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 shadow-2xl ring-1 ring-slate-900/10 md:mx-auto md:my-[7.5vh] md:h-[85vh] md:w-[85vw] md:rounded-xl">
        <div className="flex h-full flex-col" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between gap-3 border-b border-amber-300/60 bg-amber-50 px-4 py-3 md:px-6 md:py-4">
            <div className="min-w-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Grupo parroquial</p>
              <h3 className="min-w-0 break-words font-serif text-xl font-semibold text-slate-900 sm:text-2xl md:text-3xl">{group.name}</h3>
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

          <div className="grid flex-1 gap-6 overflow-y-auto p-4 md:grid-cols-2 md:p-6">
            <div className="space-y-4 rounded-xl border border-amber-300 bg-amber-50 p-4 shadow-sm ring-1 ring-amber-200 md:p-5">
              <p className="text-base leading-relaxed text-slate-700 md:text-lg">{group.description}</p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-md border border-amber-300 bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-200 md:w-auto"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-base" />
                Consultas por WhatsApp →
              </a>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm ring-1 ring-slate-200/70">
              <img src={group.image} alt={group.name} className="h-56 w-full object-cover sm:h-72 md:h-full md:min-h-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
