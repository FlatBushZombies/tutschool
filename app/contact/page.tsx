"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  ChevronDown,
  Menu,
  X,
  User,
  MessageSquare,
  AlertCircle,
  Loader2,
  Info,
  BookOpen,
  MessageCircle,
  Award,
  FileText,
  HelpCircle,
  ArrowRight,
} from "lucide-react"

interface BookingFormData {
  name: string
  phone: string
  serviceType: string
}

interface FormErrors {
  name?: string
  phone?: string
  serviceType?: string
  submit?: string
}

interface ServiceGroup {
  group: string
  services: string[]
}

const YandexMap = dynamic(() => import("@/components/YandexMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] rounded-lg bg-gray-200 flex items-center justify-center">
      <div className="text-gray-500">Загрузка карты...</div>
    </div>
  ),
})

export default function ContactPage() {
  const router = useRouter()
  const [language] = useState<"ru">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [pendingFormData, setPendingFormData] = useState<BookingFormData | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [mounted, setMounted] = useState(false)

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    serviceType: "",
  })

  const serviceGroups: ServiceGroup[] = [
    {
      group: "Английский язык",
      services: [
        "Английский для дошкольников",
        "Английский для детей 7-9 лет",
        "Английский для детей 10-12 лет",
        "Английский для подростков",
        "Английский для взрослых",
        "Мастер-класс по английскому",
        "Разговорный клуб английского",
      ],
    },
    {
      group: "Китайский язык",
      services: [
        "Китайский для дошкольников",
        "Китайский для детей 7-9 лет",
        "Китайский для детей 10-12 лет",
        "Китайский для подростков",
        "Китайский для взрослых",
        "Мастер-класс по китайскому",
        "Разговорный клуб китайского",
      ],
    },
    {
      group: "Общие программы",
      services: ["Мастер-класс", "Разговорный клуб"],
    },
  ]

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
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
      hero: {
        title: "ЗАБРОНИРОВАТЬ ЗАНЯТИЕ",
        subtitle:
          "Запишитесь на занятия, консультации или мероприятия с помощью нашей удобной системы онлайн-бронирования",
      },
      contactInfo: {
        title: "НАШИ КОНТАКТЫ",
        address: "Адрес",
        phone: "Телефон",
        email: "Email",
        workingHours: "Режим работы",
        weekdays: "Понедельник - Пятница: 9:00 - 21:00",
        saturday: "Суббота: 10:00 - 18:00",
        sunday: "Воскресенье: выходной",
        socialMedia: "Социальные сети",
      },
      contactForm: {
        title: "ОТПРАВЬТЕ НАМ ЗАЯВКУ",
        description: "Заполните форму ниже, и мы свяжемся с вами в ближайшее время",
        name: "Ваше имя",
        phone: "Телефон",
        service: "Услуга",
        submit: "Отправить заявку",
        success: "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
        error: "Произошла ошибка при отправке заявки. Попробуйте еще раз.",
      },
      faq: {
        title: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
        questions: [
          {
            question: "Как записаться на пробное занятие?",
            answer:
              "Вы можете записаться на пробное занятие, заполнив форму на нашем сайте, позвонив по телефону или отправив заявку по электронной почте.",
          },
          {
            question: "Какой возраст подходит для начала изучения иностранного языка?",
            answer:
              "Мы принимаем детей с 4 лет на курсы английского и с 5 лет на курсы китайского языка. Для взрослых ограничений по возрасту нет.",
          },
          {
            question: "Сколько человек в группе?",
            answer:
              "В наших группах обучается от 6 до 8 человек. Такой размер группы позволяет преподавателю уделить внимание каждому студенту.",
          },
        ],
      },
      visit: {
        title: "ЗАПИШИТЕСЬ НА ВИЗИТ В ШКОЛУ",
        description: "Лучший способ узнать о нашей школе — посетить ее лично. Мы приглашаем вас на экскурсию по школе.",
        cta: "Записаться на визит",
      },
      terms: {
        title: "Согласие на обработку данных",
        content:
          "Нажимая 'Принимаю', вы соглашаетесь на обработку ваших персональных данных (имя, телефон и выбранная услуга) для отправки заявки по электронной почте.",
        accept: "Принимаю",
        decline: "Отклонить",
      },
    },
  }

  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
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
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const validateForm = (data: BookingFormData): FormErrors => {
    const errors: FormErrors = {}

    if (!data.name.trim()) errors.name = "Пожалуйста, введите ваше имя"
    if (!data.phone.trim()) errors.phone = "Пожалуйста, введите ваш телефон"
    if (!data.serviceType) errors.serviceType = "Пожалуйста, выберите услугу"

    return errors
  }

  const submitToEmail = async (data: BookingFormData) => {
    const emailData = {
      name: data.name,
      phone: data.phone,
      service: data.serviceType,
      _subject: `Новая заявка от ${data.name}`,
      _template: "box",
      _captcha: "false",
    }

    const response = await fetch("https://formsubmit.co/ajax/info@tutschool.ru", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error("Ошибка при отправке на email")
    }

    return response.json()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm(formData)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormErrors({})
    setPendingFormData(formData)
    setShowTermsModal(true)
  }

  const handleAcceptTerms = async () => {
    if (!pendingFormData) return

    setShowTermsModal(false)
    setIsSubmitting(true)

    try {
      await submitToEmail(pendingFormData)

      setFormData({
        name: "",
        phone: "",
        serviceType: "",
      })
      setPendingFormData(null)

      router.push("/thank-you")
    } catch (error: any) {
      console.error("Submission error:", error)
      const errorMessage = error.message || t.contactForm.error
      setFormErrors({ submit: errorMessage })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeclineTerms = () => {
    setShowTermsModal(false)
    setPendingFormData(null)
  }

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleAccordion = (index: number) => setActiveAccordion(activeAccordion === index ? null : index)
  const toggleDropdown = (dropdown: string) => setActiveDropdown(activeDropdown === dropdown ? null : dropdown)

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="text-lg">Загрузка...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      

    <main>
  {/* HERO */}
  <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-700 py-24 pt-28 text-white">
  <div className="container mx-auto px-4 text-center">
    <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.hero.title}</h1>
    <p className="mx-auto max-w-2xl text-lg opacity-90">{t.hero.subtitle}</p>
  </div>
</section>


  {/* CONTACT GRID */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-burgundy-900">
            {t.contactInfo.title}
          </h2>

          {/* ADDRESS CARD */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-bold text-burgundy-900">
              {t.contactInfo.address}
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-burgundy-900" />
              <p>{t.address}</p>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200">
              <YandexMap />
            </div>
          </div>

          {/* PHONE CARD */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-bold text-burgundy-900">
              {t.contactInfo.phone}
            </h3>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-burgundy-900" />
              <a
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                className="hover:text-burgundy-900 hover:underline"
              >
                {t.phone}
              </a>
            </div>
          </div>

          {/* WORKING HOURS CARD */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-bold text-burgundy-900">
              {t.contactInfo.workingHours}
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-burgundy-900" />
                <div>
                  <p>{t.contactInfo.weekdays}</p>
                  <p>{t.contactInfo.saturday}</p>
                  <p>{t.contactInfo.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL CARD */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-bold text-burgundy-900">
              {t.contactInfo.socialMedia}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0"
                className="text-green-600 hover:text-green-800"
              >
                {/* SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
                </svg>
              </a>
              <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-blue-700">
                {/* SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h2 className="mb-2 text-2xl font-bold text-burgundy-900">
              {t.contactForm.title}
            </h2>
            <p className="mb-6 text-gray-600">
              {t.contactForm.description}
            </p>

            {formErrors.submit && (
              <div className="mb-6 flex items-start rounded-2xl bg-red-50 p-4 text-red-800">
                <AlertCircle className="mr-2 mt-0.5 h-5 w-5 text-red-600" />
                <div>
                  <h3 className="font-semibold">Ошибка</h3>
                  <p>{formErrors.submit}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-burgundy-900">
                  <User className="inline h-4 w-4 mr-1" />
                  {t.contactForm.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    formErrors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t.contactForm.name}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-burgundy-900">
                  <Phone className="inline h-4 w-4 mr-1" />
                  {t.contactForm.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    formErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder={t.contactForm.phone}
                />
                {formErrors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-burgundy-900">
                  <MessageSquare className="inline h-4 w-4 mr-1" />
                  {t.contactForm.service}
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    formErrors.serviceType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">{t.contactForm.service}</option>
                  {serviceGroups.map((group) =>
                    group.services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))
                  )}
                </select>
                {formErrors.serviceType && (
                  <p className="mt-1 text-sm text-red-600">
                    {formErrors.serviceType}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-primary px-4 py-2 text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Отправка...
                  </div>
                ) : (
                  t.contactForm.submit
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ */}
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="mb-2 text-center text-3xl font-bold text-burgundy-900">
        {t.faq.title}
      </h2>
      <div className="mx-auto mb-12 h-1 w-20 bg-burgundy-900"></div>

      <div className="mx-auto max-w-3xl space-y-4">
        {t.faq.questions.map((faq, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-0.5 h-5 w-5 text-burgundy-900" />
                <span>{faq.question}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  activeAccordion === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeAccordion === index ? "max-h-96 px-4 pb-4" : "max-h-0"
              }`}
            >
              <p className="pl-8 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* VISIT CTA */}
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-4xl rounded-2xl bg-burgundy-900 p-8 text-white md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">{t.visit.title}</h2>
            <p className="mb-6">{t.visit.description}</p>
            <Link
              href="/bookings"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-burgundy-900 transition-all hover:bg-gray-100 hover:gap-3"
            >
              {t.visit.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>


      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t.terms.title}</h3>
            </div>

            <div className="mb-6 text-sm text-gray-600">
              <p className="mb-3">{t.terms.content}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDeclineTerms}
                className="flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {t.terms.decline}
              </button>
              <button
                onClick={handleAcceptTerms}
                disabled={isSubmitting}
                className="flex-1 rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 h-4 w-4 animate-spin inline" />
                    Обработка...
                  </>
                ) : (
                  t.terms.accept
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
