import type { Chapel, InterestLink, NavLink, ParishGroup } from '../types/site';

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Palabra del Día', href: '#palabra' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Trámites', href: '#tramites' },
  { label: 'Noticias', href: '#noticias' },
  { label: 'Grupos', href: '#grupos' },
  { label: 'Capillas', href: '#capillas' },
  { label: 'Contacto', href: '#contacto' },
];

export const FORM_SPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/tu_form_id';
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '59164971674';
export const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir más información de la Parroquia de Quintanilla.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const PARISH_FACEBOOK_URL = import.meta.env.VITE_PARISH_FACEBOOK_URL || 'https://www.facebook.com/';

export const INTEREST_LINKS: InterestLink[] = [
  {
    label: 'Arquidiócesis de Cochabamba',
    href: import.meta.env.VITE_ARQ_CBBA_URL || 'https://arquidiocesiscochabamba.org/',
  },
  {
    label: 'Frailes Menores Conventuales en Bolivia',
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
export const DONATIONS_QR_IMAGE = import.meta.env.VITE_DONATIONS_QR_IMAGE || `${basePath}donaciones/qr-parroquia.jpg`;

export const GROUPS: ParishGroup[] = [
  {
    name: 'Catecismo',
    shortDescription: 'Preparación de niños y jóvenes',
    description:
      'Acompañamos a niños y jóvenes en su formación cristiana, preparándolos para recibir los sacramentos y crecer en una fe viva dentro de la comunidad.',
    image: `${basePath}groups/catequesis.jpg`,
  },
  {
    name: 'Pastoral Familiar',
    shortDescription: 'Preparación prematrimonial',
    description:
      'Fortalecemos la vida matrimonial y familiar con espacios de formación, escucha y acompañamiento espiritual para novios, matrimonios y padres de familia.',
    image: `${basePath}groups/familiar.png`,
  },
  {
    name: 'Ministerio de Música',
    shortDescription: 'Alabanza en las celebraciones',
    description:
      'Animamos la liturgia con canto y música para ayudar a la asamblea a vivir la oración comunitaria con alegría, respeto y espíritu de servicio.',
    image: `${basePath}groups/musica.jpg`,
  },
  {
    name: 'Milicia de la inmaculada',
    shortDescription: 'Consagración total a la Inmaculada.',
    description:
      'La Milicia de la Inmaculada (MI) es un movimiento apostólico internacional de la Iglesia Católica fundado por San Maximiliano Kolbe en 1917. Su objetivo es la conversión de los pecadores y la santificación de todos bajo la protección de María Inmaculada, mediante la consagración total a Ella y el uso de medios modernos.',
    image: `${basePath}groups/milicia.png`,
  },
  {
    name: 'JUFRA - Juventudes Franciscanas',
    shortDescription: 'Para jóvenes de 14-35 años',
    description:
      `Invitamos a todos los jóvenes de Cochabamba a unirse a la Jufra Santa María de los Ángeles - Quintanilla; si eres un joven alegre, amable🫂, amas la naturaleza🌱 y con ganas de servir al Señor, ven y sé parte de esta hermosa fraternidad.🤍
nos reunimos en la Parroquia Nuestra Señora del Carmen y San Maximiliano Kolbe, en Quintanilla, Cochabamba, todos los sábados a las 17:00 en los salones parroquiales.
Informaciones: 77961859 (Animador)
#Jufra #jovenes #fraternidad`,
    image: `${basePath}groups/jufra.jpg`,
  whatsappNumber: '77961859',
  },
  {
    name: 'Movimiento Neocatecumenal',
    shortDescription: 'Servicio a los pobres y necesitados',
    description:
      'Comunidad de iniciación cristiana que promueve el encuentro con Cristo, la conversión y la vivencia de la fe en comunidad y misión.',
    image: `${basePath}groups/neocatecumenal.webp`,
  },
];

export const CHAPELS: Chapel[] = [
  {
    name: 'Comunidad de Abra',
    location: 'OTB Candelaria',
    patroness: 'Virgen de Candelaria',
    feast: '2 de enero',
    masses: 'Domingos a las 10:00',
    pastoral: ['Grupo de Monaguillos', 'Grupo de música', 'Primera Comunión y Confirmación)'],
    image: `${basePath}chapels/abra.jpg`,
  },
  {
    name: 'Comunidad de Puntiti',
    location: 'Zona Puntiti – Km 5 Av. Villazón (norte)',
    patroness: 'Virgen de la Inmaculada Concepción',
    feast: '8 de diciembre',
    masses: 'Domingos a las 8:00',
    pastoral: [
      'Grupo de Monaguillos',
      'Coros de música',
      'Primera Comunión y Confirmación',
      'Pastoral Juvenil',
      'Pastoral de Lectores',
      'Catequesis con padres de familia',
    ],
    image: `${basePath}chapels/puntiti.jpg`,
  },
  {
    name: 'Comunidad de Chacacollo',
    location: 'Zona Chacacollo – Km 5 Av. Chapare',
    patroness: 'Virgen de Copacabana',
    feast: '6 de agosto',
    masses: 'Domingos a las 8:00',
    pastoral: [
      'Coro de música',
      'Catequistas de Primera Comunión y Confirmación',
      'Catequesis familiar',
      'Grupo de la Milicia de la Inmaculada',
      'Catequesis mensual con padres de familia',
      'Visitas domiciliarias en novena a la Virgen para rezar el rosario',
    ],
    image: `${basePath}chapels/chacacollo.jpg`,
  },
  {
    name: 'Comunidad de Magisterio',
    location: 'Barrio Magisterio – Km 2 Av. Chapare',
    patroness: 'Virgen de Luján',
    feast: '8 de mayo',
    masses: 'Domingos a las 9:00',
    pastoral: [
      'Grupo de Monaguillos',
      'Catequistas de Primera Comunión y Confirmación',
      'Catequesis con padres de familia',
    ],
    image: `${basePath}chapels/magisterio.jpg`,
  },
  {
    name: 'Comunidad de Pucará',
    location: 'Zona Pucará',
    patroness: 'Virgen de Santa Rosa de Lima',
    feast: '24 de agosto',
    masses: 'Último domingo del mes a las 9:00',
    pastoral: [
      'Primera Comunión y Confirmación',
      'Visitas domiciliarias navideñas con el Niño Jesús',
    ],
    image: `${basePath}chapels/pucara.jpg`,
  },
  {
    name: 'Capilla del Surtidor Anita',
    location: 'Km 5 Av. Villazón',
    patroness: 'Virgen de Urkupiña',
    feast: '',
    masses: 'Segundo domingo del mes a las 9:00',
    pastoral: [],
    image: `${basePath}chapels/surtidor-anita.jpg`,
  },
  {
    name: 'Comunidad de Esmeralda',
    location: 'Zona Esmeralda – Calle Gualberto Villarroel',
    patroness: 'Virgen del Carmen',
    feast: '16 de julio',
    masses: 'Domingos a las 7:00',
    pastoral: [
      'Grupo de Monaguillos',
      'Catequesis de Primera Comunión y Confirmación',
      'Visitas domiciliarias en novena a la Virgen para rezar el rosario',
    ],
    image: `${basePath}chapels/esmeralda.jpg`,
  },
];
