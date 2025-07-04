"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSchoolSection() {
  const [activeTab, setActiveTab] = useState("okul-etkinlikleri"); // Aktif tab state'i

  // Galeri sekmeleri ve içerikleri - PNG formatı için "&ext=png" eklendi
  const galleryTabs = [
    {
      id: "okul-etkinlikleri",
      name: "Okul Etkinlikleri",
      images: [
        { src: "https://placehold.co/600x400/FF5733/FFFFFF?text=Etkinlik+1&ext=png", alt: "Okul Etkinliği 1" },
        { src: "https://placehold.co/600x400/33FF57/FFFFFF?text=Etkinlik+2&ext=png", alt: "Okul Etkinliği 2" },
        { src: "https://placehold.co/600x400/3357FF/FFFFFF?text=Etkinlik+3&ext=png", alt: "Okul Etkinliği 3" },
        { src: "https://placehold.co/600x400/FF33A1/FFFFFF?text=Etkinlik+4&ext=png", alt: "Okul Etkinliği 4" },
        { src: "https://placehold.co/600x400/A133FF/FFFFFF?text=Etkinlik+5&ext=png", alt: "Okul Etkinliği 5" },
        { src: "https://placehold.co/600x400/33FFF6/FFFFFF?text=Etkinlik+6&ext=png", alt: "Okul Etkinliği 6" },
      ],
    },
    {
      id: "okul-fotograflari",
      name: "Okul Fotoğrafları",
      images: [
        { src: "https://placehold.co/600x400/FFC300/000000?text=Okul+Foto+1&ext=png", alt: "Okul Fotoğrafı 1" },
        { src: "https://placehold.co/600x400/DAF7A6/000000?text=Okul+Foto+2&ext=png", alt: "Okul Fotoğrafı 2" },
        { src: "https://placehold.co/600x400/FF5733/000000?text=Okul+Foto+3&ext=png", alt: "Okul Fotoğrafı 3" },
        { src: "https://placehold.co/600x400/C70039/FFFFFF?text=Okul+Foto+4&ext=png", alt: "Okul Fotoğrafı 4" },
        { src: "https://placehold.co/600x400/900C3F/FFFFFF?text=Okul+Foto+5&ext=png", alt: "Okul Fotoğrafı 5" },
        { src: "https://placehold.co/600x400/581845/FFFFFF?text=Okul+Foto+6&ext=png", alt: "Okul Fotoğrafı 6" },
      ],
    },
    {
      id: "ders-fotograflari",
      name: "Ders Fotoğrafları",
      images: [
        { src: "https://placehold.co/600x400/ADD8E6/000000?text=Ders+Foto+1&ext=png", alt: "Ders Fotoğrafı 1" },
        { src: "https://placehold.co/600x400/87CEEB/000000?text=Ders+Foto+2&ext=png", alt: "Ders Fotoğrafı 2" },
        { src: "https://placehold.co/600x400/6495ED/FFFFFF?text=Ders+Foto+3&ext=png", alt: "Ders Fotoğrafı 3" },
        { src: "https://placehold.co/600x400/4169E1/FFFFFF?text=Ders+Foto+4&ext=png", alt: "Ders Fotoğrafı 4" },
        { src: "https://placehold.co/600x400/1E90FF/FFFFFF?text=Ders+Foto+5&ext=png", alt: "Ders Fotoğrafı 5" },
        { src: "https://placehold.co/600x400/0000CD/FFFFFF?text=Ders+Foto+6&ext=png", alt: "Ders Fotoğrafı 6" },
      ],
    },
    {
      id: "tum-resimler",
      name: "Tüm Resimler",
      images: [
        // Tüm kategorilerden karışık resimler veya daha fazla placeholder
        { src: "https://placehold.co/600x400/FF5733/FFFFFF?text=Tüm+Resimler+1&ext=png", alt: "Tüm Resimler 1" },
        { src: "https://placehold.co/600x400/33FF57/FFFFFF?text=Tüm+Resimler+2&ext=png", alt: "Tüm Resimler 2" },
        { src: "https://placehold.co/600x400/3357FF/FFFFFF?text=Tüm+Resimler+3&ext=png", alt: "Tüm Resimler 3" },
        { src: "https://placehold.co/600x400/FFC300/000000?text=Tüm+Resimler+4&ext=png", alt: "Tüm Resimler 4" },
        { src: "https://placehold.co/600x400/DAF7A6/000000?text=Tüm+Resimler+5&ext=png", alt: "Tüm Resimler 5" },
        { src: "https://placehold.co/600x400/ADD8E6/000000?text=Tüm+Resimler+6&ext=png", alt: "Tüm Resimler 6" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Okulumuzu Yakından Tanıyın
        </h2>

        {/* Okul Fotoğrafı */}
        <div className="mb-10">
          <Image
            src="/images/okul-bina.jpg"
            alt="Okul binası"
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-h-[400px] mx-auto"
          />
        </div>

        {/* Tanıtım Paragrafı */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          <strong>Özel Çengelci Montessori Anaokulu</strong> olarak, çocuklarımızın bireysel farklılıklarını gözeten,
          onların özgürlüklerini ve sorumluluk duygularını geliştiren bir eğitim anlayışını benimsiyoruz.
          Kurumumuz Milli Eğitim Bakanlığı’na bağlı olup Montessori pedagojisini temel alan özel bir eğitim programı uygular.
        </p>

        {/* Sınıf Görseli Solda, Yazı Sağda */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/sinif-ici.jpg"
              alt="Sınıf içi görünüm"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Çocuğunuzun eğitimi için özel olarak ayarlanmış sınıflar
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Modern Montessori sınıflarımız çocukların bireysel öğrenme tempolarına uygun olarak tasarlanmıştır.
            </p>
          </div>
        </div>

        {/* Bahçe Görseli Sağda, Yazı Solda */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/okul-bahce.jpg"
              alt="Okulun bahçesi"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Çocuğunuzun arkadaşlarıyla zaman geçirirken öğrenebileceği parkımız
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Bahçemiz oyunla eğitimin buluştuğu, çocukların sosyal becerilerini geliştirdiği özel bir alan sunar.
            </p>
          </div>
        </div>

        {/* Ders Sırasında Çekilmiş Resimler Galerisi (Tabs Stili) */}
        <div className="w-full mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Eğitimimizden Kareler
          </h3>
          <div className="relative right-0">
            <div className="w-full">
              <div className="relative right-0">
                <ul
                  className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100 dark:bg-gray-700"
                  role="tablist"
                >
                  {galleryTabs.map((tab) => (
                    <li key={tab.id} className="z-30 flex-auto text-center">
                      <a
                        className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                          activeTab === tab.id
                            ? "text-white bg-purple-600 shadow-md"
                            : "text-slate-700 bg-inherit dark:text-gray-300"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        aria-controls={tab.id}
                      >
                        <span className="ml-1">{tab.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-5">
              {galleryTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`${activeTab === tab.id ? "block opacity-100" : "hidden opacity-0"} transition-opacity duration-300`}
                  id={tab.id}
                  role="tabpanel"
                >
                  <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 dark:text-gray-300 h-max">
                    {tab.images.map((image, imgIdx) => (
                      <div key={imgIdx}>
                        <Image
                          className="w-full h-40 max-w-full rounded-lg object-cover"
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={400}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
