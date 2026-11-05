import type { Metadata } from "next";
import { BlogPosts } from "@/components/pujan/blog-posts";
import { ContentPage } from "@/components/pujan/content-page";

export const metadata: Metadata = {
  title: "पूजन एवं ज्योतिष ब्लॉग | आचार्य राघव गुरु जी – उज्जैन",
  description:
    "पूजा-पाठ, वैदिक परंपराओं, ज्योतिष एवं उज्जैन से जुड़े पंडित पूजा उज्जैन के नवीनतम Medium लेख पढ़ें।",
  keywords: [
    "उज्जैन ज्योतिष ब्लॉग",
    "वैदिक पूजा लेख",
    "कालसर्प दोष निवारण उपाय",
    "मंगल दोष निवारण जानकारी",
    "धार्मिक अनुष्ठान ब्लॉग",
    "ujjain astrology blog",
    "vedic puja vidhi articles",
    "hindu astrology ujjain",
  ],
  openGraph: {
    title: "पूजन एवं ज्योतिष ब्लॉग | आचार्य राघव गुरु जी – उज्जैन",
    description:
      "पूजा-पाठ, वैदिक परंपराओं, ज्योतिष एवं उज्जैन से जुड़े पंडित पूजा उज्जैन के नवीनतम Medium लेख पढ़ें।",
    locale: "hi_IN",
  },
};

export default function BlogPage() {
  return (
    <ContentPage title="पूजन एवं ज्योतिष ब्लॉग" eyebrow="ज्ञान से आस्था तक" description="पूजन, मंत्रों और धार्मिक परंपराओं से जुड़े लेख — आपके मार्गदर्शन के लिए।" image={{ src: "/pujan/agareshwar.jpeg", caption: "महाकाल की नगरी उज्जैन से आस्था और परंपरा की बातें" }}>
      <BlogPosts />
    </ContentPage>
  );
}
