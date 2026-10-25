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

// Select-only combobox (button + listbox) instead of a native <select>: macOS opens a native
// list centred on the chosen option, so it could grow upwards; this one always drops down.
// Focus stays on the button; the highlighted option is announced via aria-activedescendant.
export function setupLangPicker(button, lang, onChange) {
  const list = document.getElementById(button.getAttribute('aria-controls'));
  const current = button.querySelector('.lang-current');
  const codes = Object.keys(LANGS);
  list.innerHTML = codes
    .map(code => `<li role="option" id="lang-option-${code}" lang="${code}">${LANGS[code]}</li>`)
    .join('');
  const options = [...list.children];
  let value = lang;
  let active = 0;

  const show = code => {
    value = code;
    current.textContent = LANGS[code];
    current.lang = code;
    options.forEach((option, i) => option.setAttribute('aria-selected', codes[i] === code));
    button.setAttribute('aria-label', LANG_PICKER_LABEL[code]);
    list.setAttribute('aria-label', LANG_PICKER_LABEL[code]);
  };
  const highlight = i => {
    active = Math.max(0, Math.min(options.length - 1, i));
    options.forEach((option, j) => option.classList.toggle('active', j === active));
    button.setAttribute('aria-activedescendant', options[active].id);
  };
  const isOpen = () => !list.hidden;
  const open = () => {
    list.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    highlight(codes.indexOf(value));
  };
  const close = () => {
    list.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    button.removeAttribute('aria-activedescendant');
  };
  const choose = i => {
    close();
    if (codes[i] === value) return;
    show(codes[i]);
    saveLang(value);
    onChange(value);
  };

  show(lang);
  button.addEventListener('click', () => (isOpen() ? close() : open()));
  button.addEventListener('keydown', e => {
    if (!isOpen()) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        open();
      }
      return;
    }
    const moves = { ArrowDown: active + 1, ArrowUp: active - 1, Home: 0, End: options.length - 1 };
    if (e.key in moves) {
      e.preventDefault();
      highlight(moves[e.key]);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      choose(active);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'Tab') {
      close();
    }
  });
  // mousedown would move focus off the button, which owns the keyboard model
  list.addEventListener('mousedown', e => e.preventDefault());
  list.addEventListener('pointermove', e => {
    const option = e.target.closest('[role="option"]');
    if (option) highlight(options.indexOf(option));
  });
  list.addEventListener('click', e => {
    const option = e.target.closest('[role="option"]');
    if (option) choose(options.indexOf(option));
  });
  document.addEventListener('click', e => {
    if (isOpen() && !button.parentElement.contains(e.target)) close();
  });
}
