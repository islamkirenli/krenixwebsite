import './style.css'
import veltrim1 from './assets/veltrim/1.png'
import veltrim2 from './assets/veltrim/2.png'
import veltrim3 from './assets/veltrim/3.png'

import qrmaker1 from './assets/qrmaker/1.png'
import qrmaker2 from './assets/qrmaker/2.png'
import qrmaker3 from './assets/qrmaker/3.png'
import qrmaker4 from './assets/qrmaker/4.png'

import rolliva1 from './assets/rolliva/1.png'
import rolliva2 from './assets/rolliva/2.png'
import rolliva3 from './assets/rolliva/3.png'
import rolliva4 from './assets/rolliva/4.png'

import piramit1 from './assets/piramit/1.png'
import piramit2 from './assets/piramit/2.png'
import piramit3 from './assets/piramit/3.png'
import piramit4 from './assets/piramit/4.png'

import randomjourney1 from './assets/randomjourney/1.png'
import randomjourney2 from './assets/randomjourney/2.png'

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
    description: "Pano Yönetiminde Kontrolü Elinize Alın: Düzenli, Hızlı ve Profesyonel. Önemli bilgileri kopyalayıp kaybetmeye son verin. İster bir yazılımcı olun, ister bir içerik üreticisi; bu gelişmiş Pano Yöneticisi, dijital iş akışınızı karmaşadan arındırıp düzenli bir çalışma alanına dönüştürmek için tasarlandı.",
    tags: ["Flutter", "Dart", "Hive", "iOS"],
    features: [
      "Otomatik Pano Takibi: Kopyalanan her metin veya bağlantıyı otomatik olarak kaydetme",
      "Gelişmiş Organizasyon: Özel klasörler ve etiketler kullanarak içerikleri kategorize etme",
      "Akıllı Arama: Hızlı ve sezgisel arama çubuğu ile pano geçmişine saniyeler içinde ulaşma",
      "Gizlilik Odaklı Tasarım: Verilerinizin cihazınızda yerel ve güvenle saklanması"
    ],
    screenshots: [veltrim1, veltrim2, veltrim3],
    links: {
      ios: "https://apps.apple.com/tr/app/veltrim-smart-clipboard/id6766660936?l=tr",
      github: "https://github.com"
    }
  },
  qrmaker: {
    name: "QRMaker&Scanner",
    category: "Yardımcılar",
    icon: qrmakerIcon,
    description: "QR Kod Oluşturucu ve Tarayıcı ile hayatınızı kolaylaştırın! QR kodlarını zahmetsizce oluşturun ve tarayın. Güvenli, hızlı ve kullanıcı dostu uygulamamızla QR kod dünyasına adım atın.",
    tags: ["Flutter", "Dart", "Mobile Scanner", "iOS"],
    features: [
      "Hızlı QR Kod Oluşturma: Metinler, URL'ler, e-postalar ve Wi-Fi bilgileri için anında üretim",
      "Kolay Tarama: Kameranızı kullanarak QR kodlarını hızla tarayın ve bilgilere anında erişin",
      "Gelişmiş Özelleştirme: QR kodlarınızı özel renkler, logolar ve tasarımlarla kişiselleştirin",
      "Geçmiş ve Güvenlik: Oluşturduğunuz ve taradığınız kodları güvenle cihazınızda yerel kaydedin"
    ],
    screenshots: [qrmaker1, qrmaker2, qrmaker3, qrmaker4],
    links: {
      ios: "https://apps.apple.com/tr/app/qrmaker-scanner/id6504368000?l=tr",
      github: "https://github.com"
    }
  },
  rolliva: {
    name: "Rolliva",
    category: "Yardımcılar",
    icon: rollivaIcon,
    description: "Kararsız mı kaldınız? Arkadaşlarınızla halı saha maçı yaparken adil takımlar mı kurmak istiyorsunuz? Ya da sadece şansınızı denemek için bir zar veya yazı turaya mı ihtiyacınız var? Rolliva, tüm bu ihtiyaçlarınızı tek bir şık ve modern arayüzde birleştiriyor!",
    tags: ["Flutter", "Dart", "Rive", "iOS"],
    features: [
      "Zar Atma ve Yazı Tura: Gerçekçi fizik motoru destekli 3D zarlar atın ve yazı tura ile hızlı kararlar verin",
      "Özelleştirilebilir Karar Çarkı: Kendi seçeneklerinizi ekleyin, çarkı çevirin ve kaderinizi çarka bırakın",
      "Adil Takım Oluşturucu: Arkadaş gruplarınızda dengeli ve adil takımları saniyeler içinde dağıtın",
      "Kullanıcı Dostu ve Rive Animasyonları: Modern, temiz tasarım ve pürüzsüz micro-interactions desteği"
    ],
    screenshots: [rolliva1, rolliva2, rolliva3, rolliva4],
    links: {
      ios: "https://apps.apple.com/tr/app/rolliva-zar-%C3%A7ark/id6765519968?l=tr",
      github: "https://github.com"
    }
  },
  piramit: {
    name: "Piramit Bulmaca",
    category: "Kelime",
    icon: piramitIcon,
    description: "Piramit Bulmaca: Antik Piramitlerin Sırrını Çöz, Kelimelerle Yüksel! Antik piramitlerin mistik atmosferinde geçen ve kelime bilginizi, stratejik düşünme yeteneğinizi sınayan yenilikçi bir bulmaca oyunudur. Antik medeniyetlerin büyüleyici dünyasında kaybolacak ve bulmacaları çözerken heyecan dolu bir macera yaşayacaksınız.",
    tags: ["Flutter", "Dart", "Bloc", "iOS"],
    features: [
      "Benzersiz Piramit Yapısı: En alt basamaktan başlayarak her üst seviyede bir harf eksiltme mantığıyla ilerleyen kelime bulmacaları",
      "İpucu Desteği: Her bölüm için özel sunulan ipucu metinleri ile doğru kelimeyi bulma kolaylığı",
      "Ödüller ve Avantajlar: Doğru tahminlerle kazanılan ipucu hakları, ekstra canlar ve oyun içi ödüller",
      "Antik Atmosfer: Mistik piramit temasını yansıtan özenle hazırlanmış görseller ve etkileyici müzikler"
    ],
    screenshots: [piramit1, piramit2, piramit3, piramit4],
    links: {
      ios: "https://apps.apple.com/tr/app/piramit-bulmaca/id6743098390?l=tr",
      github: "https://github.com"
    }
  },
  randomjourney: {
    name: "RandomJourney",
    category: "Seyahat",
    icon: randomjourneyIcon,
    description: "Macera arayanlar için tasarlanan bu uygulama, kullanıcılara seçtikleri bölgeden rastgele koordinatlar sunarak onları heyecan dolu bir yolculuğa çıkarıyor. İster günlük hayatın sıradanlığından kaçmak ister gizli kalmış güzellikleri keşfetmek isteyin, bu uygulama yeni yerleri daha önce hiç olmadığı gibi keşfetmenizi sağlar.",
    tags: ["SwiftUI", "MapKit", "CoreLocation", "iOS"],
    features: [
      "Rastgele Koordinat Üretimi: Seçtiğiniz bölgede keşfedilmemiş heyecan dolu yeni noktalara ulaşın",
      "Kolay Kullanım: Bölgenizi seçin, koordinatları alın ve maceranızı hemen başlatın",
      "Doğa ve Şehir Keşfi: İster doğa tutkunu olun ister şehir kaşifi, her gezi yeni bir maceraya dönüşür",
      "Gizli Hazineler: Harita üzerinde gezinirken sizi bekleyen gizli rotaları ve yerleri keşfedin"
    ],
    screenshots: [randomjourney1, randomjourney2],
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
