"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AboutSchoolSection() {
  const [activeTab, setActiveTab] = useState("ders-anlari");

  const galleryTabs = [
    {
      key: "ders-anlari",
      name: "Ders Anları",
      images: Array(6).fill({ src: "/images/kittens.webp", alt: "" }),
    },
    {
      key: "etkinlikler",
      name: "Etkinlikler",
      images: Array(4).fill({ src: "/images/kittens.webp", alt: "" }),
    },
    {
      key: "okul-ortami",
      name: "Okul Ortamı",
      images: Array(3).fill({ src: "/images/kittens.webp", alt: "" }),
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
            src="/images/kittens.webp"
            alt=""
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-h-[400px] mx-auto"
          />
        </div>

        {/* Tanıtım Paragrafı */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          <strong>Özel Çengelci Montessori Anaokulu</strong> olarak, çocuklarımızın bireysel farklılıklarını
          gözeten, onların özgürlüklerini ve sorumluluk duygularını geliştiren bir eğitim anlayışını
          benimsiyoruz. Kurumumuz Milli Eğitim Bakanlığı’na bağlı olup Montessori pedagojisini temel alan
          özel bir eğitim programı uygular.
        </p>

        {/* Vizyon - Misyon - Eğitim Modeli */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Vizyonumuz</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sevgiyle yoğrulmuş bir eğitimle; kendi ayakları üzerinde durabilen, empati kurabilen,
              özgüvenli ve mutlu bireyler yetiştirmeyi hayal ediyoruz. Her çocuğun içindeki ışığı parlatmak için buradayız.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Misyonumuz</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Merak eden, keşfeden, düşünen ve sevgiyle büyüyen çocuklar... Bizim için her yeni gün;
              onların içindeki potansiyeli ortaya çıkarmak, onlara sevgi dolu bir öğrenme yolculuğu sunmak için bir fırsat.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-amber-600 mb-2">Eğitim Modelimiz</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Çocuklarımızın bireysel ritmine saygı gösteren, özgür seçimler yapabilecekleri,
              keşfetmeye ve denemeye cesaretlendiren bir ortam sunuyoruz.
              Montessori’nin bilimsel yaklaşımını sevgiyle harmanlayarak özgün bir eğitim modeli oluşturduk.
            </p>
          </div>
        </div>

        {/* Sınıf Görseli Solda, Yazı Sağda */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/kittens.webp"
              alt=""
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
              Modern Montessori sınıflarımız, çocukların bireysel öğrenme tempolarına ve ilgi alanlarına göre
              düzenlenmiş; her bir köşesi onların özgüvenle keşfetmesi için düşünülmüştür.
            </p>
          </div>
        </div>

        {/* Bahçe Görseli Sağda, Yazı Solda */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <Image
              src="/images/kittens.webp"
              alt=""
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
              Yeşillikler içinde oyunla öğrenmenin iç içe geçtiği bahçemizde çocuklarımız hem eğlenir,
              hem de paylaşmayı, birlikte hareket etmeyi ve çevresini keşfetmeyi öğrenir.
            </p>
          </div>
        </div>

        {/* Galeri Bölümü */}
        <div className="w-full mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Okul Hayatından Kareler
          </h2>
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100 dark:bg-gray-700"
              role="tablist"
            >
              {galleryTabs.map((tab) => (
                <li key={tab.key} className="z-30 flex-auto text-center">
                  <button
                    onClick={() => setActiveTab(tab.key)}
                    className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                      activeTab === tab.key
                        ? "bg-white text-purple-700 shadow dark:bg-gray-800 dark:text-white"
                        : "text-slate-700 bg-inherit hover:text-purple-700 dark:text-gray-300 dark:hover:text-white"
                    }`}
                    role="tab"
                    aria-selected={activeTab === tab.key}
                    aria-controls={tab.key}
                  >
                    <span className="ml-1">{tab.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5">
            {galleryTabs.map((tab) => (
              <div
                key={tab.key}
                className={`${activeTab === tab.key ? "block opacity-100" : "hidden opacity-0"} transition-opacity duration-300`}
                id={tab.key}
                role="tabpanel"
              >
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 dark:text-gray-300 h-max">
                  {tab.images.map((image, imgIdx) => (
                    <div key={imgIdx}>
                      <Image
                        className="w-full h-40 object-cover rounded-lg shadow-md"
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
    </section>
  );
}
