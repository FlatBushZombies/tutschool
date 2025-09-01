import { Check, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-burgundy-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Спасибо!</h1>
            <p className="text-lg opacity-90 md:text-xl">
              Спасибо, что обратились в нашу студию. Наш менеджер свяжется с Вами в ближайшее время для уточнения
              деталей.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-12 w-full text-burgundy-900"
            aria-hidden="true"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* What's Next */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-burgundy-900">Что дальше?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-burgundy-100 text-sm font-bold text-burgundy-900">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Обработка заявки</h3>
                    <p className="text-gray-600">
                      Наш менеджер обработает вашу заявку в течение 2-3 часов в рабочее время
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-burgundy-100 text-sm font-bold text-burgundy-900">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Звонок менеджера</h3>
                    <p className="text-gray-600">
                      Мы свяжемся с вами для уточнения деталей и назначения времени занятия
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-burgundy-100 text-sm font-bold text-burgundy-900">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Пробное занятие</h3>
                    <p className="text-gray-600">Приходите на бесплатное пробное занятие в назначенное время</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-burgundy-900">Контактная информация</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-3 mt-1 h-5 w-5 text-burgundy-900" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Телефон</h3>
                    <p className="text-gray-600">+7 (983) 662-97-30</p>
                    <p className="text-sm text-gray-500">Понедельник - Суббота, 9:00 - 19:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 mt-1 h-5 w-5 text-burgundy-900" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Электронная почта</h3>
                    <p className="text-gray-600">info@tutschool.ru</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gray-50 p-4">
                <h3 className="mb-2 font-semibold text-burgundy-900">Важно:</h3>
                <p className="text-sm text-gray-600">
                  Если вы не получили звонок в течение рабочего дня, пожалуйста, свяжитесь с нами самостоятельно по
                  указанному телефону.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center rounded-md bg-burgundy-900 px-6 py-3 text-white transition-colors duration-300 hover:bg-burgundy-800"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-burgundy-900">Подготовьтесь к пробному занятию</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              Чтобы максимально эффективно провести время на пробном занятии, рекомендуем:
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-semibold text-burgundy-900">Приходите вовремя</h3>
                <p className="text-sm text-gray-600">
                  Приходите за 5-10 минут до начала занятия для знакомства с преподавателем
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-semibold text-burgundy-900">Будьте открыты</h3>
                <p className="text-sm text-gray-600">Расскажите о своих целях и ожиданиях от изучения языка</p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 font-semibold text-burgundy-900">Задавайте вопросы</h3>
                <p className="text-sm text-gray-600">
                  Не стесняйтесь задавать любые вопросы о методике и процессе обучения
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
