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
    <div className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="h-full w-full overflow-hidden bg-white shadow-2xl ring-1 ring-black/10 md:mx-auto md:my-[7.5vh] md:h-[85vh] md:w-[85vw] md:rounded-xl">
        <div className="flex h-full flex-col" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-conventual-ash/30 px-4 py-3 md:px-6 md:py-4">
            <h3 className="font-serif text-2xl font-semibold text-conventual-habit md:text-3xl">{group.name}</h3>
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={onClose}
              className="rounded-md px-3 py-2 text-conventual-habit transition hover:bg-conventual-habit hover:text-conventual-light"
            >
              ✕
            </button>
          </div>

          <div className="grid flex-1 gap-6 overflow-y-auto p-4 md:grid-cols-2 md:p-6">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-conventual-ash md:text-lg">{group.description}</p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 w-full items-center justify-center rounded-md bg-conventual-gold px-4 py-2 text-sm font-semibold text-conventual-habit transition hover:bg-conventual-light md:w-auto"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-base" />
                Consultas por WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-conventual-ash/25 bg-white shadow-sm">
              <img src={group.image} alt={group.name} className="h-full min-h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
