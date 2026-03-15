import type { InterestLink } from '../../types/site';

type FooterProps = {
  parishFacebookUrl: string;
  interestLinks: InterestLink[];
};

export function Footer({ parishFacebookUrl, interestLinks }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 px-4 py-8 text-slate-100 md:py-10">
      <div className="mx-auto grid max-w-5xl gap-5 text-center md:grid-cols-2 md:gap-6 md:text-left">
        <div className="rounded-xl border border-amber-200/35 bg-slate-900/25 p-5 shadow-sm backdrop-blur-sm md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-amber-200/25 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-100">
            Comunidad
          </p>
          <h3 className="font-serif text-base font-semibold sm:text-lg">Redes de la comunidad franciscana conventual</h3>
          <ul className="mt-3 space-y-2 text-sm sm:text-base">
            <li>
              <a
                href={parishFacebookUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline-offset-4 transition hover:text-amber-200 hover:underline"
              >
                Facebook de la Parroquia de Quintanilla →
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-300/20 bg-slate-900/25 p-5 shadow-sm backdrop-blur-sm md:p-6">
          <p className="mb-2 inline-flex rounded-full bg-slate-200/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">
            Recursos
          </p>
          <h3 className="font-serif text-base font-semibold sm:text-lg">Enlaces de interés</h3>
          <ul className="mt-3 space-y-2 text-sm sm:text-base">
            {interestLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline-offset-4 transition hover:text-amber-200 hover:underline"
                >
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-5xl border-t border-slate-200/25 pt-4 text-center md:mt-8">
        <p className="text-sm sm:text-base">&copy; 2026 Parroquia de Quintanilla: Nuestra Señora del Carmen y San Maximiliano Kolbe (Frailes Menores Conventuales). Todos los derechos reservados.</p>
        <p className="mt-2 text-xs sm:text-sm">Paz y Bien 🕊️</p>
      </div>
    </footer>
  );
}
