import './style.css'
import { translations, appsTranslations } from './translations.js'

import veltrim1 from './assets/veltrim/1.PNG'
import veltrim2 from './assets/veltrim/2.PNG'
import veltrim3 from './assets/veltrim/3.PNG'

import qrmaker1 from './assets/qrmaker/1.PNG'
import qrmaker2 from './assets/qrmaker/2.PNG'
import qrmaker3 from './assets/qrmaker/3.PNG'
import qrmaker4 from './assets/qrmaker/4.PNG'

import rolliva1 from './assets/rolliva/1.PNG'
import rolliva2 from './assets/rolliva/2.PNG'
import rolliva3 from './assets/rolliva/3.PNG'
import rolliva4 from './assets/rolliva/4.PNG'

import piramit1 from './assets/piramit/1.PNG'
import piramit2 from './assets/piramit/2.PNG'
import piramit3 from './assets/piramit/3.PNG'
import piramit4 from './assets/piramit/4.PNG'

import randomjourney1 from './assets/randomjourney/1.PNG'
import randomjourney2 from './assets/randomjourney/2.PNG'

import veltrimIcon from './assets/veltrim_icon.png'
import qrmakerIcon from './assets/qrmaker_icon.png'
import rollivaIcon from './assets/rolliva_icon.png'
import piramitIcon from './assets/piramit_icon.JPG'
import randomjourneyIcon from './assets/randomjourney_icon.png'

import appleIcon from './assets/apple.png'

// State for Language selection
let currentLang = localStorage.getItem('preferredLang') || 'tr';

// Target email address for FormSubmit submissions
const TARGET_EMAIL = 'support@krenixstudios.com';

// Apps Dataset structured with both TR and EN translations
const appsData = {
  veltrim: {
    name: "Veltrim: Smart Clipboard",
    type: "app",
    icon: veltrimIcon,
    screenshots: [veltrim1, veltrim2, veltrim3],
    links: {
      ios: "https://apps.apple.com/tr/app/veltrim-smart-clipboard/id6766660936?l=tr",
      github: "https://github.com"
    },
    tags: ["Flutter", "Dart", "Hive", "iOS"],
    tr: appsTranslations.veltrim.tr,
    en: appsTranslations.veltrim.en
  },
  qrmaker: {
    name: "QRMaker&Scanner",
    type: "app",
    icon: qrmakerIcon,
    screenshots: [qrmaker1, qrmaker2, qrmaker3, qrmaker4],
    links: {
      ios: "https://apps.apple.com/tr/app/qrmaker-scanner/id6504368000?l=tr",
      github: "https://github.com"
    },
    tags: ["Flutter", "Dart", "Mobile Scanner", "iOS"],
    tr: appsTranslations.qrmaker.tr,
    en: appsTranslations.qrmaker.en
  },
  rolliva: {
    name: "Rolliva",
    type: "app",
    icon: rollivaIcon,
    screenshots: [rolliva1, rolliva2, rolliva3, rolliva4],
    links: {
      ios: "https://apps.apple.com/tr/app/rolliva-zar-%C3%A7ark/id6765519968?l=tr",
      github: "https://github.com"
    },
    tags: ["Flutter", "Dart", "Rive", "iOS"],
    tr: appsTranslations.rolliva.tr,
    en: appsTranslations.rolliva.en
  },
  piramit: {
    name: "Piramit Bulmaca",
    type: "game",
    icon: piramitIcon,
    screenshots: [piramit1, piramit2, piramit3, piramit4],
    links: {
      ios: "https://apps.apple.com/tr/app/piramit-bulmaca/id6743098390?l=tr",
      github: "https://github.com"
    },
    tags: ["Flutter", "Dart", "Bloc", "iOS"],
    tr: appsTranslations.piramit.tr,
    en: appsTranslations.piramit.en
  },
  randomjourney: {
    name: "RandomJourney",
    type: "app",
    icon: randomjourneyIcon,
    screenshots: [randomjourney1, randomjourney2],
    links: {
      ios: "https://apps.apple.com/tr/app/randomjourney/id6737148094?l=tr",
      github: "https://github.com"
    },
    tags: ["SwiftUI", "MapKit", "CoreLocation", "iOS"],
    tr: appsTranslations.randomjourney.tr,
    en: appsTranslations.randomjourney.en
  }
};

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
  navMenu.classList.toggle('active');
  navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Close Mobile Nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.textContent = '☰';
  });
});

// Open App Details Modal
function openModal(appKey) {
  const app = appsData[appKey];
  if (!app) return;
  const local = app[currentLang];

  currentAppScreenshots = app.screenshots;
  currentSlideIndex = 0;

  // Render Image Slider
  renderCarousel();

  // Render Info Panel
  detailsContainer.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-app-icon">
        <img src="${app.icon}" alt="${app.name} Icon" />
      </div>
      <div class="modal-title-box">
        <h3>${app.name}</h3>
        <span class="modal-category">${local.category}</span>
      </div>
    </div>
    
    <div class="modal-tags">
      ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    
    <p class="modal-description">${local.description}</p>
    
    <h4 class="modal-features-title">${translations[currentLang].modal_features_title}</h4>
    <ul class="modal-features-list">
      ${local.features.map(feat => `<li>${feat}</li>`).join('')}
    </ul>
    
    <div class="modal-buttons">
      ${app.links.ios ? `
        <a href="${app.links.ios}" class="btn btn-primary" target="_blank">
          <img src="${appleIcon}" alt="App Store" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 8px; object-fit: contain;" />${translations[currentLang].modal_btn_appstore}
        </a>` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
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

    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
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
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

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
function renderAppCards() {
  const grid = document.getElementById('applications-grid');
  grid.innerHTML = '';

  Object.keys(appsData).forEach(key => {
    const app = appsData[key];
    const local = app[currentLang];

    const card = document.createElement('article');
    card.className = 'app-card';
    card.setAttribute('data-app-id', key);
    card.setAttribute('data-app-type', app.type);

    // Apply active tab filter immediately if any card is added/redrawn
    const activeTab = document.querySelector('.tab-btn.active')?.getAttribute('data-tab') || 'all';
    if (activeTab !== 'all' && app.type !== activeTab) {
      card.classList.add('hidden');
    }

    card.innerHTML = `
      <div class="app-header">
        <div class="app-icon">
          <img src="${app.icon}" alt="${app.name} Icon" />
        </div>
        <div class="app-meta">
          <h3 class="app-name">${app.name}</h3>
          <span class="app-category">${local.category}</span>
        </div>
      </div>
      <p class="app-description">${local.cardDescription}</p>
      <div class="app-tags">
        ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="app-footer">
        <div class="app-links">
          ${app.links.ios ? `
            <a href="${app.links.ios}" class="app-link-btn" title="iOS App Store" target="_blank">
              <img src="${appleIcon}" alt="App Store" />
            </a>` : ''}
        </div>
        <button class="btn-detail" data-app="${key}">
          ${currentLang === 'tr' ? 'Detayları Gör' : 'View Details'} <span>→</span>
        </button>
      </div>
    `;

    // Wire detail click event
    card.querySelector('.btn-detail').addEventListener('click', () => {
      openModal(key);
    });

    grid.appendChild(card);
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

  // Update document metadata
  document.title = translations[currentLang].doc_title;
  document.documentElement.lang = currentLang;

  // Toggle active class on language selection buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

// Set Language Handler
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  updateStaticTranslations();
  renderAppCards();
}

// Language buttons event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});

// Initialize Page in Saved Language on Load
setLanguage(currentLang);
