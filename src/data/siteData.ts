import type { Chapel, InterestLink, NavLink, ParishGroup, ParishNewsEvent } from '../types/site';

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
    label: 'Hermanas Hospitalarias',
    href: import.meta.env.VITE_CEB_URL || 'https://hospitalarias.org/testimonios-de-misericordia-comunidad-terapeutica-puntiti/',
  },
  {
    label: 'Vatican News (Español)',
    href: import.meta.env.VITE_VATICAN_NEWS_URL || 'https://www.vaticannews.va/es.html',
  },
];

const basePath = import.meta.env.BASE_URL;
export const DONATIONS_QR_IMAGE = import.meta.env.VITE_DONATIONS_QR_IMAGE || `${basePath}donaciones/qr-parroquia.jpg`;
export const HOLY_WEEK_2026_VISIBLE_UNTIL = '2026-04-07T23:59:59';

export function isHolyWeek2026Visible(referenceDate: Date = new Date()) {
  return referenceDate.getTime() <= new Date(HOLY_WEEK_2026_VISIBLE_UNTIL).getTime();
}

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
    holyWeekSchedule: [
      'Domingo de Ramos (29 marzo): Eucaristía 10:00',
      'Domingo de Resurrección (5 abril): Eucaristía 10:00',
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
    pastoral: ['Grupo de Monaguillos', 'Grupo de música', 'Primera Comunión y Confirmación)'],
    image: `${basePath}chapels/abra.jpg`,
  },
  {
    name: 'Comunidad de Puntiti',
    location: 'Zona Puntiti – Km 5 Av. Villazón (norte)',
    patroness: 'Virgen de la Inmaculada Concepción',
    feast: '8 de diciembre',
    masses: 'Domingos a las 8:00',
    holyWeekSchedule: [
      'Domingo de Ramos (29 marzo): Eucaristía 08:00',
      'Sábado Santo (4 abril): Vigilia Pascual 20:15',
      'Domingo de Resurrección (5 abril): Eucaristía 08:00',
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
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
    holyWeekSchedule: [
      'Domingo de Ramos (29 marzo): Eucaristía 08:00',
      'Viernes Santo (3 abril): Vía Crucis 14:00 (salida desde esta capilla)',
      'Sábado Santo (4 abril): Vigilia Pascual 19:00',
      'Domingo de Resurrección (5 abril): Eucaristía 08:00',
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
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
    holyWeekSchedule: [
      'Domingo de Ramos (29 marzo): Eucaristía 09:00',
      'Jueves Santo (2 abril): Eucaristía 19:00',
      'Sábado Santo (4 abril): Vigilia Pascual 20:15',
      'Domingo de Resurrección (5 abril): Eucaristía 09:00',
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
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
    holyWeekSchedule: [
      'Domingo de Ramos (29 marzo): Eucaristía 09:15',
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
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
    holyWeekSchedule: [
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
    pastoral: [],
    image: `${basePath}chapels/surtidor-anita.jpg`,
  },
  {
    name: 'Comunidad de Esmeralda',
    location: 'Zona Esmeralda – Calle Gualberto Villarroel',
    patroness: 'Virgen del Carmen',
    feast: '16 de julio',
    masses: 'Domingos a las 7:00',
    holyWeekSchedule: [
      'Domingo de Ramos (29 marzo): Eucaristía 07:00',
      'Sábado Santo (4 abril): Vigilia Pascual 19:00',
      'Domingo de Resurrección (5 abril): Eucaristía 07:00',
      'Jueves Santo (2 abril): Adoración al Santísimo 20:30 en capillas',
    ],
    pastoral: [
      'Grupo de Monaguillos',
      'Catequesis de Primera Comunión y Confirmación',
      'Visitas domiciliarias en novena a la Virgen para rezar el rosario',
    ],
    image: `${basePath}chapels/esmeralda.jpg`,
  },
];

function getFeastMonthIndex(feast: string) {
  const normalized = feast.toLowerCase();
  const months: Record<string, number> = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  };

  const matchedMonth = Object.keys(months).find((month) => normalized.includes(month));
  return matchedMonth ? months[matchedMonth] : undefined;
}

export const NEWS_EVENTS: ParishNewsEvent[] = [
  ...CHAPELS.filter((chapel) => chapel.feast).map((chapel) => ({
    title: `Fiesta patronal de ${chapel.patroness}`,
    dateLabel: chapel.feast,
    description: `Celebración patronal de la comunidad de ${chapel.name}, con misa, encuentro fraterno y participación de la feligresía.`,
    chapelName: chapel.name,
    image: chapel.image,
    monthIndex: getFeastMonthIndex(chapel.feast),
  })),
  {
    title: 'Celebración de San Maximiliano Kolbe',
    dateLabel: '14 de agosto',
    description: 'Eucaristía y jornada de oración en honor a San Maximiliano Kolbe, patrono de la Milicia de la Inmaculada y testimonio de entrega total a Cristo.',
    chapelName: 'Parroquia / Milicia de la Inmaculada',
    image: `${basePath}groups/kolbe.webp`,
    monthIndex: 7,
    isFeatured: true,
    referenceUrl: 'https://www.aciprensa.com/noticias/51807/hoy-se-celebra-a-san-maximiliano-kolbe-martir-de-la-vida-victima-de-la-ideologia',
    referenceLabel: 'Ver la nota',
  },
  {
    title: '30 años del Centro Puntiti',
    dateLabel: 'Aniversario comunitario',
    description: 'La comunidad Terapéutica Puntiti celebra 30 años de historia, servicio, fe compartida y hospitalidad. Una ocasión para agradecer, recordar y renovar el compromiso pastoral.',
    chapelName: 'Comunidad de Puntiti',
    image: `${basePath}groups/CentroPuntiti.jpg`,
    isFeatured: true,
  },
];
