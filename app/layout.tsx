import type { Metadata } from "next";
import { siteData } from "./data/data";
import "./globals.css";
import "./pujan.css";

export const metadata: Metadata = {
  title: `${siteData.name} | M.A. ज्योतिष आचार्य | 15 वर्षों का अनुभव | उज्जैन`,
  description: "15 वर्षों से उज्जैन में M.A. ज्योतिष आचार्य राघव गुरु जी द्वारा कालसर्प पूजन, मंगल पूजा, बगलामुखी हवन, शनि शांति, पितृ पूजन एवं वैदिक अनुष्ठान। संपर्क: +91 62608 52654।",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
