import { siteConfig } from '../config/site';

export function generateWhatsAppUrl(message: string): string {
  const phone = siteConfig.whatsapp;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
