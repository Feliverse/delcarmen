import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import type { ParishGroup } from '../../types/site';

type GroupsSectionProps = {
  groups: ParishGroup[];
  whatsappLink: string;
};

export function GroupsSection({ groups, whatsappLink }: GroupsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleGroup = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="grupos" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-white via-amber-50/30 to-slate-100 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Nuestros Grupos</h2>

      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Somos una comunidad franciscana conventual. Únete a los grupos que enriquecen nuestra vida parroquial y fraterna.
      </p>

      <div className="space-y-3">
        {groups.map((grupo, index) => {
          const isOpen = openIndex === index;
          const groupWhatsappLink = grupo.whatsappNumber
            ? `https://wa.me/${grupo.whatsappNumber}`
            : whatsappLink;

          return (
            <article key={grupo.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/70">
              <button
                type="button"
                onClick={() => toggleGroup(index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition hover:bg-amber-50 md:px-6"
                aria-expanded={isOpen}
                aria-controls={`group-panel-${index}`}
              >
                <div>
                  <h3 className="font-serif text-lg font-semibold text-slate-900 md:text-xl">{grupo.name}</h3>
                  <p className="text-sm text-slate-600">{grupo.shortDescription}</p>
                </div>
                <span className={`text-lg font-semibold text-slate-700 transition ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {isOpen && (
                <div id={`group-panel-${index}`} className="grid gap-4 border-t border-amber-200 bg-amber-50/40 p-4 md:grid-cols-[1.4fr_1fr] md:p-6">
                  <div>
                    <p className="text-sm leading-relaxed text-slate-700 md:text-base">{grupo.description}</p>
                    <a
                      href={groupWhatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-amber-300 bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-base" />
                      Unirme por WhatsApp →
                    </a>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <img src={grupo.image} alt={grupo.name} className="h-48 w-full object-cover md:h-full md:min-h-44" />
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
