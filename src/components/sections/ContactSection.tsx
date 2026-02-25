import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

type ContactSectionProps = {
  formspreeEndpoint: string;
  whatsappLink: string;
  primaryButtonClass: string;
};

export function ContactSection({ formspreeEndpoint, whatsappLink, primaryButtonClass }: ContactSectionProps) {
  return (
    <section id="contacto" className="scroll-mt-24 rounded-lg bg-conventual-habit p-6 text-conventual-light shadow-md md:p-8">
      <h2 className="mb-6 font-serif text-3xl font-semibold">Contacto</h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 font-semibold">Ubicación</h3>
            <p className="text-sm leading-relaxed">
              Av. Maximiliano Kolbe<br />
              zona Quintanilla - Sacaba<br />
              Bolivia
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Comunicación</h3>
            <p className="text-sm leading-relaxed">
              <strong>Teléfono:</strong> 4721733<br />
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-10 w-full items-center justify-center rounded-md bg-conventual-gold px-4 py-2 text-sm font-semibold text-conventual-habit transition hover:bg-conventual-light md:w-auto"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-base" />
              Enviar WhatsApp
            </a>
          </div>
        </div>

        <form action={formspreeEndpoint} method="POST" className="rounded-lg bg-black/10 p-4 shadow-sm ring-1 ring-white/15 md:p-6">
          <div className="grid gap-5">
            <p className="text-sm leading-relaxed text-conventual-light/95">
              Nos alegrará escucharte. Escríbenos con confianza y con gusto te responderemos lo antes posible.
            </p>

            <div>
              <label htmlFor="nombre" className="mb-1 block text-sm font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full rounded-md border border-white/30 bg-white/95 px-3 py-2 text-sm text-conventual-habit placeholder:text-conventual-ash focus:border-conventual-gold focus:outline-none focus:ring-2 focus:ring-conventual-gold/50"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-white/30 bg-white/95 px-3 py-2 text-sm text-conventual-habit placeholder:text-conventual-ash focus:border-conventual-gold focus:outline-none focus:ring-2 focus:ring-conventual-gold/50"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="mb-1 block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className="w-full resize-y rounded-md border border-white/30 bg-white/95 px-3 py-2 text-sm text-conventual-habit placeholder:text-conventual-ash focus:border-conventual-gold focus:outline-none focus:ring-2 focus:ring-conventual-gold/50"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <button type="submit" className={`${primaryButtonClass} mt-2 w-full`}>
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
