"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import {
  Phone,
  Mail,
  Globe,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Clock,
  Landmark,
  Info,
  BookOpen,
  MessageCircle,
  Award,
  FileText,
} from "lucide-react"

export default function Teachers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
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

  const t = {
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
        { title: "КИТАЙСКАЯ КАЛЛИГРАФИЯ", href: "/chinese-calligraphy" },
        { title: "ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ", href: "/creative-workshops" },
      ],
      news: "НОВОСТИ",
      contacts: "КОНТАКТЫ",
    },
    teachers: {
      title: "НАШИ ПРЕПОДАВАТЕЛИ",
      subtitle: "Познакомьтесь с нашей командой профессиональных педагогов",
      cta: "Записаться на пробный урок",
      breadcrumbs: {
        home: "Главная",
        teachers: "Преподаватели",
      },
    },
    teachersList: [
        {
        name: "Юлия",
        position: "Преподаватель английского языка",
        education: "Trinity College London",
        alma: "Забайкальский государственный педагогический университет",
        experience: "Опыт преподавания: 15 лет",
        description:
          "Анна специализируется на обучении детей младшего и среднего школьного возраста. Использует коммуникативную методику и игровые подходы для эффективного усвоения материала.",
        certifications: ["CertTESOL", ],
        languages: [" Английский (C2)"],
        media: [
          {
            type: "image",
            src: "/assets/teachers/Yulia.jpg",
            alt: "Анна Петрова на уроке с детьми",
          },
          {
            type: "certificate",
            src: "/teachers/anna-petrova-celta.jpg",
            alt: "Language Instructor",
          },
        ],
      },
      {
        name: "Лаки",
        position: "Преподаватель английского языка",
        education: "Московский Авиационный Институт",
        experience: "Опыт преподавания: 5 лет",
        description:
          "Анна специализируется на обучении детей младшего и среднего школьного возраста. Использует коммуникативную методику и игровые подходы для эффективного усвоения материала.",
        certifications: ["TESOL/TEFL", ""],
        languages: ["Английский (C2)", ],
        media: [
          {
            type: "image",
            src: "/assets/teachers/lackson.jpg",
            alt: "Language Instructor",
          },
          {
            type: "certificate",
            src: "/teachers/anna-petrova-celta.jpg",
            alt: "Сертификат CELTA Анны Петровой",
          },
        ],
      },
    ],
    qualifications: {
      title: "КВАЛИФИКАЦИИ И СЕРТИФИКАТЫ",
      description: "Наши преподаватели имеют международные сертификаты и постоянно повышают свою квалификацию",
      items: [
        "Сертификаты CELTA и DELTA от Кембриджского университета",
        "Сертификаты TKT (Teaching Knowledge Test)",
        "Сертификаты HSK и HSKK для преподавателей китайского языка",
        "Сертификаты IELTS Examiner и TOEFL Instructor",
        "Регулярное участие в методических семинарах и конференциях",
      ],
    },
    methodology: {
      title: "НАША МЕТОДОЛОГИЯ",
      description: "Мы используем коммуникативный подход и современные методики преподавания",
      items: [
        {
          title: "Коммуникативный подход",
          description: "Фокус на развитии разговорных навыков и практическом использовании языка",
        },
        {
          title: "Индивидуальный подход",
          description: "Учет особенностей и потребностей каждого студента",
        },
        {
          title: "Интерактивное обучение",
          description: "Использование игр, ролевых ситуаций и мультимедийных материалов",
        },
      ],
    },
    joinTeam: {
      title: "ПРИСОЕДИНЯЙТЕСЬ К НАШЕЙ КОМАНДЕ",
      description: "Мы всегда рады талантливым и увлеченным преподавателям",
      requirements: [
        "Высшее лингвистическое или педагогическое образование",
        "Опыт преподавания от 2 лет",
        "Владение современными методиками преподавания",
        "Любовь к своему делу и желание развиваться",
      ],
      cta: "Связаться с нами",
    },
    trial: {
      title: "ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК",
      description: "Оставьте заявку, и мы свяжемся с вами для записи на бесплатное пробное занятие",
      cta: "Записаться",
    },
    footer: {
      quickLinks: "Быстрые ссылки",
      links: ["О школе", "Наши курсы", "Расписание", "Преподаватели", "Цены", "Блог", "Контакты"],
      contacts: "Контакты",
      workingHours: {
        title: "Режим работы",
        weekdays: "Понедельник - Пятница: 9:00 - 21:00",
        saturday: "Суббота: 10:00 - 18:00",
        sunday: "Воскресенье, выходной",
      },
      socialMedia: "Социальные сети",
      copyright: "© 2024 Tut School. Все права защищены.",
    },
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
      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 pt-[90px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-primary">
                  {t.teachers.breadcrumbs.home}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{t.teachers.breadcrumbs.teachers}</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-primary">{t.teachers.title}</h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.teachers.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Teachers List Section */}
              <section id="teachers-list" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.teachersList.map((teacher, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
              >
                {/* Teacher Image - Updated with larger height */}
                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
        {teacher.media[0].type === "image" && (
          <Image
            src={teacher.media[0].src}
            alt={`${teacher.name}, Professional Teacher`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 30vw"
            priority={index < 3}
          />
        )}
      </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{teacher.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{teacher.position}</p>
                  <p className="mb-4 text-sm font-medium text-primary">{teacher.experience}</p>
                  <div className="mb-4 space-y-2 text-sm text-gray-600">
                    <p>{teacher.education}</p>
                    <p>{teacher.alma}</p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-1 text-xs font-semibold uppercase text-gray-500">
                      Сертификаты:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-gray-500">
                      Языки:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.languages.map((lang, i) => (
                        <span key={i} className="text-xs text-gray-600">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-primary">{t.qualifications.title}</h2>
              <p className="mb-8 text-lg text-gray-600">{t.qualifications.description}</p>
              <ul className="space-y-4 text-left">
                {t.qualifications.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-3xl font-bold text-primary">{t.methodology.title}</h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">{t.methodology.description}</p>
            <div className="grid gap-8 md:grid-cols-3">
              {t.methodology.items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section id="join-team" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-center text-3xl font-bold text-primary">{t.joinTeam.title}</h2>
              <p className="mb-8 text-center text-lg text-gray-600">{t.joinTeam.description}</p>
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Требования к кандидатам:</h3>
                <ul className="space-y-3">
                  {t.joinTeam.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t.joinTeam.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-xl bg-primary shadow-xl">
              <div className="relative">
                <div className="relative px-8 py-16 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.trial.title}</h2>
                  <Link
                    href="/bookings"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.trial.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
                <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/103804746" 
            style={{position: "absolute", left: "-9999px"}} 
            alt="" 
          />
        </div>
      </noscript>
        </section>
      </main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Наши преподаватели - Tut School",
      "description": "Познакомьтесь с нашей командой профессиональных педагогов",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://tutschool.ru/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Преподаватели",
            "item": "https://tutschool.ru/teachers"
          }
        ]
      },
      "mainEntity": t.teachersList.map(teacher => ({
        "@type": "Person",
        "name": teacher.name,
        "jobTitle": teacher.position,
        "alumniOf": teacher.alma,
        "hasOccupation": {
          "@type": "Occupation",
          "name": teacher.position,
          "experienceRequirements": teacher.experience
        },
        "description": teacher.description,
        "knowsLanguage": teacher.languages,
        "hasCredential": teacher.certifications.map(cert => ({
          "@type": "EducationalOccupationalCredential",
          "name": cert
        }))
      }))
    })
  }}
/>
    </div>
  )
}
