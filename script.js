/*
  TARJETA NFC PREMIUM — CONFIGURACIÓN
  Edita los valores de PROFILE para personalizar la tarjeta.
  Los enlaces deben ser URLs completas. WhatsApp usa número internacional
  sin espacios ni signos; ejemplo México: 5215512345678.
*/
const PROFILE = {
  name: "Tu Nombre",
  title: "Tu profesión o descripción",
  location: "México",
  bio: "Conectemos. Aquí puedes añadir una breve presentación personal.",
  photo: "assets/avatar.svg",
  phone: "+52 55 1234 5678",
  email: "hola@ejemplo.com",
  whatsapp: "5215512345678",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  tiktok: "https://www.tiktok.com/@",
  // Si no deseas mostrar un enlace, déjalo como cadena vacía: ""
};

const byId = (id) => document.getElementById(id);

function setText(id, value, fallback = "") {
  const el = byId(id);
  if (el) el.textContent = value || fallback;
}

function setLink(id, url) {
  const el = byId(id);
  if (!el) return;
  if (url) {
    el.href = url;
    el.hidden = false;
  } else {
    el.hidden = true;
  }
}

function cleanPhone(phone) {
  return (phone || "").replace(/[^\d+]/g, "");
}

function createVCard() {
  const fullName = PROFILE.name || "Contacto";
  const phone = cleanPhone(PROFILE.phone);
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCard(fullName)}`,
    `N:${escapeVCard(fullName)};;;;`,
    PROFILE.title ? `TITLE:${escapeVCard(PROFILE.title)}` : "",
    phone ? `TEL;TYPE=CELL:${escapeVCard(phone)}` : "",
    PROFILE.email ? `EMAIL:${escapeVCard(PROFILE.email)}` : "",
    PROFILE.location ? `ADR;TYPE=HOME:;;${escapeVCard(PROFILE.location)};;;;` : "",
    "END:VCARD"
  ].filter(Boolean);
  // vCard 3.0 usa CRLF como separador de líneas.
  const blob = new Blob([lines.join("\r\n") + "\r\n"], {
    type: "text/vcard;charset=utf-8"
  });
  const url = URL.createObjectURL(blob);
  const link = byId("save-contact");
  link.href = url;
  link.download = `${(fullName || "contacto").replace(/[^\p{L}\p{N}_-]+/gu, "_")}.vcf`;
}

function escapeVCard(value) {
  return String(value ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function initProfile() {
  setText("profile-name", PROFILE.name, "Tu Nombre");
  setText("profile-title", PROFILE.title, "Tu profesión o descripción");
  setText("profile-location", PROFILE.location);
  setText("profile-bio", PROFILE.bio, "Conectemos.");

  const photo = byId("profile-photo");
  if (photo && PROFILE.photo) {
    photo.src = PROFILE.photo;
    photo.alt = `Fotografía de ${PROFILE.name || "la persona"}`;
  }

  const whatsappNumber = (PROFILE.whatsapp || "").replace(/\D/g, "");
  setLink("whatsapp-link", whatsappNumber ? `https://wa.me/${whatsappNumber}` : "");
  setLink("instagram-link", PROFILE.instagram);
  setLink("linkedin-link", PROFILE.linkedin);
  setLink("tiktok-link", PROFILE.tiktok);
  setLink("email-link", PROFILE.email ? `mailto:${PROFILE.email}` : "");

  createVCard();

  // Aviso en desarrollo: ayuda a identificar los enlaces de ejemplo.
  const hasPlaceholders = !PROFILE.name || PROFILE.name === "Tu Nombre";
  if (hasPlaceholders) {
    const status = byId("status-message");
    status.textContent = "Prototipo de ejemplo: edita tus datos en script.js.";
  }
}

initProfile();
