"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.9 на Яндексе",
      description:
        "Школа иностранных языков для детей и взрослых. Мы помогаем нашим студентам достигать своих целей в изучении языков и творческом развитии.",
      footer: {
        quickLinks: "Быстрые ссылки",
        links: [
          { name: "О школе", href: "/our-values" },
          { name: "Наши курсы", href: "/adults" },
          { name: "Расписание", href: "/schedule" },
          { name: "Преподаватели", href: "/teachers" },
          { name: "Блог", href: "/news" },
          { name: "Связаться с нами", href: "/contact" },
          { name: "Политика конфиденциальности", href: "/policy" },
        ],
        contacts: "Контакты",
        workingHours: {
          title: "Режим работы",
          weekdays: "Понедельник - Пятница: 9:00 - 21:00",
          saturday: "Суббота: 10:00 - 18:00",
          sunday: "Воскресенье: выходной",
        },
        socialMedia: "Социальные сети",
        copyright: "© 2025 Tut School. Все права защищены.",
      },
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.9 on Yandex",
      description:
        "School of foreign languages for children and adults. We help our students achieve their goals in language learning and creative development.",
      footer: {
        quickLinks: "Quick Links",
        links: [
          { name: "About the school", href: "/our-values" },
          { name: "Our courses", href: "/adults" },
          { name: "Schedule", href: "/schedule" },
          { name: "Teachers", href: "/teachers" },
          { name: "Blog", href: "/news" },
          { name: "Contact us", href: "/contact" },
          { name: "Privacy Policy", href: "/policy" },
        ],
        contacts: "Contacts",
        workingHours: {
          title: "Working Hours",
          weekdays: "Monday - Friday: 9:00 AM - 9:00 PM",
          saturday: "Saturday: 10:00 AM - 6:00 PM",
          sunday: "Sunday: closed",
        },
        socialMedia: "Social Media",
        copyright: "© 2025 Tut School. All rights reserved.",
      },
      languageToggle: "Русский",
    },
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* School info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16">
                <Link href="/" aria-label="Home">
                  <Image
                    src="/logo.png"
                    alt={t.schoolName}
                    fill
                    className="object-contain"
                  />
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{t.schoolName}</h3>
                <p className="text-sm text-gray-400">{t.schoolSubtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{t.description}</p>
            <div>
              <a
                href="https://tut-school.clients.site/?#rating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{t.rating}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {t.footer.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">{t.footer.contacts}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                  <Phone className="h-4 w-4 text-gray-300" />
                </div>
                <a
                  href={`tel:${t.phone.replace(/[^+\d]/g, "")}`}
                  className="text-gray-300 hover:text-white"
                >
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                  <Mail className="h-4 w-4 text-gray-300" />
                </div>
                <a
                  href={`mailto:${t.email}`}
                  className="text-gray-300 hover:text-white"
                >
                  {t.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <MapPin className="h-4 w-4 text-gray-300" />
                </div>
                <a
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(t.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {t.address}
                </a>
              </div>
            </div>
          </div>

          {/* Working hours and social */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">{t.footer.workingHours.title}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                {t.footer.workingHours.weekdays}
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                {t.footer.workingHours.saturday}
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-gray-500"></span>
                {t.footer.workingHours.sunday}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold tracking-tight">{t.footer.socialMedia}</h3>
              <div className="flex gap-3">
                <Link
  href="https://t.me/TUTschoolNovogorsk"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 transition-transform hover:scale-110 hover:bg-blue-600"
  aria-label="Telegram"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9.6 15.6L9.9 19.8C10.3 19.8 10.5 19.6 10.7 19.4L12.6 17.7L16.8 20.8C17.6 21.2 18.2 20.9 18.4 20L21.9 4.3C22.2 3.2 21.6 2.7 20.8 3.1L2.7 10.1C1.6 10.5 1.6 11.1 2.5 11.4L7.2 12.8L17.3 6.5C17.8 6.2 18.3 6.4 17.9 6.7L9.6 15.6Z"
      fill="white"
    />
  </svg>
</Link>
<Link
  href="https://wa.me/79167349246"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 transition-transform hover:scale-110 hover:bg-green-700"
  aria-label="WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M20.5 3.5C18.2 1.2 15.2 0 12 0C5.4 0 0 5.4 0 12C0 13.9 0.5 15.8 1.4 17.5L0 24L6.6 22.6C8.2 23.5 10.1 24 12 24C18.6 24 24 18.6 24 12C24 8.8 22.8 5.8 20.5 3.5ZM12 21.6C10.3 21.6 8.6 21.2 7.2 20.3L6.8 20.1L3.6 20.8L4.4 17.6L4.2 17.2C3.3 15.8 2.8 14 2.8 12C2.8 6.9 6.9 2.8 12 2.8C14.6 2.8 17 3.8 18.8 5.6C20.6 7.4 21.6 9.8 21.6 12.4C21.6 17.5 17.5 21.6 12 21.6Z"
      fill="white"
    />
    <path
      d="M17 14.4C16.8 14.3 15.7 13.7 15.5 13.6C15.3 13.5 15.1 13.5 15 13.7C14.9 13.9 14.4 14.5 14.3 14.6C14.2 14.7 14 14.8 13.8 14.7C12.8 14.3 11.9 13.7 11.1 12.9C10.3 12.1 9.7 11.2 9.3 10.2C9.2 10 9.3 9.8 9.4 9.7C9.5 9.6 9.6 9.4 9.7 9.3C9.8 9.2 9.8 9.1 9.9 8.9C10 8.7 9.9 8.5 9.8 8.4C9.7 8.3 9.2 7.2 9 6.8C8.8 6.4 8.6 6.5 8.5 6.5C8.4 6.5 8.2 6.5 8.1 6.5C8 6.5 7.8 6.6 7.7 6.7C7.6 6.8 7.2 7.2 7.2 8C7.2 8.8 7.8 9.7 7.9 9.9C8 10.1 9.4 12.4 11.4 14.4C13.6 16.6 15.9 17.8 16.1 17.9C16.3 18 17.2 18.6 18 18.6C18.8 18.6 19.2 18.2 19.3 18.1C19.4 18 19.5 17.8 19.6 17.7C19.7 17.6 19.7 17.5 19.7 17.3C19.7 17.1 19.7 16.9 19.6 16.8C19.5 16.7 17.2 15.3 17 15.2Z"
      fill="white"
    />
  </svg>
</Link>

                <Button
                  onClick={toggleLanguage}
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  <span>{t.languageToggle}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <address className="not-italic text-sm text-gray-500 text-center md:text-left">
            <p>ИП Фёдорова Юлия Викторовна</p>
            <p>ИНН 253604322701</p>
            <p>ОГРНИП 314774603400336</p>
          </address>

          <p className="text-sm text-gray-400">{t.footer.copyright}</p>
          <p className="text-sm text-gray-500">
            <a
              href="https://noirsfera.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Designed by Noir Sfera
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
