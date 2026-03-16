import { useEffect, useState } from 'react';
import type { NavLink } from '../../types/site';

type NavbarProps = {
  links: NavLink[];
  onOpenDonations: () => void;
};

export function Navbar({ links, onOpenDonations }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#hero');

  useEffect(() => {
    const updateActiveLink = () => {
      const topOffset = 120;
      let currentHref = links[0]?.href ?? '#hero';

      for (const link of links) {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (!section) continue;

        if (section.offsetTop - topOffset <= window.scrollY) {
          currentHref = link.href;
        }
      }

      setActiveHref(currentHref);
    };

    let isTicking = false;
    const onScroll = () => {
      if (isTicking) return;
      isTicking = true;
      window.requestAnimationFrame(() => {
        updateActiveLink();
        isTicking = false;
      });
    };

    const onHashChange = () => {
      const hash = window.location.hash;
      if (links.some((link) => link.href === hash)) {
        setActiveHref(hash);
      }
    };

    updateActiveLink();
    onHashChange();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [links]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full md:sticky ${
        mobileMenuOpen
          ? 'bg-transparent shadow-none'
          : 'bg-slate-900/85 shadow-lg md:backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto max-w-5xl px-4 py-4 text-white">
        <div className="flex items-center justify-end">
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={onOpenDonations}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-amber-300 px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-amber-200"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M2 12a1 1 0 0 1 1-1h4.38a1 1 0 0 1 .8.4l1.1 1.47a1 1 0 0 0 .8.4h2.2a1 1 0 0 1 .8.4l.93 1.24a1 1 0 0 0 1.42.18l3.95-3.16a1 1 0 0 1 1.24 1.57l-3.95 3.16a3 3 0 0 1-4.27-.56l-.63-.83h-1.7a3 3 0 0 1-2.4-1.2L6.88 13H3a1 1 0 0 1-1-1Zm16.5-7A2.5 2.5 0 0 0 16 7.5v.22l-.16-.15a3.49 3.49 0 0 0-4.93 0 3.5 3.5 0 0 0 0 4.95L16 17.6l5.1-5.08A3.5 3.5 0 0 0 18.5 5Z" />
              </svg>
              Donaciones QR
            </button>
            <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-slate-900/45 p-1.5 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  activeHref === link.href
                    ? 'bg-amber-300 text-slate-900 shadow-sm'
                    : 'text-slate-100 hover:bg-white/10 hover:text-amber-200'
                }`}
                onClick={() => setActiveHref(link.href)}
              >
                {link.label}
              </a>
            ))}
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-slate-900/50 md:hidden"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className={`absolute block h-0.5 w-6 rounded-sm bg-white transition ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`absolute block h-0.5 w-6 rounded-sm bg-white transition ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute block h-0.5 w-6 rounded-sm bg-white transition ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </button>
        </div>

        <div
          aria-hidden={!mobileMenuOpen}
          className={`fixed inset-0 z-40 pt-24 transition-opacity duration-300 md:hidden ${
            mobileMenuOpen
              ? 'pointer-events-auto visible bg-slate-950/90 opacity-100'
              : 'pointer-events-none invisible bg-slate-950/90 opacity-0'
          }`}
        >
          <div className="mx-auto flex h-full max-w-sm flex-col items-stretch justify-center gap-3 px-6 pb-12">
            <button
              type="button"
              tabIndex={mobileMenuOpen ? 0 : -1}
              className={`block rounded-lg bg-amber-300 px-4 py-3 text-center text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-amber-200 ${
                mobileMenuOpen ? 'animate-donate-soft' : ''
              }`}
              onClick={() => {
                onOpenDonations();
                setMobileMenuOpen(false);
              }}
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M2 12a1 1 0 0 1 1-1h4.38a1 1 0 0 1 .8.4l1.1 1.47a1 1 0 0 0 .8.4h2.2a1 1 0 0 1 .8.4l.93 1.24a1 1 0 0 0 1.42.18l3.95-3.16a1 1 0 0 1 1.24 1.57l-3.95 3.16a3 3 0 0 1-4.27-.56l-.63-.83h-1.7a3 3 0 0 1-2.4-1.2L6.88 13H3a1 1 0 0 1-1-1Zm16.5-7A2.5 2.5 0 0 0 16 7.5v.22l-.16-.15a3.49 3.49 0 0 0-4.93 0 3.5 3.5 0 0 0 0 4.95L16 17.6l5.1-5.08A3.5 3.5 0 0 0 18.5 5Z" />
                </svg>
                Donaciones QR
              </span>
            </button>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`block rounded-lg px-4 py-3 text-center text-lg font-medium transition ${
                  activeHref === link.href
                    ? 'bg-amber-300 text-slate-900 shadow-sm'
                    : 'border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-amber-200'
                }`}
                onClick={() => {
                  setActiveHref(link.href);
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
