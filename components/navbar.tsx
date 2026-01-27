"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import {
  ChevronDown,
  Globe,
  Award,
  Phone,
  FileText,
  Info,
  MessageCircle,
  BookOpen,
  Clock,
  Mail,
  Landmark
} from "lucide-react"

// Animated text component for smooth language transitions
function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (text !== displayText) {
      setIsAnimating(true)
      const timeout = setTimeout(() => {
        setDisplayText(text)
        setIsAnimating(false)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [text, displayText])

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isAnimating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {displayText}
    </span>
  )
}

/**
 * TopBar Component (Reusable)
 * Renders the same top bar content in two places
 */
function TopBar({ t }: { t: any }) {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b border-gray-100">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-2">
        <div className="flex flex-wrap items-center gap-6">
          <div className="group flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Clock className="h-3 w-3 text-primary" />
            </div>
            <AnimatedText text={t.workingHours} className="text-xs text-gray-600 font-medium" />
          </div>

          <div className="group flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Phone className="h-3 w-3 text-primary" />
            </div>
            <a
              href={`tel:${t.phone.replace(/\s+/g, "")}`}
              className="text-xs font-medium text-gray-600 transition-colors hover:text-primary"
            >
              {t.phone}
            </a>
          </div>

          <div className="hidden lg:flex group items-center gap-2 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Mail className="h-3 w-3 text-primary" />
            </div>
            <a href={`mailto:${t.email}`} className="text-xs font-medium text-gray-600 transition-colors hover:text-primary">
              {t.email}
            </a>
          </div>

          <div className="hidden xl:flex group items-center gap-2 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Landmark className="h-3 w-3 text-primary" />
            </div>
            <AnimatedText text={t.address} className="text-xs text-gray-600 font-medium max-w-[300px] truncate" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/+79167349246"
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-600 transition-all duration-300 hover:bg-green-100 hover:scale-110 hover:shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
              <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
            </svg>
          </a>

          <a
            href="https://t.me/TUTschoolNovogorsk"
            className="group flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-all duration-300 hover:bg-blue-100 hover:scale-110 hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:scale-110">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.213-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
          </a>

          <button
            onClick={() => {}}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:bg-gray-50"
          >
            <Globe className="h-3.5 w-3.5 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="relative overflow-hidden">
              <span className="inline-block transition-all duration-300">
                {t.languageToggle}
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Kурсы иностранных языков",
      phone: "+7 916 7349246",
      email: "info@tut-school.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      title: "НАШИ ЦЕННОСТИ",
      subtitle: "Принципы, которыми мы руководствуемся",
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
          { title: "ПОДРОСТКИ", href: "teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/adults" },
        ],
        chinese: "КУРСЫ КИТАЙСКОГО",
        chineseDropdown: [
          { title: "ДОШКОЛЬНИКИ", href: "/chinese/preschoolers" },
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/chinese/aged-7-9" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/chinese/aged-10-12" },
          { title: "ПОДРОСТКИ", href: "/chinese/teenagers" },
          { title: "ВЗРОСЛЕ", href: "/chinese/adults" },
        ],
        club: "РАЗГОВОРНЫЙ КЛУБ",
        clubDropdown: [
          { title: "ПОДРОСТКИ", href: "/conversation-club/teenagers" },
          { title: "ВЗРОСЛЕ", href: "/conversation-club/adults" },
        ],
        masterclass: "МАСТЕР-КЛАССЫ",
        masterclassDropdown: [
          { title: "КИТАЙСКАЯ КАЛЛИГРАФИЯ ", href: "/chinese-calligraphy" },
          { title: "ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ", href: "/creative-workshops" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      cta: "Записаться на пробное занятие",
      languageToggle: "English",
      swiperNavigation: {
        prev: "Предыдущий",
        next: "Следующий",
      },
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses, School of Arts",
      phone: "+7 916 7349246",
      email: "info@tut-school.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      title: "OUR VALUES",
      subtitle: "The principles that guide us",
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
          { title: "CREATIVE WORKSHOP", href: "/creative-workshops" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      cta: "Book a trial lesson",
      languageToggle: "Русский",
      swiperNavigation: {
        prev: "Previous",
        next: "Next",
      },
    },
  }

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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

  return (
    <>
      {/* Fixed Header containing TopBar + Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md transition-all duration-500 ${
          isScrolled ? "shadow-lg shadow-black/5 border-b border-gray-100" : "border-b border-transparent"
        }`}
      >
        {/* TopBar */}
        <TopBar t={t} />

        {/* Header content */}
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="group relative flex items-center gap-4">
              <div className="relative overflow-hidden rounded-2xl transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                  width={96}
                  height={96}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h2 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {t.schoolName}
                </h2>
                <div className="h-5 overflow-hidden">
                  <AnimatedText text={t.schoolSubtitle} className="text-xs text-gray-500" />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block relative z-50" ref={dropdownRef}>
            <ul className="flex items-center gap-1">
              {/* About */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className={`group flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeDropdown === "about" ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <AnimatedText text={t.nav.about} />
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute left-0 top-full z-10 mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/10 transition-all duration-300 ${
                    activeDropdown === "about" ? "translate-y-0 opacity-100 visible" : "translate-y-2 opacity-0 invisible"
                  }`}
                >
                  <div className="p-2">
                    {t.nav.aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover:bg-primary" />
                        <AnimatedText text={item.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Courses */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className={`group flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeDropdown === "courses" ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <AnimatedText text={t.nav.courses} />
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "courses" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute left-0 top-full z-10 mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/10 transition-all duration-300 ${
                    activeDropdown === "courses" ? "translate-y-0 opacity-100 visible" : "translate-y-2 opacity-0 invisible"
                  }`}
                >
                  <div className="p-2">
                    {t.nav.coursesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover:bg-primary" />
                        <AnimatedText text={item.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Club */}
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("club")}
                  className={`group flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                    activeDropdown === "club" ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <AnimatedText text={t.nav.club} />
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "club" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute left-0 top-full z-10 mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/10 transition-all duration-300 ${
                    activeDropdown === "club" ? "translate-y-0 opacity-100 visible" : "translate-y-2 opacity-0 invisible"
                  }`}
                >
                  <div className="p-2">
                    {t.nav.clubDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-medium text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-colors group-hover:bg-primary" />
                        <AnimatedText text={item.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* News */}
              <li>
                <Link
                  href="/news"
                  className="flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                >
                  <AnimatedText text={t.nav.news} />
                </Link>
              </li>

              {/* Contacts */}
              <li>
                <Link
                  href="/contact"
                  className="flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                >
                  <AnimatedText text={t.nav.contacts} />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-gray-200 hover:shadow-md"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <Menu className={`h-5 w-5 absolute transition-all duration-300 ${mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
              <X className={`h-5 w-5 absolute transition-all duration-300 ${mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
            mobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto space-y-2 px-4 pb-6 pt-2">
            {/* About Dropdown */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => toggleDropdown("about-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-gray-700"
              >
                <span className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <Info className="h-4 w-4 text-primary" />
                  </div>
                  <AnimatedText text={t.nav.about} />
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${activeDropdown === "about-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "about-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-1 px-4 pb-4">
                  {t.nav.aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <AnimatedText text={item.title} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => toggleDropdown("courses-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-gray-700"
              >
                <span className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <AnimatedText text={t.nav.courses} />
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${activeDropdown === "courses-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "courses-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-1 px-4 pb-4">
                  {t.nav.coursesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <AnimatedText text={item.title} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Club Dropdown */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => toggleDropdown("club-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-gray-700"
              >
                <span className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  <AnimatedText text={t.nav.club} />
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${activeDropdown === "club-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeDropdown === "club-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-1 px-4 pb-4">
                  {t.nav.clubDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-3 text-sm text-gray-600 transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <AnimatedText text={item.title} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* News Link */}
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:bg-primary/5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <AnimatedText text={t.nav.news} />
            </Link>

            {/* Contacts Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:bg-primary/5 hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <AnimatedText text={t.nav.contacts} />
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <AnimatedText text={t.cta} />
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
