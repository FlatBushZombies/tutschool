"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import ValuesSectionCard from "@/components/ValuesSectionCard"
import { ScrollProgress, ScrollSpy } from "@/components/animations/scroll-animations"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  MessageSquare,
  Navigation,
  Send,
  ChevronRight,
  User,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Clock,
  ChevronLeft,
  Landmark,
  Info,
  BookOpen,
  MessageCircle,
  Award,
  FileText,
} from "lucide-react"

export default function HomePage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [sliderDirection, setSliderDirection] = useState<"next" | "prev" | null>(null)
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const heroImages = [
    "/assets/slider/Slider-image-1.webp",
    "/assets/slider/Slider-Image-2.webp",
    "/assets/slider/Slider-image-3.webp",
    "/assets/slider/Slider-image-4.webp",
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setSliderDirection("next")
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
      }, 5000)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, heroImages.length])

  const goToNextSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      setIsAutoPlaying(false)
    }
    setSliderDirection("next")
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  const goToPrevSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      setIsAutoPlaying(false)
    }
    setSliderDirection("prev")
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      setIsAutoPlaying(false)
    }
    setSliderDirection(index > currentImageIndex ? "next" : "prev")
    setCurrentImageIndex(index)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      promo: "Запишитесь на пробный урок до 30 мая и получите скидку 20% на первый месяц обучения!",
      nav: {
        about: "О ШКОЛЕ",
        aboutDropdown: [
          { title: "НАШИ ЦЕННОСТИ", href: "/our-values" },
          { title: "РАСПИСАНИЕ И ЦЕНЫ", href: "/schedule" },
          { title: "ПРЕПОДАВАТЕЛИ", href: "/teachers" },
        ],
        courses: "КУРСЫ АНГЛИЙСКОГО",
        coursesDropdown: [
          { title: "ДОШКОЛЬНИКИ", href: "/preschoolers" },
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/aged-7-9" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/aged-10-12" },
          { title: "ПОДРОСТКИ", href: "/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/adults" },
        ],
        chinese: "КУРСЫ КИТАЙСКОГО",
        chineseDropdown: [
          { title: "ДОШКОЛЬНИКИ", href: "/chinese/preschoolers" },
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/chinese/aged-7-9" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/chinese/aged-10-12" },
          { title: "ПОДРОСТКИ", href: "/chinese/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/chinese/adults" },
        ],
        club: "РАЗГОВОРНЫЙ КЛУБ",
        clubDropdown: [
          { title: "ПОДРОСТКИ", href: "/conversation-club/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/conversation-club/adults" },
        ],
        masterclass: "МАСТЕР-КЛАССЫ",
        masterclassDropdown: [
          { title: "КИТАЙСКАЯ КАЛЛИГРАФИЯ ", href: "/chinese-calligraphy" },
          { title: "ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ", href: "/creative-workshops" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "Языковая школа английского и катайского языка",
        subtitle: "Занятия в мини-группах с квалифицированными преподавателями в Химки Новогорск Куркино",
        cta: "Записаться на пробный урок",
      },
      about: {
        title: "О НАС",
        description:
          "Мы языковая студия, английский и китайский языки для детей и взрослых. Нашим клиентам нравится качество преподавания и дружеская атмосфера. У нас вы не только найдете компанию для изучения языков, но и обретете новых друзей.",
        cta: "Подробнее",
      },
      welcome: {
        title: "ДОБРО ПОЖАЛОВАТЬ В TUT SCHOOL",
        description: "Мы создаем вдохновляющую среду, где каждый студент может раскрыть свой потенциал.",
        points: [
          "Современные методики преподавания",
          "Комфортные классы и дружелюбная атмосфера",
          "Регулярные культурные мероприятия",
        ],
        cta: "Узнать больше о нашей школе",
      },
      courses: {
        title: "ПОПУЛЯРНЫЕ КУРСЫ",
        viewAll: "Смотреть все",
        items: [
          {
            title: "Английский для дошкольников",
            cta: "Читать далее",
          },
          {
            title: "Китайский для дошкольников",
            cta: "Читать далее",
          },
          {
            title: "Творчество",
            cta: "Читать далее",
          },
        ],
      },
      news: {
        title: "НОВОСТИ И СОБЫТИЯ",
        viewAll: "Смотреть все",
        items: [
          {
            date: "15 мая 2024",
            title: "Летний интенсив по английскому",
            description: "Запускаем интенсивный курс английского языка для школьников на летних каникулах.",
            cta: "Читать далее",
          },
          {
            date: "10 мая 2024",
            title: "Мастер-класс по китайской каллиграфии",
            description: "Приглашаем на творческий мастер-класс по традиционной китайской каллиграфии.",
            cta: "Читать далее",
          },
          {
            date: "5 мая 2024",
            title: "Новые группы для дошкольников",
            description: "Открываем набор в новые группы английского языка для детей 4-6 лет.",
            cta: "Читать далее",
          },
        ],
      },
      testimonials: {
        title: "ОТЗЫВЫ НАШИХ УЧЕНИКОВ",
        reviews: "Посмотреть все отзывы",
        items: [
          {
            name: "Юлия Б.",
            text: "Дочь занималась в мини-группе у Юлии. Это был наш первый опыт изучения английского. Тогда ей было 4 года, и это был мощный старт. Занимались 2 года и за это время ребенок набрал приличную базу, начала говорить на языке. Затем мы переехали, но сейчас с удовольствием оставляем отзыв. Дочь учится в школе с углубленным изучением английского и с самого начала не испытывает никаких проблем. Спасибо!",
          },
          {
            name: "Мария Стрельбицкая.",
            text: "Занималась в TUT School в этом году, чтобы подготовиться к ЕГЭ по английскому. Было много практики с преподавателем и разбора лексики и грамматики. Я занималась онлайн, но иногда приходила на занятие вживую. Очень уютный кабинет для занятий, можно было даже чай себе сделать) В итоге, я сдала английский на 96 баллов! Это отличный результат, спасибо Юлии Викторовне, преподавателю TUT School. Было очень продуктивно и комфортно заниматься у вас!",
          },
          {
            name: "Manizha F.",
            text: "Замечательная школа по изучению английского языка! Сын занимается с Юлией с сентября месяца. Начинали с нуля. За это время ребенок уже читает, пишет, постоянно пополняет свой словарныц запас. Может составлять простейшие предложения и вопросы. А главное, на занятия ходит с большим удовольствием. До этого посещали разные курсы в Куркино (только песни пляски под англ детские песни). Никакого результата не было. А с Юлей все четко, структурировано, по делу. Оченb рекомендую данного педагога!",
          },
        ],
      },
      contact: {
        title: "СВЯЗАТЬСЯ С НАМИ",
        phone: "Позвонить",
        directions: "Как доехать",
        write: "Написать",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
      },
      trial: {
        title: "ЗАПИСАТЬСЯ НА БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК-ДИАГНОСТИКУ",
        description: "Оставьте заявку, и мы свяжемся с вами для записи на бесплатное пробное занятие",
        cta: "Записаться",
      },
      footer: {
        quickLinks: "Быстрые ссылки",
        links: ["О школе", "Наши курсы", "Расписание", "Преподаватели", "Цены", "Блог", "Контакты"],
        contacts: "Контакты",
        workingHours: {
          title: "Режим работы",
          weekdays: "Понедельник - Пятница: 9:00 - 21:00",
          saturday: "Суббота: 10:00 - 18:00",
          sunday: "Воскресенье, выходной",
        },
        socialMedia: "Социальные сети",
        copyright: "© 2024 Tut School. Все права защищены.",
      },
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language School",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      promo: "Sign up for a trial lesson before May 30 and get a 20% discount on your first month of study!",
      nav: {
        about: "ABOUT THE SCHOOL",
        aboutDropdown: [
          { title: "OUR VALUES", href: "/our-values" },
          { title: "SCHEDULE AND PRICES", href: "/schedule" },
          { title: "TEACHERS", href: "/teachers" },
        ],
        courses: "ENGLISH COURSES",
        coursesDropdown: [
          { title: "PRESCHOOLERS", href: "/preschoolers" },
          { title: "CHILDREN AGED 7-9", href: "/aged-7-9" },
          { title: "CHILDREN AGED 10-12", href: "/aged-10-12" },
          { title: "TEENAGERS", href: "/teenagers" },
          { title: "ADULTS", href: "/adults" },
        ],
        chinese: "CHINESE LANGUAGE COURSES",
        chineseDropdown: [
          { title: "PRESCHOOLERS", href: "/chinese/preschoolers" },
          { title: "CHILDREN AGED 7-9", href: "/chinese/aged-7-9" },
          { title: "CHILDREN AGED 10-12", href: "/chinese/aged-10-12" },
          { title: "TEENAGERS", href: "/chinese/teenagers" },
          { title: "ADULTS", href: "/chinese/adults" },
        ],
        club: "CONVERSATION CLUB",
        clubDropdown: [
          { title: "TEENAGERS", href: "/conversation-club/teenagers" },
          { title: "ADULTS", href: "/conversation-club/adults" },
        ],
        masterclass: "MASTERCLASS",
        masterclassDropdown: [
          { title: "CHINESE CALLIGRAPHY", href: "/chinese-calligraphy" },
          { title: "CREATIVE WORKSHOP", href: "/creative-workshop" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "Language school of English and Chinese",
        subtitle: "Lessons in small groups with qualified teachers in Khimki Novogorsk Kurkino",
        cta: "Book a trial lesson",
      },
      about: {
        title: "ABOUT US",
        description:
          "We are a language studio offering English and Chinese languages for children and adults. Our clients appreciate the quality of teaching and friendly atmosphere. With us, you will not only find a company to learn languages but also make new friends.",
        cta: "Learn More",
      },
      welcome: {
        title: "WELCOME TO TUT SCHOOL",
        description: "We create an inspiring environment where every student can reach their potential.",
        points: [
          "Modern teaching methods",
          "Comfortable classrooms and friendly atmosphere",
          "Regular cultural events",
        ],
        cta: "Learn more about our school",
      },
      courses: {
        title: "POPULAR COURSES",
        viewAll: "View all",
        items: [
          {
            title: "English for Preschoolers",
            cta: "Read more",
          },
          {
            title: "Chinese for Preschoolers",
            cta: "Read more",
          },
          {
            title: "Arts",
            cta: "Read more",
          },
        ],
      },
      news: {
        title: "NEWS AND EVENTS",
        viewAll: "View all",
        items: [
          {
            date: "May 15, 2024",
            title: "Summer English Intensive Course",
            description: "We are launching an intensive English course for school students during summer holidays.",
            cta: "Read more",
          },
          {
            date: "May 10, 2024",
            title: "Chinese Calligraphy Workshop",
            description: "Join us for a creative workshop on traditional Chinese calligraphy.",
            cta: "Read more",
          },
          {
            date: "May 5, 2024",
            title: "New Groups for Preschoolers",
            description: "We are opening enrollment for new English language groups for children aged 4-6.",
            cta: "Read more",
          },
        ],
      },
      testimonials: {
        title: "TESTIMONIALS FROM OUR STUDENTS",
        reviews: "Read More Reviews",
        items: [
          {
            name: "Julia B.",
            text: "My daughter studied in a mini-group with Yulia. It was our first experience of learning English. She was 4 years old then, and it was a powerful start. We studied for 2 years and during this time the child gained a decent base, began to speak the language. Then we moved, but now we are happy to leave a review. My daughter studies at a school with in-depth study of English and has not experienced any problems from the very beginning. Thank you!",
          },
          {
            name: "Maria Strelbitskaya.",
            text: "I studied at TUT School this year to prepare for the Unified State Exam in English. There was a lot of practice with the teacher and analysis of vocabulary and grammar. I studied online, but sometimes I came to class in person. A very cozy study room, you could even make yourself some tea) In the end, I passed the English exam with 96 points! This is an excellent result, thanks to Yulia Viktorovna, a teacher at TUT School. It was very productive and comfortable to study with you!",
          },
          {
            name: "Manizha F.",
            text: "A wonderful school for learning English! My son has been studying with Yulia since September. We started from scratch. During this time, the child already reads, writes, and constantly expands his vocabulary. He can make simple sentences and questions. And most importantly, he goes to classes with great pleasure. Before that, we attended different courses in Kurkino (only songs and dances to English children's songs). There was no result. But with Yulia, everything is clear, structured, and to the point. I highly recommend this teacher!",
          },
        ],
      },
      contact: {
        title: "CONTACT US",
        phone: "Call",
        directions: "Directions",
        write: "Write",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
      },
      trial: {
        title: "SIGN UP FOR A TRIAL DIAGNOSTIC LESSON",
        description: "Leave a request and we will contact you to schedule a free trial lesson",
        cta: "Sign up",
      },
      footer: {
        quickLinks: "Quick Links",
        links: ["About the school", "Our courses", "Schedule", "Teachers", "Prices", "Blog", "Contacts"],
        contacts: "Contacts",
        workingHours: {
          title: "Working Hours",
          weekdays: "Monday - Friday: 9:00 AM - 9:00 PM",
          saturday: "Saturday: 10:00 AM - 6:00 PM",
          sunday: "Sunday: closed",
        },
        socialMedia: "Social Media",
        copyright: "© 2024 Tut School. All rights reserved.",
      },
      languageToggle: "Русский",
    },
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const sectionIds = [
    "hero",
    "welcome",
    "featured-courses",
    "values",
    "methodology",
    "success-stories",
    "language-levels",
    "events",
    "faq",
    "cta",
  ]

  return (
    <div className="flex min-h-screen flex-col">

            <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
              
              ym(103804746, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
              });
            `
          }}
        />
      </Head>
    
      {/* Top Bar */}
      <ScrollProgress />
      <ScrollSpy sectionIds={sectionIds} onChange={(id) => setActiveSection(id)} threshold={0.3} />

      <main>
        {/* Hero Section - Original Slider with Premium Styling */}
        <section id="hero" className="relative">
  <div className="relative h-[720px] sm:h-[780px] w-full overflow-hidden rounded-b-[2rem] shadow-2xl">
    {heroImages.map((src, index) => {
      const isActive = index === currentImageIndex;
      const isNext = index === (currentImageIndex + 1) % heroImages.length;

      if (!isActive && !isNext) return null;

      return (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isActive ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${
            sliderDirection === "next" && isActive
              ? "animate-slide-in-right"
              : sliderDirection === "prev" && isActive
              ? "animate-slide-in-left"
              : ""
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={
              language === "ru"
                ? `Слайд ${index + 1} - Tut School языковая студия`
                : `Slide ${index + 1} - Tut School language studio`
            }
            sizes="100vw"
            fill
            className="object-cover transform transition-transform duration-10000 scale-110 hover:scale-115"
            priority={isActive && index === 0}
            loading={isActive ? "eager" : "lazy"}
          />
        </div>
      );
    })}


    {/* Premium Gradient overlay */}
    <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

    {/* Text Content */}
    <div className="absolute inset-0 z-30 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in-up drop-shadow-lg">
          Языковая школа
        </h1>
        <h2 className="mb-2 text-3xl md:text-3xl animate-fade-in-up animation-delay-150">
          Английский и китайский
        </h2>
        <h5 className="mb-2 text-lg md:text-lg animate-fade-in-up animation-delay-150 text-white/90">
          Химки Новогорск Куркино
        </h5>
        <p className="mb-8 text-lg md:text-xl animate-fade-in-up animation-delay-300 text-white/85">
          {t.hero.subtitle}
        </p>
        <Link
          href="/bookings"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3 hover:shadow-xl animate-fade-in-up animation-delay-600 shadow-lg"
        >
          {t.hero.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    {/* Premium Carousel Navigation Arrows */}
    <button
      onClick={goToPrevSlide}
      className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-md p-3 text-white transition-all hover:bg-white/30 hover:scale-110 border border-white/30 shadow-lg"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
    <button
      onClick={goToNextSlide}
      className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-md p-3 text-white transition-all hover:bg-white/30 hover:scale-110 border border-white/30 shadow-lg"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>

    {/* Premium Carousel Navigation Dots */}
    <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
      {heroImages.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2.5 rounded-full transition-all duration-300 shadow-md ${
            index === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-2.5 hover:bg-white/70"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>


        {/* Welcome Section - Premium */}
        <section id="welcome" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
              <h2 className="mb-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                {t.welcome.title}
              </h2>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">{t.welcome.description}</p>
              <ul className="mb-8 space-y-4 text-left">
                {t.welcome.points.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="mt-1 mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <ChevronRight className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-base text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/our-values"
                className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition duration-150 ease-in-out group"
              >
                {t.welcome.cta}
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Courses Section - Premium */}
        <section id="courses" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t.courses.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {language === "ru"
                  ? "Выбирайте из нашего широкого спектра программ, преподаваемых опытными педагогами"
                  : "Choose from our comprehensive programs taught by experienced educators"}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
        {
          title: language === 'ru' ? 'АНГЛИЙСКИЙ ДЛЯ ДЕТЕЙ 7-9 ЛЕТ' : 'ENGLISH FOR CHILDREN 7-9',
          description: language === 'ru' 
            ? 'Игровое обучение через песни, игры и творческие занятия' 
            : 'Play-based learning through songs and creative activities',
          level: language === 'ru' ? 'Все уровни' : 'All Levels',
          students: language === 'ru' ? '80+ студентов' : '80+ students',
          image: '/assets/preschoolers/basic-vocabulary.jpg',
          href: '/aged-7-9'
        },
        {
          title: language === 'ru' ? 'АНГЛИЙСКИЙ ДЛЯ ДЕТЕЙ 10-12 ЛЕТ' : 'ENGLISH FOR CHILDREN 10-12',
          description: language === 'ru' 
            ? 'Игровое обучение через песни, игры и творческие занятия' 
            : 'Play-based learning through songs and creative activities',
          level: language === 'ru' ? 'Все уровни' : 'All Levels',
          students: language === 'ru' ? '80+ студентов' : '80+ students',
          image: '/assets/children/group-work.jpg',
          href: '/aged-10-12'
        },
        {
          title: language === 'ru' ? 'АНГЛИЙСКИЙ ДЛЯ ПОДРОСТКОВ' : 'ENGLISH FOR TEENS',
          description: language === 'ru' 
            ? 'Современные темы и актуальные материалы для подростков' 
            : 'Modern topics tailored for teenagers',
          level: language === 'ru' ? 'Все уровни' : 'All Levels',
          students: language === 'ru' ? '90+ студентов' : '90+ students',
          image: '/assets/teenage/pair-and-groupwork.jpg',
          href: '/teenagers'
        },
             {
          title: language === 'ru' ? 'АНГЛИЙСКИЙ ДЛЯ ВЗРОСЛЫХ' : 'ENGLISH FOR ADULTS',
          description: language === 'ru' 
            ? 'Развивайте уверенность в общении на английском для работы и повседневной жизни' 
            : 'Build confidence in English for work and daily communication',
          level: language === 'ru' ? 'Все уровни' : 'All levels',
          students: language === 'ru' ? '120+ студентов' : '120+ students',
          image: '/assets/gallery/adults.jpg',
          href: '/adults'
        },
         {
          title: language === 'ru' ? 'Английский для дошкольников' : 'ENGLISH FOR PRESCHOOLERS',
          description: language === 'ru' 
            ? 'Развитие языковых навыков через увлекательные проекты' 
            : 'Developing language skills through engaging projects',
          level: language === 'ru' ? 'Все уровни' : 'All Levels',
          students: language === 'ru' ? '150+ студентов' : '150+ students',
          image: '/assets/gallery/kids.jpeg',
          href: '/preschoolers'
        },
        {
          title: language === 'ru' ? 'РАЗГОВОРНЫЙ КЛУБ' : 'CONVERSATION CLUB',
          description: language === 'ru' 
            ? 'Практика разговорного английского в дружеской атмосфере' 
            : 'Practice English in a friendly atmosphere',
          level: language === 'ru' ? 'Все уровни' : 'All levels',
          students: language === 'ru' ? '200+ студентов' : '200+ students',
          image: '/C-Club.jpg',
          href: '/conversation-club/teenagers'
        },
              ].map((course) => (
                <div
                  key={course.title}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>

                    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium">{course.level}</span>
                    </div>

                    <Link
                      href={course.href}
                      className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg"
                    >
                      {language === "ru" ? "Подробнее" : "Read More"}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <ValuesSectionCard language={language} />

        {/* Testimonials Section - Premium */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl md:text-4xl font-bold text-primary">{t.testimonials.title}</h2>
            <div className="mx-auto mb-12 h-1 w-24 bg-primary rounded-full"></div>
            <div className="grid gap-8 md:grid-cols-3">
              {t.testimonials.items.map((item, index) => (
                <div key={index} className="rounded-2xl bg-gray-50 p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-5 text-amber-400 flex gap-1">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                  <p className="mb-6 text-gray-600 leading-relaxed line-clamp-6">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <User className="h-6 w-6" />
                    </div>
                    <span className="font-semibold text-gray-900">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="https://tut-school.clients.site/#rating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {t.testimonials.reviews}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section - Premium */}
        <section id="contact" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl md:text-4xl font-bold text-primary">{t.contact.title}</h2>
            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
              <Link
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                {t.contact.phone}
              </Link>
              <Link
                href="https://yandex.com/maps/10758/himki/?ll=37.374147%2C55.894611&mode=routes&rtext=~55.894611%2C37.374147&rtt=auto&ruri=~&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-white font-medium transition-all hover:bg-blue-600 hover:shadow-lg hover:scale-105"
              >
                <Navigation className="h-5 w-5" />
                {t.contact.directions}
              </Link>
              <Link
                href="mailto:info@tutschool.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-gray-700 px-6 py-3 text-white font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.write}
              </Link>
              <Link
                href="https://t.me/TUTschoolNovogorsk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-sky-500 px-6 py-3 text-white font-medium transition-all hover:bg-sky-600 hover:shadow-lg hover:scale-105"
              >
                <Send className="h-5 w-5" />
                {t.contact.telegram}
              </Link>
              <Link
                href="https://wa.me/+79167349246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-white font-medium transition-all hover:bg-emerald-600 hover:shadow-lg hover:scale-105"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.whatsapp}
              </Link>
            </div>
            <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(t.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors leading-relaxed"
                >
            <div className="mt-10 text-center">
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t.address}
              </p>
            </div>
            </a>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section id="cta" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-3xl bg-primary shadow-2xl">
              <div className="relative">
                <div className="relative px-8 py-20 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl max-w-3xl mx-auto leading-tight">{t.trial.title}</h2>
                  <Link
                    href="/bookings"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-semibold text-primary transition-all hover:bg-gray-100 hover:gap-3 hover:shadow-xl hover:scale-105"
                  >
                    {t.trial.cta}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
       <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/103804746" 
            style={{position: "absolute", left: "-9999px"}} 
            alt="" 
          />
        </div>
      </noscript>
    </div>
  )
}