// Languages the site ships in: the same eight the apps support. Names are shown in their own language.
export const LANGS = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어'
};

// Accessible name of the language picker, in each language
export const LANG_PICKER_LABEL = {
  tr: 'Dil',
  en: 'Language',
  de: 'Sprache',
  fr: 'Langue',
  es: 'Idioma',
  ru: 'Язык',
  ja: '言語',
  ko: '언어'
};

const STORAGE_KEY = 'preferredLang';

// Saved choice first, then the first supported browser language, else English
export function initialLang() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch {}
  if (saved && saved in LANGS) return saved;
  for (const tag of navigator.languages || [navigator.language || '']) {
    const code = tag.toLowerCase().split('-')[0];
    if (code in LANGS) return code;
  }
  return 'en';
}

export function saveLang(lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
}

// Fills a <select> with the eight languages and keeps its label in the current language
export function setupLangPicker(select, lang, onChange) {
  select.innerHTML = Object.entries(LANGS)
    .map(([code, name]) => `<option value="${code}" lang="${code}">${name}</option>`)
    .join('');
  select.value = lang;
  select.setAttribute('aria-label', LANG_PICKER_LABEL[lang]);
  select.addEventListener('change', () => {
    saveLang(select.value);
    select.setAttribute('aria-label', LANG_PICKER_LABEL[select.value]);
    onChange(select.value);
  });
}
