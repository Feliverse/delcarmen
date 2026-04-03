// Servicio para obtener Evangelio y reflexion desde Liturgical Calendar API.
// LitCal: https://litcal.johnromanodorazio.com/api/v5/calendar
import { getBoliviaLiturgicalOverride } from '../data/liturgicalBolivia';

const LITCAL_API_BASE = import.meta.env.VITE_LITCAL_API_BASE || 'https://litcal.johnromanodorazio.com/api/v5/calendar';
const LITCAL_LOCALE = import.meta.env.VITE_LITCAL_LOCALE || 'es_ES';

export interface BibleVerse {
  id: string;
  orgId: string;
  bookId: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface BiblePassage {
  id: string;
  reference?: string;
  orgId: string;
  bookId: string;
  chapter: number;
  verses: BibleVerse[];
  content: string;
  liturgicalSeason?: string;
  liturgicalColor?: string;
  celebrationGrade?: string;
  isLocalCalendar?: boolean;
  localCalendarSource?: string;
}

export interface LiturgicalWeekDay {
  dateKey: string;
  dayLabel: string;
  celebrationName: string;
  liturgicalSeason: string;
  liturgicalColor: string;
  celebrationGrade: string;
  isLocalCalendar: boolean;
  localCalendarSource?: string;
}

interface LitcalEventReadings {
  first_reading?: string;
  responsorial_psalm?: string;
  second_reading?: string;
  gospel_acclamation?: string;
  gospel?: string;
}

interface LitcalEvent {
  event_key: string;
  name?: string;
  date?: string;
  grade?: number;
  grade_lcl?: string;
  is_vigil_mass?: boolean;
  liturgical_season?: string;
  liturgical_season_lcl?: string;
  color?: string[];
  color_lcl?: string[];
  readings?: LitcalEventReadings | string;
}

interface LitcalResponse {
  litcal?: LitcalEvent[];
}

const CELEBRATION_KEY_ES: Record<string, string> = {
  Advent1: 'Primer Domingo de Adviento',
  Advent2: 'Segundo Domingo de Adviento',
  Advent3: 'Tercer Domingo de Adviento',
  Advent4: 'Cuarto Domingo de Adviento',
  Christmas: 'Navidad',
  HolyFamily: 'Sagrada Familia',
  MaryMotherOfGod: 'Santa Maria Madre de Dios',
  Epiphany: 'Epifania del Senor',
  BaptismLord: 'Bautismo del Senor',
  AshWednesday: 'Miercoles de Ceniza',
  PalmSun: 'Domingo de Ramos',
  HolyThurs: 'Jueves Santo',
  GoodFri: 'Viernes Santo',
  EasterVigil: 'Vigilia Pascual',
  Easter: 'Domingo de Pascua',
  Pentecost: 'Pentecostes',
  Trinity: 'Santisima Trinidad',
  CorpusChristi: 'Corpus Christi',
  SacredHeart: 'Sagrado Corazon de Jesus',
  ChristKing: 'Cristo Rey',
  AllSaints: 'Todos los Santos',
  AllSouls: 'Conmemoracion de los Fieles Difuntos',
};

const BOOK_NAME_ES: Record<string, string> = {
  matthew: 'Mateo',
  mark: 'Marcos',
  luke: 'Lucas',
  john: 'Juan',
  acts: 'Hechos',
  romans: 'Romanos',
  '1 corinthians': '1 Corintios',
  '2 corinthians': '2 Corintios',
  galatians: 'Galatas',
  ephesians: 'Efesios',
  philippians: 'Filipenses',
  colossians: 'Colosenses',
  '1 thessalonians': '1 Tesalonicenses',
  '2 thessalonians': '2 Tesalonicenses',
  '1 timothy': '1 Timoteo',
  '2 timothy': '2 Timoteo',
  titus: 'Tito',
  philemon: 'Filemon',
  hebrews: 'Hebreos',
  james: 'Santiago',
  '1 peter': '1 Pedro',
  '2 peter': '2 Pedro',
  '1 john': '1 Juan',
  '2 john': '2 Juan',
  '3 john': '3 Juan',
  jude: 'Judas',
  revelation: 'Apocalipsis',
  genesis: 'Genesis',
  exodus: 'Exodo',
  leviticus: 'Levitico',
  numbers: 'Numeros',
  deuteronomy: 'Deuteronomio',
  joshua: 'Josue',
  judges: 'Jueces',
  ruth: 'Ruth',
  '1 samuel': '1 Samuel',
  '2 samuel': '2 Samuel',
  '1 kings': '1 Reyes',
  '2 kings': '2 Reyes',
  '1 chronicles': '1 Cronicas',
  '2 chronicles': '2 Cronicas',
  ezra: 'Esdras',
  nehemiah: 'Nehemias',
  esther: 'Ester',
  job: 'Job',
  psalm: 'Salmo',
  psalms: 'Salmos',
  proverbs: 'Proverbios',
  ecclesiastes: 'Eclesiastes',
  'song of songs': 'Cantar de los Cantares',
  isaiah: 'Isaias',
  jeremiah: 'Jeremias',
  lamentations: 'Lamentaciones',
  ezekiel: 'Ezequiel',
  daniel: 'Daniel',
  hosea: 'Oseas',
  joel: 'Joel',
  amos: 'Amos',
  obadiah: 'Abdias',
  jonah: 'Jonas',
  micah: 'Miqueas',
  nahum: 'Nahum',
  habakkuk: 'Habacuc',
  zephaniah: 'Sofonias',
  haggai: 'Ageo',
  zechariah: 'Zacarias',
  malachi: 'Malaquias',
  baruch: 'Baruc',
  wisdom: 'Sabiduria',
  sirach: 'Eclesiastico',
  judith: 'Judit',
  tobit: 'Tobias',
  maccabees: 'Macabeos',
};

function getLocalDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function normalizeReading(value?: string) {
  if (!value) return '';
  return value.replace(/\s+/g, ' ').trim();
}

function isLikelyEnglishCelebrationName(value: string) {
  return /(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Week|Advent|Lent|Easter|Ordinary|Saint|Vigil|Mass|of|the|and)/i.test(value);
}

function getCelebrationNameEs(event: LitcalEvent) {
  const key = event.event_key || '';
  const cleanedName = normalizeReading(event.name);

  if (CELEBRATION_KEY_ES[key]) return CELEBRATION_KEY_ES[key];

  if (/^OrdSunday\d+/i.test(key)) return 'Domingo del Tiempo Ordinario';
  if (/^OrdWeekday\d+/i.test(key)) return 'Feria del Tiempo Ordinario';
  if (/^Advent\d+$/i.test(key)) return 'Domingo de Adviento';
  if (/^AdventWeekday/i.test(key)) return 'Feria de Adviento';
  if (/^Lent\d+$/i.test(key)) return 'Domingo de Cuaresma';
  if (/^LentWeekday/i.test(key)) return 'Feria de Cuaresma';
  if (/^Easter\d+$/i.test(key)) return 'Domingo de Pascua';
  if (/^EasterWeekday/i.test(key)) return 'Feria del Tiempo Pascual';
  if (/(_vigil|Vigil)$/i.test(key)) return 'Misa de Vigilia';

  if (cleanedName && !isLikelyEnglishCelebrationName(cleanedName)) return cleanedName;

  return 'Celebracion liturgica';
}

function getLiturgicalSeasonEs(event: LitcalEvent) {
  const season = normalizeReading(event.liturgical_season || event.liturgical_season_lcl);
  const normalized = season.toUpperCase();
  const seasonMap: Record<string, string> = {
    ADVENT: 'Adviento',
    CHRISTMAS: 'Navidad',
    LENT: 'Cuaresma',
    EASTER: 'Pascua',
    EASTER_TRIDUUM: 'Triduo Pascual',
    ORDINARY_TIME: 'Tiempo Ordinario',
  };

  if (seasonMap[normalized]) return seasonMap[normalized];
  return season || 'Tiempo liturgico';
}

function getLiturgicalColorEs(event: LitcalEvent) {
  const colorSource = event.color_lcl?.[0] || event.color?.[0] || '';
  const color = normalizeReading(colorSource).toLowerCase();
  const colorMap: Record<string, string> = {
    purple: 'Morado',
    violet: 'Morado',
    white: 'Blanco',
    red: 'Rojo',
    green: 'Verde',
    rose: 'Rosa',
    black: 'Negro',
    gold: 'Dorado',
  };

  return colorMap[color] || (color ? color.charAt(0).toUpperCase() + color.slice(1) : '');
}

function getCelebrationGradeEs(event: LitcalEvent) {
  const gradeMap: Record<number, string> = {
    0: 'Feria',
    1: 'Conmemoracion',
    2: 'Memoria libre',
    3: 'Memoria',
    4: 'Fiesta',
    5: 'Fiesta del Senor',
    6: 'Solemnidad',
    7: 'Celebracion principal',
  };

  if (typeof event.grade === 'number' && gradeMap[event.grade]) return gradeMap[event.grade];

  const localized = normalizeReading(event.grade_lcl);
  return localized || '';
}

function translateBookName(bookName: string) {
  const key = normalizeReading(bookName).toLowerCase();
  return BOOK_NAME_ES[key] || bookName;
}

function toSpanishReference(reference?: string) {
  const normalized = normalizeReading(reference);
  if (!normalized) return '';

  const options = normalized.split('|').map((item) => item.trim()).filter(Boolean);
  return options
    .map((item) => {
      const match = item.match(/^([1-3]?\s?[A-Za-z][A-Za-z\s]+?)\s+(\d.*)$/);
      if (!match) return item;
      const [, book, verses] = match;
      return `${translateBookName(book)} ${verses}`;
    })
    .join(' o ');
}

function getReadingField(readings: LitcalEventReadings | string | undefined, field: keyof LitcalEventReadings) {
  if (!readings || typeof readings === 'string') return '';
  const rawValue = readings[field];
  return normalizeReading(rawValue);
}

function getGospelReference(readings?: LitcalEventReadings | string) {
  return getReadingField(readings, 'gospel');
}

function pickBestCelebrationForDate(events: LitcalEvent[], dateKey: string) {
  const sameDay = events.filter((event) => event.date?.slice(0, 10) === dateKey);
  if (sameDay.length === 0) return null;

  sameDay.sort((a, b) => {
    const gradeDiff = (b.grade ?? -1) - (a.grade ?? -1);
    if (gradeDiff !== 0) return gradeDiff;
    if (a.is_vigil_mass === b.is_vigil_mass) return 0;
    return a.is_vigil_mass ? 1 : -1;
  });

  return sameDay[0];
}

function formatDayLabel(date: Date) {
  return new Intl.DateTimeFormat('es-BO', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  }).format(date);
}

function pickTodayCelebration(events: LitcalEvent[], todayKey: string) {
  const sameDay = events.filter((event) => {
    if (!event.date) return false;
    return event.date.slice(0, 10) === todayKey;
  });

  const withGospel = sameDay.filter((event) => getGospelReference(event.readings));
  if (withGospel.length > 0) {
    withGospel.sort((a, b) => {
      const gradeDiff = (b.grade ?? -1) - (a.grade ?? -1);
      if (gradeDiff !== 0) return gradeDiff;
      if (a.is_vigil_mass === b.is_vigil_mass) return 0;
      return a.is_vigil_mass ? 1 : -1;
    });

    return withGospel[0];
  }

  const today = new Date(`${todayKey}T00:00:00`);
  const withDatedGospel = events.filter((event) => event.date && getGospelReference(event.readings));
  if (withDatedGospel.length === 0) return null;

  withDatedGospel.sort((a, b) => {
    const aDate = new Date((a.date as string).slice(0, 10) + 'T00:00:00');
    const bDate = new Date((b.date as string).slice(0, 10) + 'T00:00:00');
    const aDistance = Math.abs(aDate.getTime() - today.getTime());
    const bDistance = Math.abs(bDate.getTime() - today.getTime());

    if (aDistance !== bDistance) return aDistance - bDistance;

    const gradeDiff = (b.grade ?? -1) - (a.grade ?? -1);
    if (gradeDiff !== 0) return gradeDiff;
    if (a.is_vigil_mass === b.is_vigil_mass) return 0;
    return a.is_vigil_mass ? 1 : -1;
  });

  return withDatedGospel[0];
}

async function fetchLitcalForYear(year: number): Promise<LitcalResponse | null> {
  const urls = [
    `${LITCAL_API_BASE}?year=${year}&locale=${encodeURIComponent(LITCAL_LOCALE)}`,
    `${LITCAL_API_BASE}?year=${year}&locale=en_US`,
    `${LITCAL_API_BASE}?year=${year}`,
  ];

  const uniqueUrls = Array.from(new Set(urls));

  for (const url of uniqueUrls) {
    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) {
        console.error('Error fetching liturgical calendar:', response.status, url);
        continue;
      }
      return (await response.json()) as LitcalResponse;
    } catch (error) {
      console.error('Error fetching liturgical calendar:', error);
    }
  }

  return null;
}

async function getTodayLitcalEvent() {
  const today = new Date();
  const todayKey = getLocalDateKey(today);
  const year = today.getFullYear();

  const data = await fetchLitcalForYear(year);
  if (!data) return null;

  const events = data.litcal ?? [];
  const event = pickTodayCelebration(events, todayKey);
  if (!event) return null;

  const eventDateKey = event.date?.slice(0, 10) || todayKey;
  const boliviaOverride = getBoliviaLiturgicalOverride(eventDateKey);

  return { event, todayKey, boliviaOverride };
}

function buildLitcalPassage(
  event: LitcalEvent,
  todayKey: string,
  boliviaOverride?: ReturnType<typeof getBoliviaLiturgicalOverride>
): BiblePassage | null {
  const gospelReference = toSpanishReference(getGospelReference(event.readings));
  if (!gospelReference) return null;

  const celebrationName = boliviaOverride?.celebrationName || getCelebrationNameEs(event);
  const eventDateKey = event.date?.slice(0, 10);
  const isTodayEvent = eventDateKey === todayKey;
  const intro = isTodayEvent
    ? `Celebracion de hoy: ${celebrationName}.`
    : `Celebracion liturgica cercana: ${celebrationName}.`;

  return {
    id: event.event_key || `litcal-${todayKey}`,
    reference: gospelReference,
    orgId: 'litcal',
    bookId: 'LITCAL',
    chapter: 0,
    verses: [],
    content: `${intro} Evangelio: ${gospelReference}.`,
    liturgicalSeason: getLiturgicalSeasonEs(event),
    liturgicalColor: boliviaOverride?.color || getLiturgicalColorEs(event),
    celebrationGrade: boliviaOverride?.grade || getCelebrationGradeEs(event),
    isLocalCalendar: Boolean(boliviaOverride),
    localCalendarSource: boliviaOverride?.source,
  };
}

function buildReflectionPassage(
  event: LitcalEvent,
  todayKey: string,
  boliviaOverride?: ReturnType<typeof getBoliviaLiturgicalOverride>
): BiblePassage {
  const celebrationName = boliviaOverride?.celebrationName || getCelebrationNameEs(event);
  const firstReading = toSpanishReference(getReadingField(event.readings, 'first_reading'));
  const psalm = toSpanishReference(getReadingField(event.readings, 'responsorial_psalm'));
  const secondReading = toSpanishReference(getReadingField(event.readings, 'second_reading'));
  const gospel = toSpanishReference(getGospelReference(event.readings));

  const mainReference = gospel || firstReading || `Liturgia ${todayKey}`;
  const lines = [
    `Hoy la Iglesia nos invita a contemplar ${celebrationName}.`,
    'Pide al Senor la gracia de vivir con fe, esperanza y caridad en lo cotidiano.',
  ];

  if (firstReading) lines.push(`Primera lectura: ${firstReading}.`);
  if (psalm) lines.push(`Salmo: ${psalm}.`);
  if (secondReading) lines.push(`Segunda lectura: ${secondReading}.`);
  if (gospel) lines.push(`Evangelio: ${gospel}.`);

  return {
    id: `${event.event_key || `litcal-${todayKey}`}-reflection`,
    reference: mainReference,
    orgId: 'litcal',
    bookId: 'LITCAL',
    chapter: 0,
    verses: [],
    content: lines.join(' '),
    liturgicalSeason: getLiturgicalSeasonEs(event),
    liturgicalColor: boliviaOverride?.color || getLiturgicalColorEs(event),
    celebrationGrade: boliviaOverride?.grade || getCelebrationGradeEs(event),
    isLocalCalendar: Boolean(boliviaOverride),
    localCalendarSource: boliviaOverride?.source,
  };
}

// Funcion para obtener el evangelio del dia
export async function getDailyGospel(): Promise<BiblePassage | null> {
  try {
    const litcal = await getTodayLitcalEvent();
    if (!litcal) return null;
    return buildLitcalPassage(litcal.event, litcal.todayKey, litcal.boliviaOverride);
  } catch (error) {
    console.error('Error fetching liturgical calendar:', error);
    return null;
  }
}

// Función para obtener un mensaje inspirador del día
export async function getDailyInspirationalMessage(): Promise<BiblePassage | null> {
  try {
    const litcal = await getTodayLitcalEvent();
    if (!litcal) return null;
    return buildReflectionPassage(litcal.event, litcal.todayKey, litcal.boliviaOverride);
  } catch (error) {
    console.error('Error building daily reflection from liturgical calendar:', error);
    return null;
  }
}

export async function getWeeklyLiturgicalCalendar(): Promise<LiturgicalWeekDay[]> {
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  const years = Array.from(new Set(dates.map((date) => date.getFullYear())));
  const responses = await Promise.all(years.map((year) => fetchLitcalForYear(year)));
  const allEvents = responses.flatMap((response) => response?.litcal ?? []);

  return dates.map((date) => {
    const dateKey = getLocalDateKey(date);
    const event = pickBestCelebrationForDate(allEvents, dateKey);
    const boliviaOverride = getBoliviaLiturgicalOverride(dateKey);

    const celebrationName = boliviaOverride?.celebrationName
      || (event ? getCelebrationNameEs(event) : 'Celebracion liturgica');

    return {
      dateKey,
      dayLabel: formatDayLabel(date),
      celebrationName,
      liturgicalSeason: event ? getLiturgicalSeasonEs(event) : 'Tiempo liturgico',
      liturgicalColor: boliviaOverride?.color || (event ? getLiturgicalColorEs(event) : ''),
      celebrationGrade: boliviaOverride?.grade || (event ? getCelebrationGradeEs(event) : ''),
      isLocalCalendar: Boolean(boliviaOverride),
      localCalendarSource: boliviaOverride?.source,
    };
  });
}
