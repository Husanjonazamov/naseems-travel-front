'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../lib/useTranslation';
import Header from '../components/Header';
import CategorySelect from './category';


export default function Home() {
  const { t, currentLang, changeLanguage } = useTranslation();
  const [selectedTour, setSelectedTour] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");


  const tours = [
    {
      id: 1,
      name: {
        en: 'Maldives Paradise',
        uz: "Maldivlar jannati",
        ru: 'Райские Мальдивы'
      },
      location: {
        en: 'Maldives',
        uz: 'Maldivlar', 
        ru: 'Мальдивы'
      },
      price: 2899,
      duration: {
        en: '8 Days',
        uz: '8 kun',
        ru: '8 дней'
      },
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Maldives%20overwater%20bungalows%20with%20crystal%20clear%20turquoise%20waters%2C%20white%20sand%20beach%2C%20tropical%20paradise%2C%20luxury%20resort%2C%20simple%20clean%20background&width=400&height=300&seq=tour_maldives&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Luxury%20Maldives%20overwater%20villa%20with%20glass%20floor%2C%20private%20deck%2C%20crystal%20clear%20water%2C%20tropical%20paradise&width=350&height=250&seq=maldives_gallery1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Maldives%20underwater%20coral%20reef%20diving%20with%20colorful%20marine%20life%2C%20tropical%20fish%2C%20clear%20water&width=350&height=250&seq=maldives_gallery2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Romantic%20Maldives%20beach%20dinner%20with%20candles%2C%20white%20sand%2C%20palm%20trees%2C%20sunset%20dining&width=350&height=250&seq=maldives_gallery3&orientation=landscape'
      ],
      description: {
        en: 'Experience the ultimate tropical paradise with overwater villas, crystal-clear waters, and world-class diving in the Maldives.',
        uz: "Maldivlarda suv ustidagi villalar, tiniq suvlar va jahon darajasidagi sho'ng'in bilan tropik jannatning eng yaxshi tajribasini boshdan kechiring.",
        ru: 'Испытайте незабываемый тропический рай с виллами на воде, кристально чистыми водами и дайвингом мирового класса на Мальдивах.'
      },
      highlights: {
        en: ['Overwater Villa Stay', 'Private Beach Access', 'Snorkeling & Diving', 'Spa Treatments'],
        uz: ["Suv ustidagi villa", "Shaxsiy plyaj", "Snorkeling va sho'ng'in", "Spa davolash"],
        ru: ['Вилла на воде', 'Частный пляж', 'Снорклинг и дайвинг', 'Спа-процедуры']
      }
    },
    {
      id: 2,
      name: {
        en: 'Bali Adventure',
        uz: "Bali sarguzashti",
        ru: 'Приключения на Бали'
      },
      location: {
        en: 'Bali, Indonesia',
        uz: 'Bali, Indoneziya',
        ru: 'Бали, Индонезия'
      },
      price: 1299,
      duration: {
        en: '6 Days',
        uz: '6 kun',
        ru: '6 дней'
      },
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Bali%20rice%20terraces%20with%20green%20landscape%2C%20traditional%20temples%2C%20tropical%20nature%2C%20cultural%20heritage&width=400&height=300&seq=tour_bali&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Ancient%20Balinese%20temple%20with%20traditional%20architecture%2C%20intricate%20stone%20carvings%2C%20spiritual%20atmosphere&width=350&height=250&seq=bali_gallery1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Beautiful%20Bali%20beach%20club%20with%20infinity%20pool%2C%20ocean%20views%2C%20luxury%20setting%2C%20tropical%20paradise&width=350&height=250&seq=bali_gallery2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Traditional%20Balinese%20spa%20treatment%20with%20natural%20ingredients%2C%20tropical%20setting%2C%20wellness%20retreat&width=350&height=250&seq=bali_gallery3&orientation=landscape'
      ],
      description: {
        en: 'Discover the cultural richness of Bali with ancient temples, lush rice terraces, and beautiful beaches.',
        uz: "Balining qadimiy ma'badlari, yam-yashil guruch terasalari va chiroyli plyajlari bilan madaniy boyligini kashf eting.",
        ru: 'Откройте для себя культурное богатство Бали с древними храмами, пышными рисовыми террасами и красивыми пляжами.'
      },
      highlights: {
        en: ['Temple Tours', 'Rice Terrace Hiking', 'Beach Club Access', 'Cultural Shows'],
        uz: ["Ma'bad turlari", "Guruch terasasi sayr", "Plyaj klub", "Madaniy namoyishlar"],
        ru: ['Экскурсии по храмам', 'Походы по рисовым террасам', 'Пляжные клубы', 'Культурные шоу']
      }
    },
    {
      id: 3,
      name: {
        en: 'Iceland Experience',
        uz: "Islandiya tajribasi",
        ru: 'Опыт Исландии'
      },
      location: {
        en: 'Iceland',
        uz: 'Islandiya',
        ru: 'Исландия'
      },
      price: 2199,
      duration: {
        en: '7 Days',
        uz: '7 kun',
        ru: '7 дней'
      },
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Iceland%20Northern%20Lights%20over%20winter%20landscape%20with%20mountains%20and%20glaciers%2C%20natural%20phenomenon&width=400&height=300&seq=tour_iceland&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Iceland%20Blue%20Lagoon%20geothermal%20spa%20with%20milky%20blue%20water%2C%20steam%2C%20natural%20hot%20springs&width=350&height=250&seq=iceland_gallery1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Iceland%20waterfall%20Gullfoss%20with%20powerful%20water%20cascade%2C%20rainbow%2C%20dramatic%20landscape&width=350&height=250&seq=iceland_gallery2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Iceland%20ice%20cave%20with%20blue%20glacier%20formations%2C%20natural%20ice%20sculptures%2C%20magical%20atmosphere&width=350&height=250&seq=iceland_gallery3&orientation=landscape'
      ],
      description: {
        en: 'Witness the magical Northern Lights and explore glaciers, geysers, and dramatic landscapes in Iceland.',
        uz: "Islandiyada sehrli Shimoliy chiroqlarni ko'ring va muzliklar, geyzerlar va ajoyib manzaralarni o'rganing.",
        ru: 'Станьте свидетелями волшебного северного сияния и исследуйте ледники, гейзеры и драматические пейзажи Исландии.'
      },
      highlights: {
        en: ['Northern Lights', 'Blue Lagoon Spa', 'Glacier Tours', 'Geysers'],
        uz: ["Shimoliy chiroqlar", "Blue Lagoon spa", "Muzlik turlari", "Geyzerlar"],
        ru: ['Северное сияние', 'Спа Голубая лагуна', 'Туры по ледникам', 'Гейзеры']
      }
    },
    {
      id: 4,
      name: {
        en: 'Japan Discovery',
        uz: "Yaponiya kashfiyoti",
        ru: 'Открытие Японии'
      },
      location: {
        en: 'Tokyo & Kyoto',
        uz: 'Tokio va Kioto',
        ru: 'Токио и Киото'
      },
      price: 2799,
      duration: {
        en: '9 Days',
        uz: '9 kun',
        ru: '9 дней'
      },
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Japan%20cherry%20blossom%20sakura%20season%20with%20traditional%20temples%2C%20Mount%20Fuji%2C%20pink%20flowers%2C%20cultural%20heritage&width=400&height=300&seq=tour_japan&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Traditional%20Japanese%20temple%20with%20cherry%20blossoms%2C%20pagoda%20architecture%2C%20peaceful%20garden%20setting&width=350&height=250&seq=japan_gallery1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Mount%20Fuji%20with%20cherry%20blossoms%20in%20foreground%2C%20iconic%20Japanese%20landscape%2C%20spring%20season&width=350&height=250&seq=japan_gallery2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Japanese%20tea%20ceremony%20with%20traditional%20utensils%2C%20tatami%20mats%2C%20cultural%20experience&width=350&height=250&seq=japan_gallery3&orientation=landscape'
      ],
      description: {
        en: 'Immerse yourself in Japanese culture with cherry blossoms, traditional temples, and modern city experiences.',
        uz: "Olcha gullari, an'anaviy ma'badlar va zamonaviy shahar tajribalari bilan Yaponiya madaniyatiga sho'ng'ing.",
        ru: 'Погрузитесь в японскую культуру с цветением сакуры, традиционными храмами и современным городским опытом.'
      },
      highlights: {
        en: ['Cherry Blossom Season', 'Traditional Temples', 'Mount Fuji', 'Tea Ceremony'],
        uz: ["Olcha gullash fasli", "An'anaviy ma'badlar", "Fuji tog'i", "Choy marosimi"],
        ru: ['Сезон сакуры', 'Традиционные храмы', 'Гора Фудзи', 'Чайная церемония']
      }
    },
    {
      id: 5,
      name: {
        en: 'Dubai Luxury',
        uz: "Dubay hashamat",
        ru: 'Роскошь Дубая'
      },
      location: {
        en: 'Dubai, UAE',
        uz: 'Dubay, BAA',
        ru: 'Дубай, ОАЭ'
      },
      price: 1899,
      duration: {
        en: '5 Days',
        uz: '5 kun',
        ru: '5 дней'
      },
      rating: 4.7,
      image: 'https://readdy.ai/api/search-image?query=Modern%20Dubai%20skyline%20with%20Burj%20Khalifa%2C%20luxury%20shopping%20malls%2C%20golden%20beaches%2C%20futuristic%20architecture&width=400&height=300&seq=tour_dubai&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Dubai%20Burj%20Khalifa%20at%20sunset%20with%20city%20skyline%2C%20modern%20architecture%2C%20golden%20lighting&width=350&height=250&seq=dubai_gallery1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Dubai%20desert%20safari%20with%20sand%20dunes%2C%20camels%2C%20traditional%20Bedouin%20experience&width=350&height=250&seq=dubai_gallery2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Dubai%20luxury%20shopping%20mall%20with%20modern%20design%2C%20high-end%20stores%2C%20architectural%20beauty&width=350&height=250&seq=dubai_gallery3&orientation=landscape'
      ],
      description: {
        en: 'Experience luxury and modern marvels in Dubai with skyscrapers, desert adventures, and world-class shopping.',
        uz: "Dubaida osmono'par binolar, cho'l sarguzashtlari va jahon darajasidagi xaridlar bilan hashamat va zamonaviy mo'jizalarni boshdan kechiring.",
        ru: 'Испытайте роскошь и современные чудеса Дубая с небоскребами, пустынными приключениями и мировым шопингом.'
      },
      highlights: {
        en: ['Burj Khalifa Visit', 'Desert Safari', 'Luxury Shopping', 'Beach Resorts'],
        uz: ["Burj Khalifa tashrifi", "Cho'l safari", "Hashamatli xarid", "Plyaj kurortlari"],
        ru: ['Посещение Бурдж-Халифа', 'Сафари в пустыне', 'Роскошный шопинг', 'Пляжные курорты']
      }
    },
    {
      id: 6,
      name: {
        en: 'Switzerland Alps',
        uz: "Shveytsariya Alplari",
        ru: 'Швейцарские Альпы'
      },
      location: {
        en: 'Switzerland',
        uz: 'Shveytsariya',
        ru: 'Швейцария'
      },
      price: 3299,
      duration: {
        en: '8 Days',
        uz: '8 kun',
        ru: '8 дней'
      },
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Magnificent%20Swiss%20Alps%20with%20snow-capped%20mountains%2C%20pristine%20lakes%2C%20alpine%20villages%2C%20green%20meadows&width=400&height=300&seq=tour_switzerland&orientation=landscape',
      gallery: [
        'https://readdy.ai/api/search-image?query=Swiss%20Alpine%20train%20journey%20through%20mountains%2C%20scenic%20railway%2C%20beautiful%20landscapes&width=350&height=250&seq=switzerland_gallery1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Swiss%20mountain%20lodge%20with%20traditional%20architecture%2C%20cozy%20interior%2C%20alpine%20setting&width=350&height=250&seq=switzerland_gallery2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Swiss%20alpine%20lake%20with%20crystal%20clear%20water%2C%20mountain%20reflections%2C%20pristine%20nature&width=350&height=250&seq=switzerland_gallery3&orientation=landscape'
      ],
      description: {
        en: 'Discover the breathtaking beauty of Swiss Alps with luxury mountain resorts, scenic train rides, and pristine nature.',
        uz: "Hashamatli tog' kurortlari, manzarali poyezd sayohatlari va toza tabiat bilan Shveytsariya Alplarining hayratlanarli go'zalligini kashf eting.",
        ru: 'Откройте для себя захватывающую красоту Швейцарских Альп с роскошными горными курортами, живописными поездками на поезде и нетронутой природой.'
      },
      highlights: {
        en: ['Mountain Resorts', 'Scenic Train Rides', 'Alpine Lakes', 'Luxury Spas'],
        uz: ["Tog' kurortlari", "Manzarali poyezd", "Alp ko'llari", "Hashamatli spa"],
        ru: ['Горные курорты', 'Живописные поезда', 'Альпийские озера', 'Роскошные спа']
      }
    }
  ];

  const showTourDetails = (tour) => {
    setSelectedTour(tour);
  };

  const showBooking = (tour) => {
    setSelectedTour(tour);
    setShowBookingForm(true);
  };

  const closeTourDetails = () => {
    setSelectedTour(null);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/maldives.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t.home.heroTitle} <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.home.heroSubtitle}
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t.home.heroDescription}
          </p>

          <div className='bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center'>
            <input 
            type="text"
            placeholder='where to?'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className='text-zinc-500 px-4 py-2 rounded-md border w-full sm:w-auto'
            />

            <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='text-zinc-500 px-4 py-2 rounded-md border w-full sm:w-auto'
            />

            <CategorySelect />
          <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md hover:shadow-lg transition-all'>
            Search
          </button>
          </div>


          {/* search  */}
          {/* <div className='flex flex-col sm:flex-row items-center justify-center gap-3 mb-6'>
            <input 
            type="text" 
            placeholder="qidirish"
            className='px-4 py-2 w-full sm:w-72 rounded-md text-black'
            />
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-md font-semibold hover:shadow-lg transition-all'>
              Qidirish
            </button>
          </div> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap transform hover:scale-105 shadow-xl"
            >
              {t.home.browseAllTours}
            </button>
            <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap transform hover:scale-105">
              {t.nav.contact}
            </Link>
          </div> */}
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.tours.featured}</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">{t.tours.subtitle}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tours.map(tour => (
              <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer transform hover:-translate-y-2">
                <div 
                  className="relative overflow-hidden"
                  onClick={() => showTourDetails(tour)}
                >
                  <img
                    src={tour.image}
                    alt={tour.name[currentLang as keyof typeof tour.name]}
                    className="w-full h-56 sm:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {tour.duration[currentLang as keyof typeof tour.duration]}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg">
                    <i className="ri-star-fill text-yellow-500 mr-1 text-sm"></i>
                    <span className="font-bold text-gray-900 text-sm">{tour.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                      {tour.name[currentLang as keyof typeof tour.name]}
                    </h3>
                    <p className="text-gray-600 text-sm flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>
                      {tour.location[currentLang as keyof typeof tour.location]}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${tour.price}
                    </div>
                    <span className="text-gray-500 text-sm">{t.destinations.perPerson}</span>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => showTourDetails(tour)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-xl transition-all cursor-pointer text-center whitespace-nowrap text-sm transform hover:scale-105"
                    >
                      {currentLang === 'en' ? 'View Details' : currentLang === 'uz' ? 'Batafsil' : 'Подробнее'}
                    </button>
                    <button 
                      onClick={() => showBooking(tour)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all cursor-pointer text-center whitespace-nowrap text-sm transform hover:scale-105 shadow-lg"
                    >
                      {currentLang === 'en' ? 'Book Now' : currentLang === 'uz' ? 'Bron qilish' : 'Забронировать'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details Modal */}
      {selectedTour && !showBookingForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedTour.image}
                alt={selectedTour.name[currentLang as keyof typeof selectedTour.name]}
                className="w-full h-64 lg:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeTourDetails}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {selectedTour.name[currentLang as keyof typeof selectedTour.name]}
                </h2>
                <p className="text-gray-600 flex items-center">
                  <i className="ri-map-pin-line mr-1"></i>
                  {selectedTour.location[currentLang as keyof typeof selectedTour.location]}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    {currentLang === 'en' ? 'Description' : currentLang === 'uz' ? 'Tavsif' : 'Описание'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedTour.description[currentLang as keyof typeof selectedTour.description]}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">
                    {currentLang === 'en' ? 'Highlights' : currentLang === 'uz' ? 'Asosiy xususiyatlar' : 'Особенности'}
                  </h3>
                  <ul className="space-y-3">
                    {selectedTour.highlights[currentLang as keyof typeof selectedTour.highlights].map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-3 text-lg"></i>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {currentLang === 'en' ? 'Gallery' : currentLang === 'uz' ? 'Galereya' : 'Галерея'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedTour.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedTour.name[currentLang as keyof typeof selectedTour.name]} ${index + 1}`}
                      className="w-full h-32 lg:h-40 object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-200 gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${selectedTour.price}
                  </div>
                  <span className="text-gray-500">{t.destinations.perPerson}</span>
                </div>
                <button
                  onClick={() => showBooking(selectedTour)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full transition-all cursor-pointer whitespace-nowrap transform hover:scale-105 shadow-xl"
                >
                  {currentLang === 'en' ? 'Book This Tour' : currentLang === 'uz' ? 'Bu turni bron qilish' : 'Забронировать тур'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && selectedTour && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                {currentLang === 'en' ? 'Book Your Tour' : currentLang === 'uz' ? 'Tur buyurtma qilish' : 'Забронировать тур'}
              </h3>
              <button
                onClick={closeBookingForm}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <h4 className="font-bold text-gray-900">{selectedTour.name[currentLang as keyof typeof selectedTour.name]}</h4>
              <p className="text-sm text-gray-600">${selectedTour.price} · {selectedTour.duration[currentLang as keyof typeof selectedTour.duration]}</p>
            </div>

            <form id="tour-booking-form" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {currentLang === 'en' ? 'Full Name' : currentLang === 'uz' ? 'Toliq ism' : 'Полное имя'}
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={currentLang === 'en' ? 'Enter your full name' : currentLang === 'uz' ? 'Toliq ismingizni kiriting' : 'Введите полное имя'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {currentLang === 'en' ? 'Phone Number' : currentLang === 'uz' ? 'Telefon raqam' : 'Номер телефона'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {currentLang === 'en' ? 'Email Address' : currentLang === 'uz' ? 'Email manzil' : 'Email адрес'}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {currentLang === 'en' ? 'Number of People' : currentLang === 'uz' ? 'Odamlar soni' : 'Количество человек'}
                </label>
                <div className="relative">
                  <select
                    name="people_count"
                    className="w-full pr-8 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="1">1 {currentLang === 'en' ? 'Person' : currentLang === 'uz' ? 'kishi' : 'человек'}</option>
                    <option value="2">2 {currentLang === 'en' ? 'People' : currentLang === 'uz' ? 'kishi' : 'человека'}</option>
                    <option value="3">3 {currentLang === 'en' ? 'People' : currentLang === 'uz' ? 'kishi' : 'человека'}</option>
                    <option value="4">4 {currentLang === 'en' ? 'People' : currentLang === 'uz' ? 'kishi' : 'человека'}</option>
                    <option value="5+">5+ {currentLang === 'en' ? 'People' : currentLang === 'uz' ? 'kishi' : 'человек'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {currentLang === 'en' ? 'Travel Date' : currentLang === 'uz' ? 'Sayohat sanasi' : 'Дата путешествия'}
                </label>
                <input
                  type="date"
                  name="travel_date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {currentLang === 'en' ? 'Additional Message' : currentLang === 'uz' ? 'Qoshimcha xabar' : 'Дополнительное сообщение'}
                </label>
                <textarea
                  name="message"
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                  placeholder={currentLang === 'en' ? 'Any special requirements...' : currentLang === 'uz' ? 'Maxsus talablar...' : 'Особые требования...'}
                ></textarea>
              </div>

              <input type="hidden" name="tour_name" value={selectedTour.name[currentLang as keyof typeof selectedTour.name]} />
              <input type="hidden" name="tour_price" value={selectedTour.price} />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all whitespace-nowrap transform hover:scale-105 shadow-xl"
              >
                {currentLang === 'en' ? 'Submit Booking Request' : currentLang === 'uz' ? 'Bron so\'rovini yuborish' : 'Отправить запрос на бронирование'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t.about.title}</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <i className="ri-flight-takeoff-line text-white"></i>
                </div>
                <h3 className="font-['Pacifico'] text-xl text-white">Wanderlust</h3>
              </div>
              <p className="text-gray-400 text-sm">{t.footer.description}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.nav.about}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white cursor-pointer transition-colors">{t.nav.about}</Link></li>
                <li><Link href="/contact" className="hover:text-white cursor-pointer transition-colors">{t.nav.contact}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t.nav.contact}</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center">
                  <i className="ri-phone-line mr-2"></i>
                  +998 90 123 45 67
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line mr-2"></i>
                  info@wanderlust.uz
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
