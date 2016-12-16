import { ComponentLabel } from './component-label';

export const componentsLabels: Array<ComponentLabel> = [
  {name: 'language', labels: [
      { langCode: 'en', label: 'Language' },
      { langCode: 'fr', label: 'La langue' },
      { langCode: 'de', label: 'Sprache' },
      { langCode: 'es', label: 'Idioma' },
      { langCode: 'ru', label: 'Язык' },
    ] 
  },
  {name: 'register', labels: [
      { langCode: 'en', label: 'Register' },
      { langCode: 'fr', label: 'Registre' },
      { langCode: 'de', label: 'Neu registrieren' },
      { langCode: 'es', label: 'Registro' },
      { langCode: 'ru', label: 'Зарегистрироваться' },
    ] 
  },
  {name: 'login', labels: [
      { langCode: 'en', label: 'Login' },
      { langCode: 'fr', label: 'Login' },
      { langCode: 'de', label: 'Einloggen' },
      { langCode: 'es', label: 'Iniciar sesión' },
      { langCode: 'ru', label: 'Войти' },
    ] 
  }

];