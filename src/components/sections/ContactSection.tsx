import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

type ContactSectionProps = {
  formspreeEndpoint: string;
  whatsappLink: string;
  primaryButtonClass: string;
};

export function ContactSection({ formspreeEndpoint, whatsappLink, primaryButtonClass }: ContactSectionProps) {
  return (
    <section id="contacto" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 p-5 text-slate-100 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-50 md:text-3xl">Contacto</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-100 md:mb-6 md:text-base">
        Estamos para acompañarte. Escríbenos o contáctanos por WhatsApp.
      </p>

      <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
        <div className="space-y-6 rounded-xl border border-amber-200/35 bg-slate-900/30 p-5 shadow-sm backdrop-blur-sm md:p-6">
          <div>
            <h3 className="mb-2 font-serif text-lg font-semibold md:text-xl">Ubicación</h3>
            <p className="text-sm leading-relaxed md:text-base">
              Av. Maximiliano Kolbe<br />
              zona Quintanilla - Sacaba<br />
              Bolivia
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-lg font-semibold md:text-xl">Comunicación</h3>
            <p className="text-sm leading-relaxed md:text-base">
              <strong>Teléfono:</strong> 4721733<br />
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-md border border-amber-300 bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-200 md:w-auto"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-base" />
              Enviar WhatsApp →
            </a>
          </div>
        </div>

        <form action={formspreeEndpoint} method="POST" className="rounded-xl border border-amber-300/45 bg-amber-50 p-4 text-slate-900 shadow-sm ring-1 ring-amber-200/60 md:p-6">
          <div className="grid gap-5">
            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Nos alegrará escucharte. Escríbenos con confianza y con gusto te responderemos lo antes posible.
            </p>

            <div>
              <label htmlFor="nombre" className="mb-1 block text-sm font-medium text-slate-900">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-900">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-1 block text-sm font-medium text-slate-900">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className="w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <button
              type="submit"
              className={`${primaryButtonClass} mt-2 w-full border border-slate-700 bg-slate-700 font-semibold text-amber-100 hover:bg-amber-300 hover:text-slate-900`}
            >
              Enviar Mensaje →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
