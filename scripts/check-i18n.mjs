// Fails if any language is missing a string the Turkish source has, or if the
// privacy policy versions drift apart. Run: npm run check:i18n
import { readFileSync } from 'node:fs';
import { LANGS } from '../src/i18n/lang.js';

const root = new URL('../', import.meta.url);
const errors = [];
const load = async lang => (await import(new URL(`src/i18n/${lang}.js`, root))).default;

const source = await load('tr');
const placeholders = s => (s.match(/\{[a-z]+\}/g) || []).sort().join();

for (const lang of Object.keys(LANGS)) {
  const msg = await load(lang);
  for (const [key, value] of Object.entries(source.ui)) {
    const own = msg.ui[key];
    if (typeof own !== 'string' || !own.trim()) errors.push(`${lang}: ui.${key} missing`);
    else if (placeholders(own) !== placeholders(value)) errors.push(`${lang}: ui.${key} placeholders differ`);
  }
  for (const key of Object.keys(msg.ui)) if (!(key in source.ui)) errors.push(`${lang}: ui.${key} not in tr`);
  if (!/<em>.+<\/em>/.test(msg.ui.hero_title || '')) errors.push(`${lang}: hero_title needs one <em> word`);

  for (const app of Object.keys(source.apps)) {
    const a = msg.apps[app];
    if (!a) { errors.push(`${lang}: apps.${app} missing`); continue; }
    for (const field of ['name', 'category', 'cardDescription', 'description']) {
      if (typeof a[field] !== 'string' || !a[field].trim()) errors.push(`${lang}: apps.${app}.${field} missing`);
    }
    if (!Array.isArray(a.features) || a.features.length !== 4 || a.features.some(f => !f.trim())) {
      errors.push(`${lang}: apps.${app}.features must be 4 non-empty items`);
    }
  }

  // House style: no em or en dashes in copy
  if (/[–—]/.test(JSON.stringify(msg))) errors.push(`${lang}: contains an em or en dash`);
}

// Privacy policy: one <article data-lang> per language, all with the same shape as Turkish
const html = readFileSync(new URL('privacy.html', root), 'utf8');
const articles = Object.fromEntries(
  [...html.matchAll(/<article[^>]*data-lang="([a-z]+)"[^>]*>([\s\S]*?)<\/article>/g)].map(m => [m[1], m[2]])
);
const shape = body => ['<h2', '<h3', '<li', '<tr'].map(tag => body.split(tag).length - 1).join('/');
for (const lang of Object.keys(LANGS)) {
  if (!articles[lang]) { errors.push(`privacy: no article for ${lang}`); continue; }
  if (shape(articles[lang]) !== shape(articles.tr)) {
    errors.push(`privacy: ${lang} has h2/h3/li/tr ${shape(articles[lang])}, tr has ${shape(articles.tr)}`);
  }
  if (/[–—]/.test(articles[lang])) errors.push(`privacy: ${lang} contains an em or en dash`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\ncheck-i18n: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`check-i18n: OK, ${Object.keys(LANGS).length} languages, ${Object.keys(source.ui).length} UI strings, ${Object.keys(source.apps).length} apps, privacy policy in sync`);
