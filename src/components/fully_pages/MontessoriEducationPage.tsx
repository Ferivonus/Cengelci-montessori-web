"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Blog linki için eklendi

export default function MontessoriEducationPage() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 pt-20"> {/* Navbar için üst boşluk eklendi */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">
          Montessori Eğitimi: Çocuk Merkezli Yaklaşımın Derinliği
        </h1>

        {/* Giriş Paragrafı */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
          Montessori eğitimi, 20. yüzyılın başlarında İtalyan doktor ve eğitimci Maria Montessori tarafından geliştirilen,
          çocukların doğal öğrenme arzusunu ve bireysel potansiyellerini merkeze alan devrim niteliğinde bir pedagojidir.
          Bu yaklaşım, çocukları pasif alıcılar olarak değil, kendi öğrenme süreçlerinin aktif mimarları olarak görür.
        </p>

        {/* Maria Montessori ve Tarihçe */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x400/90EE90/000000?text=Maria+Montessori&ext=png"
              alt=""
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Maria Montessori: Bir Vizyonerin Doğuşu
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Maria Montessori (1870-1952), İtalya'nın ilk kadın doktorlarından biriydi. Eğitim alanına olan ilgisi,
              zihinsel engelli çocuklarla yaptığı çalışmalarla başladı. Onların öğrenme potansiyellerini keşfetme
              yöntemleri, daha sonra tüm çocuklara uygulanabilecek evrensel prensiplere dönüştü.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              1907 yılında Roma'da açtığı "Çocuklar Evi" (Casa dei Bambini), Montessori metodunun doğduğu yer oldu.
              Burada gözlemlediği çocukların, özgür bir ortamda ve uygun materyallerle nasıl kendiliğinden ve derinlemesine
              öğrendiklerini belgeledi. Bu gözlemler, geleneksel eğitim anlayışına meydan okuyarak, çocuk merkezli
              bir yaklaşımın temellerini attı.
            </p>
          </div>
        </div>

        {/* Geçmiş Eğitim Denemeleri ve Farkı */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Gelenekselden Farkı: Geçmiş Eğitim Denemeleri
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-md">
            <div className="md:w-1/2">
              <Image
                src="https://placehold.co/600x400/87CEEB/000000?text=Geleneksel+Sınıf&ext=png"
                alt=""
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                Montessori'nin zamanındaki geleneksel eğitim sistemleri genellikle katı, öğretmen merkezli ve ezbere dayalıydı.
                Çocuklar, belirli bir müfredatı takip etmek zorunda kalıyor, yaratıcılıkları ve bireysel ilgi alanları göz ardı ediliyordu.
                Maria Montessori, bu yaklaşımların çocukların doğal gelişimini engellediğini fark etti.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Montessori, çocukların kendi hızlarında ilerlemesine, hatalarından ders çıkarmasına ve içsel motivasyonla
                öğrenmesine olanak tanıyan bir ortamın, çok daha etkili sonuçlar verdiğini kanıtladı.
                Onun "hazırlanmış ortam" ve "çocuğu takip et" prensipleri, geleneksel denemelerden tamamen farklı bir yol çizdi.
                Bu, sadece bir eğitim metodu değil, aynı zamanda çocuk gelişimine dair derin bir felsefe haline geldi.
              </p>
            </div>
          </div>
        </div>

        {/* Montessori Eğitiminin Temel İlkeleri (Kısa Özet) */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
            Montessori'nin Temel İlkeleri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Hazırlanmış Ortam</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Çocuğun kendi kendine öğrenebileceği, düzenli ve erişilebilir materyallerle dolu bir sınıf ortamı.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Çocuğu Takip Et</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Eğitmenin, çocuğun ilgi alanlarını ve gelişim hızını gözlemleyerek rehberlik etmesi.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Özgür Seçim ve Sorumluluk</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Çocuğun kendi öğrenme yolunu seçmesine izin verilmesi ve bu seçimlerin sorumluluğunu alması.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Karma Yaş Grupları</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Farklı yaşlardaki çocukların bir arada öğrenerek sosyalleşmesi ve birbirlerinden ilham alması.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Somut Materyaller</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Soyut kavramların somut materyaller aracılığıyla deneyimlenerek öğrenilmesi.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Öğretmenin Rolü</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Öğretmenin bir rehber, gözlemci ve ortam düzenleyicisi olarak hareket etmesi.
              </p>
            </div>
          </div>
        </div>

        {/* Sonuç ve Blog Linki */}
        <div className="text-center mt-10 p-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Montessori eğitimi, çocukların sadece akademik olarak değil, aynı zamanda sosyal, duygusal ve fiziksel olarak
            bütünsel gelişimlerini destekleyen güçlü bir yaklaşımdır. Kendi iç disiplinlerini geliştirmelerine,
            problem çözme becerileri kazanmalarına ve yaşam boyu öğrenmeye açık bireyler olmalarına yardımcı olur.
          </p>
          <Link
            href="/blog/montessori-egitimi-detayli" // Detaylı blog yazısı linki
            className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-900 transition-colors duration-200"
          >
            Daha fazla bilgi için blog yazımızı okuyun
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
