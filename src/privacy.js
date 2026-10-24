import { initialLang, setupLangPicker } from './i18n/lang.js'

// Shows the article for the chosen language; Turkish is the fallback if one is missing
function setLang(lang) {
  const articles = document.querySelectorAll('article[data-lang]');
  const target = document.querySelector(`article[data-lang="${lang}"]`) ? lang : 'tr';
  articles.forEach(article => { article.hidden = article.dataset.lang !== target; });
  document.documentElement.lang = target;
  document.title = `${document.querySelector(`article[data-lang="${target}"] h1`).textContent} | Krenix Studios`;
}

const lang = initialLang();
setupLangPicker(document.getElementById('lang-select'), lang, setLang);
setLang(lang);
