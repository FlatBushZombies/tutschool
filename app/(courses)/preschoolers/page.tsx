"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
ArrowRight,Check,
  Clock,Calendar, Phone, Mail, ChevronDown, X, Menu, Globe, Info, Award, MessageCircle, FileText, BookOpen
 
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"
import Head from "next/head"

export default function PreschoolersPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
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
          title: "Английский для дошкольников",
          subtitle: "Увлекательные занятия для детей 4-6 лет в игровой форме",
          cta: "Записаться на пробный урок",
        },
      parents: {
        title: "Почему родители выбирают нас",
      },
      services: {
        title: "Чем мы занимаемся",
        schedule: "Расписание занятий",
      },
      footnote: {
        title: "Записаться на бесплатный урок-диагностику",
        subtitle: "Познакомьтесь с преподавателем и нашей методикой обучения. Первое занятие бесплатно!",
        cta: "Записаться"
      },
      benefits: [
        {
          title: "Игровой формат ",
          description: "Обучение через игры – ведущий вид деятельности в дошкольном возрасте",
        },
        {
          title: "Маленькие группы",
          description: "4-6 детей для максимального внимания каждому",
        },
        {
          title: "Опытные педагоги",
          description: "Специалисты по работе с дошкольниками",
        },
        {
          title: "Эффективные методы",
          description: "Проверенные подходы к обучению детей",
        },
      ],
      schedule: [
        {
          day: "Пн-Пт: ",
          times: ["9:00 - 21:00"],
        },
        {
          day: "Сб",
          times: ["10:00 - 18:00"],
        },
      ],
                  pricing: {
        title: "Тарифы",
        items: [
          {
            type: "Мини-группы",
            price: "от 1400 ₽/  занятие"
          },
          {
            type: "Индивидуальные занятия",
            price: "от 3000 ₽/занятия"
          }
        ]
      },
      activities: [
        {
          title: "Изучение алфавита",
          description: "Знакомство с буквами и звуками с применением метода phonics (звуковой метод обучения чтению)",
          image: "/assets/preschoolers/alphabet-learning.jpg",
        },
        {
          title: "Базовая лексика",
          description: "Изучение основных слов и фраз",
          image: "/assets/preschoolers/basic-vocabulary.jpg",
        },
        {
          title: "Творческие занятия",
          description: "Рисование, аппликации на английском",
          image: "/assets/preschoolers/creative.jpg",
        },
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
          title: "English for Preschoolers",
          subtitle: "Engaging lessons for children aged 4–6 in a playful format. First introduction to English through songs, games, and creative activities",
          cta: "Book a lesson",
        },
        parents: {
          title: "Why Parents Choose Us!"
        },
        services: {
          title: "What We Do",
          schedule: "Class Schedule"
        },
        footnote: {
          title: "Sign up for a free diagnostic lesson",
          subtitle: "Meet the teacher and learn about our teaching methodology.",
          cta: "Register"
        },
      benefits: [
        {
          title: "Play-based learning",
          description: " Learning through play is the main activity at preschool age.",
        },
        {
          title: "Small groups",
          description: "4-6 children for maximum individual attention",
        },
        {
          title: "Experienced teachers",
          description: "Specialists in preschool education",
        },
        {
          title: "Effective Methods",
          description: "Effective approaches to teaching children.",
        },
      ],
      schedule: [
        {
          day: "Mon-Fri:",
          times: ["9:00 - 21:00"],
        },
        {
          day: "Sat: ",
          times: ["10:00 - 18:00"],
        },
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
      activities: [
        {
          title: "Learning the alphabet",
          description: "Introduction to letters and sounds using the phonics method.",
          image: "/assets/preschoolers/alphabet-learning.jpg",
        },
        {
          title: "Basic vocabulary",
          description: "Learning essential words and phrases",
          image: "/assets/preschoolers/basic-vocabulary.jpg",
        },
        {
          title: "Creative activities",
          description: "Drawing, modeling, and crafts in English",
          image: "/assets/preschoolers/creative.jpg",
        },
      ],
      languageToggle: "Русский",
    },
  };

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return   (
          <div className="flex min-h-screen flex-col">



      <main>
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            {t.parents.title}
          </h2>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.benefits.map((benefit, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Activities Section */}
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            {t.services.title}
          </h2>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
  {t.activities.map((activity, index) => (
    <FadeIn key={index} delay={index * 100}>
      <div className="flex flex-col h-full overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02]">
        {/* Larger image container with fixed aspect ratio */}
        <div className="relative w-full min-h-[480px]"> {/* 4:3 aspect ratio - you can adjust this */}
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3} // Optional: prioritize loading first few images
          />
        </div>
        
        {/* Text content with balanced spacing */}
        <div className="flex flex-col p-6 flex-grow space-y-3">
          <h3 className="text-xl font-semibold line-clamp-2">{activity.title}</h3>
          <p className="text-gray-600 line-clamp-3 flex-grow">{activity.description}</p>
          {/* Optional button to maintain consistent bottom spacing */}
        
        </div>
      </div>
    </FadeIn>
  ))}
</div>
      </div>
    </section>

   {/* Schedule Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <FadeIn>
      <h2 className="mb-12 text-center text-3xl font-bold text-primary">
        {t.services.schedule}
      </h2>
    </FadeIn>

    {/* Cards container */}
    <div className="flex flex-wrap justify-center gap-6">
      {t.schedule.map((item, index) => (
        <FadeIn key={index} delay={index * 100}>
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
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


{/* Pricing */}
<section className="bg-gray-50 py-16 flex justify-center items-center">
  <div className="w-full max-w-7xl px-4">
    <motion.h2
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={fadeIn}
      className="mb-12 text-center text-4xl font-extrabold text-gray-800"
    >
      {t.pricing.title}
    </motion.h2>

    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={staggerContainer}
      className="grid gap-10 justify-center sm:grid-cols-2 md:grid-cols-3"
    >
      {t.pricing.items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="rounded-xl bg-white p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-2 border-[#5C162E] w-full max-w-xs"
        >
          <h3 className="mb-3 text-2xl font-semibold text-gray-900">{item.type}</h3>
          <p className="text-4xl font-bold text-primary mb-4">{item.price}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>



    {/* CTA Section */}
    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-bold">
              {t.footnote.title}
            </h2>
            <Link
              href="/bookings"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all hover:bg-gray-100"
            >
              {t.footnote.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  </main>
</div>
);
}
