"use client";

import React, { useState } from "react"; // useState eklendi
import Image from "next/image";
// Link kullanılmadığı için import kaldırıldı

export default function AboutSchoolSection() {
  const [activeTab, setActiveTab] = useState("ders-anlari"); // Aktif sekme durumu

  // Galeri sekme verileri
  const galleryTabs = [
    {
      key: "ders-anlari",
      name: "Ders Anları",
      images: [
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/FF5733/FFFFFF?text=Ders+Anı+1", alt: "Ders anı fotoğrafı 1"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/33FF57/FFFFFF?text=Ders+Anı+2", alt: "Ders anı fotoğrafı 2"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/3357FF/FFFFFF?text=Ders+Anı+3", alt: "Ders anı fotoğrafı 3"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/FF33CC/FFFFFF?text=Ders+Anı+4", alt: "Ders anı fotoğrafı 4"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/FFFF33/000000?text=Ders+Anı+5", alt: "Ders anı fotoğrafı 5"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/33FFFF/000000?text=Ders+Anı+6", alt: "Ders anı fotoğrafı 6"
      ],
    },
    {
      key: "etkinlikler",
      name: "Etkinlikler",
      images: [
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Etkinlik+1", alt: "Etkinlik fotoğrafı 1"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/DA70D6/FFFFFF?text=Etkinlik+2", alt: "Etkinlik fotoğrafı 2"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/FFD700/000000?text=Etkinlik+3", alt: "Etkinlik fotoğrafı 3"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/ADFF2F/000000?text=Etkinlik+4", alt: "Etkinlik fotoğrafı 4"
      ],
    },
    {
      key: "okul-ortami",
      name: "Okul Ortamı",
      images: [
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/4682B4/FFFFFF?text=Ortam+1", alt: "Okul ortamı fotoğrafı 1"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/D2B48C/000000?text=Ortam+2", alt: "Okul ortamı fotoğrafı 2"
        { src: "/images/kittens.webp", alt: "" }, // Orijinal: "https://placehold.co/600x400/B0E0E6/000000?text=Ortam+3", alt: "Okul ortamı fotoğrafı 3"
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
            src="/images/kittens.webp" // Tüm resimler kittens.webp olarak güncellendi
            alt="" // Alt metin boş bırakıldı
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-h-[400px] mx-auto"
          />
          {/* Orijinal: src="/images/okul-bina.jpg", alt="Okul binası" */}
        </div>

        {/* Tanıtım Paragrafı */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          <strong>Özel Çengelci Montessori Anaokulu</strong> olarak, çocuklarımızın bireysel farklılıklarını gözeten,
          onların özgürlüklerini ve sorumluluk duygularını geliştiren bir eğitim anlayışını benimsiyoruz.
          Kurumumuz Milli Eğitim Bakanlığı’na bağlı olup Montessori pedagojisini temel alan özel bir eğitim programı uygular.
        </p>

        {/* Vizyon, Misyon, Eğitim Modeli */}
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
              src="/images/kittens.webp" // Tüm resimler kittens.webp olarak güncellendi
              alt="" // Alt metin boş bırakıldı
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
            {/* Orijinal: src="/images/sinif-ici.jpg", alt="Sınıf içi görünüm" */}
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
              src="/images/kittens.webp" // Tüm resimler kittens.webp olarak güncellendi
              alt="" // Alt metin boş bırakıldı
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
            {/* Orijinal: src="/images/okul-bahce.jpg", alt="Okulun bahçesi" */}
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

        {/* Ders Anlarından Galeri (Tabs Stili) - Düzeltilmiş Yapı */}
        <div className="w-full mt-16"> {/* Üst boşluk eklendi */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Okul Hayatından Kareler
          </h2>
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100 dark:bg-gray-700"
              role="tablist" // role="list" yerine role="tablist"
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
                        src={image.src} // Zaten kittens.webp olarak ayarlandı
                        alt={image.alt} // Alt metin boş bırakıldı
                        width={600} // Varsayılan genişlik
                        height={400} // Varsayılan yükseklik
                      />
                      {/* Orijinal src ve alt değerleri ilgili Image objesi içinde yorum olarak belirtildi */}
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
