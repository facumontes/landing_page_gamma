// Datos de contacto de Gamma. Se usan en el header, el formulario y el footer.
export const WHATSAPP_NUMBER = "5493514037700";
export const PHONE_DISPLAY = "+54 9 351 403-7700";
export const INSTAGRAM_URL = "https://instagram.com/gammalogistica/";
// TODO: completar cuando Gamma tenga un mail de contacto.
export const EMAIL: string | null = null;

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}` +
  (message ? `?text=${encodeURIComponent(message)}` : "");
