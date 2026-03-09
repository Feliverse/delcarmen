import { useEffect, useState } from 'react';
import type { NavLink } from '../../types/site';

type NavbarProps = {
  links: NavLink[];
};

export function Navbar({ links }: NavbarProps) {
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
