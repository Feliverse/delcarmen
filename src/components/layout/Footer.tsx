import type { InterestLink } from '../../types/site';

type FooterProps = {
  parishFacebookUrl: string;
  interestLinks: InterestLink[];
};

export function Footer({ parishFacebookUrl, interestLinks }: FooterProps) {
  return (
    <footer className="bg-conventual-habit px-4 py-8 text-conventual-light">
      <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-2 md:text-left">
        <div>
          <h3 className="font-serif text-base font-semibold sm:text-lg">Redes de la parroquia</h3>
          <ul className="mt-3 space-y-2 text-sm sm:text-base">
            <li>
              <a
                href={parishFacebookUrl}
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 transition hover:text-conventual-gold hover:underline"
              >
                Facebook de la Parroquia
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold sm:text-lg">Enlaces de interés</h3>
          <ul className="mt-3 space-y-2 text-sm sm:text-base">
            {interestLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-offset-4 transition hover:text-conventual-gold hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-conventual-light/20 pt-4 text-center">
        <p className="text-sm sm:text-base">&copy; 2026 Parroquia Nuestra Señora del Carmen. Todos los derechos reservados.</p>
        <p className="mt-2 text-xs sm:text-sm">Paz y Bien 🕊️</p>
      </div>
    </footer>
  );
}
