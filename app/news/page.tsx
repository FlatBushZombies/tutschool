"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link"
import Image from "next/image"
import {
  Clock,
  Calendar,
  Users,
  BookOpen,
  Mail,
  Globe,
  Phone,
  Landmark,
  CheckCircle,
  ArrowRight,
  Award,
  Brain,
  Target,
  ChevronDown,
  X, Menu,
  Info,
  FileText,
  MessageCircle,
  Sparkles,
  Heart,
  Music
} from "lucide-react"

const translations = {
  schoolName: "Tut School",
  languageToggle: "English",
  schoolSubtitle: "Курсы иностранных языков",
  phone: "+7 (983) 662-97-30",
  email: "info@tutschool.ru",
  address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
  rating: "4.8 на Яндексе",
  search: "Поиск",
  workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
  description: "Наша программа сочетает современные методики с индивидуальным подходом, чтобы помочь вам достичь ваших языковых целей.",
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
      { title: "ТВОРЧЕСКИЕ МАСТЕРСКИЕ", href: "/creative-workshops" },
    ],
    news: "НОВОСТИ",
    contacts: "КОНТАКТЫ",
  },
  h1: "Последние новости",
  heroSubtitle: "Будьте в курсе последних новостей, событий и достижений школы Tut School",
  newsItems: [
    {
      title: "Открыта запись на летний языковой лагерь",
      date: "15 мая 2024",
      description: "Присоединяйтесь к нашему увлекательному летнему языковому лагерю для детей 7-12 лет. Две недели погружения в языковую среду, культурные мероприятия и веселые игры.",
      image: "https://images.pexels.com/photos/8500251/pexels-photo-8500251.jpeg",
      category: "События"
    },
    {
      title: "Новый мастер-класс по китайской каллиграфии",
      date: "10 мая 2024",
      description: "Мы запускаем новый мастер-класс по китайской каллиграфии для всех возрастов. Изучайте искусство красивого письма, совершенствуя навыки китайского языка.",
      image: "https://images.pexels.com/photos/8500291/pexels-photo-8500291.jpeg",
      category: "Курсы"
    },
  ],
  ctaTitle: "Будьте на связи",
  ctaSubtitle: "Подпишитесь на нашу рассылку, чтобы получать последние новости и обновления",
  subscribe: "Подписаться",
}

export default function NewsPage() {
  const t = translations

  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const dropdownRef = useRef<HTMLDivElement>(null)

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
      <Head>
        <title>{t.h1}</title>
        <meta name="description" content={t.heroSubtitle} />
        <meta name="keywords" content="курсы английского Химки, китайский язык Новогорск, обучение английскому, языковая школа, Tut School, английский для детей" />
        <meta property="og:title" content={t.h1} />
        <meta property="og:description" content={t.heroSubtitle} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tutschool.ru/news" />
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

{/* HERO */}
<section className="relative bg-primary pt-56 sm:pt-54 md:pt-48 lg:pt-52 pb-20 sm:pb-24 md:pb-28 lg:pb-28 text-white">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
        {t.h1}
      </h1>
      <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-lg text-white/80">
        {t.heroSubtitle}
      </p>
    </div>
  </div>
  <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10 pointer-events-none"></div>
</section>

      {/* CONTENT */}
<section className="relative bg-white py-24 text-black">
  <div className="container mx-auto px-4">
    
    {/* Section header */}
    <div className="mb-16 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-sm">
        <FileText className="h-4 w-4 text-black/70" />
        <span className="uppercase tracking-wide text-black/70">
          {t.nav.news}
        </span>
      </div>

      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        {t.h1}
      </h2>

      <p className="mx-auto max-w-2xl text-lg text-black/60">
        {t.heroSubtitle}
      </p>
    </div>

    {/* Premium placeholder card */}
    <div className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]">
        
        {/* Decorative gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent" />

        <div className="relative z-10 text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-pink-600/10">
            <Clock className="h-6 w-6 text-pink-600" />
          </div>

          <p className="text-lg font-medium text-black/80">
            Скоро появятся новости о школе
          </p>

          <p className="mt-2 text-sm text-black/50">
            {t.rating}
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


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
