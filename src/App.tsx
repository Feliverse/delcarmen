import { useEffect, useState } from 'react';
import { getDailyGospel, getDailyInspirationalMessage } from './services/bibleService';
import type { BiblePassage } from './services/bibleService';

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

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Palabra del Día', href: '#palabra' },
    { label: 'Horarios', href: '#horarios' },
    { label: 'Trámites', href: '#tramites' },
    { label: 'Noticias', href: '#noticias' },
    { label: 'Grupos', href: '#grupos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-conventual-habit to-conventual-ash shadow-lg">
      <div className="mx-auto max-w-5xl px-4 py-4 text-conventual-light">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-serif text-lg font-bold tracking-wide">
            <div className="h-8 w-8 rounded-full bg-conventual-gold flex items-center justify-center">
              <span className="text-xs font-bold text-conventual-habit">NSC</span>
            </div>
            <span>Ntra. Sra. del Carmen</span>
          </div>

          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition hover:text-conventual-gold hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`block h-0.5 w-6 bg-white transition ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-3 border-t border-conventual-light/20 pt-4 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium transition hover:text-conventual-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  const heroCarouselBasePath = `${import.meta.env.BASE_URL}hero-carousel/`;

  const HERO_SLIDES = [
    { src: `${heroCarouselBasePath}slide-1.png`, alt: 'Templo parroquial', logoVariant: 'white' },
    { src: `${heroCarouselBasePath}slide-2.jpg`, alt: 'Comunidad en celebración', logoVariant: 'white' },
    { src: `${heroCarouselBasePath}slide-3.jpg`, alt: 'Altar de la parroquia', logoVariant: 'white' },
  ];
  const HERO_LOGOS = {
    white: `${heroCarouselBasePath}logo-blanco.png`,
    black: `${heroCarouselBasePath}logo-negro.png`,
  };
  const FALLBACK_HERO_IMAGE =
    'https://scontent.fcbb3-1.fna.fbcdn.net/v/t39.30808-6/620069488_918846764042791_684527132072904790_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=GUlC2bj7_uoQ7kNvwE3dhLR&_nc_oc=Adm2CPK_UgPjpX2UOwUwa4QhhIsyPOBX-TE9j198o7SfKnA4rkFr5PsQZ59vt25bhVxwnXrw50ZRLX2KBz9B5BWC&_nc_zt=23&_nc_ht=scontent.fcbb3-1.fna&_nc_gid=m48ehKeWY8BIDUlHWHIj4w&oh=00_Afv02kegh0_A8IqcPJswzdq_9SHufg6a4uayyeRFt9zvGA&oe=699FE7E4';

  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroLogoMissing, setHeroLogoMissing] = useState(false);
  const currentLogoVariant = HERO_SLIDES[currentSlide]?.logoVariant ?? 'white';
  const currentHeroLogo = currentLogoVariant === 'black' ? HERO_LOGOS.black : HERO_LOGOS.white;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [HERO_SLIDES.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative h-96 overflow-hidden bg-gray-900 md:h-screen">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            onError={(event) => {
              if (event.currentTarget.src !== FALLBACK_HERO_IMAGE) {
                event.currentTarget.src = FALLBACK_HERO_IMAGE;
              }
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50" />

      <div className="absolute inset-y-0 left-0 z-20 flex items-center px-3 md:px-6">
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={goToPrevSlide}
          className="rounded-full bg-black/40 px-3 py-2 text-xl text-white transition hover:bg-black/60"
        >
          ‹
        </button>
      </div>

      <div className="absolute inset-y-0 right-0 z-20 flex items-center px-3 md:px-6">
        <button
          type="button"
          aria-label="Siguiente imagen"
          onClick={goToNextSlide}
          className="rounded-full bg-black/40 px-3 py-2 text-xl text-white transition hover:bg-black/60"
        >
          ›
        </button>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center text-center md:items-start md:justify-start md:text-left">
        <div className="w-full space-y-4 px-4 md:px-10 md:pt-10">
          {heroLogoMissing ? (
            <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
              Parroquia Nuestra Señora del Carmen<br />y San Maximiliano Kolbe
            </h1>
          ) : (
            <img
              src={currentHeroLogo}
              alt="Logotipo tipográfico de la parroquia"
              className="mx-auto max-h-64 w-full max-w-4xl object-contain md:-ml-80 md:mx-0"
              onError={() => setHeroLogoMissing(true)}
            />
          )}
          <p className="text-2xl text-white md:text-6xl text-center">Paz y Bien</p>np
          <p className="mx-auto max-w-2xl text-lg text-white text-center">
            Bienvenido a la página oficial de la Parroquia Nuestra Señora del Carmen y San Maximiliano Kolbe. Aquí encontrarás toda la información que necesitas para vivir tu fe en comunidad con nosotros.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 md:justify-start">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Ir a imagen ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${index === currentSlide ? 'bg-conventual-gold' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
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
        setGospelError('No se pudo cargar el evangelio. Inténtalo nuevamente.');
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
        setMessageError('No se pudo cargar el mensaje. Inténtalo nuevamente.');
        setShowMessage(false);
        return;
      }
      setMessageContent(message);
      setShowMessage(true);
    } finally {
      setMessageLoading(false);
    }
  };

  const primaryButtonClass =
    'rounded-md bg-conventual-habit px-4 py-2 text-sm font-medium text-conventual-light transition hover:bg-conventual-ash hover:text-white disabled:cursor-not-allowed disabled:opacity-70';
  const secondaryButtonClass =
    'rounded-md bg-conventual-ash px-4 py-2 text-sm font-medium text-conventual-light transition hover:bg-conventual-habit disabled:cursor-not-allowed disabled:opacity-70';

  return (
    <div className="min-h-screen bg-conventual-light text-conventual-habit">
      <Navbar />
      <HeroSection />

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-12">
        {/* ===== PALABRA DEL DÍA ===== */}
        <section id="palabra" className="rounded-lg bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">
            Palabra del Día
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Evangelio */}
            <div>
              <h3 className="mb-3 font-semibold text-conventual-habit">Evangelio de Hoy</h3>
              <p className="mb-4 text-sm text-conventual-ash">
                Reflexiona con el Evangelio del día para guiar tu camino espiritual.
              </p>
              <button
                onClick={handleGetGospel}
                disabled={loading}
                className={`${primaryButtonClass} w-full`}
              >
                {loading ? 'Cargando...' : 'Leer Evangelio'}
              </button>

              {gospelError && (
                <div className="mt-3 rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
                  <p className="text-sm">{gospelError}</p>
                </div>
              )}

              {showGospel && gospelContent && (
                <div className="mt-4 rounded-md border-l-4 border-conventual-gold bg-conventual-light p-4">
                  <p className="text-xs font-semibold text-conventual-ash">
                    {formatPassageReference(gospelContent.reference, gospelContent.id)}
                  </p>
                  <p className="mt-2 text-sm italic leading-6 text-conventual-ash">
                    {gospelContent.content}
                  </p>
                </div>
              )}
            </div>

            {/* Mensaje Inspirador */}
            <div>
              <h3 className="mb-3 font-semibold text-conventual-habit">Reflexión Espiritual</h3>
              <p className="mb-4 text-sm text-conventual-ash">
                Recibe un mensaje de esperanza y fe para fortalecer tu relación con Dios.
              </p>
              <button
                onClick={handleGetInspirationalMessage}
                disabled={messageLoading}
                className={`${primaryButtonClass} w-full`}
              >
                {messageLoading ? 'Cargando...' : 'Ver Reflexión'}
              </button>

              {messageError && (
                <div className="mt-3 rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
                  <p className="text-sm">{messageError}</p>
                </div>
              )}

              {showMessage && messageContent && (
                <div className="mt-4 rounded-md border-l-4 border-conventual-gold bg-conventual-light p-4">
                  <p className="text-xs font-semibold text-conventual-ash">
                    {formatPassageReference(messageContent.reference, messageContent.id)}
                  </p>
                  <p className="mt-2 text-sm italic leading-6 text-conventual-ash">
                    {messageContent.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== HORARIOS (CORAZÓN) ===== */}
        <section id="horarios" className="rounded-lg bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">
            Horarios de Misas y Confesiones
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-serif text-xl text-conventual-habit">Misas</h3>
              <ul className="space-y-2 text-conventual-ash">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Lunes a Viernes</span>
                  <span>7:00 AM, 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Sábados</span>
                  <span>8:00 AM, 6:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium">Domingos</span>
                  <span>7:00, 9:00, 11:00 AM, 6:00 PM</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-serif text-xl text-conventual-habit">Confesiones</h3>
              <ul className="space-y-2 text-conventual-ash">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Martes a Viernes</span>
                  <span>5:00 - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Sábados</span>
                  <span>4:00 - 6:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium">Domingos</span>
                  <span>6:30 - 7:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== TRÁMITES ===== */}
        <section id="tramites" className="rounded-lg bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">
            Trámites y Sacramentos
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-conventual-light p-4">
              <h3 className="mb-2 font-serif text-lg text-conventual-habit">Bautismo</h3>
              <ul className="space-y-1 text-sm text-conventual-ash">
                <li>• Solicitar cita con la parroquia</li>
                <li>• Certificado de nacimiento</li>
                <li>• Padrino/Madrina confirma su fe</li>
                <li>• Preparación de padres (opcional)</li>
              </ul>
            </div>

            <div className="rounded-lg bg-conventual-light p-4">
              <h3 className="mb-2 font-serif text-lg text-conventual-habit">Matrimonio</h3>
              <ul className="space-y-1 text-sm text-conventual-ash">
                <li>• Solicitar con 6 meses de anticipación</li>
                <li>• Acta de bautismo de ambos</li>
                <li>• Certificado de soltería</li>
                <li>• Preparación matrimonial (obligatoria)</li>
              </ul>
            </div>

            <div className="rounded-lg bg-conventual-light p-4">
              <h3 className="mb-2 font-serif text-lg text-conventual-habit">Confirmación</h3>
              <ul className="space-y-1 text-sm text-conventual-ash">
                <li>• Estar bautizado</li>
                <li>• Estar en gracia de Dios</li>
                <li>• Catecismo de preparación</li>
                <li>• Aceptación personal de la fe</li>
              </ul>
            </div>

            <div className="rounded-lg bg-conventual-light p-4">
              <h3 className="mb-2 font-serif text-lg text-conventual-habit">Reconciliación</h3>
              <ul className="space-y-1 text-sm text-conventual-ash">
                <li>• Disponible durante confesiones</li>
                <li>• No requiere cita previa</li>
                <li>• Confidencialidad garantizada</li>
                <li>• Encuentro personal con el sacerdote</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-sm text-conventual-ash">
            <strong>¿Preguntas?</strong> Contáctanos directamente por teléfono o email para más detalles sobre cualquier trámite.
          </p>
        </section>

        {/* ===== NOTICIAS/EVENTOS ===== */}
        <section id="noticias" className="rounded-lg bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">
            Noticias y Eventos
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-conventual-gold bg-conventual-light p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-conventual-habit">
                    Triduo Pascual
                  </h3>
                  <p className="text-sm text-conventual-ash">
                    Acompáñanos en la celebración más importante del año cristiano.
                  </p>
                </div>
                <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">
                  Próximo
                </span>
              </div>
            </div>

            <div className="border-l-4 border-conventual-gold bg-conventual-light p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-conventual-habit">
                    Jornada de Adoración Eucarística
                  </h3>
                  <p className="text-sm text-conventual-ash">
                    Primer viernes de cada mes de 6 PM a medianoche.
                  </p>
                </div>
                <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">
                  Mensual
                </span>
              </div>
            </div>

            <div className="border-l-4 border-conventual-gold bg-conventual-light p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-semibold text-conventual-habit">
                    Retiro Espiritual
                  </h3>
                  <p className="text-sm text-conventual-ash">
                    Profundiza en tu fe con nuestros retiros trimestrales.
                  </p>
                </div>
                <span className="rounded-md bg-conventual-habit px-3 py-1 text-xs text-conventual-light">
                  Trimestral
                </span>
              </div>
            </div>
          </div>

          <button className={`${primaryButtonClass} mt-6 w-full`}>
            Ver Boletín Completo
          </button>
        </section>

        {/* ===== GRUPOS ===== */}
        <section id="grupos" className="rounded-lg bg-white p-6 shadow-md md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold text-conventual-habit">
            Nuestros Grupos
          </h2>

          <p className="mb-6 text-conventual-ash">
            Somos una comunidad de fe. Únete a los grupos que enriquecen nuestra vida parroquial.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: 'Catecismo', desc: 'Preparación de niños y jóvenes' },
              { name: 'Grupo de Oración', desc: 'Encuentros semanales de fe' },
              { name: 'Coro Parroquial', desc: 'Alabanza en las celebraciones' },
              { name: 'Ministerio de Liturgia', desc: 'Ayudantes de misa' },
              { name: 'Pastoral Juvenil', desc: 'Para jóvenes de 14-35 años' },
              { name: 'Vicentinos', desc: 'Servicio a los pobres y necesitados' },
            ].map((grupo) => (
              <div
                key={grupo.name}
                className="rounded-lg border-2 border-conventual-ash p-4 transition hover:border-conventual-gold hover:bg-conventual-light"
              >
                <h3 className="font-serif font-semibold text-conventual-habit">{grupo.name}</h3>
                <p className="text-sm text-conventual-ash">{grupo.desc}</p>
                <button className="mt-3 text-xs font-semibold text-conventual-habit hover:text-conventual-gold">
                  Saber más →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CONTACTO ===== */}
        <section id="contacto" className="rounded-lg bg-conventual-habit p-6 text-conventual-light shadow-md md:p-8">
          <h2 className="mb-6 font-serif text-3xl font-semibold">Contacto</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold">Ubicación</h3>
              <p className="text-sm">
                Calle Principal 123<br />
                Ciudad, Estado 12345<br />
                País
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Comunicación</h3>
              <p className="text-sm">
                <strong>Teléfono:</strong> (XXX) XXX-XXXX<br />
                <strong>Correo:</strong> info@parroquiacarmenvirtual.com
              </p>
            </div>
          </div>

          <button className={`${primaryButtonClass} mt-6 w-full`}>
            Enviar Mensaje
          </button>
        </section>
      </main>

      <footer className="bg-conventual-habit px-4 py-8 text-center text-conventual-light">
        <p>&copy; 2026 Parroquia Nuestra Señora del Carmen. Todos los derechos reservados.</p>
        <p className="mt-2 text-xs">Paz y Bien 🕊️</p>
      </footer>
    </div>
  );
}

export default App;
