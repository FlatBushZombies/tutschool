"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { motion } from "framer-motion"
import { Clock, Phone, Landmark, Mail, Globe, ChevronDown, X, Menu, Users, MapPin, Calendar, Info, FileText, Award, BookOpen, MessageCircle } from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreativeWorkshops() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  // Workshop images mapping using consistent IDs
  const workshopImages: Record<string, string> = {
    "oil-painting": "/assets/courses/MasterClass-1.jpg",
    "watercolor-techniques": "/assets/courses/MasterClass-2.jpg",
    "life-drawing": "/assets/courses/MasterClass-3.jpg",
    "portrait-painting": "/assets/courses/MasterClass-4.jpg",
  }

  // Category images for tabs
  const categoryImages = {
    "visual-arts": "/assets/courses/MasterClass-1.jpg",
    "digital-media": "/assets/courses/MasterClass-2.jpg",
    "crafts": "/assets/courses/MasterClass-3.jpg",
    "performing-arts": "/assets/courses/MasterClass-4.jpg",
  }

  const translations = {
    ru: {
      title: "Творческие мастер-классы",
      subtitle: "Исследуйте свой творческий потенциал через разнообразные мастер-классы под руководством профессионалов",
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      description: "Наша программа творческих мастер-классов предлагает разнообразные художественные опыты, разработанные для вдохновения и развития практических навыков.",
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
          { title: "КИТАЙСКАЯ КАЛЛИГРАФИЯ", href: "/chinese-calligraphy" },
          { title: "ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ", href: "/creative-workshops" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      overview: {
        title: "Обзор мастер-классов",
        description: "Наша программа творческих мастер-классов предлагает разнообразные художественные опыты, разработанные для вдохновения и развития практических навыков. Каждый мастер-класс проводится опытными художниками и преподавателями, которые привносят свой уникальный опыт и страсть в класс.",
        additionalInfo: "Независимо от того, интересуетесь ли вы изучением нового медиума, совершенствованием своей техники или просто ищете творческий выход, наши мастер-классы обеспечивают поддерживающую среду для художественного роста и экспериментов.",
      },
      benefits: {
        title: "Преимущества мастер-классов",
        items: [
          "Небольшие группы, обеспечивающие индивидуальное внимание",
          "Практический опыт работы с профессиональными материалами",
          "Знакомство с разнообразными художественными техниками и подходами",
          "Возможность создать портфолио творческих работ",
          "Связь с сообществом единомышленников",
        ],
      },
      details: {
        title: "Детали программы",
        schedule: "Расписание",
        scheduleValue: "Круглый год с сезонными предложениями",
        duration: "Продолжительность",
        durationValue: "От однодневных до 8-недельных мастер-классов",
        classSize: "Размер группы",
        classSizeValue: "8-12 студентов на мастер-класс",
        location: "Место проведения",
        locationValue: "Главный кампус, Здание творческих искусств",
      },
      categories: {
        title: "Галерея студенческих работ",
        visualArts: "Изобразительное искусство",
      },
      workshops: {
        visualArts: [
          { id: "oil-painting", title: "Основы масляной живописи", duration: "6 недель", price: "25 000 ₽" },
          { id: "watercolor-techniques", title: "Техники акварели", duration: "4 недели", price: "18 000 ₽" },
          { id: "life-drawing", title: "Интенсив по рисунку с натуры", duration: "Выходные", price: "12 000 ₽" },
          { id: "portrait-painting", title: "Портретная живопись", duration: "8 недель", price: "28 000 ₽" },
        ],
      },
      testimonials: {
        title: "Отзывы студентов",
        items: [
          {
            name: "Мария Иванова",
            workshop: "Основы масляной живописи",
            quote: "Мастер-класс превзошел мои ожидания. Преподаватель был невероятно знающим и поддерживающим, и я ушла с навыками, которые, как я думала, не смогу развить всего за шесть недель.",
          },
          {
            name: "Михаил Чен",
            workshop: "Цифровая иллюстрация",
            quote: "Как человек без предыдущего опыта в цифровом искусстве, я был поражен тем, как быстро я прогрессировал. Пошаговый подход и персонализированная обратная связь сделали всю разницу.",
          },
          {
            name: "Елена Родригес",
            workshop: "Керамика и гончарное дело",
            quote: "Этот мастер-класс возродил мою страсть к созданию руками. Студийные помещения отличные, а небольшой размер класса означал, что я получила много индивидуального руководства.",
          },
        ],
      },
      cta: {
        title: "Готовы раскрыть свой творческий потенциал?",
        description: "Исследуйте наш разнообразный спектр творческих мастер-классов и найдите идеальную возможность развить свои художественные навыки в поддерживающей среде.",
        button1: "Посмотреть календарь мастер-классов",
        button2: "Запросить каталог мастер-классов",
      },
      languageToggle: "English",
    },
    en: {
      title: "Creative Workshops",
      subtitle: "Explore your artistic potential through our diverse range of creative workshops led by industry professionals",
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      description: "Our Creative Workshops program offers a diverse range of artistic experiences designed to inspire creativity and develop practical skills.",
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
          { title: "CREATIVE WORKSHOPS", href: "/creative-workshops" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      overview: {
        title: "Workshop Overview",
        description: "Our Creative Workshops program offers a diverse range of artistic experiences designed to inspire creativity and develop practical skills. Each workshop is led by accomplished artists and educators who bring their unique expertise and passion to the classroom.",
        additionalInfo: "Whether you're interested in exploring a new medium, refining your technique, or simply seeking a creative outlet, our workshops provide a supportive environment for artistic growth and experimentation.",
      },
      benefits: {
        title: "Workshop Benefits",
        items: [
          "Small class sizes ensuring personalized attention",
          "Hands-on experience with professional-grade materials",
          "Exposure to diverse artistic techniques and approaches",
          "Opportunity to build a portfolio of creative work",
          "Connection with a community of like-minded creative individuals",
        ],
      },
      details: {
        title: "Program Details",
        schedule: "Schedule",
        scheduleValue: "Year-round with seasonal offerings",
        duration: "Duration",
        durationValue: "Single-day to 8-week workshops",
        classSize: "Class Size",
        classSizeValue: "8-12 students per workshop",
        location: "Location",
        locationValue: "Main Campus, Creative Arts Building",
      },
      categories: {
        title: "Gallery of student works",
        visualArts: "Visual Arts",
        digitalMedia: "Digital Media",
        crafts: "Crafts & Textiles",
        performingArts: "Performing Arts",
      },
      workshops: {
        visualArts: [
          { id: "oil-painting", title: "Oil Painting Fundamentals", duration: "6 weeks", price: "$380" },
          { id: "watercolor-techniques", title: "Watercolor Techniques", duration: "4 weeks", price: "$290" },
          { id: "life-drawing", title: "Life Drawing Intensive", duration: "Weekend", price: "$180" },
          { id: "portrait-painting", title: "Portrait Painting", duration: "8 weeks", price: "$420" },
        ],
        digitalMedia: [],
        crafts: [],
        performingArts: [],
      },
      testimonials: {
        title: "Student Testimonials",
        items: [
          {
            name: "Sarah Johnson",
            workshop: "Oil Painting Fundamentals",
            quote: "The workshop exceeded my expectations. The instructor was incredibly knowledgeable and supportive, and I left with skills I never thought I could develop in just six weeks.",
          },
          {
            name: "Michael Chen",
            workshop: "Digital Illustration",
            quote: "As someone with no prior experience in digital art, I was amazed at how quickly I progressed. The step-by-step approach and personalized feedback made all the difference.",
          },
          {
            name: "Emma Rodriguez",
            workshop: "Ceramics & Pottery",
            quote: "This workshop reignited my passion for creating with my hands. The studio facilities are excellent, and the small class size meant I received plenty of individual guidance.",
          },
        ],
      },
      cta: {
        title: "Ready to Unleash Your Creativity?",
        description: "Explore our diverse range of creative workshops and find the perfect opportunity to develop your artistic skills in a supportive environment.",
        button1: "View Workshop Calendar",
        button2: "Request Workshop Catalog",
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#5C162E]" />
              <span className="text-gray-600">{t.workingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#5C162E]" />
              <a href={`tel:${t.phone.replace(/\s+/g, "")}`} className="text-gray-600 hover:text-[#5C162E]">
                {t.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-[#5C162E]" />
              <span className="text-gray-600">{t.address}</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Mail className="h-4 w-4 text-[#5C162E]" />
              <a href={`mailto:${t.email}`} className="text-gray-600 hover:text-[#5C162E]">
                {t.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0"
              className="text-green-600 hover:text-[#5C162E]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-[#5C162E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z" />
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

      {/* Combined Header and Mobile Menu */}
      <header
        className={`border-b bg-white shadow-sm transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}
      >
        {/* Main Header Content */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block relative z-50" ref={dropdownRef}>
            <ul className="flex gap-6">
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "about" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "courses" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "chinese" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "club" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "masterclass" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >
                  {t.nav.masterclass}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "masterclass" ? "rotate-180" : ""}`}
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

        {/* Mobile Menu Content */}
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

      {/* Hero Section */}
      <section className="relative bg-[#5C162E] py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">{t.subtitle}</p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6 text-[#5C162E]">{t.overview.title}</h2>
                <p className="text-gray-700 mb-6">{t.overview.description}</p>
                <p className="text-gray-700 mb-6">{t.overview.additionalInfo}</p>
                <h3 className="text-2xl font-semibold mb-4 text-[#5C162E]">{t.benefits.title}</h3>
                <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                  {t.benefits.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
              </FadeIn>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
           <FadeIn>
            <h2 className="text-3xl font-bold mb-10 text-[#5C162E] text-center">{t.categories.title}</h2>
          </FadeIn>
          <Tabs defaultValue="visual-arts" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="visual-arts" className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src={categoryImages["visual-arts"] || "/placeholder.svg"}
                    alt={t.categories.visualArts}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="relative z-10">{t.categories.visualArts}</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="visual-arts" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.workshops.visualArts.map((workshop, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                      <div className="relative h-48">
                        <Image
                          src={workshopImages[workshop.id] || "/placeholder.svg"}
                          alt={workshop.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
                        <div className="flex justify-between items-center mb-4">
                          
                          
                        </div>
                
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}