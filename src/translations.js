export const translations = {
  tr: {
    doc_title: "Krenix Studios",
    nav_apps: "Uygulamalar",
    nav_about: "Hakkında",
    nav_contact: "İletişim",
    nav_toggle_label: "Menüyü aç veya kapat",
    hero_title: "iPhone için küçük, <em>özenli</em> uygulamalar.",
    hero_description: "Krenix Studios, İstanbul'da iPhone uygulamaları tasarlayan ve geliştiren bağımsız bir stüdyo. Kahve zamanlayıcısından ilaç takibine kadar her uygulamamızı baştan sona kendimiz yapıyoruz.",
    hero_btn_explore: "Uygulamaları gör",
    hero_btn_contact: "Bize yazın",
    hero_shelf_label: "Uygulamalar",
    apps_section_title: "Uygulamalar",
    apps_section_subtitle: "Hepsi App Store'da. Ekran görüntüleri ve özellikler için birini seçin.",
    tab_all: "Tümü",
    tab_apps: "Uygulamalar",
    tab_games: "Oyunlar",
    card_btn_detail: "Detaylar",
    about_section_title: "Hakkında",
    about_p1: "2024'ten bu yana App Store'a uygulama çıkarıyoruz. Günlük hayatta gerçekten kullanılan küçük araçlar yapmayı seviyoruz: bir gün sayacı, tek satırlık bir günlük, tarihi yaklaşan ürünleri hatırlatan bir raf.",
    about_p2: "Hızlı açılan ve iOS'ta yerini bilen uygulamalar hedefliyoruz. Çoğunu SwiftUI ve SwiftData ile yazıyor, widget'lardan Canlı Etkinliklere kadar platformun sunduklarını kullanıyoruz.",
    about_stat1_label: "Yayında uygulama",
    about_stat2_label: "Yıl deneyim",
    about_stat3_label: "Ort. mağaza puanı",
    contact_section_title: "Bir fikriniz mi var?",
    contact_section_subtitle: "Bir proje, bir iş birliği ya da uygulamalarımızdan biri hakkında bir soru. Formu doldurun veya doğrudan e-posta gönderin.",
    contact_location_val: "İstanbul, Türkiye",
    form_name_label: "Adınız",
    form_name_placeholder: "Ad Soyad",
    form_email_label: "E-posta",
    form_email_placeholder: "ornek@eposta.com",
    form_message_label: "Mesaj",
    form_message_placeholder: "Aklınızdakini yazın",
    form_btn_send: "Gönder",
    footer_text: "&copy; 2026 Krenix Studios",
    footer_privacy: "Gizlilik Politikası",

    // Form geri bildirimleri
    feedback_sending: "Gönderiliyor...",
    feedback_success: "Teşekkürler {name}, mesajınız ulaştı. En kısa sürede döneceğiz.",
    feedback_error: "Mesaj gönderilemedi. support@krenixstudios.com adresine doğrudan yazabilirsiniz.",

    // Modal kelimeleri
    modal_features_title: "Özellikler",
    modal_btn_appstore: "App Store'da aç",
    modal_close_label: "Kapat",
    carousel_prev_label: "Önceki görsel",
    carousel_next_label: "Sonraki görsel",
    carousel_dot_label: "Görsel {n}"
  },
  en: {
    doc_title: "Krenix Studios",
    nav_apps: "Apps",
    nav_about: "About",
    nav_contact: "Contact",
    nav_toggle_label: "Open or close the menu",
    hero_title: "Small, <em>well-made</em> apps for iPhone.",
    hero_description: "Krenix Studios is an independent studio in Istanbul that designs and builds iPhone apps. From a coffee brew timer to a medication tracker, we make every app ourselves, start to finish.",
    hero_btn_explore: "See the apps",
    hero_btn_contact: "Get in touch",
    hero_shelf_label: "Apps",
    apps_section_title: "Apps",
    apps_section_subtitle: "All on the App Store. Pick one to see screenshots and features.",
    tab_all: "All",
    tab_apps: "Apps",
    tab_games: "Games",
    card_btn_detail: "Details",
    about_section_title: "About",
    about_p1: "We have been shipping apps to the App Store since 2024. We like making small tools people actually use every day: a day counter, a one-line journal, a shelf that remembers what is about to expire.",
    about_p2: "We aim for apps that open fast and feel at home on iOS. Most are written in SwiftUI and SwiftData, and we use what the platform offers, from widgets to Live Activities.",
    about_stat1_label: "Apps live",
    about_stat2_label: "Years building",
    about_stat3_label: "Avg. store rating",
    contact_section_title: "Have an idea?",
    contact_section_subtitle: "A project, a collaboration or a question about one of our apps. Use the form or email us directly.",
    contact_location_val: "Istanbul, Turkey",
    form_name_label: "Name",
    form_name_placeholder: "Full name",
    form_email_label: "Email",
    form_email_placeholder: "you@example.com",
    form_message_label: "Message",
    form_message_placeholder: "What's on your mind?",
    form_btn_send: "Send",
    footer_text: "&copy; 2026 Krenix Studios",
    footer_privacy: "Privacy Policy",

    // Form feedback messages
    feedback_sending: "Sending...",
    feedback_success: "Thanks {name}, your message is in. We'll get back to you soon.",
    feedback_error: "Couldn't send your message. You can write to support@krenixstudios.com directly.",

    // Modal words
    modal_features_title: "Features",
    modal_btn_appstore: "Open in App Store",
    modal_close_label: "Close",
    carousel_prev_label: "Previous image",
    carousel_next_label: "Next image",
    carousel_dot_label: "Image {n}"
  }
};

// One format for every app: name, category (App Store genre), one-sentence card text,
// two-sentence description and exactly four "Title: sentence" features. Source: App Store listings.
export const appsTranslations = {
  pack: {
    tr: {
      name: "Çanta: Kamp Malzeme Listesi",
      category: "Seyahat",
      cardDescription: "Sırtınızda taşıdığınız her şeyi tartan, kamp ve yürüyüş için ultralight ekipman listesi.",
      description: "Ekipman dolabınızı bir kez kurun, her geziyi ondan planlayın. Çanta yükü temel ağırlık, tüketilebilir ve giyilen olarak ayırır, bir eşyayı işaretlediğiniz anda toplamları günceller.",
      features: [
        "Ağırlık paneli: Temel, tüketilebilir, giyilen ve toplam ağırlık tek ekranda.",
        "Büyük Üçlü: Barınak, uyku sistemi ve çantanın temel ağırlıktaki payını görün.",
        "Tek dolap, her gezi: Eşyaları tek dokunuşla geziye ekleyin, topladıkça işaretleyin.",
        "Paylaşım ve yedek: Ağırlık kartı, Markdown tablosu, CSV dışa aktarma ve JSON yedeği."
      ]
    },
    en: {
      name: "Pack: Ultralight Gear List",
      category: "Travel",
      cardDescription: "An ultralight gear list for hiking and camping that weighs everything you carry.",
      description: "Build your gear closet once, then plan every trip from it. Pack splits each load into base weight, consumables and worn items, and updates the totals the moment you check something off.",
      features: [
        "Weight dashboard: Base, consumable, worn and total weight on one screen.",
        "Big Three: See how much of your base weight goes to shelter, sleep system and pack.",
        "One closet, every trip: Add items to a trip with one tap and check them off as you pack.",
        "Share and back up: Shakedown card, Markdown table, CSV export and JSON backup."
      ]
    }
  },
  bloom: {
    tr: {
      name: "Bloom: Kahve Zamanlayıcı",
      category: "Yemek ve İçecek",
      cardDescription: "V60, Chemex, AeroPress ve daha fazlası için oran hesaplayıcılı, aşamalı demleme zamanlayıcısı.",
      description: "Bloom, filtre kahve ve espresso rutininizi tekrarlanabilir bir ritüele dönüştürür. Dozu ya da su miktarını girin, gerisini o hesaplasın; her döküş aşamasını dokunsal ve sesli uyarılarla takip edin.",
      features: [
        "Oran ve doz hesaplayıcı: Hazır oranlar veya 1:10 ile 1:22 arası özel oran, 1 ila 6 fincan.",
        "Canlı zamanlayıcı: Döküş aşamalarını Kilit Ekranı ve Dynamic Island'dan izleyin.",
        "Şampiyona tarifleri: Tanınmış baristaların tarifleri ya da kendi çok aşamalı tarifiniz.",
        "Çekirdek kileri: Her paketi ve demlemeyi öğütme, sıcaklık ve tat notlarıyla kaydedin."
      ]
    },
    en: {
      name: "Bloom: Coffee Brew Timer",
      category: "Food & Drink",
      cardDescription: "A multi-stage brew timer with a ratio calculator for V60, Chemex, AeroPress and more.",
      description: "Bloom turns your pour-over or espresso routine into a repeatable ritual. Enter your dose or water and it works out the rest, then guides each pour with haptic and audio cues.",
      features: [
        "Ratio and dose calculator: Presets or a custom ratio from 1:10 to 1:22, for 1 to 6 cups.",
        "Live brew timer: Follow pour stages on the Lock Screen and in the Dynamic Island.",
        "Championship recipes: Brew recipes from well-known baristas, or build your own.",
        "Bean cellar: Log every bag and brew with grind, temperature and tasting notes."
      ]
    }
  },
  medlyra: {
    tr: {
      name: "Medlyra: İlaç Takip Asistanı",
      category: "Tıp",
      cardDescription: "Dozu tek dokunuşla kaydeden, aileniz için de kullanabileceğiniz sakin bir ilaç takip uygulaması.",
      description: "Medlyra ilaç takibini tek harekete indirir: daireye dokunun, doz kaydedilsin. Birden fazla ilaç kullananlar ve onları takip eden aile bireyleri için tasarlandı.",
      features: [
        "Dokun ve kaydet: Günün dozları sabah, öğle ve akşam olarak gruplanır.",
        "Kilit ekranında hatırlatma: Uygulamayı açmadan dozu alındı olarak işaretleyin ya da 15 dakika erteleyin.",
        "Dürüst takvim: Alınan, kısmi ve kaçırılan günler, zamanında alma yüzdesi ve seri.",
        "Aile ve iCloud: Ebeveyn, eş veya çocuk ekleyin, her şey cihazlarınız arasında eşitlensin."
      ]
    },
    en: {
      name: "Medlyra: Medication Tracker",
      category: "Medical",
      cardDescription: "A calm medication tracker that logs a dose with one tap, for you and your family.",
      description: "Medlyra turns medication tracking into one motion: tap the circle and the dose is logged. It is built for people managing several prescriptions and for the family members who check in on them.",
      features: [
        "Tap to log: Today's doses grouped into morning, midday and evening.",
        "Lock Screen reminders: Mark a dose taken or snooze it for 15 minutes without opening the app.",
        "An honest calendar: Taken, partial and missed days, on-time rate and streak.",
        "Family and iCloud: Add a parent, partner or child and keep everything in sync."
      ]
    }
  },
  shelf: {
    tr: {
      name: "Shelf: Son Kullanma Takibi",
      category: "Yemek ve İçecek",
      cardDescription: "Gıdaların, kozmetiklerin ve ilaçların son kullanma tarihlerini takip eden ev envanteri.",
      description: "Shelf, tarihi geçtiği için çöpe giden ürünleri azaltmak için tasarlandı. Tarihi kameranızla okutun, ürünü barkoddan tanıyın ve zamanı geldiğinde bildirim alın.",
      features: [
        "Ambalaj taraması: Son kullanma tarihini kamerayla okutun, cihaz üzerindeki yapay zeka tanısın.",
        "Barkod sorgulama: Ürün adı ve kategorisi açık veri tabanlarından otomatik dolsun.",
        "PAO desteği: Kozmetikler için açıldıktan sonraki kullanım süresini hesaplayın.",
        "İsraf analizi: Kurtardığınız ve israf ettiğiniz ürünleri grafiklerle görün."
      ]
    },
    en: {
      name: "Shelf: Expiry Date Tracker",
      category: "Food & Drink",
      cardDescription: "A home pantry tracker that keeps an eye on expiry dates for food, cosmetics and medicine.",
      description: "Shelf is built to cut down on things that get thrown away past their date. Scan the date with your camera, identify products by barcode and get a reminder when it matters.",
      features: [
        "Packaging scan: Point your camera at the expiry date and on-device AI reads it.",
        "Barcode lookup: Product name and category fill in from open databases.",
        "PAO support: Track cosmetics by their period after opening.",
        "Waste insights: See what you saved and what went to waste in charts."
      ]
    }
  },
  shapemerge: {
    tr: {
      name: "Şekil Birleştir: Blok Bulmaca",
      category: "Bulmaca",
      cardDescription: "Aynı şekilleri ızgarada birleştirip yeni geometrik şekiller açtığınız bir bulmaca oyunu.",
      description: "Aynı şekilleri dinamik bir ızgarada birleştirerek daha gelişmiş şekillere ulaşın ve en yüksek skoru hedefleyin. Öğrenmesi kolay, ustalaşması zaman alan bir oyun.",
      features: [
        "Üç oyun modu: Klasik, Zamana Karşı ve süre sınırı olmayan Zen Bahçesi.",
        "Game Center: Her mod için küresel liderlik tablolarında yarışın.",
        "Geçilme bildirimi: Biri skorunuzu geçtiğinde haberiniz olsun.",
        "İnternetsiz oyun: Temalar ve şekil görünümleriyle istediğiniz yerde oynayın."
      ]
    },
    en: {
      name: "Shape Merge: Block Puzzle",
      category: "Puzzle",
      cardDescription: "A puzzle game where you merge matching shapes on a grid to unlock new ones.",
      description: "Merge identical shapes on a dynamic grid to reach more advanced figures and chase a high score. Easy to learn, slow to master.",
      features: [
        "Three modes: Classic, Time Attack and Zen Garden with no timer.",
        "Game Center: Compete on global leaderboards for every mode.",
        "Overtake alerts: Get notified when someone beats your high score.",
        "Play offline: Unlock themes and shape skins and play anywhere."
      ]
    }
  },
  clearin: {
    tr: {
      name: "Clearin: E-posta Temizleyici",
      category: "Verimlilik",
      cardDescription: "Gelen kutunuzu kaydırma hareketleriyle saniyeler içinde temizleyen e-posta uygulaması.",
      description: "Clearin, gelen kutusu temizliğini hızlı bir kaydırma oyununa dönüştürür. Her e-postayı tek hareketle tutun, silin, erteleyin ya da abonelikten çıkın.",
      features: [
        "Dört yönlü kaydırma: Sağa tut, sola sil, yukarı ertele, aşağı abonelikten çık.",
        "Temizlik raporları: Kaç e-posta sildiğinizi ve ne kadar zaman kazandığınızı görün.",
        "Cihazda işlem: E-posta içerikleri harici bir sunucuya yüklenmez.",
        "iCloud eşitleme: Verileriniz iOS cihazlarınız arasında eşitlenir."
      ]
    },
    en: {
      name: "Clearin: Email Inbox Cleaner",
      category: "Productivity",
      cardDescription: "An email app that clears your inbox in seconds with simple swipe gestures.",
      description: "Clearin turns inbox cleaning into a quick swiping game. Keep, delete, snooze or unsubscribe from each email with a single gesture.",
      features: [
        "Four-way swipe: Right to keep, left to delete, up to snooze, down to unsubscribe.",
        "Cleanup reports: See how many emails you cleared and how much time you saved.",
        "On-device processing: Your email content never goes to an outside server.",
        "iCloud sync: Your data stays in sync across your iOS devices."
      ]
    }
  },
  shotsilo: {
    tr: {
      name: "ShotSilo: Ekran Görüntüleri",
      category: "Fotoğraf ve Video",
      cardDescription: "Ekran görüntülerinizi cihaz üzerindeki yapay zekayla düzenleyen ve galerinizi temizleyen uygulama.",
      description: "ShotSilo, ekran görüntülerinizi OCR ve cihaz üzerindeki yapay zekayla tarar, indeksler ve klasörlere ayırır. Aradığınızı saniyeler içinde bulun, gereksizleri kolayca silin.",
      features: [
        "Görselde metin arama: Bir kelime yazın, içinde geçtiği ekran görüntüsünü bulun.",
        "Akıllı klasörler: Fişler, biletler, sohbetler ve tarifler otomatik olarak ayrılır.",
        "Kaydırarak temizle: Sağa sakla, sola sil; benzer ve kopya görselleri tek dokunuşla kaldırın.",
        "Face ID kilidi: Klasörleri ya da tüm uygulamayı kilitleyin."
      ]
    },
    en: {
      name: "ShotSilo: Screenshot Manager",
      category: "Photo & Video",
      cardDescription: "A screenshot manager that organizes your gallery with on-device AI and clears the clutter.",
      description: "ShotSilo scans, indexes and sorts your screenshots into folders using OCR and on-device AI. Find what you need in seconds and delete what you don't.",
      features: [
        "Search text in images: Type a word and find the screenshot it appears in.",
        "Smart folders: Receipts, tickets, chats and recipes are sorted automatically.",
        "Swipe to clean: Right to keep, left to delete, and remove near-duplicates in one tap.",
        "Face ID lock: Lock individual folders or the whole app."
      ]
    }
  },
  timeflow: {
    tr: {
      name: "TimeFlow: Geri ve İleri Sayım",
      category: "Verimlilik",
      cardDescription: "Yaklaşan günlere geri sayan, önemli anlardan bu yana geçen süreyi ileri sayan gün sayacı.",
      description: "Sınava, tatile ya da doğum gününe kaç gün kaldığını görün veya sigarayı bıraktığınızdan bu yana geçen süreyi takip edin. Her etkinlik kendi kartı, renkleri ve hatırlatıcılarıyla gelir.",
      features: [
        "Çift yönlü sayaç: Gelecek tarihlere geri sayım, geçmiş anlardan bu yana ileri sayım.",
        "Ana ekran widget'ları: Etkinlikleri uygulamayı açmadan farklı boyutlarda izleyin.",
        "Kişiselleştirme: Renk geçişleri, kendi fotoğraflarınız, ikonlar ve yazı rengi.",
        "Hatırlatıcı ve tekrar: Etkinlik başına birden fazla bildirim, her yıl tekrarlanan günler."
      ]
    },
    en: {
      name: "TimeFlow: Countdown Timer",
      category: "Productivity",
      cardDescription: "A day counter that counts down to upcoming dates and up from the moments that matter.",
      description: "See how many days are left until an exam, a trip or a birthday, or how long it has been since you quit smoking. Every event gets its own card, colors and reminders.",
      features: [
        "Two-way counter: Count down to future dates or up from past milestones.",
        "Home Screen widgets: Follow events in several sizes without opening the app.",
        "Customization: Gradients, your own photos, icons and text color.",
        "Reminders and repeats: Several alerts per event and dates that repeat every year."
      ]
    }
  },
  oneline: {
    tr: {
      name: "One Line: Mikro Günlük",
      category: "Yaşam Tarzı",
      cardDescription: "Her günü tek bir cümleyle kaydettiğiniz, ruh halinizi de takip eden minimalist günlük.",
      description: "Sayfalarca yazmak yok: o günkü modunuzu seçin ve gününüzü özetleyen tek bir satır yazın. Zamanla bu satırlar, yapay zeka destekli raporlarla duygusal eğilimlerinizi gösteren bir arşive dönüşür.",
      features: [
        "Günde tek satır: Günün özünü tek bir cümleyle yakalayın.",
        "Ruh hali takibi: Hislerinizi seçin, zaman içindeki eğilimleri görün.",
        "Yapay zeka raporları: Haftalık, aylık ve yıllık duygu analizleri.",
        "Kilit ve eşitleme: Face ID veya Touch ID, iCloud eşitleme ve PDF kitap çıktısı."
      ]
    },
    en: {
      name: "One Line: Micro Journal",
      category: "Lifestyle",
      cardDescription: "A minimalist journal where you capture each day in one sentence and track your mood.",
      description: "No pages to fill: pick your mood and write one line that sums up your day. Over time those lines become an archive, with AI-powered reports on your emotional trends.",
      features: [
        "One line a day: Capture the essence of your day in a single sentence.",
        "Mood tracking: Log how you feel and watch your trends over time.",
        "AI reports: Weekly, monthly and yearly sentiment insights.",
        "Lock and sync: Face ID or Touch ID, iCloud sync and PDF book export."
      ]
    }
  },
  veltrim: {
    tr: {
      name: "Veltrim: Smart Clipboard",
      category: "Verimlilik",
      cardDescription: "Kopyaladığınız her şeyi saklayan, klasör ve etiketlerle düzenleyen pano yöneticisi.",
      description: "Veltrim, kopyaladığınız metin ve bağlantıları otomatik olarak kaydeder ve dağınık bir geçmiş yerine düzenli bir çalışma alanı sunar. Kod parçaları, notlar ve hazır yanıtlar için kişisel bir bilgi bankası gibi çalışır.",
      features: [
        "Otomatik geçmiş: Kopyalanan her metin ve bağlantı kaydedilir.",
        "Klasör ve etiketler: İçerikleri proje ya da konuya göre ayırın.",
        "Akıllı arama: Tüm geçmişinizde saniyeler içinde arayın.",
        "Cihazda saklama: Pano verileriniz cihazınızda kalır."
      ]
    },
    en: {
      name: "Veltrim: Smart Clipboard",
      category: "Productivity",
      cardDescription: "A clipboard manager that keeps everything you copy and sorts it into folders and tags.",
      description: "Veltrim saves the text and links you copy and turns a messy history into an organized workspace. It works like a personal knowledge base for code snippets, notes and canned replies.",
      features: [
        "Automatic history: Every text and link you copy is saved.",
        "Folders and tags: Sort snippets by project or topic.",
        "Smart search: Search your whole history in seconds.",
        "Stays on device: Your clipboard data stays on your phone."
      ]
    }
  },
  rolliva: {
    tr: {
      name: "Rolliva - Zar & Çark",
      category: "Araçlar",
      cardDescription: "Çark, zar, yazı tura ve takım kurucuyu tek uygulamada toplayan karar verme aracı.",
      description: "Rolliva, grup oyunlarını ve günlük kararları kolaylaştırır. Bir kazanan seçin, tartışmayı bitirin, kutu oyunu için zar atın ya da arkadaşlarınızı dengeli takımlara bölün.",
      features: [
        "Özel çarklar: Sınırsız dilim, kayıtlı şablonlar, kendi renkleriniz ve olasılıklarınız.",
        "Klasik ve RPG zarları: d4'ten d20'ye, sallayarak atma ve kendi tasarladığınız zarlar.",
        "Parmak seçici: Herkes parmağını koysun, hesabı kimin ödeyeceğini uygulama seçsin.",
        "Takım kurucu: Oyuncuları yetenek puanına göre dengeli takımlara ayırın."
      ]
    },
    en: {
      name: "Rolliva - Dice & Wheel",
      category: "Utilities",
      cardDescription: "A decision maker that brings a wheel, dice, coin flip and team builder into one app.",
      description: "Rolliva makes group games and everyday choices easier. Pick a winner, settle a debate, roll dice for a board game or split friends into balanced teams.",
      features: [
        "Custom wheels: Unlimited slices, saved templates, your own colors and odds.",
        "Classic and RPG dice: d4 to d20, shake to roll, and dice you design yourself.",
        "Finger chooser: Everyone puts a finger down and the app picks who pays.",
        "Team builder: Split players into teams balanced by skill points."
      ]
    }
  },
  piramit: {
    tr: {
      name: "Piramit Bulmaca",
      category: "Kelime",
      cardDescription: "Her basamakta bir harf kısalan kelimelerle piramidin tepesine tırmandığınız kelime oyunu.",
      description: "Her bölüm piramidin en alt basamağındaki en uzun kelimeyle başlar, yukarı çıktıkça kelime bir harf kısalır. İpuçlarıyla doğru kelimeyi bulun, tüm basamakları tamamlayıp sonraki bölüme geçin.",
      features: [
        "Piramit yapısı: Her üst basamakta bir harf eksilen kelimeler.",
        "İpucu metinleri: Her bölüme özel ipuçlarıyla doğru kelimeye ulaşın.",
        "Ödüller: Doğru tahminlerle ipucu hakkı ve ekstra can kazanın.",
        "Antik atmosfer: Piramit temalı görseller, müzik ve ses efektleri."
      ]
    },
    en: {
      name: "Piramit Bulmaca",
      category: "Word",
      cardDescription: "A word game where you climb a pyramid, one letter shorter at every step.",
      description: "Each level starts with the longest word at the base of the pyramid, and the word loses a letter at every step up. Use the hints to find each word, fill every step and move on to the next level.",
      features: [
        "Pyramid structure: Each step up is the word below minus one letter.",
        "Hints: A dedicated hint for every word in every level.",
        "Rewards: Earn extra hints and lives with correct guesses.",
        "Ancient atmosphere: Pyramid-themed art, music and sound effects."
      ]
    }
  },
  randomjourney: {
    tr: {
      name: "RandomJourney",
      category: "Seyahat",
      cardDescription: "Seçtiğiniz bölgeden rastgele bir koordinat vererek sizi yeni yerlere gönderen gezi uygulaması.",
      description: "Bir bölge seçin, RandomJourney size o bölgeden rastgele bir koordinat versin. Rutinden kaçmak ya da gözden kaçan yerleri keşfetmek için her gezi yeni bir rotaya dönüşür.",
      features: [
        "Rastgele koordinat: Seçtiğiniz bölgede gidilecek yeni bir nokta.",
        "Kolay kullanım: Bölgeyi seçin, koordinatı alın, yola çıkın.",
        "Doğa ve şehir: Hem doğa yürüyüşleri hem şehir gezileri için.",
        "Haritada takip: Size verilen koordinatı harita üzerinde izleyin."
      ]
    },
    en: {
      name: "RandomJourney",
      category: "Travel",
      cardDescription: "A travel app that sends you somewhere new with a random coordinate from the region you pick.",
      description: "Choose a region and RandomJourney gives you a random coordinate inside it. Whether you want to break the routine or find hidden spots, every trip becomes a new route.",
      features: [
        "Random coordinates: A fresh point to head for in the region you choose.",
        "Simple flow: Pick a region, get a coordinate, head out.",
        "Nature or city: Works for trail days and city walks alike.",
        "Follow on the map: Track the coordinate you were given on the map."
      ]
    }
  },
  qrmaker: {
    tr: {
      name: "QRMaker&Scanner",
      category: "Araçlar",
      cardDescription: "QR kod oluşturan ve tarayan, kodları renk ve logoyla kişiselleştirmenizi sağlayan uygulama.",
      description: "Metin, bağlantı, kartvizit veya Wi-Fi bilgisi için saniyeler içinde QR kod oluşturun ve kameranızla tarayın. Oluşturduğunuz ve taradığınız kodlar daha sonra kullanmak için saklanır.",
      features: [
        "Hızlı oluşturma: Metin, URL, e-posta, kartvizit ve Wi-Fi için QR kod.",
        "Kolay tarama: Kamerayı koda doğrultun, bilgiye anında ulaşın.",
        "Kişiselleştirme: Kodlarınıza kendi renklerinizi ve logonuzu ekleyin.",
        "Geçmiş: Oluşturduğunuz ve taradığınız kodları kaydedin."
      ]
    },
    en: {
      name: "QRMaker&Scanner",
      category: "Utilities",
      cardDescription: "A QR code maker and scanner that lets you style codes with your own colors and logo.",
      description: "Create QR codes for text, links, business cards or Wi-Fi in seconds and scan them with your camera. Every code you make or scan is saved for later.",
      features: [
        "Fast creation: QR codes for text, URLs, email, business cards and Wi-Fi.",
        "Easy scanning: Point your camera at a code and get the info instantly.",
        "Customization: Add your own colors and logo.",
        "History: Save the codes you create and scan."
      ]
    }
  }
};
