'use client';

import { useEffect } from 'react';
import { measurementId } from './Analytics';

function contactMethod(link: HTMLAnchorElement) {
  if (link.protocol === 'tel:') return 'phone';
  if (link.protocol === 'mailto:') return 'email';
  if (link.protocol !== 'https:') return;
  if (link.hostname === 'm.me') return 'social_contact';
  if (link.hostname === 'platform.greengsm.ph' &&
      (link.pathname === '/dat_coc_xe' || new URLSearchParams(link.search).get('order-type') === 'rent')) {
    return 'rental_registration';
  }
}

export default function ContactEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      try {
        if (localStorage.getItem('dtcar_analytics_choice') !== 'yes') return;
      } catch {
        return;
      }
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const method = contactMethod(link);
      if (!method) return;
      const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
      analytics.gtag?.('event', 'dtcar_contact_click', {
        send_to: measurementId,
        contact_method: method,
        ...(link.dataset.enquiryService ? { enquiry_service: link.dataset.enquiryService } : {}),
        page_location: window.location.origin + window.location.pathname,
        page_path: window.location.pathname,
      });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
