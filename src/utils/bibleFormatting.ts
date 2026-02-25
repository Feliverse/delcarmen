const BOOK_NAMES: Record<string, string> = {
  GEN: 'Génesis', EXO: 'Éxodo', LEV: 'Levítico', NUM: 'Números', DEU: 'Deuteronomio',
  JOS: 'Josué', JDG: 'Jueces', RUT: 'Rut', '1SA': '1 Samuel', '2SA': '2 Samuel',
  '1KI': '1 Reyes', '2KI': '2 Reyes', '1CH': '1 Crónicas', '2CH': '2 Crónicas',
  EZR: 'Esdras', NEH: 'Nehemías', EST: 'Ester', JOB: 'Job', PSA: 'Salmos',
  PRO: 'Proverbios', ECC: 'Eclesiastés', SNG: 'Cantar de los Cantares', ISA: 'Isaías',
  JER: 'Jeremías', LAM: 'Lamentaciones', EZK: 'Ezequiel', DAN: 'Daniel', HOS: 'Oseas',
  JOL: 'Joel', AMO: 'Amós', OBA: 'Abdías', JON: 'Jonás', MIC: 'Miqueas',
  NAM: 'Nahúm', HAB: 'Habacuc', ZEP: 'Sofonías', HAG: 'Hageo', ZEC: 'Zacarías',
  MAL: 'Malaquías', MAT: 'Mateo', MAR: 'Marcos', LUK: 'Lucas', JHN: 'Juan',
  ACT: 'Hechos', ROM: 'Romanos', '1CO': '1 Corintios', '2CO': '2 Corintios',
  GAL: 'Gálatas', EPH: 'Efesios', PHP: 'Filipenses', COL: 'Colosenses',
  '1TH': '1 Tesalonicenses', '2TH': '2 Tesalonicenses', '1TI': '1 Timoteo',
  '2TI': '2 Timoteo', TIT: 'Tito', PHM: 'Filemón', HEB: 'Hebreos', JAS: 'Santiago',
  '1PE': '1 Pedro', '2PE': '2 Pedro', '1JN': '1 Juan', '2JN': '2 Juan',
  '3JN': '3 Juan', JUD: 'Judas', REV: 'Apocalipsis'
};

export function formatPassageReference(reference?: string, fallbackId?: string) {
  const source = reference || fallbackId || '';
  if (!source) return '';

  const normalized = source.replace(/\s+/g, '').toUpperCase();
  const single = normalized.match(/^([A-Z0-9]{3})\.(\d+)\.(\d+)$/);
  const range = normalized.match(/^([A-Z0-9]{3})\.(\d+)\.(\d+)-([A-Z0-9]{3})\.(\d+)\.(\d+)$/);

  if (single) {
    const [, bookCode, chapter, verse] = single;
    const bookName = BOOK_NAMES[bookCode] || bookCode;
    return `${bookName} ${chapter}:${verse}`;
  }

  if (range) {
    const [, startBookCode, startChapter, startVerse, endBookCode, endChapter, endVerse] = range;
    const startBook = BOOK_NAMES[startBookCode] || startBookCode;
    const endBook = BOOK_NAMES[endBookCode] || endBookCode;

    if (startBookCode === endBookCode) {
      if (startChapter === endChapter) {
        return `${startBook} ${startChapter}:${startVerse}-${endVerse}`;
      }
      return `${startBook} ${startChapter}:${startVerse}-${endChapter}:${endVerse}`;
    }

    return `${startBook} ${startChapter}:${startVerse} - ${endBook} ${endChapter}:${endVerse}`;
  }

  return source;
}
