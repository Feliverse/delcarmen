import type { BiblePassage, LiturgicalWeekDay } from '../../services';

type WordSectionProps = {
  gospelContent: BiblePassage | null;
  showGospel: boolean;
  loading: boolean;
  gospelError: string | null;
  onToggleGospel: () => void;
  messageContent: BiblePassage | null;
  showMessage: boolean;
  messageLoading: boolean;
  messageError: string | null;
  onToggleMessage: () => void;
  formatReference: (reference?: string, fallbackId?: string) => string;
  weeklyCalendar: LiturgicalWeekDay[];
  weeklyCalendarLoading: boolean;
  weeklyCalendarError: string | null;
};

export function WordSection({
  gospelContent,
  showGospel,
  loading,
  gospelError,
  onToggleGospel,
  messageContent,
  showMessage,
  messageLoading,
  messageError,
  onToggleMessage,
  formatReference,
  weeklyCalendar,
  weeklyCalendarLoading,
  weeklyCalendarError,
}: WordSectionProps) {
  const getSourceColorClasses = (source?: string) => {
    if (!source) return { border: 'border-sky-300', bg: 'bg-sky-100/80', text: 'text-sky-900' };

    const normalized = source.toLowerCase();
    if (normalized.includes('parroquia')) return { border: 'border-amber-300', bg: 'bg-amber-100/70', text: 'text-amber-900' };
    if (normalized.includes('cochabamba')) return { border: 'border-blue-300', bg: 'bg-blue-100/70', text: 'text-blue-900' };
    if (normalized.includes('bolivia')) return { border: 'border-emerald-300', bg: 'bg-emerald-100/70', text: 'text-emerald-900' };
    if (normalized.includes('capilla')) return { border: 'border-cyan-300', bg: 'bg-cyan-100/70', text: 'text-cyan-900' };

    return { border: 'border-sky-300', bg: 'bg-sky-100/80', text: 'text-sky-900' };
  };

  const renderLiturgicalMeta = (content: BiblePassage) => {
    const items = [content.liturgicalSeason, content.liturgicalColor, content.celebrationGrade].filter(Boolean);
    if (items.length === 0) return null;

    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-amber-300 bg-amber-100/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const renderLocalCalendarBadge = (content: BiblePassage) => {
    if (!content.isLocalCalendar) return null;

    const sourceText = content.localCalendarSource ? `: ${content.localCalendarSource}` : '';
    const colors = getSourceColorClasses(content.localCalendarSource);

    return (
      <span className={`mt-2 inline-flex rounded-full border ${colors.border} ${colors.bg} px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${colors.text}`}>
        {`Calendario local${sourceText}`}
      </span>
    );
  };

  const baseButtonClass =
    'inline-flex min-h-11 w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-600 disabled:opacity-100';

  const gospelButtonClass =
    'border border-amber-500 bg-amber-400 text-slate-900 shadow-sm hover:bg-slate-800 hover:text-amber-100';

  const gospelButtonActiveClass =
    'border-slate-800 bg-slate-800 text-amber-100 hover:bg-amber-400 hover:text-slate-900';

  const reflectionButtonClass =
    'border border-amber-500 bg-amber-300 text-slate-900 shadow-sm hover:bg-amber-200 hover:text-slate-900';

  const reflectionButtonActiveClass =
    'border-slate-800 bg-slate-800 text-amber-100 hover:bg-amber-400 hover:text-slate-900';

  const getColorDotClass = (color?: string) => {
    const normalized = (color || '').toLowerCase();
    if (normalized.includes('morado')) return 'bg-violet-600';
    if (normalized.includes('blanco')) return 'bg-slate-200 ring-1 ring-slate-400';
    if (normalized.includes('rojo')) return 'bg-red-600';
    if (normalized.includes('verde')) return 'bg-emerald-600';
    if (normalized.includes('rosa')) return 'bg-rose-400';
    return 'bg-slate-500';
  };

  const renderWeeklyDayItem = (day: LiturgicalWeekDay) => (
    <li key={day.dateKey} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-slate-800">{day.dayLabel}</p>
        <div className="flex flex-wrap items-center gap-2">
          {day.isLocalCalendar && (() => {
            const colors = getSourceColorClasses(day.localCalendarSource);
            return (
              <span className={`rounded-full border ${colors.border} ${colors.bg} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${colors.text}`}>
                {day.localCalendarSource ? `Local: ${day.localCalendarSource}` : 'Local'}
              </span>
            );
          })()}
          {day.liturgicalColor && (
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
              <span className={`h-2 w-2 rounded-full ${getColorDotClass(day.liturgicalColor)}`} />
              {day.liturgicalColor}
            </span>
          )}
          {day.celebrationGrade && (
            <span className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
              {day.celebrationGrade}
            </span>
          )}
        </div>
      </div>
      <p className="mt-1 text-sm text-slate-700">{day.celebrationName}</p>
      {day.liturgicalSeason && (
        <p className="text-xs text-slate-500">{day.liturgicalSeason}</p>
      )}
    </li>
  );

  return (
    <section id="palabra" className="animate-fade-in-soft scroll-mt-24 rounded-xl bg-gradient-to-b from-amber-50 via-white to-slate-100 p-5 shadow-md md:p-10 lg:p-11">
      <h2 className="mb-2 font-serif text-2xl font-semibold text-slate-900 md:text-3xl">Palabra del Día</h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-slate-700 md:mb-6 md:text-base">
        Un espacio breve para contemplar el Evangelio y recibir una reflexión en clave de paz.
      </p>

      <div className="grid gap-5 md:grid-cols-2 md:gap-8">
        <article className="rounded-xl border border-amber-400 bg-amber-50 p-4 shadow-sm ring-1 ring-amber-300 md:p-5">
          <p className="mb-2 inline-flex rounded-full bg-amber-200 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">Lectura</p>
          <h3 className="mb-1 font-serif text-lg font-semibold text-slate-900 md:text-xl">Evangelio de Hoy</h3>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base">
            Reflexiona con el Evangelio del día para guiar tu camino espiritual.
          </p>
          <button
            onClick={onToggleGospel}
            disabled={loading}
            className={`${baseButtonClass} ${showGospel ? gospelButtonActiveClass : gospelButtonClass}`}
          >
            {loading ? 'Cargando Evangelio…' : showGospel ? 'Ocultar Evangelio ✕' : 'Leer Evangelio del Día →'}
          </button>

          {gospelError && (
            <div className="mt-3 rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
              <p className="text-sm">{gospelError}</p>
            </div>
          )}

          {showGospel && gospelContent && (
            <div className="animate-fade-in-up mt-4 rounded-lg border border-amber-400/60 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {formatReference(gospelContent.reference, gospelContent.id)}
              </p>
              {renderLocalCalendarBadge(gospelContent)}
              {renderLiturgicalMeta(gospelContent)}
              <p className="mt-2 text-sm italic leading-6 text-slate-700 md:text-base">{gospelContent.content}</p>
            </div>
          )}
        </article>

        <article className="rounded-xl border border-slate-700 bg-slate-700 p-4 text-slate-50 shadow-sm ring-1 ring-slate-500 md:p-5">
          <p className="mb-2 inline-flex rounded-full bg-slate-200/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100">Reflexión</p>
          <h3 className="mb-1 font-serif text-lg font-semibold text-slate-50 md:text-xl">Reflexión Espiritual</h3>
          <p className="mb-4 text-sm leading-relaxed text-slate-100 md:text-base">
            Recibe un mensaje de esperanza y fe para fortalecer tu relación con Dios.
          </p>
          <button
            onClick={onToggleMessage}
            disabled={messageLoading}
            className={`${baseButtonClass} ${showMessage ? reflectionButtonActiveClass : reflectionButtonClass}`}
          >
            {messageLoading ? 'Cargando Reflexión…' : showMessage ? 'Ocultar Reflexión ✕' : 'Recibir Reflexión de Hoy ✨'}
          </button>

          {messageError && (
            <div className="mt-3 rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
              <p className="text-sm">{messageError}</p>
            </div>
          )}

          {showMessage && messageContent && (
            <div className="animate-fade-in-up mt-4 rounded-lg border border-amber-300/80 bg-slate-50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {formatReference(messageContent.reference, messageContent.id)}
              </p>
              {renderLocalCalendarBadge(messageContent)}
              {renderLiturgicalMeta(messageContent)}
              <p className="mt-2 text-sm italic leading-6 text-slate-700 md:text-base">{messageContent.content}</p>
            </div>
          )}
        </article>
      </div>

      <article className="mt-6 rounded-xl border border-slate-300 bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 md:mt-8 md:p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-slate-900 md:text-xl">Calendario Litúrgico Semanal</h3>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Próximos 7 días</p>
        </div>

        {weeklyCalendarError && (
          <div className="rounded-md border-l-4 border-red-700 bg-red-50 px-3 py-2 text-red-900">
            <p className="text-sm">{weeklyCalendarError}</p>
          </div>
        )}

        {weeklyCalendarLoading && (
          <p className="text-sm text-slate-600">Cargando calendario litúrgico…</p>
        )}

        {!weeklyCalendarLoading && !weeklyCalendarError && (
          <div className="space-y-4">
            {weeklyCalendar[0] && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Hoy</p>
                <ul className="space-y-2">{renderWeeklyDayItem(weeklyCalendar[0])}</ul>
              </div>
            )}

            {weeklyCalendar[1] && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Manana</p>
                <ul className="space-y-2">{renderWeeklyDayItem(weeklyCalendar[1])}</ul>
              </div>
            )}

            {weeklyCalendar.length > 2 && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Proximos dias</p>
                <ul className="space-y-2">
                  {weeklyCalendar.slice(2).map((day) => renderWeeklyDayItem(day))}
                </ul>
              </div>
            )}
          </div>
        )}
      </article>
    </section>
  );
}
