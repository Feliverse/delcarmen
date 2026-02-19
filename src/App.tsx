import './App.css'
import { useState } from 'react';
import { getDailyGospel, getDailyInspirationalMessage } from './services/bibleService';
import type { BiblePassage } from './services/bibleService';

const BOOK_NAMES: Record<string, string> = {
  GEN: 'Génesis',
  EXO: 'Éxodo',
  LEV: 'Levítico',
  NUM: 'Números',
  DEU: 'Deuteronomio',
  JOS: 'Josué',
  JDG: 'Jueces',
  RUT: 'Rut',
  '1SA': '1 Samuel',
  '2SA': '2 Samuel',
  '1KI': '1 Reyes',
  '2KI': '2 Reyes',
  '1CH': '1 Crónicas',
  '2CH': '2 Crónicas',
  EZR: 'Esdras',
  NEH: 'Nehemías',
  EST: 'Ester',
  JOB: 'Job',
  PSA: 'Salmos',
  PRO: 'Proverbios',
  ECC: 'Eclesiastés',
  SNG: 'Cantar de los Cantares',
  ISA: 'Isaías',
  JER: 'Jeremías',
  LAM: 'Lamentaciones',
  EZK: 'Ezequiel',
  DAN: 'Daniel',
  HOS: 'Oseas',
  JOL: 'Joel',
  AMO: 'Amós',
  OBA: 'Abdías',
  JON: 'Jonás',
  MIC: 'Miqueas',
  NAM: 'Nahúm',
  HAB: 'Habacuc',
  ZEP: 'Sofonías',
  HAG: 'Hageo',
  ZEC: 'Zacarías',
  MAL: 'Malaquías',
  MAT: 'Mateo',
  MAR: 'Marcos',
  LUK: 'Lucas',
  JHN: 'Juan',
  ACT: 'Hechos',
  ROM: 'Romanos',
  '1CO': '1 Corintios',
  '2CO': '2 Corintios',
  GAL: 'Gálatas',
  EPH: 'Efesios',
  PHP: 'Filipenses',
  COL: 'Colosenses',
  '1TH': '1 Tesalonicenses',
  '2TH': '2 Tesalonicenses',
  '1TI': '1 Timoteo',
  '2TI': '2 Timoteo',
  TIT: 'Tito',
  PHM: 'Filemón',
  HEB: 'Hebreos',
  JAS: 'Santiago',
  '1PE': '1 Pedro',
  '2PE': '2 Pedro',
  '1JN': '1 Juan',
  '2JN': '2 Juan',
  '3JN': '3 Juan',
  JUD: 'Judas',
  REV: 'Apocalipsis'
};

function formatPassageReference(reference?: string, fallbackId?: string) {
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

function App() {
  const [gospelContent, setGospelContent] = useState<BiblePassage | null>(null);
  const [showGospel, setShowGospel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gospelError, setGospelError] = useState<string | null>(null);
  const [messageContent, setMessageContent] = useState<BiblePassage | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleGetGospel = async () => {
    if (!import.meta.env.VITE_BIBLE_API_KEY) {
      setGospelError('Falta configurar VITE_BIBLE_API_KEY en el archivo .env');
      setShowGospel(false);
      return;
    }

    setLoading(true);
    setGospelError(null);

    try {
      const gospel = await getDailyGospel();

      if (!gospel) {
        setGospelError('No se pudo cargar el evangelio en este momento. Inténtalo nuevamente.');
        setShowGospel(false);
        return;
      }

      setGospelContent(gospel);
      setShowGospel(true);
    } finally {
      setLoading(false);
    }
  };

  const handleGetInspirationalMessage = async () => {
    if (!import.meta.env.VITE_BIBLE_API_KEY) {
      setMessageError('Falta configurar VITE_BIBLE_API_KEY en el archivo .env');
      setShowMessage(false);
      return;
    }

    setMessageLoading(true);
    setMessageError(null);

    try {
      const message = await getDailyInspirationalMessage();

      if (!message) {
        setMessageError('No se pudo cargar el mensaje inspirador en este momento. Inténtalo nuevamente.');
        setShowMessage(false);
        return;
      }

      setMessageContent(message);
      setShowMessage(true);
    } finally {
      setMessageLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#35424a", color: "#ffffff", padding: "20px", textAlign: "center" }}>
        <h1 style={{fontSize: "2rem"}}>Parroquia Nuestra Señora del Carmen y San Maximiliano Kolbe</h1>
      </header>

      <main style={{ padding: "20px", backgroundColor: "#f4f4f4", minHeight: "80vh" }}>
        <section style={{ marginTop: "2rem", backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px", color: "#333" }}>
          <h2 style={{ color: "#333" }}>Bienvenidos</h2>
          <p>
            Somos la Parroquia Nuestra Señora del Carmen, una comunidad de fe dedicada al servicio de nuestros feligreses. 
            Con una larga tradición de devoción y compromiso, nos esforzamos por ser un lugar de paz, esperanza y comunidad.
          </p>
        </section>

        <section style={{ marginTop: "2rem", backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px", color: "#333" }}>
          <h2 style={{ color: "#333" }}>Horarios de Misa</h2>
          <ul style={{ textAlign: "left" }}>
            <li><strong>Lunes a Viernes:</strong> 7:00 AM y 6:00 PM</li>
            <li><strong>Sábados:</strong> 8:00 AM y 6:00 PM</li>
            <li><strong>Domingos:</strong> 7:00 AM, 9:00 AM, 11:00 AM y 6:00 PM</li>
          </ul>
        </section>

        <section style={{ marginTop: "2rem", backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px", color: "#333" }}>
          <h2 style={{ color: "#333" }}>Evangelio del Día</h2>
          <p>
            <strong>Lectura Diaria:</strong> Acompáñanos en nuestra reflexión diaria sobre el Evangelio. 
            Recibe el mensaje de Jesús cada día para guiar tu camino espiritual.
          </p>
          <button
            onClick={handleGetGospel}
            disabled={loading}
            style={{
              backgroundColor: "#35424a",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: "16px",
              marginTop: "10px",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Cargando...' : 'Leer Evangelio de Hoy'}
          </button>

          {gospelError && (
            <div
              style={{
                marginTop: "12px",
                padding: "10px 12px",
                backgroundColor: "#fff4f4",
                borderLeft: "4px solid #b91c1c",
                borderRadius: "4px",
                color: "#7f1d1d"
              }}
            >
              <p style={{ margin: 0 }}>{gospelError}</p>
              <button
                onClick={handleGetGospel}
                disabled={loading}
                style={{
                  marginTop: "8px",
                  backgroundColor: "#b91c1c",
                  color: "white",
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  fontSize: "13px"
                }}
              >
                {loading ? 'Reintentando...' : 'Reintentar'}
              </button>
            </div>
          )}
          
          {showGospel && gospelContent && (
            <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderLeft: "4px solid #35424a", borderRadius: "4px" }}>
              <h3>{formatPassageReference(gospelContent.reference, gospelContent.id)}</h3>
              <p style={{ lineHeight: "1.8", fontStyle: "italic" }}>
                {gospelContent.content}
              </p>
              <button
                onClick={() => setShowGospel(false)}
                style={{
                  backgroundColor: "#999",
                  color: "white",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                Cerrar
              </button>
            </div>
          )}
        </section>

        <section style={{ marginTop: "2rem", backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px", color: "#333" }}>
          <h2 style={{ color: "#333" }}>Mensaje Inspirador</h2>
          <p>
            <strong>Reflexión Espiritual:</strong> Recibe mensajes de esperanza, fe y amor cada día. 
            Nuestros pastores comparten inspiración para fortalecer tu relación con Dios.
          </p>
          <button
            onClick={handleGetInspirationalMessage}
            disabled={messageLoading}
            style={{
              backgroundColor: "#35424a",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: messageLoading ? "not-allowed" : "pointer",
              opacity: messageLoading ? 0.7 : 1,
              fontSize: "16px",
              marginTop: "10px"
            }}
          >
            {messageLoading ? 'Cargando...' : 'Ver Mensaje Inspirador'}
          </button>

          {messageError && (
            <div
              style={{
                marginTop: "12px",
                padding: "10px 12px",
                backgroundColor: "#fff4f4",
                borderLeft: "4px solid #b91c1c",
                borderRadius: "4px",
                color: "#7f1d1d"
              }}
            >
              <p style={{ margin: 0 }}>{messageError}</p>
              <button
                onClick={handleGetInspirationalMessage}
                disabled={messageLoading}
                style={{
                  marginTop: "8px",
                  backgroundColor: "#b91c1c",
                  color: "white",
                  padding: "6px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: messageLoading ? "not-allowed" : "pointer",
                  opacity: messageLoading ? 0.7 : 1,
                  fontSize: "13px"
                }}
              >
                {messageLoading ? 'Reintentando...' : 'Reintentar'}
              </button>
            </div>
          )}

          {showMessage && messageContent && (
            <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderLeft: "4px solid #35424a", borderRadius: "4px" }}>
              <h3>{formatPassageReference(messageContent.reference, messageContent.id)}</h3>
              <p style={{ lineHeight: "1.8", fontStyle: "italic" }}>
                {messageContent.content}
              </p>
              <button
                onClick={() => setShowMessage(false)}
                style={{
                  backgroundColor: "#999",
                  color: "white",
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                Cerrar
              </button>
            </div>
          )}
        </section>

        <section style={{ marginTop: "2rem", backgroundColor: "white", padding: "20px", borderRadius: "8px", marginBottom: "20px", color: "#333" }}>
          <h2 style={{ color: "#333" }}>Contacto</h2>
          <p>
            <strong>Dirección:</strong> Calle Principal, Ciudad<br />
            <strong>Teléfono:</strong> (XXX) XXX-XXXX<br />
            <strong>Correo:</strong> info@parroquiacarmenvirtual.com
          </p>
          <button
            style={{
              backgroundColor: "#35424a",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px"
            }}
          >
            Contáctanos
          </button>
        </section>
      </main>

      <footer style={{ backgroundColor: "#35424a", color: "#ffffff", padding: "20px", textAlign: "center" }}>
        <p>&copy; 2026 Parroquia Nuestra Señora del Carmen. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
