import './style.css'
import fitquestMockup from './assets/fitquest_mockup.png'
import meditoMockup from './assets/medito_mockup.png'
import spendwiseMockup from './assets/spendwise_mockup.png'

// Apps Dataset
const appsData = {
  fitquest: {
    name: "FitQuest",
    category: "Sağlık & Spor",
    icon: "🔥",
    description: "Kullanıcıların spor yapma alışkanlıklarını oyunlaştırma (gamification) elementleri ile eğlenceli hale getiren, kişiselleştirilmiş antrenman programları sunan fitness uygulaması. Seviye atlama, günlük görevler ve sosyal liderlik tabloları ile antrenman motivasyonunuzu her zaman en yüksek seviyede tutar.",
    tags: ["Flutter", "Firebase", "Riverpod", "NoSQL"],
    features: [
      "Kişiselleştirilmiş günlük egzersiz ve beslenme görevleri",
      "Oyunlaştırılmış XP, seviye atlama ve başarı rozetleri",
      "Firebase Firestore ile gerçek zamanlı arkadaş liderlik tabloları",
      "Gelişmiş grafikler ile haftalık/aylık kalori analizi"
    ],
    screenshots: [fitquestMockup],
    links: {
      ios: "#",
      github: "https://github.com"
    }
  },
  medito: {
    name: "Medito",
    category: "Yaşam Tarzı",
    icon: "🧘‍♂️",
    description: "Günün stresinden uzaklaşmanızı sağlayan, sesli meditasyon rehberleri, uyku hikayeleri ve odaklanma müzikleri barındıran minimalist tasarımlı zihinsel sağlık asistanı. Rahatlatıcı arayüzü ve çevrimdışı dinleme desteği ile her an yanınızda huzur bulmanıza yardımcı olur.",
    tags: ["SwiftUI", "AVFoundation", "CoreData", "iOS"],
    features: [
      "50'den fazla uzman onaylı sesli meditasyon seansı",
      "Doğal seslerle uyku hikayeleri ve rahatlatıcı müzikler",
      "CoreData ile yerel günlük ruh hali ve gelişim takibi",
      "Widget desteği ile kilit ekranından hızlı erişim"
    ],
    screenshots: [meditoMockup],
    links: {
      ios: "#",
      github: "https://github.com"
    }
  },
  spendwise: {
    name: "SpendWise",
    category: "Finans",
    icon: "💰",
    description: "Gelir ve giderlerinizi kategorize ederek bütçe takibi yapmanızı sağlayan, detaylı grafik analizleri ve aylık raporlamalar sunan modern finansal takip aracı. SQLite veritabanı ile verileriniz internete ihtiyaç duymadan cihazınızda tamamen güvenle saklanır.",
    tags: ["Flutter", "SQLite", "FL Chart", "Dart"],
    features: [
      "Hızlı gelir/gider ekleme ve özel kategori tanımlama",
      "FL Chart ile etkileşimli ve detaylı harcama grafikleri",
      "SQLite yerel veritabanı ile %100 çevrimdışı ve güvenli çalışma",
      "PDF formatında aylık ve yıllık finansal rapor çıktıları"
    ],
    screenshots: [spendwiseMockup],
    links: {
      ios: "#",
      github: "https://github.com"
    }
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

  currentAppScreenshots = app.screenshots;
  currentSlideIndex = 0;

  // Render Image Slider
  renderCarousel();

  // Render Info Panel
  detailsContainer.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-app-icon">${app.icon}</div>
      <div class="modal-title-box">
        <h3>${app.name}</h3>
        <span class="modal-category">${app.category}</span>
      </div>
    </div>
    
    <div class="modal-tags">
      ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    
    <p class="modal-description">${app.description}</p>
    
    <h4 class="modal-features-title">Öne Çıkan Özellikler</h4>
    <ul class="modal-features-list">
      ${app.features.map(feat => `<li>${feat}</li>`).join('')}
    </ul>
    
    <div class="modal-buttons">
      ${app.links.ios ? `<a href="${app.links.ios}" class="btn btn-primary" target="_blank">🍎 App Store</a>` : ''}
      ${app.links.android ? `<a href="${app.links.android}" class="btn btn-primary" target="_blank">🤖 Google Play</a>` : ''}
      ${app.links.github ? `<a href="${app.links.github}" class="btn btn-secondary" target="_blank">🐙 GitHub</a>` : ''}
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

// Wire Event Listeners to Showcase Cards
document.querySelectorAll('.btn-detail').forEach(btn => {
  btn.addEventListener('click', () => {
    const appKey = btn.getAttribute('data-app');
    openModal(appKey);
  });
});

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('form-name').value;

  feedbackMsg.style.display = 'block';
  feedbackMsg.className = 'form-message';
  feedbackMsg.textContent = 'Mesajınız gönderiliyor...';

  setTimeout(() => {
    feedbackMsg.className = 'form-message success';
    feedbackMsg.textContent = `Teşekkürler ${name}! Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağım.`;
    contactForm.reset();

    setTimeout(() => {
      feedbackMsg.style.display = 'none';
    }, 5000);
  }, 1200);
});
