import { useEffect, useState } from 'react';

export function HeroSection() {
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
    <section id="hero" className="relative h-screen scroll-mt-24 overflow-hidden bg-gray-900">
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
              className="mx-auto max-h-80 w-full max-w-4xl object-contain md:-ml-80 md:mx-0 md:max-h-40"
              onError={() => setHeroLogoMissing(true)}
            />
          )}
          <p className="text-center text-4xl text-white md:text-7xl">Jubileo Franciscano</p>
          <p className="mx-auto max-w-2xl text-center text-2xl text-white">
            Por los 800 años del transito de San Francisco de Asis<br />(1226-2026)
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
