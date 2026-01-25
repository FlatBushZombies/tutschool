"use client"

import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Globe,
  Menu,
  X,
  ChevronDown,
  Clock,
  Phone,
  Mail,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Sparkles,
  Landmark,
  Info,
  MessageCircle,
  Award,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ValuesPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Image data for each value section
  const valueImages = {
    community: [
      { src: "/assets/gallery/Community.jpg", alt: "Community 1" },
      { src: "/Community-2.jpg", alt: "Community 2" },
    ],
    quality: [
      { src: "/assets/gallery/Community-2.jpg", alt: "Quality 1" },
    ],
    geography: [
      { src: "/assets/gallery/Cultural-Studies-2.jpg", alt: "Cultural Studies 1" },
      { src: "/assets/gallery/Cultural-Studies-1.jpg", alt: "Cultural Studies 2" },
    ],
    result: [
      { src: "/assets/gallery/assesment.jpg", alt: "Assessment 1" },
      { src: "/assets/gallery/assesment-1.jpg", alt: "Assessment 2" },
    ],
    creative: [
      { src: "/assets/gallery/Arts-3.jpg", alt: "Arts 1" },
      { src: "/assets/gallery/Arts.jpg", alt: "Arts 2" },
      { src: "/assets/gallery/Arts-2.jpg", alt: "Arts 3" },
    ],
  }

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
      pageTitle: "Ценности Tut School - Принципы нашей языковой школы",
      pageDescription: "Курсы английского и китайского с упором на сообщество, творчество и измеримые результаты. Присоединяйтесь к нашему языковому сообществу!",
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
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
      values: {
        community: {
          title: "Комьюнити",
          description: "Группы по изучению языков в нашей школе – это сообщество друзей. Основа изучения языков –коммуникация, и мы уделяем особое внимание развитию навыков общения.",
          points: [],
        },
        quality: {
          title: "Качество",
          description: "Грамотная методика – это база любого успешного языкового курса. В группах по изучению общего английского мы применяем коммуникативный подход.",
          points: [],
        },
        geography: {
          title: "Страноведение",
          description: "Язык – неотъемлемая часть культуры, поэтому мы знакомим наших учеников с культурой страны изучаемых языков.",
          points: [],
        },
        result: {
          title: "Измерение результата",
          description: "Мы помогаем достигать цели и поэтому всегда измеряем прогресс. Мы проводим промежуточное тестирование после каждого пройденного раздела курса.",
          points: [],
        },
        creative: {
          title: "Творчество",
          description: "Творчество и языки тесно связаны, потому что и то и другое помогает общаться с миром и выражать свои эмоции.",
          points: [],
        },
      },
      cta: "Записаться на пробное занятие",
      languageToggle: "English",
      swiperNavigation: {
        prev: "Предыдущий",
        next: "Следующий",
      },
    },
    en: {
      pageTitle: "Tut School Values - Our Language Learning Principles",
      pageDescription: "Professional English and Chinese language courses in Moscow with focus on community, creativity and measurable results. Join our language community!",
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
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
        masterclasses: "MASTERCLASS",
        contacts: "CONTACTS",
      },
      values: {
        community: {
          title: "Community",
          description: "Language study groups in our school are a community of friends. The foundation of language learning is communication.",
          points: [],
        },
        quality: {
          title: "Quality",
          description: "A well-structured methodology is the foundation of any successful language course. In our general English study groups, we use a communicative approach.",
          points: [],
        },
        geography: {
          title: "Regional Geography",
          description: "Language is an integral part of culture, which is why we introduce our students to the culture of the countries whose languages they are learning.",
          points: [],
        },
        result: {
          title: "Measuring the result",
          description: "We help our students achieve their goals, and that's why we always measure progress. We conduct interim assessments after each completed section.",
          points: [],
        },
        creative: {
          title: "Creativity",
          description: "Creativity and languages are closely connected because both help us communicate with the world and express our emotions.",
          points: [],
        },
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

  // Custom swiper navigation component
  const SwiperNavigation = ({ id }: { id: string }) => (
    <div className="flex justify-end gap-2 mt-4">
      <button
        className={`swiper-button-prev-${id} flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-gray-100 transition-colors`}
        aria-label={t.swiperNavigation.prev}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className={`swiper-button-next-${id} flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-gray-100 transition-colors`}
        aria-label={t.swiperNavigation.next}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tutschool.ru/our-values" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tutschool.ru/our-values" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:description" content={t.pageDescription} />
        <meta property="og:image" content="https://tutschool.ru/assets/images/values-social-preview.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tutschool.ru/our-values" />
        <meta property="twitter:title" content={t.pageTitle} />
        <meta property="twitter:description" content={t.pageDescription} />
        <meta property="twitter:image" content="https://tutschool.ru/assets/images/values-social-preview.jpg" />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": t.pageTitle,
            "description": t.pageDescription,
            "url": "https://tutschool.ru/our-values",
            "publisher": {
              "@type": "LanguageSchool",
              "name": "Tut School",
              "description": t.schoolSubtitle,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Zarechnaya street, 5, building 2",
                "addressLocality": "Khimki",
                "addressRegion": "Moscow region",
                "postalCode": "141400",
                "addressCountry": "RU"
              },
              "telephone": "+79836629730",
              "openingHours": "Mo-Fr 09:00-21:00, Sa 10:00-18:00",
              "image": "https://tutschool.ru/logo.png",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "50"
              }
            }
          })}
        </script>
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
    

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
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

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Community Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-community",
                      nextEl: ".swiper-button-next-community",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.community.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Наше сообщество" : "Our community"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="community" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Users className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.community.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.community.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Quality Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-quality",
                      nextEl: ".swiper-button-next-quality",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.quality.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Качество" : "Quality"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="quality" />
                </div>
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <BookOpen className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.quality.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.quality.description}</p>
                  <ul className="space-y-2">
                    {t.values.quality.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Regional Geography Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-geography",
                      nextEl: ".swiper-button-next-geography",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.geography.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Страноведение" : "Regional Geography"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="geography" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Heart className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.geography.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.geography.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Assessment Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-result",
                      nextEl: ".swiper-button-next-result",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.result.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Измерение результата" : "Measuring results"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="result" />
                </div>
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.result.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.result.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Arts Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-creative",
                      nextEl: ".swiper-button-next-creative",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.creative.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Творчество" : "Creativity"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="creative" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Sparkles className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.creative.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.creative.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeIn}>
              <h2 className="mb-6 text-3xl font-bold">{t.cta}</h2>
              <Link
                href="/bookings"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-gray-100"
              >
                <Sparkles className="mr-2 h-5 w-5" />
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