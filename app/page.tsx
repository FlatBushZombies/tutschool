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

      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-gray-600">{t.workingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={`tel:${t.phone.replace(/\s+/g, "")}`} className="text-gray-600 hover:text-primary">
                {t.phone}
              </a>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${t.email}`} className="text-gray-600 hover:text-primary">
                {t.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-primary" />
              <span className="text-gray-600">{t.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/+79167349246" className="text-green-600 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-burgundy-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="blue">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.213-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-200"
            >
              <Globe className="h-3 w-3" />
              {t.languageToggle}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white shadow-sm transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                  width={120}
                  height={120}
                  className="object-contain "
                />
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">{t.schoolName}</h2>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block relative z-50" ref={dropdownRef}>
            <ul className="flex gap-6">
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className={`flex items-center text-sm font-medium ${
                    activeDropdown === "about" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {t.nav.about}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className={`flex items-center text-sm font-medium ${
                    activeDropdown === "courses" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {t.nav.courses}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "courses" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "courses" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.coursesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("chinese")}
                  className={`flex items-center text-sm font-medium ${
                    activeDropdown === "chinese" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {t.nav.chinese}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "chinese" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "chinese" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.chineseDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("club")}
                  className={`flex items-center text-sm font-medium ${
                    activeDropdown === "club" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {t.nav.club}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "club" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "club" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.clubDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("masterclass")}
                  className={`flex items-center text-sm font-medium ${
                    activeDropdown === "masterclass" ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {t.nav.masterclass}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      activeDropdown === "masterclass" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "masterclass" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.masterclassDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.contacts}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="rounded-md p-1 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "max-h-[calc(100vh-60px)]" : "max-h-0"
          }`}
        >
          <div className="container mx-auto space-y-2 px-4 pb-4">
            {/* About Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("about-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {t.nav.about}
                </span>
                {activeDropdown === "about-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "about-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("courses-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {t.nav.courses}
                </span>
                {activeDropdown === "courses-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "courses-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.coursesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Chinese Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("chinese-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  {t.nav.chinese}
                </span>
                {activeDropdown === "chinese-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "chinese-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.chineseDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Club Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("club-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  {t.nav.club}
                </span>
                {activeDropdown === "club-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "club-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.clubDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Masterclass Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("masterclass-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t.nav.masterclass}
                </span>
                {activeDropdown === "masterclass-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "masterclass-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.masterclassDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* News Link */}
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <FileText className="h-5 w-5 text-primary" />
              {t.nav.news}
            </Link>

            {/* Contacts Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <Phone className="h-5 w-5 text-primary" />
              {t.nav.contacts}
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
<section id="hero" className="relative">
  <div className="relative h-[600px] sm:h-[600px] w-full overflow-hidden">
    {heroImages.map((src, index) => {
      const isActive = index === currentImageIndex;
      const isNext = index === (currentImageIndex + 1) % heroImages.length;

      // Render only the current and next slide
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
            className="object-cover transform transition-transform duration-10000 hover:scale-105"
            priority={isActive && index === 0} // preload first slide only
            loading={isActive ? "eager" : "lazy"} // lazy load others
          />
        </div>
      );
    })}

    {/* Gradient overlay */}
    <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 to-transparent"></div>

    {/* Text Content */}
    <div className="absolute inset-0 z-30 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in-up">
          Языковая школа
        </h1>
        <h2 className="mb-2 text-3xl md:text-3xl animate-fade-in-up animation-delay-150">
          Английский и китайский
        </h2>
        <h5 className="mb-2 text-lg md:text-lg animate-fade-in-up animation-delay-150">
          Химки Новогорск Куркино
        </h5>
        <p className="mb-8 text-lg md:text-xl animate-fade-in-up animation-delay-300">
          {t.hero.subtitle}
        </p>
        <Link
          href="/bookings"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3 animate-fade-in-up animation-delay-600"
        >
          {t.hero.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>

    {/* Carousel Navigation Arrows */}
    <button
      onClick={goToPrevSlide}
      className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
    <button
      onClick={goToNextSlide}
      className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6" />
    </button>

    {/* Carousel Navigation Dots */}
    <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
      {heroImages.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 w-2 rounded-full transition-all ${
            index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
</section>


        {/* Welcome Section */}
        <section id="welcome" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
              <h2 className="mb-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
                {t.welcome.title}
              </h2>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">{t.welcome.description}</p>
              <ul className="mb-8 space-y-4 text-left">
                {t.welcome.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-base text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/our-values"
                className="inline-flex items-center font-semibold text-primary hover:underline transition duration-150 ease-in-out"
              >
                {t.welcome.cta}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Courses Section */}
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  title: language === 'ru' ? 'КИТАЙСКИЙ ДЛЯ ДЕТЕЙ 7-9 ЛЕТ' : 'CHINESE FOR CHILDREN 7-9',
  description: language === 'ru' 
    ? 'Веселые занятия с основами китайского через игры и песни' 
    : 'Fun introduction to Chinese through games and songs',
  level: language === 'ru' ? 'Все уровни' : 'All Levels',
  students: language === 'ru' ? '50+ студентов' : '50+ students',
  image: '/assets/courses/Painting.jpg',
  href: '/chinese/aged-7-9'
},
        {
  title: language === 'ru' ? 'КИТАЙСКИЙ ДЛЯ ДЕТЕЙ 10-12 ЛЕТ' : 'CHINESE FOR CHILDREN 10-12',
  description: language === 'ru' 
    ? 'Веселые занятия с основами китайского через игры и песни' 
    : 'Fun introduction to Chinese through games and songs',
  level: language === 'ru' ? 'Все уровни' : 'All Levels',
  students: language === 'ru' ? '50+ студентов' : '50+ students',
  image: '/assets/gallery/Learning-Chinese.jpg',
  href: '/chinese/aged-10-12'
},
{
  title: language === 'ru' ? 'КИТАЙСКИЙ ДЛЯ ПОДРОСТКОВ' : 'CHINESE FOR TEENS',
  description: language === 'ru' 
    ? 'Современный китайский язык с актуальной лексикой' 
    : 'Modern Chinese with relevant vocabulary',
  level: language === 'ru' ? 'Все уровни' : 'All Levels',
  students: language === 'ru' ? '40+ студентов' : '40+ students',
  image: '/assets/gallery/Chinese-Practice.jpg',
  href: '/chinese/teenagers'
},

{
  title: language === 'ru' ? 'КИТАЙСКИЙ ДЛЯ ВЗРОСЛЫХ' : 'CHINESE FOR ADULTS',
  description: language === 'ru' 
    ? 'Практический китайский для работы и путешествий' 
    : 'Practical Chinese for work and travel',
  level: language === 'ru' ? 'Все уровни' : 'All levels',
  students: language === 'ru' ? '70+ студентов' : '70+ students',
  image: '/C-Adults.jpg',
  href: '/chinese/adults'
},
{
  title: language === 'ru' ? 'Китайский язык для дошкольников' : 'CHINESE FOR PRESCHOOLERS',
  description: language === 'ru' 
    ? 'Системное изучение китайского с элементами культуры' 
    : 'Structured learning with cultural elements',
  level: language === 'ru' ? 'Все уровни' : 'All Levels',
  students: language === 'ru' ? '60+ студентов' : '60+ students',
  image: '/assets/gallery/Calligraphy.jpg', 
  href: '/chinese/preschoolers'
},
       {
          title: language === 'ru' ? 'МАСТЕР-КЛАССЫ' : 'MASTERCLASSES',
          description: language === 'ru' 
            ? 'Интенсивные занятия с носителями языка' 
            : 'Intensive workshops with native speakers',
          level: language === 'ru' ? 'Все уровни' : 'All Levels',
          students: language === 'ru' ? '60+ студентов' : '60+ students',
          image: '/masterclass.jpg',
          href: '/chinese-calligraphy'
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
                  className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>

                    <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{course.level}</span>
                    </div>

                    <Link
                      href={course.href}
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors duration-300"
                    >
                      {language === "ru" ? "Подробнее" : "Read More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <ValuesSectionCard language={language} />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.testimonials.title}</h2>
            <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>
            <div className="grid gap-6 md:grid-cols-3">
              {t.testimonials.items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-yellow-400">
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                  </div>
                  <p className="mb-4 italic text-gray-600">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://tut-school.clients.site/#rating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-primary px-6 py-2 text-white transition hover:bg-primary-dark"
              >
                {t.testimonials.reviews}
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary">{t.contact.title}</h2>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
              <Link
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white transition-all hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" />
                {t.contact.phone}
              </Link>
              <Link
                href="https://yandex.com/maps/10758/himki/?ll=37.374147%2C55.894611&mode=routes&rtext=~55.894611%2C37.374147&rtt=auto&ruri=~&z=17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600"
              >
                <Navigation className="h-5 w-5" />
                {t.contact.directions}
              </Link>
              <Link
                href="mailto:info@tutschool.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-white transition-all hover:bg-gray-800"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.write}
              </Link>
              <Link
                href="https://t.me/TUTschoolNovogorsk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-blue-400 px-4 py-2 text-white transition-all hover:bg-blue-500"
              >
                <Send className="h-5 w-5" />
                {t.contact.telegram}
              </Link>
              <Link
                href="https://wa.me/+79167349246"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white transition-all hover:bg-green-600"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.whatsapp}
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <MapPin className="mr-1 inline-block h-4 w-4" />
                {t.address}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-xl bg-primary shadow-xl">
              <div className="relative">
                <div className="relative px-8 py-16 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.trial.title}</h2>
                  <Link
                    href="/bookings"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.trial.cta}
                    <ArrowRight className="h-4 w-4" />
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
