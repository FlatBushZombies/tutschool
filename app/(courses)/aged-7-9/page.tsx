"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Info, BookOpen, Clock, Calendar, Phone, Mail, ChevronDown, X, Menu, Globe, Award, FileText, MessageCircle
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function Aged7to9Page() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
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
        title: "Английский для младших школьников",
        subtitle: "Интерактивные занятия с использованием мультимедиа.",
        cta: "Записаться на пробный урок",
      },
      benefits: [
        { title: "Интерактивные уроки", description: "Уроки, адаптированные под потребности детей этого возраста, с использованием мультимедиа контента (курс Go Getter)" },
        { title: "Маленькие группы", description: "4-6 детей для индивидуального подхода" },
        { title: "Опытные педагоги", description: "Специалисты по работе с младшими школьниками" },
        { title: "Измерение результата ", description: "Тестирование после каждого раздела курса для отслеживания прогресса каждого ученика" },
      ],
      activities: [
        { title: "Твердая лексическая и грамматическая база", description: "Структурированный курс с презентацией лексики и грамматики  и их последующей отработкой", image: "https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Развитие языковых навыков", description: "Уроки по развитию навыков чтения, письма, говорения, понимания речи на слух", image: "https://images.pexels.com/photos/8535227/pexels-photo-8535227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Знакомство с традициями и культурой англоязычных стран", description: "Страноведение на уроках и внеклассных мероприятиях", image: "https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      ],
      pricing: {
        title: "Тарифы",
        items: [
          {
            type: "Мини-группы",
            price: "от 1400 ₽/ занятие"
          },
          {
            type: "Индивидуальные занятия",
            price: "от 3000 ₽/занятия"
          }
        ]
      },
      schedule: [
        { day: "Пн-Пт:", times: ["9:00 - 21:00"] },
        { day: "Сб:", times: ["10:00 - 18:00"] },
        
      ],
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
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
          { title: "ADULTS", href: "/conversation-club/adults " },
        ],
        masterclass: "MASTERCLASS",
        masterclassDropdown: [
          { title: "CHINESE CALLIGRAPHY", href: "/chinese-calligraphy" },
          { title: "CREATIVE WORKSHOP", href: "/creative-workshops" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "English for Primary School Students",
        subtitle: " Interactive lessons using multimedia",
        cta: "Book a trial lesson",
      },
      benefits: [
        { title: "Interactive lessons", description: " Lessons tailored to this age group with multimedia content (Go Getter course)." },
        { title: "Small groups", description: "4–6 children for an individual approach" },
        { title: "Experienced teachers", description: "Specialists in working with young school children" },
        { title: "Progress Tracking", description: "Tests after each course unit to monitor each student’s progress" },
      ],
      activities: [
        { title: "Solid vocabulary and grammar base", description: "Structured course with vocabulary and grammar presentation and practice", image: "https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Developing language skills", description: "Lessons for reading, writing, speaking, and listening skills", image: "https://images.pexels.com/photos/8535227/pexels-photo-8535227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Learning about traditions and culture of English-speaking countries", description: "	Country studies during lessons and extracurricular events", image: "https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      ],
         pricing: {
        title: "Pricing Plans",
        items: [
          {
            type: "Mini-groups",
            price: "from 1400₽/month"
          },
          {
            type: "Individual lessons",
            price: "from 3000₽/hour"
          }
        ]
      },
      schedule: [
        { day: "Mon-Fri:", times: ["9:00 - 21:00"] },
        { day: "Sat:", times: ["10:00 - 18:00"] },
      ],
      languageToggle: "Русский",
    },
  }

    const activities = [
    { 
      title: language === 'ru' ? 'Твердая лексическая и грамматическая база ' : 'Reading & Storytelling',
      description: language === 'ru' 
        ? 'Структурированный курс с презентацией лексики и грамматики и их последующей отработкой' 
        : 'Working with adapted texts and oral storytelling',
      image: "/assets/children/reading.jpg" // Kids reading together
    },
    { 
      title: language === 'ru' ? 'Развитие языковых навыков' : 'Grammar Games',
      description: language === 'ru' 
        ? 'Уроки по развитию навыков чтения, письма, говорения, понимания речи на слух' 
        : 'Learning grammar through interactive exercises',
      image: "/assets/children/grammar-games.jpg" // Kids playing educational game
    },
    { 
      title: language === 'ru' ? 'Знакомство с традициями и культурой англоязычных стран' : 'Creative Projects',
      description: language === 'ru' 
        ? 'Страноведение на уроках и внеклассных мероприятиях' 
        : 'Drawing, crafts and drama in English',
      image: "/assets/children/creative-projects.jpg" // Kids doing arts and crafts
    }
  ]

  const t = translations[language]

  const toggleLanguage = () => setLanguage(language === "ru" ? "en" : "ru")
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleDropdown = (dropdown: string) => setActiveDropdown(activeDropdown === dropdown ? null : dropdown)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  return (
    <div className="flex min-h-screen flex-col">
      <FadeIn>
     
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
               </div>
               <div className="flex items-center gap-3">
            <a href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0" className="text-green-600 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z"/>
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
                  className="object-contain "
                />
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation - keep exactly the same */}
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
        <section className="relative bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center"
            >
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.hero.title}</h1>
              <p className="mx-auto max-w-2xl text-lg text-white/80">{t.hero.subtitle}</p>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Преимущества' : 'Benefits'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#5C162E]">
                  <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* Activities Section */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
        {language === 'ru' ? 'Наши занятия' : 'Our Activities'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div 
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
            }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
          >
            <div className="relative h-96 w-full overflow-hidden">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0} // Only prioritize first image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5C162E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{activity.title}</h3>
            <p className="text-gray-600 flex-grow">{activity.description}</p>
          </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

{/* Schedule Section */}
<section className="py-16 bg-white justify-center ">
  <div className="container mx-auto ">
    <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
      {language === 'ru' ? 'Расписание занятий' : 'Class Schedule'}
    </h2>

    {/* Cards container */}
    <div className="flex flex-wrap justify-start gap-6">
      {t.schedule.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-md rounded-lg border p-6 shadow-sm"
        >
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-[#5C162E] mr-2" />
            <span className="font-medium">{item.day}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 text-[#5C162E] mr-2" />
            <span>{item.times[0]}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Pricing */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <motion.h2
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={fadeIn}
      className="mb-12 text-center text-3xl font-bold"
    >
      {t.pricing.title}
    </motion.h2>

    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={staggerContainer}
      className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
    >
      {t.pricing.items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-[#5C162E] w-full max-w-sm"
        >
          <h3 className="mb-4 text-xl font-bold">{item.type}</h3>
          <p className="text-3xl font-bold text-primary">{item.price}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-16 bg-[#5C162E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ru' ? 'Записаться на бесплатный урок-диагностику' : 'Sign up for a free diagnostic lesson'}
            </h2>
            <a href="/bookings" className="bg-white text-[#5C162E] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              {t.hero.cta}
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}