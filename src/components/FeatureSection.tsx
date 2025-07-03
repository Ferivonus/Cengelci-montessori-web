"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for the allowed color keys
type ColorKey = "indigo" | "green" | "red";

export default function FeatureSection() {
  // Define a mapping for color-related Tailwind classes to avoid dynamic class generation issues
  const colorClasses: Record<ColorKey, { bg: string; text: string; hoverText: string; }> = {
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-500",
      hoverText: "hover:text-indigo-600",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-500",
      hoverText: "hover:text-green-600",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-500",
      hoverText: "hover:text-red-600",
    },
  };

  const featureItems: { color: ColorKey; title: string; description: string; }[] = [ // Updated type for title and description
    {
      color: "indigo",
      title: "Çocuk Merkezli Yaklaşım",
      description: "Her çocuğun bireysel gelişim hızına saygı duyarak, kendi potansiyellerini keşfetmelerine olanak tanırız. Eğitim, çocuğun ilgi alanlarına göre şekillenir.",
    },
    {
      color: "green",
      title: "Hazırlanmış Ortam",
      description: "Çocukların bağımsız öğrenmelerini destekleyen, düzenli ve estetik bir sınıf ortamı sunarız. Materyaller, keşfetmeye ve öğrenmeye teşvik eder.",
    },
    {
      color: "red",
      title: "Özgürlük ve Sorumluluk",
      description: "Çocuklara seçim yapma özgürlüğü tanırken, bu özgürlüğün getirdiği sorumlulukları da öğretiriz. Kendi öğrenme süreçlerini yönetmelerini sağlarız.",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="p-8">
          <div className="text-center mb-4 mt-4">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Çocuklarınızı Montessori eğitimiyle yeni dünyaya hazırlıyoruz!
            </p>
          </div>

          {/* Optimized Image */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/kittens.webp"
              alt="Sevimli Kedi" // 
              width={800} // Specify intrinsic width for next/image optimization
              height={400} // Specify intrinsic height for next/image optimization
              className="rounded-lg shadow-lg object-cover w-full max-h-[400px]" // Use max-h for max height
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
              Montessori Yaklaşımı
            </span>
          </div>
          <h1 className="text-4xl font-medium text-gray-700 text-center mt-6 dark:text-white">
            Montessori Eğitimiyle Parlak Gelecekler
          </h1>
          <p className="text-center mt-6 text-lg font-light text-gray-500 dark:text-gray-400">
            Montessori felsefesi, her çocuğun doğuştan gelen öğrenme arzusunu ve bireysel yeteneklerini ortaya çıkarmayı hedefler. Biz de bu yolda onlara rehberlik ediyoruz.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featureItems.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            >
              <div
                className={`${colorClasses[item.color].bg} rounded-full w-16 h-16 flex justify-center items-center ${colorClasses[item.color].text} shadow-2xl`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </div>
              <h2
                className={`uppercase mt-6 ${colorClasses[item.color].text} font-medium mb-3`}
              >
                {item.title} {/* Updated to item.title */}
              </h2>
              <p className="font-light text-sm text-gray-500 mb-3 dark:text-gray-400">
                {item.description} {/* Updated to item.description */}
              </p>
              <Link
                href="/"
                className={`${colorClasses[item.color].text} flex items-center ${colorClasses[item.color].hoverText}`}
              >
                Daha Fazlası
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}