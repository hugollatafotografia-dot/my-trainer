export const TRACK_EVENTS = {
  CLICK_RESERVAR: "click_reservar",
  CLICK_WHATSAPP: "click_whatsapp",
} as const;

export const TRACKING_EVENT_CAPTURED = "tracking:event_captured";

export type TrackEventName = (typeof TRACK_EVENTS)[keyof typeof TRACK_EVENTS];

export type TrackEventPayload = {
  cta_source?: string;
  cta_label?: string;
  cta_href?: string;
  ab_test?: string;
  ab_variant?: string;
  page_path?: string;
};

export type TrackEventRecord = {
  event: TrackEventName;
  timestamp: number;
  session_id: string;
} & TrackEventPayload;
