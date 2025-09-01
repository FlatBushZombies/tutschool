"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Calendar, Clock, PhoneIcon, Mail, User, AlertCircle, Loader2, Check } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface FormErrors {
  name?: string
  phone?: string
  serviceType?: string
  submit?: string
}

interface BookingFormData {
  name: string
  phone: string
  serviceType: string
}

interface ServiceGroup {
  group: string
  services: string[]
}

export default function BookingPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [formSuccess, setFormSuccess] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    serviceType: "",
  })
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [pendingFormData, setPendingFormData] = useState<BookingFormData | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  const validateForm = (data: BookingFormData): FormErrors => {
    const errors: FormErrors = {}
    if (!data.name.trim()) errors.name = "Пожалуйста, введите ваше имя"
    if (!data.phone.trim()) errors.phone = "Пожалуйста, введите ваш телефон"
    if (!data.serviceType) errors.serviceType = "Пожалуйста, выберите услугу"
    return errors
  }

  const submitToEmail = async (data: BookingFormData) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@tutschool.ru", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          service: data.serviceType,
          _subject: `Новая заявка на пробное занятие от ${data.name}`,
          _template: "table",
        }),
      })
      if (!response.ok) {
        throw new Error("Ошибка при отправке на почту")
      }
      return await response.json()
    } catch (error) {
      console.error("FormSubmit error:", error)
      throw error
    }
  }

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 1) return numbers
    if (numbers.length <= 4) return `+7 (${numbers.slice(1, 4)}`
    if (numbers.length <= 7) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}`
    if (numbers.length <= 9) return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}`
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value)
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
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

      setFormSuccess(true)
      toast.success("Заявка успешно отправлена!")

      setFormData({
        name: "",
        phone: "",
        serviceType: "",
      })
      setPendingFormData(null)

      setTimeout(() => {
        router.push("/thank-you")
      }, 1500)
    } catch (error: any) {
      console.error("Submission error:", error)
      const errorMessage = error.message || "Произошла ошибка при отправке заявки. Попробуйте еще раз."
      setFormErrors({ submit: errorMessage })
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeclineTerms = () => {
    setShowTermsModal(false)
    setPendingFormData(null)
    toast.info("Отправка отменена")
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin text-red-900" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-red-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Пробное занятие</h1>
            <p className="text-lg opacity-90 md:text-xl">
              Запишитесь на бесплатный урок-диагностику. Познакомьтесь со студией и преподавателем. Пройдите диагностику
              на определение уровня
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-12 w-full text-red-900"
            aria-hidden="true"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Booking Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-red-900">Информация о пробном занятии</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="mr-3 mt-1 h-5 w-5 text-red-900" />
                    <div>
                      <h3 className="font-semibold">Доступные дни</h3>
                      <p className="text-gray-600">Понедельник - Суббота</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-3 mt-1 h-5 w-5 text-red-900" />
                    <div>
                      <h3 className="font-semibold">Рабочие часы</h3>
                      <p className="text-gray-600">9:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="mr-3 mt-1 h-5 w-5 text-red-900" />
                    <div>
                      <h3 className="font-semibold">Телефон</h3>
                      <p className="text-gray-600">+7 (983) 662-97-30</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 mt-1 h-5 w-5 text-red-900" />
                    <div>
                      <h3 className="font-semibold">Электронная почта</h3>
                      <p className="text-gray-600">info@tutschool.ru</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-2 font-semibold text-red-900">Примечание:</h3>
                  <p className="text-sm text-gray-600">
                    После отправки заявки наш менеджер свяжется с вами в ближайшее время для уточнения деталей и
                    назначения времени пробного занятия.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-red-900">Записаться на пробное занятие</h2>

                {formSuccess && (
                  <div className="mb-6 flex items-start rounded-lg bg-green-50 p-4 text-green-800">
                    <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Заявка отправлена!</h3>
                      <p>
                        Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время для подтверждения записи.
                      </p>
                    </div>
                  </div>
                )}

                {formErrors.submit && (
                  <div className="mb-6 flex items-start rounded-lg bg-red-50 p-4 text-red-800">
                    <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Ошибка</h3>
                      <p>{formErrors.submit}</p>
                    </div>
                  </div>
                )}

                {!formSuccess && (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                          ФИО *
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            className={`w-full rounded-md border bg-gray-50 py-3 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-900 ${
                              formErrors.name ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Ваше полное имя"
                          />
                        </div>
                        {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                          Телефон *
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <PhoneIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                            className={`w-full rounded-md border bg-gray-50 py-3 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-900 ${
                              formErrors.phone ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="+7 (XXX) XXX-XX-XX"
                          />
                        </div>
                        {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                      </div>

                      {/* Service Type */}
                      <div>
                        <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-gray-700">
                          Направление обучения *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className={`w-full rounded-md border bg-gray-50 py-3 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-red-900 transition-colors ${
                            formErrors.serviceType
                              ? "border-red-500"
                              : formData.serviceType
                                ? "border-green-500"
                                : "border-gray-300"
                          }`}
                        >
                          <option value="">Выберите направление</option>
                          {serviceGroups.map((group) => (
                            <optgroup key={group.group} label={group.group}>
                              {group.services.map((service) => (
                                <option key={service} value={service}>
                                  {service}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        {formErrors.serviceType && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.serviceType}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="mt-6">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex w-full items-center justify-center rounded-md bg-red-900 py-4 px-4 text-lg font-bold text-white transition-colors duration-300 hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Отправка...
                            </>
                          ) : (
                            "Записаться на пробное занятие"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Согласие на обработку данных</h3>
            </div>
            <div className="mb-6 text-sm text-gray-600">
              <p className="mb-3">
                Нажимая "Принимаю", вы соглашаетесь на обработку ваших персональных данных (имя, телефон и выбранное
                направление) для обработки вашего запроса на пробное занятие.
              </p>
              <p className="mb-3">
                Ваши данные будут отправлены на нашу почту info@tutschool.ru для обработки вашего запроса.
              </p>
              <p className="text-xs text-gray-500">Вы можете отозвать согласие в любое время, связавшись с нами.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDeclineTerms}
                className="flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2"
              >
                Отклонить
              </button>
              <button
                onClick={handleAcceptTerms}
                disabled={isSubmitting}
                className="flex-1 rounded-md bg-red-900 py-2 px-4 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 h-4 w-4 animate-spin inline" />
                    Отправка...
                  </>
                ) : (
                  "Принимаю"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-red-900">Часто задаваемые вопросы</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Найдите ответы на распространенные вопросы о пробных занятиях и наших услугах
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "Что включает в себя пробное занятие?",
                answer:
                  "Пробное занятие включает знакомство с преподавателем, диагностику вашего текущего уровня знаний, обзор методики обучения и составление индивидуального плана занятий. Продолжительность - 45 минут.",
              },
              {
                question: "Действительно ли пробное занятие бесплатное?",
                answer:
                  "Да, первое пробное занятие полностью бесплатное. Это позволяет вам познакомиться с нашей студией, преподавателем и методикой обучения без каких-либо обязательств.",
              },
              {
                question: "Можно ли перенести пробное занятие?",
                answer:
                  "Да, вы можете перенести пробное занятие, уведомив нас не позднее, чем за 24 часа до назначенного времени. Пожалуйста, свяжитесь с нами по телефону для переноса.",
              },
              {
                question: "Что нужно подготовить к пробному занятию?",
                answer:
                  "Никакой специальной подготовки не требуется. Приходите с хорошим настроением и готовостью к обучению. Все необходимые материалы предоставит преподаватель.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-red-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
