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
      image: "/assets/children/reading.jpg"
    },
    { 
      title: language === 'ru' ? 'Развитие языковых навыков' : 'Grammar Games',
      description: language === 'ru' 
        ? 'Уроки по развитию навыков чтения, письма, говорения, понимания речи на слух' 
        : 'Learning grammar through interactive exercises',
      image: "/assets/children/grammar-games.jpg"
    },
    { 
      title: language === 'ru' ? 'Знакомство с традициями и культурой англоязычных стран' : 'Creative Projects',
      description: language === 'ru' 
        ? 'Страноведение на уроках и внеклассных мероприятиях' 
        : 'Drawing, crafts and drama in English',
      image: "/assets/children/creative-projects.jpg"
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
    <div className="flex min-h-screen flex-col pt-[180px] bg-primary">
      <FadeIn>

        {/* Hero Section */}
        <section className="relative bg-primary py-24 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-primary" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="mb-4 text-4xl font-bold md:text-5xl tracking-tight">
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
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#5C162E]/30 to-transparent" />
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Преимущества' : 'Benefits'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                  }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition"
                >
                  <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
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
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group flex flex-col h-full"
                >
                  <div className="relative h-96 w-full overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C162E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Расписание занятий' : 'Class Schedule'}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {t.schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }
                  }}
                  className="w-full max-w-md rounded-2xl border border-gray-100 p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 text-[#5C162E] mr-2" />
                    <span className="font-medium">{item.day}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 text-[#5C162E] mr-2" />
                    <span>{item.times[0]}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
