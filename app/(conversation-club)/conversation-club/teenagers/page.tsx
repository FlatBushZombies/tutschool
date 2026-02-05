"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, Globe, BookOpen, Clock, Phone, Mail,
  ChevronDown, X, Menu, MessageCircle, FileText, Award,
  ArrowRight, Check, Landmark, Info
} from "lucide-react";
import { FadeIn } from "@/components/animations/scroll-animations";

export default function TeenagersPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      promo: "Запишитесь на пробный урок и получите скидку 20% на первый месяц обучения!",
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
        title: "Разговорный клуб для подростков",
        subtitle: "Улучшайте свой английский в веселой и дружеской атмосфере с носителями языка",
        cta: "Записаться на пробный урок"
      },
      features: [
        {
          title: "Интерактивное обучение",
          description: "Практика разговорного английского в группах до 6 человек",
          icon: MessageSquare
        },
        {
          title: "Носители языка",
          description: "Общение с преподавателями из Великобритании и США",
          icon: Globe
        },
        {
          title: "Современные темы",
          description: "Обсуждение актуальных для подростков тем и интересов",
          icon: BookOpen
        },
        {
          title: "Гибкий график",
          description: "Занятия после школы и в выходные дни",
          icon: Clock
        }
      ],
      activities: [
        {
          title: "Игровые вечера",
          description: "Увлекательные игры и конкурсы на английском языке",
          image: "/assets/gallery/Game-Nights.jpg"
        },
        {
          title: "Киноклуб",
          description: "Просмотр и обсуждение фильмов и сериалов на английском",
          image: "/assets/gallery/Club.jpg"
        },
        {
          title: "Творческие проекты",
          description: "Создание презентаций, видео и других проектов на английском",
          image: "/assets/gallery/Creatives.jpg"
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
      promo: "Sign up for a trial lesson and get a 20% discount on your first month of study!",
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
        title: "Conversation Club for Teenagers",
        subtitle: "Improve your English in a fun and friendly atmosphere with native speakers",
        cta: "Book a trial lesson"
      },
      features: [
        {
          title: "Interactive Learning",
          description: "Practice spoken English in groups of up to 6 people",
          icon: MessageSquare
        },
        {
          title: "Native Speakers",
          description: "Communication with teachers from the UK and USA",
          icon: Globe
        },
        {
          title: "Modern Topics",
          description: "Discussion of topics and interests relevant to teenagers",
          icon: BookOpen
        },
        {
          title: "Flexible Schedule",
          description: "Classes after school and on weekends",
          icon: Clock
        }
      ],
      activities: [
        {
          title: "Game Nights",
          description: "Fun games and competitions in English",
          image: "/assets/gallery/Game-Nights.jpg"
        },
        {
          title: "Movie Club",
          description: "Watching and discussing movies and TV shows in English",
          image: "/assets/gallery/Club.jpg"
        },
        {
          title: "Creative Projects",
          description: "Creating presentations, videos and other projects in English",
          image: "/assets/gallery/Creatives.jpg"
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
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
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

      <FadeIn>

        {/* Hero Section */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-primary pt-56 sm:pt-32">
          {/* Subtle premium gradient overlay */}
          

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight"
              >
                {t.hero.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-10"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="/bookings"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#5C162E] px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg shadow-xl"
                >
                  {t.hero.cta}
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg"
                >
                  {language === 'ru' ? 'Узнать больше' : 'Learn More'}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-gray-200 hover:border-[#5C162E] transition-all shadow-lg"
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
        <section className="py-24 bg-gray-50">
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
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-96">
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
        <section className="py-24">
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
                    className={`px-8 py-3 rounded-xl font-medium transition-all ${
                      activeTab === index
                        ? "bg-[#5C162E] text-white shadow-xl"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                  className="text-center bg-gray-50 p-10 rounded-2xl shadow-lg"
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

    {/* Pricing Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      {t.pricing.plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className={`
            relative rounded-3xl p-10 shadow-xl transition-all
            bg-white
            ${
              index === 0
                ? "bg-gradient-to-br from-[#F5EFF2] to-white"
                : "bg-gradient-to-br from-[#F1EAF0] to-white"
            }
          `}
        >
          {/* Popular badge (kept exactly as logic defines) */}
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-[#5C162E] text-white text-sm font-semibold shadow-md">
              {language === "ru" ? "Популярный" : "Popular"}
            </div>
          )}

          {/* Plan Name */}
          <h3 className="text-2xl font-semibold text-[#5C162E] mb-6">
            {plan.name}
          </h3>

          {/* Price */}
          <div className="mb-10">
            <span className="text-5xl font-bold text-[#5C162E]">
              {plan.price}
            </span>
          </div>

          {/* CTA (visual only, no new logic) */}
          <Link
            href="/bookings"
            className={`
              block w-full text-center rounded-xl py-4 font-semibold transition-all
              ${
                index === 0
                  ? "bg-[#5C162E] text-white hover:opacity-90"
                  : "bg-white border border-[#5C162E]/20 text-[#5C162E] hover:bg-[#5C162E]/5"
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
        <section className="py-24 bg-[#5C162E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ru' ? 'Запишитесь на пробный урок' : 'Book a trial lesson'}
            </h2>
            <a href="/bookings"
              className="bg-white text-[#5C162E] px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg shadow-xl"
            >
              {t.hero.cta}
            </a>
          </div>
        </section>
      </FadeIn>

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
  );
}
