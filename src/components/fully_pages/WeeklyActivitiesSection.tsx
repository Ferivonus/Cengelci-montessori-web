"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WeeklyActivitiesSection() {
  // Haftalık etkinlik verileri
  const activities = [
    {
      id: 1,
      title: "Seramik Atölyesi",
      date: "Ekim, 11 2023 / 12:45-13:45",
      imageSrc: "/images/kittens.webp", // Orijinal: https://www.rcmontessori.com.tr/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-11-at-19.41.49.jpeg
      imageAlt: "Çocuklar seramik atölyesinde etkinlik yaparken",
      link: "/iletisim",
    },
    {
      id: 2,
      title: "Toddler Atölyesi",
      date: "Ekim, 17 2023 / 16:30-17:30",
      imageSrc: "/images/kittens.webp", // Orijinal: https://www.rcmontessori.com.tr/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-11-at-19.42.11.jpeg
      imageAlt: "Küçük çocuklar için Toddler atölyesi etkinliği",
      link: "/iletisim",
    },
    // İhtiyaç duyarsanız buraya daha fazla etkinlik ekleyebilirsiniz
    // {
    //   id: 3,
    //   title: "Yeni Etkinlik",
    //   date: "Tarih / Saat",
    //   imageSrc: "/images/kittens.webp",
    //   imageAlt: "Yeni etkinlik görseli",
    //   link: "/iletisim",
    // },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800 pt-20"> {/* Navbar için üst boşluk eklendi */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Başlık Bölümü */}
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            HAFTALIK ETKİNLİKLERİMİZİ KAÇIRMAYIN!
          </h3>
          <div className="h-6"></div> {/* Elementor spacer yerine basit boşluk */}
        </div>

        {/* Etkinlik Kartları Bölümü */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105"
            >
              {/* Etkinlik Görseli */}
              <div className="mb-4 w-full">
                <Image
                  src={activity.imageSrc}
                  alt={activity.imageAlt}
                  width={600} 
                  height={600} 
                  className="rounded-lg shadow-md object-cover w-full h-auto max-h-[400px] mx-auto" 
                />
              </div>

              {/* Etkinlik Başlığı */}
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {activity.title}
              </h4>

              {/* Etkinlik Tarihi ve Saati */}
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                {activity.date}
              </p>

              {/* Hemen Katıl Butonu */}
              <div className="w-full flex justify-center"> {/* Butonu ortalamak için */}
                <Link
                  href={activity.link}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 transition-colors duration-200 shadow-md"
                >
                  Hemen Katıl
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
