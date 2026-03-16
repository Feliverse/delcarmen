type DonationsModalProps = {
  qrImage: string;
  onClose: () => void;
};

const FALLBACK_QR_IMAGE = 'https://placehold.co/640x640/f8fafc/0f172a?text=QR+de+Donaciones';

export function DonationsModal({ qrImage, onClose }: DonationsModalProps) {
  return (
    <div className="fixed inset-0 z-[70] bg-slate-950/65 backdrop-blur-sm" onClick={onClose}>
      <div className="mx-auto my-[8vh] w-[92vw] max-w-lg rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-2xl ring-1 ring-slate-900/10">
        <div className="flex items-center justify-between gap-3 border-b border-amber-300/60 bg-amber-50 px-4 py-3 md:px-6 md:py-4" onClick={(event) => event.stopPropagation()}>
          <div className="min-w-0">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-700">Apoyo parroquial</p>
            <h3 className="font-serif text-xl font-semibold text-slate-900 sm:text-2xl">Donaciones</h3>
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

        <div className="space-y-4 p-4 md:p-6" onClick={(event) => event.stopPropagation()}>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Tu aporte fortalece nuestras obras pastorales y de servicio. Escanea este QR desde tu app bancaria para realizar tu donación.
          </p>

          <div className="mx-auto max-w-sm rounded-xl border border-amber-300/60 bg-white p-3 shadow-sm ring-1 ring-amber-200/60 md:p-4">
            <img
              src={qrImage}
              alt="Código QR para donaciones"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 object-contain"
              onError={(event) => {
                if (event.currentTarget.src !== FALLBACK_QR_IMAGE) {
                  event.currentTarget.src = FALLBACK_QR_IMAGE;
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
