import './style.css'
import veltrimMockup from './assets/veltrim_mockup.png'
import qrmakerMockup from './assets/qrmaker_mockup.png'
import rollivaMockup from './assets/rolliva_mockup.png'
import piramitMockup from './assets/piramit_mockup.png'
import randomjourneyMockup from './assets/randomjourney_mockup.png'

import veltrimIcon from './assets/veltrim_icon.png'
import qrmakerIcon from './assets/qrmaker_icon.png'
import rollivaIcon from './assets/rolliva_icon.png'
import piramitIcon from './assets/piramit_icon.JPG'
import randomjourneyIcon from './assets/randomjourney_icon.png'

import appleIcon from './assets/apple.png'


// Apps Dataset
const appsData = {
  veltrim: {
    name: "Veltrim: Smart Clipboard",
    category: "Üretkenlik",
    icon: veltrimIcon,
    description: "iOS için panonuzu (clipboard) akıllıca yöneten, kopyalanan metin, link ve görsel geçmişini otomatik olarak kaydedip organize eden gelişmiş pano yöneticisi. Özelleştirilebilir hızlı erişim widget'ları ve klavye entegrasyonu ile kopyalama işlemlerini hızlandırır.",
    tags: ["Flutter", "Dart", "Hive", "iOS"],
    features: [
      "Metin, link ve resim kopyalama geçmişini otomatik kaydetme",
      "Klavye entegrasyonu ve hızlı erişim özellikleri ile panoya kolay erişim",
      "Hive yerel veritabanı ile tüm verileri cihazınızda yerel ve şifreli saklama",
      "Kilit ekranı ve ana ekran widget entegrasyonu"
    ],
    screenshots: [veltrimMockup],
    links: {
      ios: "https://apps.apple.com/tr/app/veltrim-smart-clipboard/id6766660936?l=tr",
      github: "https://github.com"
    }
  },
  qrmaker: {
    name: "QRMaker&Scanner",
    category: "Yardımcılar",
    icon: qrmakerIcon,
    description: "Hızlı ve güvenli bir şekilde QR kodları tarayan, özel renklerde, desenlerde ve logolu QR kodları üreten gelişmiş tarayıcı ve oluşturucu uygulaması. Geçmiş tarama kayıtlarını tutarak ihtiyaç duyduğunuzda eski QR içeriklerine hızlıca erişmenizi sağlar.",
    tags: ["Flutter", "Dart", "Mobile Scanner", "iOS"],
    features: [
      "Mobil tarayıcı motoru ile ultra hızlı ve karanlıkta bile kararlı tarama",
      "Özel renk, logo ve gradyanlara sahip QR kodlar oluşturabilme",
      "Görüntü işleme kütüphaneleri ile yüksek çözünürlüklü tarama çıktıları",
      "Yerel tarama geçmişi ve favorilere ekleme özelliği"
    ],
    screenshots: [qrmakerMockup],
    links: {
      ios: "https://apps.apple.com/tr/app/qrmaker-scanner/id6504368000?l=tr",
      github: "https://github.com"
    }
  },
  rolliva: {
    name: "Rolliva",
    category: "Yardımcılar",
    icon: rollivaIcon,
    description: "Masa oyunları, grup aktiviteleri veya karar anları için özelleştirilebilir 3D zarlar, karar çarkları, yazı-tura ve rastgele sayı seçim araçları sunan modern bir eğlence asistanı. Pürüzsüz fizik tabanlı animasyonları ve şık tasarımıyla kararsız kaldığınız her an yanınızda.",
    tags: ["Flutter", "Dart", "Rive", "iOS"],
    features: [
      "Fizik motoru destekli, gerçekçi 3D zar atma simülasyonu",
      "Tamamen kişiselleştirilebilir karar çarkları ve renk paletleri",
      "Gelişmiş Rive animasyonları ile pürüzsüz micro-interactions",
      "Özel sayı aralıklarında rastgele seçim motoru"
    ],
    screenshots: [rollivaMockup],
    links: {
      ios: "https://apps.apple.com/tr/app/rolliva-zar-%C3%A7ark/id6765519968?l=tr",
      github: "https://github.com"
    }
  },
  piramit: {
    name: "Piramit Bulmaca",
    category: "Kelime",
    icon: piramitIcon,
    description: "Matematiksel zeka ve sayısal mantığı birleştiren, her seviyede piramidin zirvesine ulaşmak için doğru sayı kombinasyonlarını bulmaya çalıştığınız zihin egzersizi bulmaca oyunu. Sade arayüzü ve progresif zorluk seviyeleriyle beyin jimnastiği yapmanızı sağlar.",
    tags: ["Flutter", "Dart", "Bloc", "iOS"],
    features: [
      "Yüzlerce farklı zorluk seviyesine sahip progresif seviye tasarımı",
      "Flutter BLoC mimarisi ile kararlı ve hızlı oyun döngüsü",
      "Günlük zeka egzersizleri ve başarı rozetleri (achievements)",
      "İnternetsiz (çevrimdışı) çalışabilme özelliği"
    ],
    screenshots: [piramitMockup],
    links: {
      ios: "https://apps.apple.com/tr/app/piramit-bulmaca/id6743098390?l=tr",
      github: "https://github.com"
    }
  },
  randomjourney: {
    name: "RandomJourney",
    category: "Seyahat",
    icon: randomjourneyIcon,
    description: "Kararsız seyahat severler için harita üzerinde rastgele koordinatlar ve gizli rotalar seçen, keşfedilmemiş yerleri keşfetmenize yardımcı olan macera ve rota planlayıcı. iOS konum servisleriyle entegre çalışarak en yakın macera noktasını belirler.",
    tags: ["SwiftUI", "MapKit", "CoreLocation", "iOS"],
    features: [
      "MapKit entegrasyonu ile dinamik ve etkileşimli macera haritası",
      "CoreLocation ile kullanıcı konumuna yakın rastgele rotalar çizme",
      "Kendi seyahat günlüklerinizi ve fotoğraflarınızı kaydetme paneli",
      "iOS Paylaşım menüsü ile maceraları arkadaşlara gönderebilme"
    ],
    screenshots: [randomjourneyMockup],
    links: {
      ios: "https://apps.apple.com/tr/app/randomjourney/id6737148094?l=tr",
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
      <div class="modal-app-icon">
        <img src="${app.icon}" alt="${app.name} Icon" />
      </div>
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
      ${app.links.ios ? `
        <a href="${app.links.ios}" class="btn btn-primary" target="_blank">
          <img src="${appleIcon}" alt="App Store" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 8px; object-fit: contain;" />App Store
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
