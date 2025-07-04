import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'placehold.co', // Bu satırın zaten olması gerekiyor
      // Diğer izin verilen hostnameleriniz varsa buraya ekleyebilirsiniz.
    ],
    // Aşağıdaki satırı ekleyin:
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  /* config options here (varsa diğer ayarlarınız) */
};

export default nextConfig;