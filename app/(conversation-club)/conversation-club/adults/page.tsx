
"use client"

import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare, Globe, BookOpen, Clock, Phone, Mail,
  ChevronDown, X, Menu, FileText, MessageCircle, Award, Info,
  ArrowRight, Check, Landmark
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function AdultsPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  const dropdownRef = useRef<HTMLDivElement>(null)

  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      promo: "Запишитесь на пробный урок ",
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
        title: "Разговорный клуб для взрослых",
        subtitle: "Совершенствуйте свой английский в непринужденной атмосфере с носителями языка",
        cta: "Записаться на пробный урок"
      },
      features: [
        {
          title: "Живое общение",
          description: "Практика разговорного английского в группах до 6 человек",
          icon: MessageSquare
        },
        {
          title: "Носители языка",
          description: "Общение с преподавателями из Великобритании и США",
          icon: Globe
        },
        {
          title: "Актуальные темы",
          description: "Обсуждение последних новостей, культуры и бизнеса",
          icon: BookOpen
        },
        {
          title: "Гибкий график",
          description: "Занятия в удобное время, включая вечерние группы",
          icon: Clock
        }
      ],
      activities: [
        {
          title: "Культурные вечера",
          description: "Знакомство с традициями и обычаями англоязычных стран",
          image: "/assets/gallery/Learning-Adults.png"
        }
      ],
      levels: [
        {
          name: "Beginner",
          description: "Для тех, кто только начинает изучать английский"
        },
        {
          name: "Intermediate",
          description: "Для продолжающих изучение английского"
        },
        {
          name: "Advanced",
          description: "Для свободно владеющих английским"
        }
      ],
       pricing: {
        title: "Стоимость занятий",
        plans: [
          {
            name: "Мини-группы",
            price: "1,400 ₽",
          },
          {
            name: "Индивидуальные занятия",
            price: "3,000 ₽",
            popular: false
          }
        ]
      },
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      promo: "Sign up for a trial lesson!",
      nav: {
        about: "ABOUT THE SCHOOL",
        aboutDropdown: [
          { title: "OUR VALUES", href: "/our-values" },
          { title: "SCHEDULE AND PRICES", href: "/schedule" },
          { title: "TEACHERS", href: "/teachers" },
        ],
        courses: "COURSES",
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
          { title: "CREATIVE WORKSHOP", href: "/creative-workshops" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "Conversation Club for Adults",
        subtitle: "Improve your English in a relaxed atmosphere with native speakers",
        cta: "Book a trial lesson"
      },
      features: [
        {
          title: "Live Communication",
          description: "Practice spoken English in groups of up to 6 people",
          icon: MessageSquare
        },
        {
          title: "Native Speakers",
          description: "Communication with teachers from the UK and USA",
          icon: Globe
        },
        {
          title: "Current Topics",
          description: "Discussion of latest news, culture and business",
          icon: BookOpen
        },
        {
          title: "Flexible Schedule",
          description: "Classes at convenient times, including evening groups",
          icon: Clock
        }
      ],
      activities: [
        {
          title: "Cultural Evenings",
          description: "Introduction to traditions and customs of English-speaking countries",
          image: "/assets/gallery/Learning-Adults.png"
        }
      ],
      levels: [
        {
          name: "Beginner",
          description: "For those just starting to learn English"
        },
        {
          name: "Intermediate",
          description: "For continuing English learners"
        },
        {
          name: "Advanced",
          description: "For fluent English speakers"
        }
      ],
        pricing: {
        title: "Pricing Plans",
        plans: [
          {
            name: "Mini-Groups",
            price: "1,400 ₽",
          },
          {
            name: "Individual Lessons",
            price: "3,00 ₽",
            popular: false
          },
          
        ]
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
            <Head>
        <title>Разговорный клуб английского для взрослых | Tut School Химки, Новогорск, Куркино</title>
        <meta 
          name="description" 
          content="Английский разговорный клуб для взрослых с носителями языка в Химках, Новогорске и Куркино. Практика общения, бизнес-английский, культурные вечера. Гибкий график занятий." 
        />
        <meta
          name="keywords"
          content="разговорный клуб английского, английский для взрослых Химки, курсы английского Новогорск, английский с носителями, бизнес английский, разговорная практика, Tut School английский, вечерние занятия английским, английский Куркино"
        />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Английский разговорный клуб для взрослых | Tut School" />
        <meta 
          property="og:description" 
          content="Практика живого общения на английском с носителями языка в Химках, Новогорске и Куркино. Группы до 6 человек, актуальные темы, бизнес-английский." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tutschool.ru/conversation-club/adults" />
        <meta property="og:image" content="https://tutschool.ru/images/adults-club-og.jpg" />
        <meta property="og:site_name" content="Tut School" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Английский клуб для взрослых | Tut School" />
        <meta 
          name="twitter:description" 
          content="Улучшите разговорный английский в непринужденной атмосфере с носителями языка в Химках и Новогорске. Занятия вечером и в выходные." 
        />
        <meta name="twitter:image" content="https://tutschool.ru/images/adults-club-twitter.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://tutschool.ru/conversation-club/adults" />
        
        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="ru" href="https://tutschool.ru/ru/conversation-club/adults" />
        <link rel="alternate" hrefLang="en" href="https://tutschool.ru/en/conversation-club/adults" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Разговорный клуб английского языка для взрослых",
            "description": "Практика разговорного английского с носителями языка для взрослых в Химках, Новогорске и Куркино. Обсуждение актуальных тем, бизнес-английский, культурные мероприятия.",
            "provider": {
              "@type": "LanguageSchool",
              "name": "Tut School",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Заречная улица, 5, корп. 2",
                  "addressLocality": "Химки, микрорайон Новогорск",
                  "addressRegion": "Московская область",
                  "postalCode": "141435",
                  "addressCountry": "RU"
                }
              ],
              "telephone": "+7 (983) 662-97-30",
              "sameAs": [
                "https://t.me/TUTschoolNovogorsk",
                "https://wa.me/+79167349246"
              ]
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": ["in-person"],
              "courseSchedule": {
                "@type": "Schedule",
                "dayOfWeek": ["Monday", "Wednesday", "Friday", "Saturday"],
                "timeOfDay": ["19:00", "20:00"]
              },
              "offers": {
                "@type": "Offer",
                "price": "1400",
                "priceCurrency": "RUB",
                "availability": "https://schema.org/InStock"
              }
            },
            "educationalLevel": "AdultEducation",
            "teaches": "English conversation",
            "timeRequired": "P1H30M"
          })}
        </script>
      </Head>
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
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-primary" />
                <span className="text-gray-600">{t.address}</span>
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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#5C162E] to-[#7A1F3D]">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-8"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                href="/bookings"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#5C162E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
                >
                  {t.hero.cta}
                </motion.a>
                <motion.a
                href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
                >
                  {language === 'ru' ? 'Узнать больше' : 'Learn More'}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#5C162E] transition-colors"
                >
                  <feature.icon className="w-12 h-12 text-[#5C162E] mb-6" />
                  <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Наши занятия' : 'Our Activities'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Levels Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Уровни обучения' : 'Learning Levels'}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {t.levels.map((level, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === index
                      ? 'bg-[#5C162E] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center bg-gray-50 p-8 rounded-xl"
                >
                  <p className="text-gray-600 text-lg">
                    {t.levels[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

                 {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {t.pricing.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t.pricing.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative ${plan.popular ? 'border-2 border-[#5C162E]' : ''
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#5C162E] text-white px-4 py-1 rounded-bl-xl">
                      {language === 'ru' ? 'Популярный' : 'Popular'}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4 text-[#5C162E]">{plan.name}</h3>
                  <p className="text-3xl font-bold text-primary">{plan.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5C162E] text-white">
          <div className="container mx-auto px-4 text-center">
            
            <a href="/bookings"
              className="bg-white text-[#5C162E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              {t.hero.cta}
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  )
} 