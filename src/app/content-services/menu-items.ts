import { Label } from './label';
import { MenuItem } from './menu-item';

export const menuItems: Array<MenuItem> = [
  { category: 'city', routerLink: '/info', labels: [
    { langCode: 'en', label: 'Information' },
    { langCode: 'fr', label: 'Information' },
    { langCode: 'de', label: 'Information' },
    { langCode: 'es', label: 'Información' },
    { langCode: 'ru', label: 'Информация' },
  ]},
  { category: 'city', routerLink: '/news', labels: [
    { langCode: 'en', label: 'News' },
    { langCode: 'fr', label: 'Nouvelles' },
    { langCode: 'de', label: 'Nachrichten' },
    { langCode: 'es', label: 'Noticias' },
    { langCode: 'ru', label: 'Новости' },
  ]},
  { category: 'city', routerLink: '/events', labels: [
    { langCode: 'en', label: 'Events' },
    { langCode: 'fr', label: 'Événements' },
    { langCode: 'de', label: 'Veranstaltungen' },
    { langCode: 'es', label: 'Eventos' },
    { langCode: 'ru', label: 'События' },
  ]}
];