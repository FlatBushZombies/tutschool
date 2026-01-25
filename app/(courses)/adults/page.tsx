"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  Clock,
  Users,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Landmark,Globe,
  Mail,
  MessageCircle,
  Briefcase,
  ChevronDown, X, Menu, Info, Award, FileText
} from "lucide-react"
import { ScrollProgress, ScrollSpy } from "@/components/animations/scroll-animations"



export default function AdultsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
    const [language, setLanguage] = useState<"ru" | "en">("ru")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
    const [sliderDirection, setSliderDirection] = useState<"next" | "prev" | null>(null)
    const [activeSection, setActiveSection] = useState<string>("hero")
    const [isScrolled, setIsScrolled] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null)
    
    const [scrollY, setScrollY] = useState(0)

    
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
        const handleScroll = () => {
          setScrollY(window.scrollY)
          setIsScrolled(window.scrollY > 100)
        }
    
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
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
        title: "ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ И ИСКУССТВ",
        subtitle: "Мы помогаем детям и взрослым освоить английский и китайский языки в дружеской атмосфере",
        cta: "Записаться на пробный урок",
      },
      title: "АНГЛИЙСКИЙ ЯЗЫК ДЛЯ ВЗРОСЛЫХ",
      subtitle: "Эффективные курсы для работы и жизни",
      description: "Наши курсы английского языка для взрослых разработаны с учетом современных требований и потребностей. Мы поможем вам достичь ваших языковых целей, будь то продвижение по карьере, путешествия или саморазвитие.",
      levels: {
        title: "УРОВНИ ОБУЧЕНИЯ",
        items: [
          {
            name: "Elementary (A2)",
            description: "Базовая коммуникация"
          },
          {
            name: "Pre-Intermediate (A2+)",
            description: "Общение на основные темы для решения повседневных задач"
          },
          {
            name: "Intermediate (B1)",
            description: "Свободное общение на повседневные темы"
          },
          {
            name: "Upper-Intermediate (B2)",
            description: "Уверенное владение языком в учебе и в работе"
          }
        ]
      },
      features: {
        title: "ОСОБЕННОСТИ КУРСА",
        items: [
          {
            title: "Мини-группы",
            description: "Максимальное внимание каждому студенту курса"
          },
          {
            title: "Современные методики",
            description: "Коммуникативный подход и интерактивные материалы"
          },
          {
            title: "Практика общения ",
            description: "Регулярные разговорные клубы и дискуссии"
          },
          {
            title: "Английский для профессиональных целей",
            description: "Специализированные модули по запросу"
          }
        ]
      },
      schedule: {
        title: "Расписание занятий",
        items: [
          {
            title: "Пн-Пт:",
            time: "9:00 - 21:00"
          },
          {
            title: "Сб: ",
            time: "10:00 - 18:00"
          },
          
        ],
        formats: [
          "Мини-группы (4-6 человек)",
          "Индивидуальные занятия",
          "Онлайн обучение"
        ]
      },
      benefits: {
        title: "ПРЕИМУЩЕСТВА ОБУЧЕНИЯ У НАС",
        items: [
          "Сертифицированные преподаватели с опытом работы",
          "Современные учебные материалы",
          "Регулярное тестирование прогресса",
          "Подготовка к международным экзаменам",
          "Разговорные клубы с носителями языка",
          "Гибкий график занятий"
        ]
      },
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
      cta: "Записаться на бесплатный урок-диагностику",
      trial: {
        title: "НАЧНИТЕ ОБУЧЕНИЕ СЕГОДНЯ",
        description: "Запишитесь на бесплатный пробный урок и определите свой уровень английского"
      },
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
        title: "SCHOOL OF FOREIGN LANGUAGES AND ARTS",
        subtitle: "We help children and adults learn English and Chinese in a friendly atmosphere",
        cta: "Book a lesson",
      },
      title: "ENGLISH FOR ADULTS",
      subtitle: "Effective courses for work and life",
      description: "Our English courses for adults are designed to meet modern requirements and needs. We will help you reach your language goals, whether for career advancement, travel, or self-development.",
      levels: {
        title: "LEARNING LEVELS",
        items: [
          {
            name: "Elementary (A2)",
            description: "Basic communication"
          },
          {
            name: "Pre-Intermediate (A2+)",
            description: "Communicating on everyday topics and solving daily tasks"
          },
          {
            name: "Intermediate (B1)",
            description: "Fluent communication on everyday topics"
          },
          {
            name: "Upper-Intermediate (B2)",
            description: "Confident language use for studies and work"
          }
        ]
      },
      features: {
        title: "COURSE FEATURES",
        items: [
          {
            title: "Mini-Groups",
            description: "Maximum attention for each student"
          },
          {
            title: "Modern Methods",
            description: "Communicative approach and interactive materials"
          },
          {
            title: "Speaking Practice",
            description: " Regular conversation clubs and discussions"
          },
          {
            title: "	English for professional purposes ",
            description: "Specialized modules on request"
          }
        ]
      },
      schedule: {
        title: "SCHEDULE AND FORMAT",
        items: [
          {
            title: "Mon-Fri:",
            time: "9:00 - 21:00"
          },
          {
            title: "Sat:",
            time: "10:00 - 18:00"
          },
        ],
        formats: [
          "Mini-groups (4-6 people)",
          "Individual lessons",
          "Online learning"
        ]
      },
      benefits: {
        title: "WHY CHOOSE US",
        items: [
          "Certified teachers with experience",
          "Modern learning materials",
          "Regular progress testing",
          "Preparation for international exams",
          "Conversation clubs with native speakers",
          "Flexible class schedule"
        ]
      },
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
      cta: "Sign up for a free diagnostic lesson",
      trial: {
        title: "START LEARNING TODAY",
        description: "Sign up for a free trial lesson and determine your English level"
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
      {/* Top Bar */}
            <ScrollProgress />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-white">
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

        {/* Course Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div variants={fadeIn} className="flex flex-col justify-center">
                <p className="text-lg text-gray-700">{t.description}</p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="relative overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="/assets/gallery/adults.jpg"
                    alt="Adult students learning English"
                    width={735}  
                    height={490}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Levels */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.levels.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {t.levels.items.map((level, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="rounded-lg bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="mb-3 text-xl font-bold text-primary">{level.name}</h3>
                  <p className="text-gray-600">{level.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.features.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {t.features.items.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {index === 0 && <Users className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  {index === 1 && <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  {index === 2 && <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  {index === 3 && <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Schedule */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.schedule.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div variants={fadeIn}>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-6 text-xl font-bold">Расписание занятий</h3>
                  <div className="space-y-4">
                    {t.schedule.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-6 text-xl font-bold">Форматы обучения</h3>
                  <div className="space-y-4">
                    {t.schedule.formats.map((format, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <p>{format}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.benefits.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {t.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-lg"
                >
                  <Star className="h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
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
      className="
        grid gap-8 md:grid-cols-3
        w-[90%] mx-auto md:ml-[20%] md:mr-auto
      "
    >
      {t.pricing.items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn}
          className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl border-2 border-[#5C162E]"
        >
          <h3 className="mb-4 text-xl font-bold">{item.type}</h3>
          <p className="text-3xl font-bold text-primary">{item.price}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">{t.trial.title}</h2>
              <Link
                href="/bookings"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-gray-100"
              >
                {t.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}