// Servicio para obtener datos de API.Bible
// Documentación: https://docs.api.bible/

const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
const API_BASE = import.meta.env.VITE_BIBLE_API_BASE || 'https://rest.api.bible/v1';

// ID de la Biblia Spanish Bible, Palabla de Dios para ti (spaPdDpt)
const BIBLE_ID = import.meta.env.VITE_BIBLE_ID || '48acedcf8595c754-01'; // spaPdDpt

function hasApiConfig() {
  if (!API_KEY) {
    console.error('Falta VITE_BIBLE_API_KEY en variables de entorno.');
    return false;
  }
  return true;
}

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
}

// Obtener un versículo específico
export async function getVerse(bookId: string, chapter: number, verse: number): Promise<BibleVerse | null> {
  if (!hasApiConfig()) return null;

  try {
    const response = await fetch(
      `${API_BASE}/bibles/${BIBLE_ID}/verses/${bookId}.${chapter}.${verse}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
      {
        headers: {
          'api-key': API_KEY
        }
      }
    );

    if (!response.ok) {
      console.error('Error fetching verse:', response.status);
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching verse:', error);
    return null;
  }
}

// Obtener un pasaje (rango de versículos)
export async function getPassage(reference: string): Promise<BiblePassage | null> {
  if (!hasApiConfig()) return null;

  try {
    const response = await fetch(
      `${API_BASE}/bibles/${BIBLE_ID}/passages/${reference}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false`,
      {
        headers: {
          'api-key': API_KEY
        }
      }
    );

    if (!response.ok) {
      console.error('Error fetching passage:', response.status);
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching passage:', error);
    return null;
  }
}

// Función para obtener el evangelio del día
// Rotación de evangelios por fecha
export async function getDailyGospel(): Promise<BiblePassage | null> {
  // Array de evangelios para rotar diariamente
  const gospels = [
    'MAT.1.18-MAT.1.25',  // Nacimiento de Jesús
    'MAR.1.1-MAR.1.13',   // Preparación de Juan el Bautista
    'LUK.1.26-LUK.1.38',  // Anunciación
    'JHN.1.1-JHN.1.18',   // El Verbo
    'MAT.3.1-MAT.3.17',   // Bautismo de Jesús
    'MAR.1.14-MAR.1.20',  // Llamada de los primeros discípulos
    'LUK.4.16-LUK.4.30',  // Jesús en Nazaret
    'JHN.2.1-JHN.2.11',   // Las bodas de Caná
  ];

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const gospelIndex = dayOfYear % gospels.length;

  return getPassage(gospels[gospelIndex]);
}

// Función para obtener un mensaje inspirador del día
export async function getDailyInspirationalMessage(): Promise<BiblePassage | null> {
  const inspirationalPassages = [
    'PSA.23.1-PSA.23.6',
    'PSA.27.1-PSA.27.4',
    'PSA.46.1-PSA.46.3',
    'PRO.3.5-PRO.3.8',
    'ISA.41.10-ISA.41.13',
    'JER.29.11-JER.29.13',
    'ROM.8.28-ROM.8.31',
    'PHP.4.4-PHP.4.8',
    'MAT.11.28-MAT.11.30',
    'JHN.14.1-JHN.14.6'
  ];

  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  const passageIndex = dayOfYear % inspirationalPassages.length;

  return getPassage(inspirationalPassages[passageIndex]);
}
