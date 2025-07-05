"use client";

import React, { useState } from "react";
import Image from "next/image";
// Link artık doğrudan kullanılmadığı için import kaldırılabilir, ancak form gönderimi için Link'in kullanımı değiştiği için şimdilik tutulabilir.
// Eğer form gönderimi tamamen client-side kalacaksa Link importu kaldırılabilir.

export default function JobApplicationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form verilerini burada işleyebilirsiniz.
    // Şimdilik konsola yazdırıyoruz.
    console.log("Form Verileri:", formData);
    alert("Başvurunuz alınmıştır! Sizinle en kısa sürede iletişime geçilecektir.");
    // Gerçek bir e-posta gönderme veya veritabanına kaydetme işlemi burada yapılabilir.
    // Örneğin: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });
    setFormData({ name: "", email: "", jobTitle: "" }); // Formu sıfırla
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 pt-25"> {/* pt-20 (padding-top: 5rem) eklendi */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Bize Katılın - Öğretmen Başvuruları
        </h2>

        {/* Tanıtım Paragrafı */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Özel Çengelci Montessori Anaokulu ailesine katılmak isteyen, Montessori eğitim felsefesine gönül vermiş,
          çocuklarla güçlü bağlar kurabilen ve öğrenmeye açık öğretmen adaylarını arıyoruz.
          Siz de dinamik ekibimizin bir parçası olmak isterseniz, başvurunuzu bekliyoruz.
        </p>

        {/* Görsel */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/kittens.webp" // Geçici olarak kittens.webp kullanıldı
            alt="Öğretmen ve öğrenciler" // Orijinal: "Öğretmen ve öğrenciler"
            width={700}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full max-h-[400px]"
          />
        </div>

        {/* Başvuru Formu Alanı */}
        <div className="p-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-left">
          <h3 className="font-medium text-3xl text-gray-800 dark:text-white">Başvuru Formu</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-6 mb-8">
            Aşağıdaki formu doldurarak bize başvurunuzu ulaştırabilirsiniz. Başvurunuz titizlikle incelenecek ve uygun pozisyonlar için sizinle iletişime geçilecektir.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-300 block mb-1 font-medium">Adınız Soyadınız</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full"
                  placeholder="Adınızı ve soyadınızı girin"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300 block mb-1 font-medium">E-posta Adresiniz</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full"
                  placeholder="örnek@saglayici.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="jobTitle" className="text-sm text-gray-700 dark:text-gray-300 block mb-1 font-medium">Başvurulan Pozisyon</label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full"
                  placeholder="(örn. Montessori Öğretmeni)"
                  required
                />
              </div>
            </div>
            <div className="space-x-4 mt-8 text-center">
              <button
                type="submit"
                className="py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800 active:bg-purple-900 disabled:opacity-50 transition-colors duration-200"
              >
                Başvuruyu Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
