import { CHAPELS } from './siteData';

export interface BoliviaLiturgicalOverride {
  monthDay: string;
  celebrationName: string;
  color?: string;
  grade?: string;
  source?: string;
}

const SPANISH_MONTH_TO_NUMBER: Record<string, string> = {
  enero: '01',
  febrero: '02',
  marzo: '03',
  abril: '04',
  mayo: '05',
  junio: '06',
  julio: '07',
  agosto: '08',
  septiembre: '09',
  setiembre: '09',
  octubre: '10',
  noviembre: '11',
  diciembre: '12',
};

function parseSpanishFeastDateToMonthDay(feast: string) {
  const normalized = feast.trim().toLowerCase();
  const match = normalized.match(/^(\d{1,2})\s+de\s+([a-záéíóúñ]+)$/i);
  if (!match) return null;

  const day = String(Number(match[1])).padStart(2, '0');
  const month = SPANISH_MONTH_TO_NUMBER[match[2]];
  if (!month) return null;

  return `${month}-${day}`;
}

const CAPILLA_OVERRIDES: BoliviaLiturgicalOverride[] = CHAPELS
  .map((chapel) => {
    const monthDay = chapel.feast ? parseSpanishFeastDateToMonthDay(chapel.feast) : null;
    if (!monthDay || !chapel.patroness) return null;

    return {
      monthDay,
      celebrationName: `${chapel.patroness} (Comunidad de ${chapel.name.replace(/^Comunidad de\s+/i, '')})`,
      color: 'Blanco',
      grade: 'Fiesta patronal de capilla',
      source: 'Capilla local',
    } satisfies BoliviaLiturgicalOverride;
  })
  .filter((item): item is BoliviaLiturgicalOverride => item !== null);

// Complemento local para Bolivia y celebraciones propias de la parroquia de Quintanilla.
// monthDay usa formato MM-DD.
const PARISH_AND_BOLIVIA_OVERRIDES: BoliviaLiturgicalOverride[] = [
  {
    monthDay: '01-22',
    celebrationName: 'San Vicente, Diacono y Martir (patrono de Cochabamba)',
    color: 'Blanco',
    grade: 'Memoria local',
    source: 'Cochabamba',
  },
  {
    monthDay: '07-16',
    celebrationName: 'Nuestra Senora del Carmen (Parroquia de Quintanilla)',
    color: 'Blanco',
    grade: 'Fiesta patronal parroquial',
    source: 'Parroquia de Quintanilla',
  },
  {
    monthDay: '08-05',
    celebrationName: 'Nuestra Senora de Copacabana (Bolivia)',
    color: 'Blanco',
    grade: 'Fiesta local',
    source: 'Bolivia',
  },
  {
    monthDay: '08-06',
    celebrationName: 'Transfiguracion del Senor (devocion extendida en Bolivia)',
    color: 'Blanco',
    grade: 'Fiesta local',
    source: 'Bolivia',
  },
  {
    monthDay: '08-14',
    celebrationName: 'San Maximiliano Maria Kolbe (Parroquia de Quintanilla)',
    color: 'Rojo',
    grade: 'Fiesta patronal parroquial',
    source: 'Parroquia de Quintanilla',
  },
  {
    monthDay: '09-14',
    celebrationName: 'Exaltacion de la Santa Cruz (tradicion de Quillacollo y Cochabamba)',
    color: 'Rojo',
    grade: 'Fiesta local',
    source: 'Cochabamba',
  },
  {
    monthDay: '11-30',
    celebrationName: 'San Andres Apostol (fiesta patronal de Sacaba)',
    color: 'Rojo',
    grade: 'Fiesta local',
    source: 'Cochabamba',
  },
  {
    monthDay: '12-08',
    celebrationName: 'Inmaculada Concepcion de Maria (patrona de Bolivia)',
    color: 'Blanco',
    grade: 'Solemnidad local',
    source: 'Bolivia',
  },
];

export const BOLIVIA_LITURGICAL_OVERRIDES: BoliviaLiturgicalOverride[] = [
  ...PARISH_AND_BOLIVIA_OVERRIDES,
  ...CAPILLA_OVERRIDES,
];

export function getBoliviaLiturgicalOverride(dateKey: string) {
  const monthDay = dateKey.slice(5, 10);
  const matches = BOLIVIA_LITURGICAL_OVERRIDES.filter((item) => item.monthDay === monthDay);
  if (matches.length === 0) return null;

  return {
    monthDay,
    celebrationName: matches.map((item) => item.celebrationName).join(' | '),
    color: matches.find((item) => item.color)?.color,
    grade: matches.map((item) => item.grade).filter(Boolean).join(' | ') || undefined,
    source: Array.from(new Set(matches.map((item) => item.source).filter(Boolean))).join(' | ') || undefined,
  } satisfies BoliviaLiturgicalOverride;
}
