
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
  
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-32">
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
<section className="py-28 bg-[#FAFAFA]">
  <div className="container mx-auto px-4">

    {/* Section Header */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-[#5C162E]/10 text-[#5C162E] font-medium">
        Pricing
      </span>
      <h2 className="text-4xl font-bold tracking-tight text-[#5C162E]">
        {t.pricing.title}
      </h2>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {t.pricing.plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={`
            relative rounded-3xl p-10 shadow-xl transition-all
            bg-gradient-to-br from-white to-[#F7F2F4]
            hover:-translate-y-1 hover:shadow-2xl
            ${plan.popular ? "ring-2 ring-[#5C162E]" : ""}
          `}
        >
          {/* Popular badge (unchanged logic) */}
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-[#5C162E] text-white text-sm font-semibold shadow-md">
              {language === "ru" ? "Популярный" : "Popular"}
            </div>
          )}

          {/* Plan Name */}
          <h3 className="text-2xl font-semibold text-[#5C162E] mb-6 text-center">
            {plan.name}
          </h3>

          {/* Price */}
          <div className="text-center mb-10">
            <span className="text-5xl font-bold text-[#5C162E]">
              {plan.price}
            </span>
          </div>

          {/* CTA (visual enhancement only) */}
          <Link
            href="/bookings"
            className={`
              block w-full text-center rounded-xl py-4 font-semibold transition-all 
              ${
                plan.popular
                  ? "bg-white text-white hover:opacity-90"
                  : "bg-[#5C162E] border border-[#5C162E]/20 text-[#5C162E] hover:bg-[#5C162E]/5 text-white"
              }
            `}
          >
            {t.hero.cta}
          </Link>
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