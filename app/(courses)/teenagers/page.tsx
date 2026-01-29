"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle, Check, Clock, Landmark, Phone, Mail, ChevronDown, X, Menu, Globe,
  BookOpen, Users, Award, Briefcase, Info, MessageSquare, FileText, Calendar
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"
import Head from "next/head"

export default function TeenagersPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeExam, setActiveExam] = useState(0)

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
        title: "Английский для подростков",
        subtitle: "Современные программы для уверенного общения, подготовки к экзаменам и будущей карьеры",
        cta: "Записаться на пробный урок",
      },
      benefits: [
        { title: "Углубленная программа", description: "Подготовка к международным экзаменам, интегрированная в курс", icon: BookOpen },
        { title: "Актуальные темы", description: "Современный язык на примере диалогов из реальной жизни", icon: MessageSquare },
        { title: "Квалифицированные преподаватели", description: "Специалисты с опытом преподавания по коммуникативной методике", icon: Award },
        { title: "Современные технологии ", description: "Использование цифровых ресурсов и интерактивных платформ", icon: Briefcase },
      ],
      activities: [
        { title: "Работа в парах и группах", description: "Развитие диалогической речи, навыков аргументации и критического мышления", image: "/assets/teenage/pair-and-groupwork.jpg" },
        { title: "Проектная работа", description: "Создание презентаций и исследовательских проектов на английском", image: "/assets/teenage/project.jpg" },
        { title: "Расширение кругозора", description: "Контент, расширяющий как общие знания о мире, так и о культуре англоязычных стран", image: "/assets/teenage/Horizon.jpg" },
      ],
      exams: {
        title: "Подготовка к экзаменам",
        subtitle: "Интенсивная подготовка с экспертами",
        items: [
          { name: "ОГЭ/ЕГЭ", color: "bg-green-500" },
        ],
      },
      pricing: {
        title: "Тарифы",
        plans: [
          {
            name: "Мини-группы",
            price: "от 1400 ₽/ занятие",
            features: ["", ""],
          },
          {
            name: "Индивидуальные занятия",
            price: "от 3000 ₽/занятия",
            features: ["", ""],
            popular: true,
          }
        ],
      },
      schedule: [
        { day: "Пн-Пт:", times: ["9:00 - 21:00"] },
        { day: "Сб", times: ["10:00 - 18:00"] },
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
        title: "English for Teenagers",
        subtitle: "Modern programs for confident communication, exam preparation, and future career success.",
        cta: "Book a trial lesson",
      },
      benefits: [
        { title: "Advanced Programs ", description: "Integrated preparation for international exams", icon: BookOpen },
        { title: "Relevant Topics ", description: "Modern language through real-life dialogues", icon: MessageSquare },
        { title: "Qualified Teachers", description: " Specialists experienced in the communicative method", icon: Award },
        { title: "Modern Technologies", description: "Use of digital resources and interactive platforms", icon: Briefcase },
      ],
      activities: [
        { title: "Pair and Group Work", description: "Learning to communicate, debate, and think critically", image: "/assets/teenage/pair-and-groupwork.jpg" },
        { title: "Project Work", description: "Creating presentations and research projects", image: "/assets/teenage/project.jpg" },
        { title: "Broadening Horizons", description: "Watching and discussing movies in English", image: "/assets/teenage/Horizon.jpg" },
      ],
      exams: {
        title: "Exam Preparation",
        subtitle: "Intensive preparation with experts",
        items: [
          { name: "National Exams", color: "bg-green-500" },
        ],
      },
      pricing: {
        title: "Pricing Plans",
        plans: [
          {
            name: "Mini Groups",
            price: "from 1400₽/month",
            popular: true,
          },
          {
            name: "Individual lessons",
            price: "from 3000₽/hour",
          }
        ],
      },
      schedule: [
        { day: "Tuesday", times: ["9:00 - 10:00"] },
        { day: "Thursday", times: ["9:00 - 10:00"] },
      ],
      languageToggle: "Русский",
    },
  }

  const t = translations[language]

  const toggleLanguage = () => setLanguage(language === "ru" ? "en" : "ru")
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleDropdown = (dropdown: string) => setActiveDropdown(activeDropdown === dropdown ? null : dropdown)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">

  

      {/* HERO */}
      <section className="relative bg-primary pb-32 pt-60 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl leading-tight">
              {t.hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex justify-center gap-4">
  <Link
    href="/bookings"
    className="relative z-10 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-[#5C162E] font-semibold shadow-lg hover:shadow-xl transition"
  >
    {t.hero.cta}
  </Link>
</div>
<div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10 pointer-events-none"></div>

          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
            {language === 'ru' ? 'Преимущества' : 'Benefits'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#5C162E] transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-[#5C162E] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
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
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-96">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">{t.exams.title}</h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">{t.exams.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t.exams.items.map((exam, index) => (
              <button
                key={index}
                onClick={() => setActiveExam(index)}
                className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${activeExam === index ? 'scale-105' : 'opacity-80'
                  } ${exam.color}`}
              >
                {exam.name}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExam}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-gray-600">
                {language === 'ru'
                  ? 'Интенсивная подготовка к экзамену с опытными преподавателями'
                  : 'Intensive exam preparation with experienced teachers'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">
              {language === 'ru' ? 'Расписание занятий' : 'Class Schedule'}
            </h2>
          </FadeIn>
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
            {t.schedule.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="mb-6 last:mb-0">
                  <div className="mb-2 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{item.day}</h3>
                  </div>
                  <div className="ml-7 space-y-2">
                    {item.times.map((time, timeIndex) => (
                      <div key={timeIndex} className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
            {t.pricing.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-[#5C162E] ${plan.popular ? "scale-105 shadow-lg" : ""}`}
              >
                <h3 className="text-xl font-bold mb-4 text-[#5C162E]">{plan.name}</h3>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5C162E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'ru' ? 'Записаться на бесплатный урок-диагностику' : 'Sign up for a free diagnostic lesson'}
          </h2>
          <a href="/bookings" className="bg-white text-[#5C162E] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            {t.hero.cta}
          </a>
        </div>
      </section>

    </div>
  )
}
