import { TRACK_EVENTS, type TrackEventRecord } from "./events";

type SourceAggregate = {
  source: string;
  total: number;
  reservar: number;
  whatsapp: number;
  ctrPercent: number;
};

type VariantAggregate = {
  variant: string;
  total: number;
  reservar: number;
  whatsapp: number;
  reservarRate: number;
  whatsappRate: number;
};

type CtaRankingItem = {
  ctaLabel: string;
  ctaSource: string;
  total: number;
  reservar: number;
  whatsapp: number;
};

type AnalyticsSnapshot = {
  totalEvents: number;
  totalReservarClicks: number;
  totalWhatsappClicks: number;
  reservarClickShare: number;
  whatsappClickShare: number;
  sourceStats: SourceAggregate[];
  variantStats: VariantAggregate[];
  ctaRanking: CtaRankingItem[];
  recentEvents: TrackEventRecord[];
};

const UNSET_SOURCE = "sin_source";
const UNSET_VARIANT = "sin_variant";
const UNSET_LABEL = "sin_label";

function toPercent(value: number, total: number) {
  if (!total) {
    return 0;
  }

  return Number(((value / total) * 100).toFixed(2));
}

export function buildAnalyticsSnapshot(events: TrackEventRecord[]): AnalyticsSnapshot {
  const sortedEvents = [...events].sort((a, b) => b.timestamp - a.timestamp);
  const totalEvents = sortedEvents.length;

  const totalReservarClicks = sortedEvents.filter(
    (event) => event.event === TRACK_EVENTS.CLICK_RESERVAR,
  ).length;
  const totalWhatsappClicks = sortedEvents.filter(
    (event) => event.event === TRACK_EVENTS.CLICK_WHATSAPP,
  ).length;

  const bySource = new Map<string, SourceAggregate>();
  const byVariant = new Map<string, VariantAggregate>();
  const byCta = new Map<string, CtaRankingItem>();

  for (const event of sortedEvents) {
    const source = event.cta_source || UNSET_SOURCE;
    const variant = event.ab_variant || UNSET_VARIANT;
    const label = event.cta_label || UNSET_LABEL;
    const ctaKey = `${source}::${label}`;

    if (!bySource.has(source)) {
      bySource.set(source, {
        source,
        total: 0,
        reservar: 0,
        whatsapp: 0,
        ctrPercent: 0,
      });
    }

    if (!byVariant.has(variant)) {
      byVariant.set(variant, {
        variant,
        total: 0,
        reservar: 0,
        whatsapp: 0,
        reservarRate: 0,
        whatsappRate: 0,
      });
    }

    if (!byCta.has(ctaKey)) {
      byCta.set(ctaKey, {
        ctaLabel: label,
        ctaSource: source,
        total: 0,
        reservar: 0,
        whatsapp: 0,
      });
    }

    const sourceEntry = bySource.get(source);
    const variantEntry = byVariant.get(variant);
    const ctaEntry = byCta.get(ctaKey);
    if (!sourceEntry || !variantEntry || !ctaEntry) {
      continue;
    }

    sourceEntry.total += 1;
    variantEntry.total += 1;
    ctaEntry.total += 1;

    if (event.event === TRACK_EVENTS.CLICK_RESERVAR) {
      sourceEntry.reservar += 1;
      variantEntry.reservar += 1;
      ctaEntry.reservar += 1;
    }

    if (event.event === TRACK_EVENTS.CLICK_WHATSAPP) {
      sourceEntry.whatsapp += 1;
      variantEntry.whatsapp += 1;
      ctaEntry.whatsapp += 1;
    }
  }

  const sourceStats = [...bySource.values()]
    .map((item) => ({
      ...item,
      ctrPercent: toPercent(item.total, totalEvents),
    }))
    .sort((a, b) => b.total - a.total);

  const variantStats = [...byVariant.values()]
    .map((item) => ({
      ...item,
      reservarRate: toPercent(item.reservar, item.total),
      whatsappRate: toPercent(item.whatsapp, item.total),
    }))
    .sort((a, b) => b.total - a.total);

  const ctaRanking = [...byCta.values()]
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);

  return {
    totalEvents,
    totalReservarClicks,
    totalWhatsappClicks,
    reservarClickShare: toPercent(totalReservarClicks, totalEvents),
    whatsappClickShare: toPercent(totalWhatsappClicks, totalEvents),
    sourceStats,
    variantStats,
    ctaRanking,
    recentEvents: sortedEvents.slice(0, 25),
  };
}
