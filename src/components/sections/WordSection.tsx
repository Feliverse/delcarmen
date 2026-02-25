import type { BiblePassage } from '../../services';

type WordSectionProps = {
  gospelContent: BiblePassage | null;
  showGospel: boolean;
  loading: boolean;
  gospelError: string | null;
  onToggleGospel: () => void;
  messageContent: BiblePassage | null;
  showMessage: boolean;
  messageLoading: boolean;
  messageError: string | null;
  onToggleMessage: () => void;
  formatReference: (reference?: string, fallbackId?: string) => string;
  primaryButtonClass: string;
};

export function WordSection({
  gospelContent,
  showGospel,
  loading,
  gospelError,
  onToggleGospel,
  messageContent,
  showMessage,
  messageLoading,
  messageError,
  onToggleMessage,
  formatReference,
  primaryButtonClass,
}: WordSectionProps) {
  return (
    <section id="palabra" className="scroll-mt-24 rounded-lg bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">Palabra del Día</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 font-semibold text-conventual-habit">Evangelio de Hoy</h3>
          <p className="mb-4 text-sm text-conventual-ash">
            Reflexiona con el Evangelio del día para guiar tu camino espiritual.
          </p>
          <button
            onClick={onToggleGospel}
            disabled={loading}
            className={`${primaryButtonClass} w-full ${showGospel ? 'bg-conventual-gold text-conventual-habit hover:bg-conventual-light' : ''}`}
          >
            {loading ? 'Cargando...' : showGospel ? 'Cerrar Evangelio' : 'Leer Evangelio'}
          </button>

          {gospelError && (
            <div className="mt-3 rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
              <p className="text-sm">{gospelError}</p>
            </div>
          )}

          {showGospel && gospelContent && (
            <div className="animate-fade-in-up mt-4 rounded-md border-l-4 border-conventual-gold bg-conventual-light p-4">
              <p className="text-xs font-semibold text-conventual-ash">
                {formatReference(gospelContent.reference, gospelContent.id)}
              </p>
              <p className="mt-2 text-sm italic leading-6 text-conventual-ash">{gospelContent.content}</p>
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-conventual-habit">Reflexión Espiritual</h3>
          <p className="mb-4 text-sm text-conventual-ash">
            Recibe un mensaje de esperanza y fe para fortalecer tu relación con Dios.
          </p>
          <button
            onClick={onToggleMessage}
            disabled={messageLoading}
            className={`${primaryButtonClass} w-full ${showMessage ? 'bg-conventual-gold text-conventual-habit hover:bg-conventual-light' : ''}`}
          >
            {messageLoading ? 'Cargando...' : showMessage ? 'Cerrar Reflexión' : 'Ver Reflexión'}
          </button>

          {messageError && (
            <div className="mt-3 rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
              <p className="text-sm">{messageError}</p>
            </div>
          )}

          {showMessage && messageContent && (
            <div className="animate-fade-in-up mt-4 rounded-md border-l-4 border-conventual-gold bg-conventual-light p-4">
              <p className="text-xs font-semibold text-conventual-ash">
                {formatReference(messageContent.reference, messageContent.id)}
              </p>
              <p className="mt-2 text-sm italic leading-6 text-conventual-ash">{messageContent.content}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
