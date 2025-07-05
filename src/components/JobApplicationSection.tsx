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
    cvFile: null as File | null, // CV dosyası için state
    motivationLetter: "", // Motivasyon mektubu için state
    knowsMontessori: false, // Montessori eğitimi bilgisi için state
    yearsOfExperience: "", // Deneyim yılı için state
  });

  const [emailError, setEmailError] = useState<string | null>(null); // E-posta hata mesajı için yeni state

  const validateEmail = (email: string): boolean => {
    // Sadece hotmail.com, gmail.com ve yahoo.com uzantılarını kabul eden regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(hotmail|gmail|yahoo)\.com$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // E-posta alanı değiştiğinde doğrulama yap
    if (name === "email") {
      if (value === "") {
        setEmailError(null); // Boşsa hatayı kaldır
      } else if (!validateEmail(value)) {
        setEmailError("Sadece @hotmail.com, @gmail.com ve @yahoo.com uzantılı e-posta adresleri kabul edilmektedir.");
      } else {
        setEmailError(null); // Geçerliyse hatayı kaldır
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        cvFile: e.target.files![0], // Seçilen dosyayı kaydet
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        cvFile: null,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Göndermeden önce son bir doğrulama
    if (!validateEmail(formData.email)) {
      setEmailError("Sadece @hotmail.com, @gmail.com ve @yahoo.com uzantılı e-posta adresleri kabul edilmektedir.");
      alert("Lütfen geçerli bir e-posta adresi giriniz.");
      return; // Formu gönderme
    }

    // Form verilerini burada işleyebilirsiniz.
    console.log("Form Verileri:", {
      ...formData,
      cvFileName: formData.cvFile ? formData.cvFile.name : "Dosya seçilmedi",
    });

    alert("Başvurunuz alınmıştır! Sizinle en kısa sürede iletişime geçilecektir.");
    setFormData({ name: "", email: "", jobTitle: "", cvFile: null, motivationLetter: "", knowsMontessori: false, yearsOfExperience: "" });
    const fileInput = document.getElementById("cvFile") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800 pt-20">
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
            src="/images/kittens.webp"
            alt="Öğretmen ve öğrenciler"
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
                  className={`bg-gray-100 dark:bg-gray-700 border ${emailError ? 'border-red-500' : 'border-gray-200 dark:border-gray-600'} rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full`}
                  placeholder="örnek@saglayici.com"
                  required
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-600 dark:text-red-400">{emailError}</p>
                )}
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
              {/* Montessori Eğitimi Bilgisi */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="knowsMontessori"
                  id="knowsMontessori"
                  checked={formData.knowsMontessori}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-purple-600 dark:focus:ring-purple-600"
                />
                <label htmlFor="knowsMontessori" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Montessori eğitimi hakkında bilginiz var mı?</label>
              </div>
              {/* Deneyim Yılı (İlgili Alan) - Sadece knowsMontessori true ise göster */}
              {formData.knowsMontessori && (
                <div>
                  <label htmlFor="yearsOfExperience" className="text-sm text-gray-700 dark:text-gray-300 block mb-1 font-medium">Deneyim Yılı (İlgili Alan)</label>
                  <input
                    type="number" // Sayısal giriş için type="number"
                    name="yearsOfExperience"
                    id="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full"
                    placeholder="Örn: 3"
                    min="0" // Negatif değerleri engelle
                    required // Koşullu olarak zorunlu
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Lütfen ilgili alandaki (örn. öğretmenlik) deneyim yılınızı belirtiniz.
                  </p>
                </div>
              )}
              {/* CV/Portfolyo Yükleme Alanı - Metin güncellendi */}
              <div>
                <label htmlFor="cvFile" className="text-sm text-gray-700 dark:text-gray-300 block mb-1 font-medium">CV ve Portfolyo Yükle (PDF)</label>
                <input
                  type="file"
                  name="cvFile"
                  id="cvFile"
                  accept=".pdf" // Sadece PDF dosyalarına izin ver
                  onChange={handleFileChange}
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                  required // Artık zorunlu
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Lütfen başvurunuzu tamamlamadan önce CV'nizi ve varsa portfolyonuzu tek bir PDF dosyası olarak yükleyiniz. (Maks. 5MB)
                  {/* Gerçek uygulamada dosya boyutu ve tipi kontrolü yapılmalıdır. */}
                </p>
              </div>
              {/* Motivasyon Mektubu / Kendinizi Tanıtın Alanı */}
              <div>
                <label htmlFor="motivationLetter" className="text-sm text-gray-700 dark:text-gray-300 block mb-1 font-medium">Motivasyon Mektubu / Kendinizi Tanıtın</label>
                <textarea
                  name="motivationLetter"
                  id="motivationLetter"
                  value={formData.motivationLetter}
                  onChange={handleChange}
                  rows={5} // Metin kutusunun yüksekliği
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded py-2 px-3 block focus:ring-purple-500 focus:border-purple-500 text-gray-700 dark:text-gray-200 w-full resize-y"
                  placeholder="Neden Çengelci Montessori Anaokulu'nda çalışmak istediğinizi, eğitim felsefenizi ve çocuklarla çalışma deneyimlerinizi kısaca anlatınız."
                  required
                ></textarea>
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
