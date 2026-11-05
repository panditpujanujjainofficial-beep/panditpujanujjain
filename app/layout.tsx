import type { Metadata } from "next";
import { siteData } from "./data/data";
import "./globals.css";
import "./pujan.css";
import "./blog.css";

export const metadata: Metadata = {
  title: `${siteData.name} | M.A. ज्योतिष आचार्य | 15 वर्षों का अनुभव | उज्जैन`,
  description:
    "15 वर्षों से उज्जैन में M.A. ज्योतिष आचार्य राघव गुरु जी द्वारा कालसर्प पूजन, मंगल पूजा, बगलामुखी हवन, शनि शांति, पितृ पूजन एवं वैदिक अनुष्ठान। संपर्क: +91 62608 52654।",
  keywords: [
    // Primary Hindi Keywords
    "उज्जैन में पंडित",
    "उज्जैन के प्रसिद्ध पंडित",
    "सर्वश्रेष्ठ पंडित उज्जैन",
    "कालसर्प दोष निवारण उज्जैन",
    "कालसर्प पूजा उज्जैन",
    "मंगल दोष शांति उज्जैन",
    "मंगलनाथ भात पूजा उज्जैन",
    "भात पूजा उज्जैन",
    "अंगारेश्वर महादेव पूजा",
    "महामृत्युंजय जाप उज्जैन",
    "बगलामुखी हवन उज्जैन",
    "रुद्राभिषेक उज्जैन",
    "पितृ दोष पूजा उज्जैन",
    "नवग्रह शांति पूजा उज्जैन",
    "शनि शांति पूजा उज्जैन",
    "अर्क कुंभ विवाह उज्जैन",
    "गुरु चांडाल दोष शांति",
    "अंगारक दोष शांति उज्जैन",
    "विष दोष शांति",
    "शापित दोष शांति",
    "मिर्ची हवन उज्जैन",
    "ज्योतिष परामर्श उज्जैन",
    "जन्म कुंडली विश्लेषण उज्जैन",
    "आचार्य राघव गुरु जी",
    "पंडित राघव गुरु जी",
    "वैदिक पूजन उज्जैन",
    // Primary English / Hinglish Keywords
    "pandit in ujjain",
    "best pandit in ujjain",
    "famous pandit in ujjain",
    "top pandit in ujjain",
    "ujjain pandit for puja",
    "kaal sarp dosh puja ujjain",
    "kalsarp puja ujjain",
    "kaalsarp dosh nivaran ujjain",
    "mangal dosh shanti ujjain",
    "mangalnath bhat puja ujjain",
    "bhat puja in ujjain",
    "angareshwar mahadev puja ujjain",
    "mahamrityunjay jaap ujjain",
    "baglamukhi hawan ujjain",
    "rudrabhishek ujjain",
    "pitra dosh nivaran ujjain",
    "navgrah shanti puja ujjain",
    "shani shanti puja ujjain",
    "ark kumbh vivah ujjain",
    "kumbh vivah pandit ujjain",
    "guru chandal dosh puja ujjain",
    "angarak dosh puja ujjain",
    "vedic pandit ujjain",
    "astrologer in ujjain",
    "jyotish in ujjain",
    "acharya raghav guru ji",
    "pandit raghav guru ji ujjain",
    "ujjain puja booking",
  ],
  authors: [{ name: "आचार्य राघव गुरु जी" }],
  creator: "आचार्य राघव गुरु जी",
  publisher: "पंडित पूजा उज्जैन - आचार्य राघव गुरु जी",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteData.name} | M.A. ज्योतिष आचार्य | 15 वर्षों का अनुभव | उज्जैन`,
    description:
      "उज्जैन में M.A. ज्योतिष आचार्य राघव गुरु जी द्वारा कालसर्प पूजन, मंगल भात पूजा, बगलामुखी हवन, महामृत्युंजय जप एवं वैदिक अनुष्ठान। संपर्क: +91 62608 52654।",
    locale: "hi_IN",
    type: "website",
    siteName: "पंडित पूजा उज्जैन - आचार्य राघव गुरु जी",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
