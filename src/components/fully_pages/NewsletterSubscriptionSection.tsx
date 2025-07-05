"use client";

import React, { useState } from "react";
// Image ve Link bu bileşende doğrudan kullanılmadığı için import edilmedi.

export default function NewsletterSubscriptionSection() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Sadece hotmail.com, gmail.com ve yahoo.com uzantılarını kabul eden doğrulama
  const validateEmail = (emailAddress: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(hotmail|gmail|yahoo)\.com$/;
    return emailRegex.test(emailAddress);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);

    if (value === "") {
      setEmailError(null);
    } else if (!validateEmail(value)) {
      setEmailError("Sadece @hotmail.com, @gmail.com ve @yahoo.com uzantılı e-posta adresleri kabul edilmektedir.");
    } else {
      setEmailError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Sadece @hotmail.com, @gmail.com ve @yahoo.com uzantılı e-posta adresleri kabul edilmektedir.");
      alert("Lütfen geçerli bir e-posta adresi giriniz.");
      return;
    }

    // E-posta başarıyla doğrulandı, abone olma işlemini simüle et
    console.log("Abone Olma İsteği:", email);
    setIsSubscribed(true); // Abone olunduğunu göster
    alert("Bültenimize başarıyla abone oldunuz! Yeniliklerden haberdar olacaksınız.");
    setEmail(""); // Formu sıfırla
    setEmailError(null);
    // Gerçek bir uygulamada, burada bir API çağrısı ile e-posta adresini bir veritabanına veya e-posta listesi hizmetine kaydedersiniz.
  };

  return (
    <section className="py-16 bg-gray-800 pt-20"> {/* Navbar için üst boşluk eklendi */}
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg"> {/* rounded-t-lg yerine rounded-lg */}
          <p className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Okulumuzdaki Yeniliklerden Haberdar Olun!
          </p>
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-8">
            Güncellemeler, yeni etkinlikler ve Montessori eğitimine dair haberler doğrudan gelen kutunuza gelsin.
          </p>

          {isSubscribed ? (
            <div className="text-center text-green-600 dark:text-green-400 font-medium text-lg">
              Teşekkürler! Bültenimize abone oldunuz.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative mt-3">
                <input
                  className={`appearance-none border pl-12 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 dark:text-gray-200 leading-tight focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-gray-100 dark:bg-gray-700 ${
                    emailError ? "border-red-500" : "border-gray-200 dark:border-gray-600"
                  }`}
                  id="email"
                  type="email" // E-posta tipi
                  name="email"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
              </div>
              {emailError && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 text-left">{emailError}</p>
              )}

              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="text-white py-2 px-6 uppercase rounded-lg bg-purple-700 hover:bg-purple-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Abone Ol
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
