import './style.css'
import { LANGS, initialLang, setupLangPicker } from './i18n/lang.js'

// One file per language, each { ui, apps } with the same keys
const messages = import.meta.glob('./i18n/[a-z][a-z].js', { eager: true, import: 'default' });
const langMessages = lang => messages[`./i18n/${lang}.js`];
const translations = Object.fromEntries(Object.keys(LANGS).map(lang => [lang, langMessages(lang).ui]));

// Every image under assets/apps/<key>/: icon.webp plus <lang>-N App Store screenshots
const appImages = import.meta.glob('./assets/apps/*/*.webp', { eager: true, import: 'default' });

function imagesFor(key) {
  const dir = `./assets/apps/${key}/`;
  const shots = lang => Object.keys(appImages).filter(p => p.startsWith(`${dir}${lang}-`)).sort().map(p => appImages[p]);
  const en = shots('en');
  const tr = shots('tr');
  // Store listings without localized screenshots fall back to English, then Turkish
  const screenshots = Object.fromEntries(Object.keys(LANGS).map(lang => {
    const own = shots(lang);
    return [lang, own.length ? own : en.length ? en : tr];
  }));
  return { icon: appImages[`${dir}icon.webp`], screenshots };
}

const iconAttrs = 'class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
const arrowRightIcon = `<svg ${iconAttrs}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
const arrowUpRightIcon = `<svg ${iconAttrs}><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`;

// State for Language selection
let currentLang = initialLang();

// Target email address for FormSubmit submissions
const TARGET_EMAIL = 'support@krenixstudios.com';

// App Store id, release date and tech stack. Texts live in i18n/<lang>.js, images in assets/apps/<key>/.
const appsList = {
  tint: { type: "app", id: 6821441862, releaseDate: "2026-10-28", tags: ["SwiftUI", "SwiftData", "AVFoundation", "CloudKit"] },
  pack: { type: "app", id: 6818205295, releaseDate: "2026-10-09", tags: ["SwiftUI", "SwiftData", "Charts", "StoreKit"] },
  bloom: { type: "app", id: 6809461611, releaseDate: "2026-09-26", tags: ["SwiftUI", "SwiftData", "ActivityKit", "WidgetKit"] },
  medlyra: { type: "app", id: 6808695787, releaseDate: "2026-09-16", tags: ["SwiftUI", "CloudKit", "UserNotifications", "StoreKit"] },
  shelf: { type: "app", id: 6801054318, releaseDate: "2026-08-17", tags: ["SwiftUI", "SwiftData", "VisionKit", "CloudKit"] },
  shapemerge: { type: "game", id: 6785105331, releaseDate: "2026-07-08", tags: ["SwiftUI", "GameKit", "Combine", "StoreKit"] },
  clearin: { type: "app", id: 6783086043, releaseDate: "2026-07-01", tags: ["SwiftUI", "Combine", "Network", "StoreKit"] },
  shotsilo: { type: "app", id: 6779800886, releaseDate: "2026-06-19", tags: ["SwiftUI", "SwiftData", "Vision", "PhotoKit"] },
  timeflow: { type: "app", id: 6772533223, releaseDate: "2026-05-30", tags: ["SwiftUI", "WidgetKit", "ActivityKit", "CloudKit"] },
  oneline: { type: "app", id: 6773496465, releaseDate: "2026-05-30", tags: ["SwiftUI", "SwiftData", "Charts", "LocalAuthentication"] },
  veltrim: { type: "app", id: 6766660936, releaseDate: "2026-05-07", tags: ["SwiftUI", "WidgetKit", "Vision", "CryptoKit"] },
  rolliva: { type: "app", id: 6765519968, releaseDate: "2026-05-03", tags: ["SwiftUI", "Combine", "UIKit", "StoreKit"] },
  piramit: { type: "game", id: 6743098390, releaseDate: "2025-03-19", tags: ["Flutter", "Dart", "Lottie", "In-App Purchase"] },
  randomjourney: { type: "app", id: 6737148094, releaseDate: "2024-10-21", tags: ["SwiftUI", "MapKit", "CoreLocation", "Firebase"] },
  qrmaker: { type: "app", id: 6504368000, releaseDate: "2024-06-23", tags: ["Flutter", "Dart", "Firebase", "Mobile Scanner"] }
};

// Newest first: the first entry becomes the featured card
const appsData = Object.fromEntries(
  Object.entries(appsList)
    .sort(([, a], [, b]) => b.releaseDate.localeCompare(a.releaseDate))
    .map(([key, app]) => [key, {
      ...app,
      ...imagesFor(key),
      links: { ios: `https://apps.apple.com/app/id${app.id}` },
      ...Object.fromEntries(Object.keys(LANGS).map(lang => [lang, langMessages(lang).apps[key]]))
    }])
);

// Global DOM Elements
const header = document.getElementById('main-header');
const navToggle = document.getElementById('nav-menu-toggle');
const navMenu = document.getElementById('nav-menu-list');
const modal = document.getElementById('app-modal');
const modalClose = document.getElementById('btn-close-modal');
const carouselContainer = document.getElementById('modal-carousel-container');
const detailsContainer = document.getElementById('modal-details-container');
const contactForm = document.getElementById('contact-form');
const feedbackMsg = document.getElementById('form-feedback-message');

// Modal Slider State
let currentAppScreenshots = [];
let currentSlideIndex = 0;
let lastFocusedElement = null;

// Header Scroll Event
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Nav Toggle
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close Mobile Nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Open App Details Modal
function openModal(appKey) {
  const app = appsData[appKey];
  if (!app) return;
  const local = app[currentLang];

  currentAppScreenshots = app.screenshots[currentLang];
  currentSlideIndex = 0;

  // Render Image Slider
  renderCarousel();

  // Render Info Panel
  detailsContainer.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-app-icon">
        <img src="${app.icon}" alt="" />
      </div>
      <div class="modal-title-box">
        <h3 id="modal-app-title">${local.name}</h3>
        <span class="modal-category">${local.category}</span>
      </div>
    </div>

    <p class="modal-description">${local.description}</p>

    <h4 class="modal-features-title">${translations[currentLang].modal_features_title}</h4>
    <ul class="modal-features-list">
      ${local.features.map(feat => `<li>${feat}</li>`).join('')}
    </ul>

    <p class="modal-tags">${app.tags.join(' · ')}</p>

    <div class="modal-buttons">
      ${app.links.ios ? `
        <a href="${app.links.ios}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          ${translations[currentLang].modal_btn_appstore} ${arrowUpRightIcon}
        </a>` : ''}
    </div>
  `;

  lastFocusedElement = document.activeElement;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

// Render Slider Slides & Dots
function renderCarousel() {
  const prevBtn = document.getElementById('btn-prev-slide');
  const nextBtn = document.getElementById('btn-next-slide');
  const dotsContainer = document.getElementById('carousel-dots-container');

  // Remove old slides
  modal.querySelectorAll('.carousel-slide').forEach(slide => slide.remove());
  dotsContainer.innerHTML = '';

  currentAppScreenshots.forEach((src, idx) => {
    const slide = document.createElement('div');
    slide.className = `carousel-slide ${idx === 0 ? 'active' : ''}`;
    slide.innerHTML = `<img src="${src}" class="carousel-image" alt="Screenshot ${idx + 1}" />`;
    carouselContainer.insertBefore(slide, prevBtn);

    const dot = document.createElement('button');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', translations[currentLang].carousel_dot_label.replace('{n}', idx + 1));
    dot.addEventListener('click', () => showSlide(idx));
    dotsContainer.appendChild(dot);
  });

  if (currentAppScreenshots.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'flex';
    nextBtn.style.display = 'flex';
  }
}

// Slide Display Engine
function showSlide(index) {
  const slides = modal.querySelectorAll('.carousel-slide');
  const dots = modal.querySelectorAll('.dot');

  if (slides.length === 0) return;

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentSlideIndex);
  });

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
}

// Slider Control Handlers
document.getElementById('btn-prev-slide').addEventListener('click', () => {
  showSlide(currentSlideIndex - 1);
});
document.getElementById('btn-next-slide').addEventListener('click', () => {
  showSlide(currentSlideIndex + 1);
});

// Close Modal functions
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  lastFocusedElement?.focus();
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const message = document.getElementById('form-message').value;

  const submitBtn = document.getElementById('btn-submit-contact');
  submitBtn.disabled = true;
  submitBtn.setAttribute('aria-busy', 'true');
  feedbackMsg.style.display = 'block';
  feedbackMsg.className = 'form-message';
  feedbackMsg.textContent = translations[currentLang].feedback_sending;

  fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Gönderim başarısız.');
    })
    .then(data => {
      feedbackMsg.className = 'form-message success';
      feedbackMsg.textContent = translations[currentLang].feedback_success.replace('{name}', name);
      contactForm.reset();
    })
    .catch(error => {
      console.error('İletişim formu hatası:', error);
      feedbackMsg.className = 'form-message error';
      feedbackMsg.textContent = translations[currentLang].feedback_error;
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.removeAttribute('aria-busy');
      setTimeout(() => {
        feedbackMsg.style.display = 'none';
      }, 5000);
    });
});

// Apps Tab Filtering Handler
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Switch active tab class
    tabButtons.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', b === btn);
    });

    const selectedTab = btn.getAttribute('data-tab');

    // Filter dynamically rendered app cards in the DOM
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach(card => {
      const cardType = card.getAttribute('data-app-type');
      if (selectedTab === 'all' || cardType === selectedTab) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Dynamically Render App Cards Based on Current Language
// The first app in appsData is shown large; the rest form an index list below it.
function renderAppCards() {
  const grid = document.getElementById('applications-grid');
  grid.innerHTML = '';
  const list = document.createElement('div');
  list.className = 'app-list';

  Object.keys(appsData).forEach((key, idx) => {
    const app = appsData[key];
    const local = app[currentLang];
    const name = local.name;
    const isFeatured = idx === 0;

    const card = document.createElement('article');
    card.className = `app-card ${isFeatured ? 'app-featured' : 'app-row'}`;
    card.setAttribute('data-app-id', key);
    card.setAttribute('data-app-type', app.type);

    // Apply active tab filter immediately if any card is added/redrawn
    const activeTab = document.querySelector('.tab-btn.active')?.getAttribute('data-tab') || 'all';
    if (activeTab !== 'all' && app.type !== activeTab) {
      card.classList.add('hidden');
    }

    const storeLink = app.links.ios ? `
      <a href="${app.links.ios}" class="app-store-link" target="_blank" rel="noopener noreferrer">
        App Store ${arrowUpRightIcon}
      </a>` : '';

    card.innerHTML = isFeatured ? `
      <div class="featured-body">
        <div class="app-header">
          <div class="app-icon"><img src="${app.icon}" alt="" /></div>
          <div class="app-meta">
            <h3 class="app-name">${name}</h3>
            <span class="app-category">${local.category}</span>
          </div>
        </div>
        <p class="app-description">${local.cardDescription}</p>
        <p class="app-tags">${app.tags.join(' · ')}</p>
        <div class="app-actions">
          <button class="btn btn-primary btn-detail" data-app="${key}">
            ${translations[currentLang].card_btn_detail} ${arrowRightIcon}
          </button>
          ${storeLink}
        </div>
      </div>
      <div class="featured-shots" aria-hidden="true">
        ${app.screenshots[currentLang].slice(0, 3).map(src => `<img src="${src}" alt="" loading="lazy" decoding="async" />`).join('')}
      </div>
    ` : `
      <div class="app-icon"><img src="${app.icon}" alt="" loading="lazy" /></div>
      <div class="app-meta">
        <h3 class="app-name">
          <button class="btn-detail" data-app="${key}">${name}</button>
        </h3>
        <span class="app-category">${local.category}</span>
      </div>
      <p class="app-description">${local.cardDescription}</p>
      ${storeLink}
      <span class="row-arrow">${arrowRightIcon}</span>
    `;

    // Wire detail click event
    card.querySelector('.btn-detail').addEventListener('click', () => {
      openModal(key);
    });

    if (isFeatured) {
      grid.appendChild(card);
    } else {
      list.appendChild(card);
    }
  });

  grid.appendChild(list);
}

// Hero shelf: every app icon, each opening its detail modal
function renderHeroShelf() {
  const shelf = document.getElementById('hero-shelf');
  shelf.innerHTML = Object.keys(appsData).map(key => {
    const app = appsData[key];
    const name = app[currentLang].name;
    return `<li><button class="shelf-item" data-app="${key}" aria-label="${name}" title="${name}"><img src="${app.icon}" alt="" /></button></li>`;
  }).join('');
  shelf.querySelectorAll('.shelf-item').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.app));
  });
}

// Update Static Elements with Translations
function updateStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      el.innerHTML = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = translations[currentLang][key];
    if (translation) {
      el.setAttribute('placeholder', translation);
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const translation = translations[currentLang][el.getAttribute('data-i18n-aria')];
    if (translation) {
      el.setAttribute('aria-label', translation);
    }
  });

  // Update document metadata
  document.title = translations[currentLang].doc_title;
  document.documentElement.lang = currentLang;
}

// Set Language Handler
function setLanguage(lang) {
  currentLang = lang;
  updateStaticTranslations();
  renderAppCards();
  renderHeroShelf();
}

document.getElementById('stat-app-count').textContent = Object.keys(appsData).length;

setupLangPicker(document.getElementById('lang-select'), currentLang, setLanguage);

// Initialize Page in Saved Language on Load
setLanguage(currentLang);
