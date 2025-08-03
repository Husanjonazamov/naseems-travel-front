export interface Translations {
  nav: {
    home: string;
    destinations: string;
    tours: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    exploreDestinations: string;
    watchVideo: string;
    popularDestinations: string;
    popularDestinationsDesc: string;
    whyChooseUs: string;
    whyChooseUsDesc: string;
    trustedService: string;
    trustedServiceDesc: string;
    bestPrices: string;
    bestPricesDesc: string;
    support24: string;
    support24Desc: string;
    expertGuides: string;
    expertGuidesDesc: string;
    startJourney: string;
    startJourneyDesc: string;
    browseAllTours: string;
    reviews: string;
    from: string;
  };
  destinations: {
    title: string;
    subtitle: string;
    filters: string;
    allRegions: string;
    allPrices: string;
    destinationsFound: string;
    topHighlights: string;
    viewDetails: string;
    cantFind: string;
    cantFindDesc: string;
    getCustomQuote: string;
    duration: string;
    perPerson: string;
  };
  tours: {
    title: string;
    subtitle: string;
    featured: string;
    duration: string;
    from: string;
    bookTour: string;
    whatsIncluded: string;
    itinerary: string;
    reviews: string;
    highlights: string;
  };
  about: {
    title: string;
    subtitle: string;
    ourStory: string;
    ourStoryDesc1: string;
    ourStoryDesc2: string;
    yearsExperience: string;
    happyTravelers: string;
    destinations: string;
    ourValues: string;
    ourValuesDesc: string;
    passionCare: string;
    passionCareDesc: string;
    trustSafety: string;
    trustSafetyDesc: string;
    excellence: string;
    excellenceDesc: string;
    leadership: string;
    leadershipDesc: string;
    whyChoose: string;
    awardWinning: string;
    awardWinningDesc: string;
    expertTeam: string;
    expertTeamDesc: string;
    personalized: string;
    personalizedDesc: string;
    peaceOfMind: string;
    peaceOfMindDesc: string;
    readyAdventure: string;
    readyAdventureDesc: string;
    contactUs: string;
    viewDestinations: string;
  };
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    sendMessageDesc: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    subject: string;
    yourMessage: string;
    maxChars: string;
    messageSent: string;
    messageSuccess: string;
    officeInfo: string;
    address: string;
    phone: string;
    email: string;
    businessHours: string;
    quickContact: string;
    quickContactDesc: string;
    callNow: string;
    whatsapp: string;
    emailUs: string;
    ourLocation: string;
    faq: string;
    faqDesc: string;
    needHelp: string;
    chatInstantly: string;
  };
  footer: {
    description: string;
    services: string;
    copyright: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    back: string;
    next: string;
    previous: string;
    close: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: "Home",
      destinations: "Destinations", 
      tours: "Tours",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now"
    },
    home: {
      heroTitle: "Discover",
      heroSubtitle: "Amazing Places",
      heroDescription: "Explore the world's most incredible destinations with curated travel experiences designed for modern adventurers.",
      exploreDestinations: "Explore Destinations",
      watchVideo: "Watch Video",
      popularDestinations: "Popular Destinations",
      popularDestinationsDesc: "Discover handpicked destinations that offer unforgettable experiences and breathtaking beauty",
      whyChooseUs: "Why Choose Us?",
      whyChooseUsDesc: "We provide exceptional travel experiences with attention to every detail",
      trustedService: "Trusted Service",
      trustedServiceDesc: "15+ years of experience with thousands of satisfied travelers worldwide",
      bestPrices: "Best Prices",
      bestPricesDesc: "Competitive pricing with no hidden fees and flexible payment options",
      support24: "24/7 Support",
      support24Desc: "Round-the-clock assistance during your entire journey",
      expertGuides: "Expert Guides",
      expertGuidesDesc: "Professional local guides who know every hidden gem",
      startJourney: "Start Your Journey Today!",
      startJourneyDesc: "Don't wait for the perfect moment. The perfect moment is now. Book your dream vacation and create memories that will last forever.",
      browseAllTours: "Browse All Tours",
      reviews: "reviews",
      from: "From"
    },
    destinations: {
      title: "Explore Destinations",
      subtitle: "Discover the world's most incredible places and create unforgettable memories with our curated travel experiences",
      filters: "Filters:",
      allRegions: "All Regions",
      allPrices: "All Prices",
      destinationsFound: "destinations found",
      topHighlights: "Top Highlights:",
      viewDetails: "View Details",
      cantFind: "Can't Find Your Dream Destination?",
      cantFindDesc: "Contact us and we'll create a custom travel package just for you",
      getCustomQuote: "Get Custom Quote",
      duration: "Duration",
      perPerson: "per person"
    },
    tours: {
      title: "Amazing Tours",
      subtitle: "Discover our carefully crafted tour packages designed to give you the best travel experiences",
      featured: "Featured Tours",
      duration: "Duration",
      from: "From",
      bookTour: "Book This Tour",
      whatsIncluded: "What's Included",
      itinerary: "Itinerary",
      reviews: "reviews",
      highlights: "Tour Highlights"
    },
    about: {
      title: "About Wanderlust",
      subtitle: "We're passionate travel experts dedicated to creating extraordinary journeys that inspire, transform, and connect you with the world's most amazing destinations.",
      ourStory: "Our Story",
      ourStoryDesc1: "Founded in 2010, Wanderlust was born from a simple belief: travel has the power to transform lives. Our founders, experienced travelers themselves, noticed a gap in the market for truly personalized, high-quality travel experiences that go beyond the typical tourist path.",
      ourStoryDesc2: "Today, we've grown into a globally recognized travel company, having served over 50,000 satisfied customers across 6 continents. Our team of travel experts, local guides, and cultural ambassadors work tirelessly to craft unforgettable journeys that create lifelong memories.",
      yearsExperience: "Years Experience",
      happyTravelers: "Happy Travelers",
      destinations: "Destinations",
      ourValues: "Our Core Values",
      ourValuesDesc: "These principles guide everything we do and shape every journey we create",
      passionCare: "Passion & Care",
      passionCareDesc: "We treat every traveler like family, caring deeply about their experience and going above and beyond to exceed expectations.",
      trustSafety: "Trust & Safety",
      trustSafetyDesc: "Your safety and peace of mind are our top priorities. We maintain the highest standards of safety and reliability in all our services.",
      excellence: "Excellence & Innovation",
      excellenceDesc: "We constantly innovate and improve our services, setting new standards for luxury travel and customer experience.",
      leadership: "Meet Our Leadership",
      leadershipDesc: "Our experienced leadership team brings together decades of travel industry expertise and passion for creating exceptional experiences",
      whyChoose: "Why Choose Wanderlust?",
      awardWinning: "Award-Winning Service",
      awardWinningDesc: "Recognized globally for exceptional service quality and customer satisfaction",
      expertTeam: "Expert Team",
      expertTeamDesc: "Professional travel consultants and local guides with deep destination knowledge",
      personalized: "Personalized Approach",
      personalizedDesc: "Every journey is tailored to your unique preferences and travel style",
      peaceOfMind: "Complete Peace of Mind",
      peaceOfMindDesc: "Comprehensive insurance, 24/7 support, and emergency assistance worldwide",
      readyAdventure: "Ready to Start Your Adventure?",
      readyAdventureDesc: "Join thousands of satisfied travelers who have discovered the world with Wanderlust. Let us create your perfect journey today.",
      contactUs: "Contact Us",
      viewDestinations: "View Destinations"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to plan your dream vacation? Our travel experts are here to help you create unforgettable experiences",
      sendMessage: "Send us a Message",
      sendMessageDesc: "Have questions, special requests, or need a custom travel plan? Get in touch with our team and we'll respond within 24 hours!",
      firstName: "First Name",
      lastName: "Last Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      subject: "Subject",
      yourMessage: "Your Message",
      maxChars: "Maximum 500 characters",
      messageSent: "Message Sent ✓",
      messageSuccess: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      officeInfo: "Office Information",
      address: "Address",
      phone: "Phone",
      email: "Email",
      businessHours: "Business Hours",
      quickContact: "Quick Contact",
      quickContactDesc: "Need immediate assistance? Call us now or chat with us on WhatsApp for instant support",
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      emailUs: "Email Us",
      ourLocation: "Our Location",
      faq: "Frequently Asked Questions",
      faqDesc: "Find answers to the most common questions about our travel services",
      needHelp: "Need Help?",
      chatInstantly: "Chat with us instantly"
    },
    footer: {
      description: "Discover the world's most incredible destinations with our curated travel experiences.",
      services: "Services",
      copyright: "© 2024 Wanderlust. All rights reserved."
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close"
    }
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      destinations: "Yo'nalishlar",
      tours: "Turlar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      bookNow: "Hoziroq buyurtma"
    },
    home: {
      heroTitle: "Kashf eting",
      heroSubtitle: "Ajoyib joylarni",
      heroDescription: "Zamonaviy sarguzashtchilar uchun mo'ljallangan sayohat tajribalari bilan dunyoning eng ajoyib joylarini kashf eting.",
      exploreDestinations: "Yo'nalishlarni o'rganing",
      watchVideo: "Video tomosha qiling",
      popularDestinations: "Mashhur yo'nalishlar",
      popularDestinationsDesc: "Unutilmas tajribalar va hayratlanarli go'zallik taqdim etadigan tanlab olingan joylarni kashf eting",
      whyChooseUs: "Nima uchun bizni tanlash kerak?",
      whyChooseUsDesc: "Biz har bir tafsilotga e'tibor berib, ajoyib sayohat tajribalarini taklif etamiz",
      trustedService: "Ishonchli xizmat",
      trustedServiceDesc: "15+ yillik tajriba va butun dunyo bo'ylab minglab mamnun sayohatchilar",
      bestPrices: "Eng yaxshi narxlar",
      bestPricesDesc: "Yashirin to'lovsiz raqobatbardosh narxlar va moslashuvchan to'lov variantlari",
      support24: "24/7 qo'llab-quvvatlash",
      support24Desc: "Sayohatingiz davomida kechayu kunduz yordam",
      expertGuides: "Mutaxassis gidlar",
      expertGuidesDesc: "Har bir yashirin marvaridni biladigan professional mahalliy gidlar",
      startJourney: "Sayohatingizni bugundan boshlang!",
      startJourneyDesc: "Mukammal momentni kutmang. Mukammal moment - hozir. Orzuingizdagi ta'tilni buyurtma qiling va abadiy qoladigan xotiralar yarating.",
      browseAllTours: "Barcha turlarni ko'ring",
      reviews: "sharh",
      from: "dan"
    },
    destinations: {
      title: "Yo'nalishlarni o'rganing",
      subtitle: "Dunyoning eng ajoyib joylarini kashf eting va bizning tanlab olingan sayohat tajribalarimiz bilan unutilmas xotiralar yarating",
      filters: "Filtrlar:",
      allRegions: "Barcha hududlar",
      allPrices: "Barcha narxlar",
      destinationsFound: "yo'nalish topildi",
      topHighlights: "Asosiy diqqatga sazovor joylar:",
      viewDetails: "Tafsilotlarni ko'ring",
      cantFind: "Orzu qilgan yo'nalishingizni topa olmayapsizmi?",
      cantFindDesc: "Biz bilan bog'laning va biz siz uchun maxsus sayohat paketini yaratamiz",
      getCustomQuote: "Maxsus taklif oling",
      duration: "Davomiyligi",
      perPerson: "kishi uchun"
    },
    tours: {
      title: "Ajoyib turlar",
      subtitle: "Sizga eng yaxshi sayohat tajribalarini berish uchun ehtiyotkorlik bilan yaratilgan tur paketlarimizni kashf eting",
      featured: "Tanlangan turlar",
      duration: "Davomiyligi",
      from: "dan",
      bookTour: "Bu turni buyurtma qiling",
      whatsIncluded: "Nima kiritilgan",
      itinerary: "Yo'l rejasi",
      reviews: "sharh",
      highlights: "Tur diqqatga sazovorlari"
    },
    about: {
      title: "Wanderlust haqida",
      subtitle: "Biz sizni dunyoning eng ajoyib joylariga bog'laydigan, ilhomlantiradigan va o'zgartiradigan ajoyib sayohatlar yaratishga ishtiyoqli sayohat mutaxassislarimiz.",
      ourStory: "Bizning hikoyamiz",
      ourStoryDesc1: "2010-yilda tashkil etilgan Wanderlust oddiy ishonchdan tug'ildi: sayohat hayotni o'zgartirish kuchiga ega. Tajribali sayohatchilar bo'lgan asoschilarimiz bozorda haqiqatan ham shaxsiylashtirilgan, yuqori sifatli sayohat tajribalari uchun, oddiy sayyoh yo'lidan tashqariga chiqadigan bo'shliqni sezdilar.",
      ourStoryDesc2: "Bugun biz global tan olingan sayohat kompaniyasiga aylandik, 6 qit'ada 50,000 dan ortiq mamnun mijozlarga xizmat ko'rsatdik. Bizning sayohat mutaxassislari, mahalliy gidlar va madaniy elchilar jamoamiz abadiy qoladigan xotiralar yaratadigan unutilmas sayohatlar yaratish uchun tinimsiz ishlaydi.",
      yearsExperience: "Yillik tajriba",
      happyTravelers: "Baxtli sayohatchilar",
      destinations: "Yo'nalishlar",
      ourValues: "Bizning asosiy qadriyatlarimiz",
      ourValuesDesc: "Bu tamoyillar biz qiladigan hamma narsani boshqaradi va yaratadigan har bir sayohatni shakllantiradi",
      passionCare: "Ishtiyoq va g'amxo'rlik",
      passionCareDesc: "Biz har bir sayohatchi bilan oila kabi munosabatda bo'lamiz, ularning tajribasiga chuqur g'amxo'rlik qilamiz va kutilganidan ustun natijalarni berishga intilamiz.",
      trustSafety: "Ishonch va xavfsizlik",
      trustSafetyDesc: "Sizning xavfsizligingiz va tinch-osoyishtaligingiz bizning asosiy ustuvorliklarimizdir. Biz barcha xizmatlarimizda eng yuqori xavfsizlik va ishonchlilik standartlarini saqlaymiz.",
      excellence: "Mukammallik va innovatsiya",
      excellenceDesc: "Biz doimiy ravishda xizmatlarimizni yangilab, yaxshilab boramiz, hashamatli sayohat va mijozlar tajribasi uchun yangi standartlar o'rnatamiz.",
      leadership: "Bizning rahbariyat bilan tanishing",
      leadershipDesc: "Bizning tajribali rahbariyat jamoamiz o'nlab yillik sayohat sanoati tajribasi va ajoyib tajribalar yaratishga bo'lgan ishtiyoqni birlashtiradi",
      whyChoose: "Nima uchun Wanderlustni tanlash kerak?",
      awardWinning: "Mukofotlangan xizmat",
      awardWinningDesc: "Ajoyib xizmat sifati va mijozlar mamnunligi uchun global miqyosda e'tirof etilgan",
      expertTeam: "Mutaxassis jamoa",
      expertTeamDesc: "Chuqur yo'nalish bilimiga ega professional sayohat maslahatchilari va mahalliy gidlar",
      personalized: "Shaxsiylashtirilgan yondashuv",
      personalizedDesc: "Har bir sayohat sizning noyob afzalliklaringiz va sayohat uslubingizga moslashtiriladi",
      peaceOfMind: "To'liq tinch-osoyishtalik",
      peaceOfMindDesc: "Keng qamrovli sug'urta, 24/7 qo'llab-quvvatlash va butun dunyo bo'ylab favqulodda yordam",
      readyAdventure: "Sarguzashtingizni boshlashga tayyormisiz?",
      readyAdventureDesc: "Wanderlust bilan dunyoni kashf etgan minglab mamnun sayohatchilarga qo'shiling. Bugun sizning mukammal sayohatingizni yaratishga ruxsat bering.",
      contactUs: "Biz bilan bog'laning",
      viewDestinations: "Yo'nalishlarni ko'ring"
    },
    contact: {
      title: "Bog'laning",
      subtitle: "Orzu qilgan ta'tilingizni rejalashtirshga tayyormisiz? Bizning sayohat mutaxassislarimiz sizga unutilmas tajribalar yaratishda yordam berish uchun shu yerda",
      sendMessage: "Bizga xabar yuboring",
      sendMessageDesc: "Savollaringiz, maxsus so'rovlaringiz bormi yoki maxsus sayohat rejasi kerakmi? Bizning jamoa bilan bog'laning va biz 24 soat ichida javob beramiz!",
      firstName: "Ism",
      lastName: "Familiya",
      emailAddress: "Email manzili",
      phoneNumber: "Telefon raqami",
      subject: "Mavzu",
      yourMessage: "Sizning xabaringiz",
      maxChars: "Maksimal 500 ta belgi",
      messageSent: "Xabar yuborildi ✓",
      messageSuccess: "Rahmat! Sizning xabaringiz muvaffaqiyatli yuborildi. Biz 24 soat ichida sizga javob beramiz.",
      officeInfo: "Ofis ma'lumotlari",
      address: "Manzil",
      phone: "Telefon",
      email: "Email",
      businessHours: "Ish vaqtlari",
      quickContact: "Tezkor aloqa",
      quickContactDesc: "Zudlik bilan yordam kerakmi? Bizga hoziroq qo'ng'iroq qiling yoki tezkor qo'llab-quvvatlash uchun WhatsApp orqali yozing",
      callNow: "Hozir qo'ng'iroq qiling",
      whatsapp: "WhatsApp",
      emailUs: "Bizga email yuboring",
      ourLocation: "Bizning joylashuvimiz",
      faq: "Tez-tez so'raladigan savollar",
      faqDesc: "Bizning sayohat xizmatlarimiz haqida eng keng tarqalgan savollarga javoblarni toping",
      needHelp: "Yordam kerakmi?",
      chatInstantly: "Biz bilan darhol chat qiling"
    },
    footer: {
      description: "Bizning tanlab olingan sayohat tajribalarimiz bilan dunyoning eng ajoyib joylarini kashf eting.",
      services: "Xizmatlar",
      copyright: "© 2024 Wanderlust. Barcha huquqlar himoyalangan."
    },
    common: {
      loading: "Yuklanmoqda...",
      error: "Xato",
      success: "Muvaffaqiyat",
      cancel: "Bekor qilish",
      confirm: "Tasdiqlash",
      save: "Saqlash",
      edit: "Tahrirlash",
      delete: "O'chirish",
      back: "Orqaga",
      next: "Keyingi",
      previous: "Oldingi",
      close: "Yopish"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      destinations: "Направления",
      tours: "Туры",
      about: "О нас",
      contact: "Контакты",
      bookNow: "Забронировать"
    },
    home: {
      heroTitle: "Откройте",
      heroSubtitle: "Удивительные места",
      heroDescription: "Исследуйте самые невероятные места мира с тщательно продуманными путешествиями для современных искателей приключений.",
      exploreDestinations: "Исследовать направления",
      watchVideo: "Смотреть видео",
      popularDestinations: "Популярные направления",
      popularDestinationsDesc: "Откройте для себя тщательно отобранные места, которые предлагают незабываемые впечатления и захватывающую красоту",
      whyChooseUs: "Почему выбирают нас?",
      whyChooseUsDesc: "Мы предоставляем исключительные впечатления от путешествий с вниманием к каждой детали",
      trustedService: "Надежный сервис",
      trustedServiceDesc: "15+ лет опыта с тысячами довольных путешественников по всему миру",
      bestPrices: "Лучшие цены",
      bestPricesDesc: "Конкурентоспособные цены без скрытых платежей и гибкие варианты оплаты",
      support24: "Поддержка 24/7",
      support24Desc: "Круглосуточная помощь на протяжении всего вашего путешествия",
      expertGuides: "Опытные гиды",
      expertGuidesDesc: "Профессиональные местные гиды, которые знают каждую скрытую жемчужину",
      startJourney: "Начните свое путешествие сегодня!",
      startJourneyDesc: "Не ждите идеального момента. Идеальный момент - сейчас. Забронируйте отпуск своей мечты и создайте воспоминания на всю жизнь.",
      browseAllTours: "Посмотреть все туры",
      reviews: "отзывов",
      from: "от"
    },
    destinations: {
      title: "Исследуйте направления",
      subtitle: "Откройте для себя самые невероятные места мира и создайте незабываемые воспоминания с нашими тщательно продуманными путешествиями",
      filters: "Фильтры:",
      allRegions: "Все регионы",
      allPrices: "Все цены",
      destinationsFound: "направлений найдено",
      topHighlights: "Главные достопримечательности:",
      viewDetails: "Подробнее",
      cantFind: "Не можете найти направление своей мечты?",
      cantFindDesc: "Свяжитесь с нами, и мы создадим индивидуальный тур-пакет специально для вас",
      getCustomQuote: "Получить индивидуальное предложение",
      duration: "Продолжительность",
      perPerson: "за человека"
    },
    tours: {
      title: "Удивительные туры",
      subtitle: "Откройте для себя наши тщательно разработанные турпакеты, созданные для того, чтобы дать вам лучший опыт путешествий",
      featured: "Рекомендуемые туры",
      duration: "Продолжительность",
      from: "от",
      bookTour: "Забронировать тур",
      whatsIncluded: "Что включено",
      itinerary: "Маршрут",
      reviews: "отзывов",
      highlights: "Особенности тура"
    },
    about: {
      title: "О Wanderlust",
      subtitle: "Мы - увлеченные эксперты по путешествиям, посвятившие себя созданию необыкновенных путешествий, которые вдохновляют, преображают и соединяют вас с самыми удивительными местами мира.",
      ourStory: "Наша история",
      ourStoryDesc1: "Основанная в 2010 году, Wanderlust родилась из простого убеждения: путешествия имеют силу преображать жизни. Наши основатели, опытные путешественники, заметили пробел на рынке для по-настоящему персонализированных, высококачественных путешествий, которые выходят за рамки типичного туристического пути.",
      ourStoryDesc2: "Сегодня мы выросли в глобально признанную туристическую компанию, обслужив более 50 000 довольных клиентов на 6 континентах. Наша команда экспертов по путешествиям, местных гидов и культурных послов неустанно работает над созданием незабываемых путешествий, которые создают воспоминания на всю жизнь.",
      yearsExperience: "Лет опыта",
      happyTravelers: "Довольных путешественников",
      destinations: "Направлений",
      ourValues: "Наши основные ценности",
      ourValuesDesc: "Эти принципы направляют все, что мы делаем, и формируют каждое путешествие, которое мы создаем",
      passionCare: "Страсть и забота",
      passionCareDesc: "Мы относимся к каждому путешественнику как к семье, глубоко заботясь об их опыте и превосходя ожидания.",
      trustSafety: "Доверие и безопасность",
      trustSafetyDesc: "Ваша безопасность и спокойствие - наши главные приоритеты. Мы поддерживаем самые высокие стандарты безопасности и надежности во всех наших услугах.",
      excellence: "Превосходство и инновации",
      excellenceDesc: "Мы постоянно внедряем инновации и улучшаем наши услуги, устанавливая новые стандарты для роскошных путешествий и клиентского опыта.",
      leadership: "Познакомьтесь с нашим руководством",
      leadershipDesc: "Наша опытная команда руководителей объединяет десятилетия экспертизы туристической индустрии и страсть к созданию исключительных впечатлений",
      whyChoose: "Почему выбрать Wanderlust?",
      awardWinning: "Награжденный сервис",
      awardWinningDesc: "Признан во всем мире за исключительное качество обслуживания и удовлетворенность клиентов",
      expertTeam: "Экспертная команда",
      expertTeamDesc: "Профессиональные туристические консультанты и местные гиды с глубоким знанием направлений",
      personalized: "Персонализированный подход",
      personalizedDesc: "Каждое путешествие адаптировано к вашим уникальным предпочтениям и стилю путешествий",
      peaceOfMind: "Полное спокойствие",
      peaceOfMindDesc: "Комплексное страхование, круглосуточная поддержка и экстренная помощь по всему миру",
      readyAdventure: "Готовы начать свое приключение?",
      readyAdventureDesc: "Присоединяйтесь к тысячам довольных путешественников, которые открыли для себя мир с Wanderlust. Позвольте нам создать ваше идеальное путешествие сегодня.",
      contactUs: "Связаться с нами",
      viewDestinations: "Посмотреть направления"
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Готовы спланировать отпуск своей мечты? Наши эксперты по путешествиям здесь, чтобы помочь вам создать незабываемые впечатления",
      sendMessage: "Отправьте нам сообщение",
      sendMessageDesc: "У вас есть вопросы, особые пожелания или нужен индивидуальный план путешествия? Свяжитесь с нашей командой, и мы ответим в течение 24 часов!",
      firstName: "Имя",
      lastName: "Фамилия",
      emailAddress: "Адрес электронной почты",
      phoneNumber: "Номер телефона",
      subject: "Тема",
      yourMessage: "Ваше сообщение",
      maxChars: "Максимум 500 символов",
      messageSent: "Сообщение отправлено ✓",
      messageSuccess: "Спасибо! Ваше сообщение успешно отправлено. Мы свяжемся с вами в течение 24 часов.",
      officeInfo: "Информация об офисе",
      address: "Адрес",
      phone: "Телефон",
      email: "Электронная почта",
      businessHours: "Рабочие часы",
      quickContact: "Быстрая связь",
      quickContactDesc: "Нужна немедленная помощь? Позвоните нам сейчас или свяжитесь с нами в WhatsApp для мгновенной поддержки",
      callNow: "Позвонить сейчас",
      whatsapp: "WhatsApp",
      emailUs: "Написать нам",
      ourLocation: "Наше местоположение",
      faq: "Часто задаваемые вопросы",
      faqDesc: "Найдите ответы на наиболее распространенные вопросы о наших туристических услугах",
      needHelp: "Нужна помощь?",
      chatInstantly: "Мгновенный чат с нами"
    },
    footer: {
      description: "Откройте для себя самые невероятные места мира с нашими тщательно продуманными путешествиями.",
      services: "Услуги",
      copyright: "© 2024 Wanderlust. Все права защищены."
    },
    common: {
      loading: "Загрузка...",
      error: "Ошибка",
      success: "Успех",
      cancel: "Отмена",
      confirm: "Подтвердить",
      save: "Сохранить",
      edit: "Редактировать",
      delete: "Удалить",
      back: "Назад",
      next: "Далее",
      previous: "Предыдущий",
      close: "Закрыть"
    }
  }
};