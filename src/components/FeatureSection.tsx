"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define a type for the allowed color keys
type ColorKey = "indigo" | "green" | "red";

// Color mapping for Tailwind classes
const colorClasses: Record<ColorKey, { bg: string; text: string; hoverText: string }> = {
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

// Montessori principles content
const montessoriPrinciples: {
  key: string;
  color: ColorKey;
  title: string;
  description: string;
}[] = [
  {
    key: "cocuk-merkezli",
    color: "indigo",
    title: "Çocuk Merkezli Yaklaşım",
    description:
      "Her çocuğun kendine özgü potansiyelini ve öğrenme hızını merkeze alıyoruz. Bireysel ilgi ve yeteneklerini keşfetmeleri için onlara özel bir yol haritası sunuyoruz.",
  },
  {
    key: "hazirlanmis-ortam",
    color: "green",
    title: "Hazırlanmış Ortam",
    description:
      "Özenle tasarlanmış sınıf ortamlarımız, çocukların bağımsızlıklarını geliştirmeleri, keşfetmeleri ve kendi hızlarında öğrenmeleri için ideal bir zemin sunar.",
  },
  {
    key: "ozgurluk-sorumluluk",
    color: "red",
    title: "Özgürlük ve Sorumluluk",
    description:
      "Çocuklarımıza sınırlar içinde özgürlük tanıyarak, kendi kararlarını vermeyi ve bu kararların sorumluluğunu almayı öğretiyoruz. Bu sayede iç disiplinleri gelişir.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="p-8">
          <div className="text-center mb-4 mt-4">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Çocuklarınızı Montessori eğitimiyle yeni dünyaya hazırlıyoruz!
            </p>
          </div>

          {/* Optimized Local Image */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/kittens.webp"
              alt="Sevimli Kedi"
              width={800}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full max-h-[400px]"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
              Montessori Yaklaşımı
            </span>
          </div>
          <h1 className="text-4xl font-medium text-gray-700 text-center mt-6 dark:text-white">
            Montessori Eğitimiyle Parlak Gelecekler İnşa Ediyoruz
          </h1>
          <p className="text-center mt-6 text-xl font-light text-gray-500 dark:text-gray-400 leading-relaxed">
            Montessori felsefesi, her çocuğun doğuştan gelen merakını ve öğrenme arzusunu temel alır. Okulumuzda,
            çocuklarımızın potansiyellerini tam olarak ortaya çıkararak, onları geleceğin bilinçli ve bağımsız bireyleri
            olarak yetiştirmek için rehberlik ediyoruz.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {montessoriPrinciples.map((item) => (
            <div key={item.key} className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
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
              <h2 className={`uppercase mt-6 ${colorClasses[item.color].text} font-medium mb-3`}>
                {item.title}
              </h2>
              <p className="font-light text-base text-gray-500 mb-3 dark:text-gray-400">
                {item.description}
              </p>
              <Link
                href={`/montessori-prensipleri#${item.key}`}
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

        {/* Additional Info Section */}
        <div className="text-center mt-10 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Montessori eğitimi, sadece akademik başarıya odaklanmakla kalmaz, aynı zamanda çocukların sosyal, duygusal
            ve fiziksel gelişimlerini de destekler. Kendi hızlarında öğrenme, problem çözme becerileri ve eleştirel
            düşünme yetenekleri kazanmaları için zengin bir ortam sunarız. Çocuklarımızın özgüvenli, meraklı ve yaşam
            boyu öğrenmeye açık bireyler olmalarını hedefliyoruz.
          </p>
          <Link
            href="/blog/montessori-egitimi"
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 transition-colors duration-200"
          >
            Daha fazlasını okumak istiyorsanız bu konu hakkındaki blogumuzu inceleyebilirsiniz
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
