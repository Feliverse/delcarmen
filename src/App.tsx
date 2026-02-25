import { useEffect, useState } from 'react';
import { getDailyGospel, getDailyInspirationalMessage } from './services';
import type { BiblePassage } from './services';
import { Footer, Navbar } from './components/layout';
import { GroupModal } from './components/modals';
import {
  ContactSection,
  GroupsSection,
  HeroSection,
  NewsSection,
  ProceduresSection,
  SchedulesSection,
  WordSection,
} from './components/sections';
import {
  FORM_SPREE_ENDPOINT,
  GROUPS,
  INTEREST_LINKS,
  NAV_LINKS,
  PARISH_FACEBOOK_URL,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
} from './data';
import type { ParishGroup } from './types';
import { formatPassageReference } from './utils';

function App() {
  const [gospelContent, setGospelContent] = useState<BiblePassage | null>(null);
  const [showGospel, setShowGospel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gospelError, setGospelError] = useState<string | null>(null);
  const [messageContent, setMessageContent] = useState<BiblePassage | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messageLoading, setMessageLoading] = useState(false);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<ParishGroup | null>(null);

  const handleGetGospel = async () => {
    if (showGospel) {
      setShowGospel(false);
      return;
    }

    if (gospelContent) {
      setGospelError(null);
      setShowMessage(false);
      setShowGospel(true);
      return;
    }

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
      setShowMessage(false);
      setShowGospel(true);
    } finally {
      setLoading(false);
    }
  };

  const handleGetInspirationalMessage = async () => {
    if (showMessage) {
      setShowMessage(false);
      return;
    }

    if (messageContent) {
      setMessageError(null);
      setShowGospel(false);
      setShowMessage(true);
      return;
    }

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
      setShowGospel(false);
      setShowMessage(true);
    } finally {
      setMessageLoading(false);
    }
  };

  const primaryButtonClass =
    'inline-flex min-h-10 items-center justify-center rounded-md bg-conventual-habit px-4 py-2 text-sm font-medium text-conventual-light transition hover:bg-conventual-ash hover:text-white disabled:cursor-not-allowed disabled:opacity-70';

  useEffect(() => {
    if (!selectedGroup) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedGroup(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedGroup]);

  const groupWhatsappLink = selectedGroup
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quisiera información sobre ${selectedGroup.name}.`)}`
    : WHATSAPP_LINK;

  return (
    <div className="min-h-screen bg-conventual-light text-conventual-habit">
      <Navbar links={NAV_LINKS} />
      <HeroSection />

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-12">
        <WordSection
          gospelContent={gospelContent}
          showGospel={showGospel}
          loading={loading}
          gospelError={gospelError}
          onToggleGospel={handleGetGospel}
          messageContent={messageContent}
          showMessage={showMessage}
          messageLoading={messageLoading}
          messageError={messageError}
          onToggleMessage={handleGetInspirationalMessage}
          formatReference={formatPassageReference}
          primaryButtonClass={primaryButtonClass}
        />

        <SchedulesSection />
        <ProceduresSection />
        <NewsSection primaryButtonClass={primaryButtonClass} />
        <GroupsSection groups={GROUPS} onSelectGroup={setSelectedGroup} />
        <ContactSection
          formspreeEndpoint={FORM_SPREE_ENDPOINT}
          whatsappLink={WHATSAPP_LINK}
          primaryButtonClass={primaryButtonClass}
        />
      </main>

      {selectedGroup && (
        <GroupModal
          group={selectedGroup}
          onClose={() => setSelectedGroup(null)}
          whatsappLink={groupWhatsappLink}
        />
      )}

      <Footer parishFacebookUrl={PARISH_FACEBOOK_URL} interestLinks={INTEREST_LINKS} />
    </div>
  );
}

export default App;
