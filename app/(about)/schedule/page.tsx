"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import {
  Calendar,
  Phone,
  Mail,
  Globe,
  Menu,
  X,
  Clock,
  Info,
  ChevronDown,
  BookOpen,
  MessageCircle,
  Award,
  FileText,
} from "lucide-react"

export default function SchedulePage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
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
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
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
      title: "РАСПИСАНИЕ И ЦЕНЫ",
      subtitle: "Выберите удобное время для занятий",
      scheduleTitle: "Расписание занятий",
      englishLanguage: "Английский язык",
      chineseLanguage: "Китайский язык",
      pricesTitle: "Стоимость обучения",
      pricesSubtitle: "Выберите подходящий тариф",
      cta: "Записаться на пробный урок",
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
      days: {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
      },
      time: "Время",
      preschoolers: "Дошкольники",
      noClasses: "Нет занятий",
      priceCards: [
        {
          title: "Стандарт",
          price: "5 000 ₽",
          period: "в месяц",
          features: [
            "8 занятий в месяц",
            "Длительность занятия 60 минут",
            "Группа до 8 человек",
            "Учебные материалы включены",
          ],
          cta: "Записаться",
        },
        {
          title: "Интенсив",
          price: "8 000 ₽",
          period: "в месяц",
          features: [
            "12 занятий в месяц",
            "Длительность занятия 90 минут",
            "Группа до 6 человек",
            "Учебные материалы включены",
            "Разговорный клуб 1 раз в неделю",
          ],
          cta: "Записаться",
          featured: true,
        },
        {
          title: "Индивидуальный",
          price: "12 000 ₽",
          period: "в месяц",
          features: [
            "8 индивидуальных занятий",
            "Длительность занятия 60 минут",
            "Персональная программа обучения",
            "Учебные материалы включены",
            "Гибкий график занятий",
          ],
          cta: "Записаться",
        },
      ],
      note: "Примечание: Расписание может меняться. Пожалуйста, уточняйте актуальную информацию у администратора.",
      bookTrial: "Записаться на пробное занятие",
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
      title: "SCHEDULE AND PRICES",
      subtitle: "Choose a convenient time for classes",
      scheduleTitle: "Class Schedule",
      englishLanguage: "English Language",
      chineseLanguage: "Chinese Language",
      pricesTitle: "Tuition Fees",
      pricesSubtitle: "Choose the right plan for you",
      cta: "Book a lesson",
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
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      time: "Time",
      preschoolers: "Preschoolers",
      noClasses: "No classes",
      priceCards: [
        {
          title: "Standard",
          price: "5,000 ₽",
          period: "per month",
          features: [
            "8 lessons per month",
            "60-minute lessons",
            "Groups up to 8 people",
            "Learning materials included",
          ],
          cta: "Sign Up",
        },
        {
          title: "Intensive",
          price: "8,000 ₽",
          period: "per month",
          features: [
            "12 lessons per month",
            "90-minute lessons",
            "Groups up to 6 people",
            "Learning materials included",
            "Conversation club once a week",
          ],
          cta: "Sign Up",
          featured: true,
        },
        {
          title: "Individual",
          price: "12,000 ₽",
          period: "per month",
          features: [
            "8 individual lessons",
            "60-minute lessons",
            "Personalized learning program",
            "Learning materials included",
            "Flexible schedule",
          ],
          cta: "Sign Up",
        },
      ],
      note: "Note: Schedule is subject to change. Please check with the administrator for the most up-to-date information.",
      bookTrial: "Book a trial lesson",
      languageToggle: "Русский",
    },
  }
  const scheduleData = {
    english: [
      { time: "14.00", monday: "дошкольники", tuesday: "", wednesday: "дошкольники", thursday: "", friday: "" },
      { time: "15.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "16.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "17.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "18.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "19.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
    ],
    weekend: [
      { time: "10.00", saturday: "", sunday: "" },
      { time: "11.00", saturday: "", sunday: "" },
      { time: "12.00", saturday: "", sunday: "" },
      { time: "13.00", saturday: "", sunday: "" },
    ],
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const toggleDropdown = (dropdown: string) => {
    // Close all other dropdowns immediately
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)

    // Add slight delay for better touch response
    setTimeout(() => {
      if (activeDropdown !== dropdown) {
        setActiveDropdown(dropdown)
      }
    }, 50)
  }

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


      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pb-16">
        {/* Hero Section */}
        <section className="bg-primary py-16 pt-[180px] text-white">
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
        </section>

        {/* Schedule Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <h2 className="mb-2 text-3xl font-bold text-primary">{t.scheduleTitle}</h2>
              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-16"
            >
              <div className="mb-8 flex items-center justify-center">
                <div className="flex items-center bg-white/60 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-lg">
                  <Calendar className="mr-3 h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {t.englishLanguage}
                  </h3>
                </div>
              </div>

              {/* Weekday Schedule - Desktop */}
              <div className="mb-8 hidden lg:block">
                <div className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl">
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-500/10 pointer-events-none"></div>

                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-sm">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                {t.time}
                              </div>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.monday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.tuesday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.wednesday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.thursday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t.days.friday}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scheduleData.english.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={`transition-all duration-200 hover:bg-white/30 ${
                                rowIndex % 2 === 0 ? "bg-white/20" : "bg-white/10"
                              }`}
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 border-r border-white/20">
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-blue-500 rounded-full mr-3"></div>
                                  {row.time}
                                </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.monday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.monday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.tuesday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.tuesday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.wednesday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.wednesday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.thursday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.thursday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                {row.friday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.friday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekend Schedule - Desktop */}
              <div className="mb-8 hidden lg:block">
                <div className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl">
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/10 pointer-events-none"></div>

                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-primary/10 backdrop-blur-sm">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                {t.time}
                              </div>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.saturday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t.days.sunday}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scheduleData.weekend.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={`transition-all duration-200 hover:bg-white/30 ${
                                rowIndex % 2 === 0 ? "bg-white/20" : "bg-white/10"
                              }`}
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 border-r border-white/20">
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                                  {row.time}
                                </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.saturday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border border-purple-500/20">
                                    {row.saturday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                {row.sunday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border border-purple-500/20">
                                    {row.sunday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Schedule */}
              <div className="space-y-4 lg:hidden">
                {[
                  {
                    day: t.days.monday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.monday })),
                  },
                  {
                    day: t.days.tuesday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.tuesday })),
                  },
                  {
                    day: t.days.wednesday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.wednesday })),
                  },
                  {
                    day: t.days.thursday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.thursday })),
                  },
                  {
                    day: t.days.friday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.friday })),
                  },
                  {
                    day: t.days.saturday,
                    data: scheduleData.weekend.map((row) => ({ time: row.time, class: row.saturday })),
                  },
                  {
                    day: t.days.sunday,
                    data: scheduleData.weekend.map((row) => ({ time: row.time, class: row.sunday })),
                  },
                ].map((dayData, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl"
                  >
                    {/* Glass overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-500/10 pointer-events-none"></div>

                    <div className="relative">
                      <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-6 py-4 border-b border-white/20">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-blue-500 rounded-full mr-3"></div>
                          {dayData.day}
                        </h4>
                      </div>
                      <div className="divide-y divide-white/20">
                        {dayData.data.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-6 py-4 hover:bg-white/20 transition-all duration-200"
                          >
                            <span className="text-sm font-medium text-gray-800 flex items-center">
                              <Clock className="mr-2 h-3 w-3 text-primary" />
                              {slot.time}
                            </span>
                            <span className="text-sm text-gray-700">
                              {slot.class ? (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                  {slot.class}
                                </span>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="flex items-center bg-white/60 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-lg max-w-2xl">
                  <Info className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-gray-700 text-center">{t.note}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <h2 className="mb-2 text-3xl font-bold text-primary">{t.pricesTitle}</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.pricesSubtitle}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              {/* Mini Groups Card */}
              <motion.div
                variants={fadeIn}
                className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-white">
                  {language === "ru" ? "Рекомендуем" : "Recommended"}
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {language === "ru" ? "Мини-группы" : "Mini Groups"}
                  </h3>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.englishLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">1,400 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.chineseLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">1,500 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/bookings"
                    className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white hover:bg-primary/90 transition-colors"
                  >
                    {language === "ru" ? "Записаться" : "Sign Up"}
                  </Link>
                </div>
              </motion.div>

              {/* Individual Lessons Card */}
              <motion.div
                variants={fadeIn}
                className="relative overflow-hidden rounded-lg border border-primary bg-primary/5 shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {language === "ru" ? "Индивидуальные занятия" : "Individual Lessons"}
                  </h3>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.englishLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">3,000 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.chineseLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">3,000 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/bookings"
                    className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white hover:bg-primary/90 transition-colors"
                  >
                    {language === "ru" ? "Записаться" : "Sign Up"}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeIn}>
              <h2 className="mb-6 text-3xl font-bold">{t.bookTrial}</h2>
              <Link
                href="/bookings"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-gray-100"
              >
                <Clock className="mr-2 h-5 w-5" />
                {language === "ru" ? "Записаться" : "Book Now"}
              </Link>
            </motion.div>
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
