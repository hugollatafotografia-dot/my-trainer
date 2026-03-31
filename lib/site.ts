export const navLinks = [
  { href: "/tratamientos", key: "treatments" },
  { href: "/sobre-nosotros", key: "about" },
  { href: "/resultados", key: "results" },
  { href: "/contacto", key: "contact" },
  { href: "/reservar", key: "book" },
] as const;

export const legalLinks = [
  { href: "/legal/aviso-legal", key: "legalNotice" },
  { href: "/legal/privacidad", key: "privacy" },
  { href: "/legal/cookies", key: "cookies" },
] as const;

export const contactDetails = {
  phone: "688 080",
  phoneIntl: "+376 688 080",
  whatsappNumber: "376688080",
  email: "illa.carlemany@centresideal.com",
  location: "Centre Comercial illa Carlemany, Escaldes-Engordany, Andorra",
  address: "Av. Carlemany, 70, AD700 Andorra",
  floor: "Segunda planta",
  mapsPlaceUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Carlemany+70,+AD700+Andorra",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Carlemany+70,+AD700+Andorra",
};

export const whatsappHref = `https://wa.me/${contactDetails.whatsappNumber}`;
