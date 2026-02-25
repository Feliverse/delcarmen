import type { InterestLink, NavLink, ParishGroup } from '../types/site';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Palabra del Día', href: '#palabra' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Trámites', href: '#tramites' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Grupos', href: '#grupos' },
  { label: 'Contacto', href: '#contacto' },
];

export const FORM_SPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/tu_form_id';
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '59100000000';
export const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir más información de la parroquia.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PARISH_FACEBOOK_URL = import.meta.env.VITE_PARISH_FACEBOOK_URL || 'https://www.facebook.com/';

export const INTEREST_LINKS: InterestLink[] = [
  {
    label: 'Arquidiócesis de Cochabamba',
    href: import.meta.env.VITE_ARQ_CBBA_URL || 'https://arquidiocesiscochabamba.org/',
  },
  {
    label: 'OFM Bolivia',
    href: import.meta.env.VITE_OFM_BOLIVIA_URL || 'https://ofmbolivia.org/',
  },
  {
    label: 'Conferencia Episcopal Boliviana',
    href: import.meta.env.VITE_CEB_URL || 'https://ceb.bo/',
  },
  {
    label: 'Vatican News (Español)',
    href: import.meta.env.VITE_VATICAN_NEWS_URL || 'https://www.vaticannews.va/es.html',
  },
];

const basePath = import.meta.env.BASE_URL;

export const GROUPS: ParishGroup[] = [
  {
    name: 'Catecismo',
    shortDescription: 'Preparación de niños y jóvenes',
    description:
      'Acompañamos a niños y jóvenes en su formación cristiana, preparándolos para recibir los sacramentos y crecer en una fe viva dentro de la comunidad.',
    image: `${basePath}hero-carousel/slide-1.png`,
  },
  {
    name: 'Pastoral Familiar',
    shortDescription: 'Preparación prematrimonial',
    description:
      'Fortalecemos la vida matrimonial y familiar con espacios de formación, escucha y acompañamiento espiritual para novios, matrimonios y padres de familia.',
    image: `${basePath}hero-carousel/slide-2.jpg`,
  },
  {
    name: 'Ministerio de Musica',
    shortDescription: 'Alabanza en las celebraciones',
    description:
      'Animamos la liturgia con canto y música para ayudar a la asamblea a vivir la oración comunitaria con alegría, respeto y espíritu de servicio.',
    image: `${basePath}hero-carousel/slide-3.jpg`,
  },
  {
    name: 'Ministerio de Liturgia',
    shortDescription: 'Monaguillos',
    description:
      'Servimos en la celebración litúrgica formando monaguillos y colaboradores que cuidan cada detalle para que la Eucaristía se viva con orden y profundidad.',
    image: `${basePath}hero-carousel/slide-1.png`,
  },
  {
    name: 'JUFRA - Juventudes Franciscanas',
    shortDescription: 'Para jóvenes de 14-35 años',
    description:
      'Espacio juvenil franciscano para crecer en fraternidad, servicio y misión, inspirados en San Francisco de Asís y comprometidos con la Iglesia.',
    image: `${basePath}hero-carousel/slide-2.jpg`,
  },
  {
    name: 'Movimiento Neocatecumenal',
    shortDescription: 'Servicio a los pobres y necesitados',
    description:
      'Comunidad de iniciación cristiana que promueve el encuentro con Cristo, la conversión y la vivencia de la fe en comunidad y misión.',
    image: `${basePath}hero-carousel/slide-3.jpg`,
  },
];
