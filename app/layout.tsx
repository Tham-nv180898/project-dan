import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-be-vietnam",
});

export const metadata: Metadata = {
  title: "Thuyết Minh & Nội Dung Mảng Ảnh - Phòng Hồ Chí Minh",
  description: "Website trình chiếu danh sách & bài thuyết minh mảng ảnh Phòng Hồ Chí Minh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-[#07090e] font-sans text-gray-100 selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
