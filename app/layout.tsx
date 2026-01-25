import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Script from "next/script";
import YandexMetrika from "@/components/YandexMetrika";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://tutschool.ru"
      : "http://localhost:3000"
  ),
  title: {
    default: "Tut School - Языковая студия в Химках, Новогорске, Куркино",
    template: "%s | Tut School",
  },
  description:
    "Курсы английского и китайского языков в Химках, Новогорске и Куркино. Разговорные клубы, пробные уроки, мини-группы для детей и взрослых. Опытные преподаватели.",
  keywords: [
    // Client's requested keywords:
    "Английский Химки",
    "Английский Новогорск",
    "Китайский Химки",
    "Китайский Новогорск",
    "Разговорный клуб Химки",
    "Разговорный клуб Куркино",
    "Английский Куркино",
    "Китайский Куркино",
    // Existing high-intent keywords:
    "курсы английского Новогорск",
    "китайский язык Химки",
    "языковая школа Куркино",
    "английский для детей",
    "китайский для взрослых",
    "разговорный клуб английский",
  ],
  authors: [{ name: "Tut School" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://tutschool.ru",
    siteName: "Tut School - Языковая студия",
    title: "Курсы английского и китайского в Химках, Новогорске, Куркино | Tut School",
    description:
      "Языковая студия Tut School: английский и китайский для детей и взрослых. Бесплатный пробный урок!",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tut School - Курсы английского в Химках и Новогорске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tut School - Языковые курсы в Химках и Куркино",
    description: "Английский и китайский для детей и взрослых. Запишитесь на пробный урок!",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://tutschool.ru",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LanguageSchool",
              name: "Tut School - Языковая студия",
              description: "Курсы английского и китайского в Химках, Новогорске, Куркино",
              image: "https://tutschool.ru/logo.png",
              url: "https://tutschool.ru",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Заречная улица, 5, корп. 2",
                  addressLocality: "Химки, микрорайон Новогорск",
                  addressRegion: "Московская область",
                  postalCode: "141435",
                  addressCountry: "RU",
                },
                // Add other locations if applicable (e.g., Куркино)
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Языковые курсы",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Английский язык",
                    description: "Курсы для детей и взрослых",
                    availableAtOrFrom: {
                      "@type": "Place",
                      address: "Химки, Новогорск, Куркино",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Китайский язык",
                    description: "Групповые и индивидуальные занятия",
                  },
                  {
                    "@type": "Offer",
                    name: "Разговорный клуб",
                    description: "Практика английского с носителями",
                  },
                ],
              },
              telephone: "+7 (983) 662-97-30",
              email: "info@tutschool.ru",
              openingHours: ["Mo-Fr 09:00-21:00", "Sa 10:00-18:00"],
              sameAs: [
                "https://t.me/TUTschoolNovogorsk",
                "https://wa.me/+79167349246",
              ],
            }),
          }}
        />
        <noscript>
            <div>
              <img
                  src={`https://mc.yandex.ru/watch/103804746`}
                  style={{ position: "absolute", left: "-9999px" }}
                  alt=""
                />
              </div>
        </noscript>
        </>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
                <Suspense fallback={null}>
          <YandexMetrika counterId="103804746" />
        </Suspense>
      </body>
    </html>
  );
}