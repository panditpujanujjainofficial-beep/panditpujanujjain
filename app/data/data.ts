import { contactLocation } from "./location";

export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type Service = {
  id: string;
  symbol: string;
  title: string;
  description: string;
  details?: string;
};

export const siteData = {
  name: "आचार्य राघव गुरु जी",
  brandSubtitle: "M.A. ज्योतिष आचार्य · वैदिक पूजन",
  blessing: "॥ श्री गणेशाय नमः । श्री महाकालेश्वराय नमः ॥",
  location: contactLocation.address,
  consultationLabel: "परामर्श की जानकारी",
  consultationHref: "#consultation",
  accessibility: {
    mainNavigation: "मुख्य नेविगेशन",
    mobileNavigation: "मोबाइल नेविगेशन",
    openMenu: "मेन्यू खोलें",
    skipToContent: "मुख्य सामग्री पर जाएँ",
  },
} as const;

export const navigationData: readonly NavigationItem[] = [
  { label: "मुख्य पृष्ठ", href: "#home" },
  { label: "पूजन एवं अनुष्ठान", href: "#services" },
  { label: "ज्योतिष एवं कुंडली", href: "#consultation" },
];

export const heroData = {
  eyebrow: "महाकाल की नगरी से, आपकी आस्था तक",
  heading: "वैदिक परंपरा।",
  highlight: "आध्यात्मिक मार्गदर्शन।",
  introduction: "आचार्य राघव गुरु जी",
  description: "अंगारेश्वर महादेव मंदिर, उज्जैन की पावन भूमि पर पूजन एवं अनुष्ठान। ज्योतिष परामर्श और जन्म कुंडली विश्लेषण के साथ जीवन के महत्वपूर्ण प्रश्नों पर मार्गदर्शन पाएँ।",
  primaryAction: { label: "पूजन एवं सेवाएँ देखें", href: "#services" },
  secondaryAction: { label: "कुंडली परामर्श", href: "#consultation" },
  image: { src: "/heroPage.png", alt: "आचार्य राघव गुरु जी पारंपरिक वेशभूषा में" },
  portraitLabel: "आस्था • परंपरा • मार्गदर्शन",
  notes: ["वैदिक विधि से पूजन", "व्यक्तिगत परामर्श"],
} as const;

export const heroTrustData = {
  label: "हमारी सेवा की विशेषताएँ",
  items: [
    { id: "experience", icon: "experience", label: "15+ वर्ष का अनुभव" },
    { id: "location", icon: "location", label: "उज्जैन में पूजन सेवा" },
    { id: "guidance", icon: "guidance", label: "व्यक्तिगत मार्गदर्शन" },
    { id: "consultation", icon: "consultation", label: "पूजा एवं कुंडली परामर्श" },
  ],
} as const;

export const introductionData = {
  eyebrow: "श्रद्धा, संकल्प एवं मार्गदर्शन",
  heading: "उज्जैन की पावन भूमि पर आपकी श्रद्धा और संकल्प के साथ",
  paragraphs: [
    "उज्जैन भारत की प्राचीन धार्मिक एवं आध्यात्मिक परंपराओं से जुड़ी पावन नगरी है। इसी धार्मिक वातावरण में अंगारेश्वर महादेव मंदिर में विभिन्न पूजन एवं अनुष्ठानों के लिए आचार्य राघव गुरु जी से संपर्क किया जा सकता है।",
    "15+ वर्षों के अनुभव के साथ पूजा-अनुष्ठान, ग्रह शांति और ज्योतिषीय मार्गदर्शन के लिए व्यक्तिगत परामर्श प्रदान किया जाता है।",
  ],
  purpose: {
    heading: "हमारा उद्देश्य",
    steps: [
      "सही पूजा की जानकारी",
      "उचित तैयारी",
      "स्पष्ट संकल्प",
      "श्रद्धापूर्वक पूजन",
    ],
  },
} as const;

export const servicesData = {
  eyebrow: "हमारी प्रमुख पूजा सेवाएँ",
  heading: "ग्रह शांति से विशेष शिव आराधना तक",
  description: "हर पूजा का अपना धार्मिक उद्देश्य, विधि और संकल्प होता है। अपनी आवश्यकता के अनुसार पूजा का चयन करने से पहले परामर्श प्राप्त करें।",
  linkLabel: "देखें",
  featuredLabel: "वैदिक शांति पूजन",
  image: { src: "/pujan/pujanMangal.jpeg", alt: "शिवलिंग और पूजन सामग्री के साथ पारंपरिक पूजन की व्यवस्था" },
  consultationNote: "पूजा की विधि, आवश्यक सामग्री एवं तैयारी की जानकारी व्यक्तिगत परामर्श में प्राप्त करें।",
  consultationLabel: "पूजा से पहले परामर्श लें",
  consultationHref: "#consultation",
  closeLabel: "बंद करें",
  detailsLabel: "पूजन की जानकारी",
  bottomNote: "सही पूजा का चयन, सही जानकारी के साथ।",
  items: [
    {
      id: "mangal-dosh-shanti", symbol: "🔴", title: "मंगल पूजन एवं दोष निवारण",
      description: "मंगल ग्रह से संबंधित ज्योतिषीय स्थिति के लिए पारंपरिक शांति पूजन।",
      details: "मंगल पूजा, मंत्र जाप, संकल्प एवं आवश्यकतानुसार हवन की व्यवस्था।",
    },
    {
      id: "mangalnath-bhat-puja", symbol: "🕉️", title: "मंगलनाथ भात पूजा",
      description: "मंगलनाथ क्षेत्र की प्रसिद्ध भात पूजा परंपरा से संबंधित पूजन।",
      details: "संकल्प, पूजन एवं भात अर्पण की धार्मिक विधि।",
    },
    {
      id: "angarak-dosh-shanti", symbol: "🔥", title: "अंगारक दोष शांति",
      description: "मंगल एवं राहु से संबंधित ज्योतिषीय स्थिति के लिए शांति अनुष्ठान।",
      details: "कुंडली के आधार पर संबंधित पूजा एवं संकल्प की जानकारी।",
    },
    {
      id: "kaalsarp-dosh-shanti", symbol: "🐍", title: "कालसर्प दोष शांति",
      description: "राहु-केतु से संबंधित विशेष ज्योतिषीय स्थिति के संदर्भ में पूजन।",
      details: "शिव पूजन, नाग पूजन, मंत्र जाप एवं आवश्यकतानुसार हवन।",
    },
    {
      id: "guru-chandal-dosh-shanti", symbol: "🪔", title: "गुरु चांडाल दोष शांति",
      description: "गुरु और राहु से संबंधित ज्योतिषीय स्थिति के लिए पारंपरिक शांति पूजा।",
      details: "कुंडली विश्लेषण के बाद उपयुक्त पूजा की जानकारी।",
    },
    {
      id: "shapit-dosh-shanti", symbol: "🌿", title: "शापित दोष शांति",
      description: "कुंडली में बताई जाने वाली विशेष ग्रह स्थितियों के संदर्भ में पारंपरिक शांति अनुष्ठान।",
    },
    {
      id: "vish-dosh-shanti", symbol: "🔱", title: "विष दोष शांति",
      description: "विशेष ग्रह स्थितियों से संबंधित ज्योतिषीय मान्यताओं के अनुसार शांति पूजा एवं धार्मिक संकल्प।",
    },
    {
      id: "ark-kumbh-vivah", symbol: "💍", title: "अर्क-कुंभ विवाह",
      description: "विवाह संबंधी विशेष ज्योतिषीय मान्यताओं के संदर्भ में किया जाने वाला पारंपरिक संस्कार।",
    },
    {
      id: "navgrah-shanti-puja", symbol: "☀️", title: "नवग्रह शांति पूजा",
      description: "सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु एवं केतु की पारंपरिक आराधना।",
    },
    {
      id: "mahamrityunjay-jaap", symbol: "🔱", title: "महामृत्युंजय जप अनुष्ठान",
      description: "भगवान शिव की आराधना एवं महामृत्युंजय मंत्र जाप के साथ कल्याण, धैर्य और आत्मबल के लिए संकल्प।",
    },
    {
      id: "rudrabhishek", symbol: "🕉️", title: "रुद्राभिषेक पूजन",
      description: "भगवान शिव का अभिषेक, रुद्र पाठ, अर्चना एवं आरती।",
    },
    { id: "baglamukhi-havan", symbol: "🪔", title: "बगलामुखी हवन", description: "माँ बगलामुखी की आराधना, मंत्र जाप एवं वैदिक विधि से हवन।" },
    { id: "shani-shanti", symbol: "🪔", title: "शनि शांति", description: "शनि देव की आराधना, मंत्र जाप और शांति संकल्प के साथ पूजन।" },
    { id: "rahu-ketu-shanti", symbol: "🪔", title: "राहु–केतु शांति", description: "राहु एवं केतु के लिए पारंपरिक ग्रह शांति पूजन एवं मंत्र जाप।" },
    { id: "pitra-pujan", symbol: "🪔", title: "पितृ पूजन", description: "पूर्वजों के प्रति श्रद्धा, स्मरण और पारिवारिक संकल्प के साथ पितृ पूजन।" },
    { id: "mirchi-havan", symbol: "🪔", title: "शत्रु / तंत्र बाधा / मिर्ची हवन", description: "शत्रु एवं तंत्र बाधा से संबंधित धार्मिक संकल्प के लिए पारंपरिक मिर्ची हवन।" },
    { id: "angareshwar-mahadev-puja", symbol: "🪔", title: "अंगारेश्वर महादेव पूजा", description: "उज्जैन में अंगारेश्वर महादेव की आराधना, अभिषेक एवं मंगल पूजन।" },
  ] satisfies Service[],
} as const;

export const specialFeatureData = {
  eyebrow: "हमारा दृष्टिकोण",
  heading: {
    lead: "केवल पूजा नहीं —",
    emphasis: "पहले समझें, फिर संकल्प लें",
  },
  introduction: "किसी भी दोष या योग का नाम देखकर तुरंत पूजा तय करना आवश्यक नहीं है।",
  description: "हमारा प्रयास है कि पहले आपकी जन्मकुंडली, प्रश्न और पूजा के उद्देश्य को समझा जाए और उसके बाद संबंधित धार्मिक अनुष्ठान के बारे में जानकारी दी जाए।",
  processHeading: "प्रक्रिया",
  action: { label: "कुंडली विश्लेषण की जानकारी", href: "#kundli" },
  steps: [
    "कुंडली / आवश्यकता समझें",
    "ग्रह स्थिति पर चर्चा",
    "उपयुक्त पूजा की जानकारी",
    "तिथि एवं व्यवस्था तय करें",
    "श्रद्धापूर्वक पूजन",
  ],
} as const;

export const kundliData = {
  eyebrow: "जन्म कुंडली विश्लेषण",
  heading: "क्या आपकी कुंडली में कोई दोष या विशेष योग बताया गया है?",
  description: "गुरु चांडाल दोष, कालसर्प दोष, मंगल दोष, अंगारक दोष या अन्य ज्योतिषीय स्थिति के बारे में केवल सुनी हुई जानकारी के आधार पर निर्णय लेने के बजाय अपनी जन्मकुंडली का अध्ययन कराएँ।",
  analysisHeading: "कुंडली विश्लेषण में देखा जा सकता है:",
  analysisItems: [
    "ग्रहों की स्थिति",
    "लग्न एवं भाव",
    "मंगल की स्थिति",
    "राहु-केतु की स्थिति",
    "गुरु की स्थिति",
    "प्रमुख योग एवं दोष",
    "दशा एवं गोचर",
    "विवाह संबंधी संकेत",
    "करियर संबंधी संकेत",
    "पूजा/उपाय से जुड़े पारंपरिक सुझाव",
  ],
  requirementsHeading: "आवश्यक जानकारी",
  birthDetails: ["जन्म तिथि", "सही जन्म समय", "जन्म स्थान"],
  ctaLabel: "अपनी कुंडली का विश्लेषण कराएँ",
  phoneLabel: "मो.",
  phone: "6260852654",
  phoneHref: "tel:+916260852654",
} as const;

export const whyChooseUsData = {
  eyebrow: "विश्वास एवं मार्गदर्शन",
  heading: "आचार्य राघव गुरु जी से संपर्क क्यों करें?",
  items: [
    {
      id: "experience",
      icon: "award",
      title: "15+ वर्षों का अनुभव",
      description: "पूजा एवं ज्योतिषीय मार्गदर्शन के क्षेत्र में 15+ वर्षों का अनुभव।",
    },
    {
      id: "ujjain-pujan",
      icon: "location",
      title: "उज्जैन में प्रत्यक्ष पूजन",
      description: "अंगारेश्वर महादेव मंदिर, उज्जैन में पूजन की सुविधा।",
    },
    {
      id: "personal-guidance",
      icon: "guidance",
      title: "व्यक्तिगत मार्गदर्शन",
      description: "हर व्यक्ति के प्रश्न और संकल्प को समझने का प्रयास।",
    },
    {
      id: "preparation",
      icon: "preparation",
      title: "पूजा से पहले स्पष्ट जानकारी",
      description: "पूजा की विधि, उद्देश्य, तैयारी एवं आवश्यक व्यवस्था पहले समझाई जाती है।",
    },
    {
      id: "kundli-guidance",
      icon: "kundli",
      title: "कुंडली आधारित मार्गदर्शन",
      description: "जहाँ आवश्यक हो, जन्मकुंडली के आधार पर पूजा संबंधी चर्चा।",
    },
    {
      id: "tradition",
      icon: "tradition",
      title: "धार्मिक परंपरा का सम्मान",
      description: "पूजन को श्रद्धा, संकल्प और प्रचलित धार्मिक विधि के अनुरूप रखने पर ध्यान।",
    },
  ],
} as const;

export const faqData = {
  eyebrow: "अक्सर पूछे जाने वाले प्रश्न",
  heading: "आपके मन में पूजा से जुड़े प्रश्न?",
  description: "कुंडली, पूजन की तैयारी और उज्जैन आने से जुड़े सामान्य प्रश्नों के उत्तर।",
  consultationLabel: "परामर्श की जानकारी देखें",
  consultationHref: "#consultation",
  items: [
    {
      id: "puja-without-kundli",
      question: "क्या बिना कुंडली के पूजा कराई जा सकती है?",
      answer: "हर पूजा के लिए कुंडली आवश्यक नहीं होती। सामान्य धार्मिक पूजन के लिए अलग व्यवस्था हो सकती है, जबकि दोष/योग आधारित पूजा के लिए कुंडली उपयोगी होती है।",
    },
    {
      id: "kundli-before-puja",
      question: "क्या पहले कुंडली दिखाना जरूरी है?",
      answer: "यदि आप गुरु चांडाल, कालसर्प, मंगल, अंगारक या अन्य ग्रह संबंधी पूजा के लिए संपर्क कर रहे हैं, तो पहले कुंडली का अध्ययन करवाना उपयोगी हो सकता है।",
    },
    {
      id: "puja-results",
      question: "क्या पूजा से निश्चित परिणाम मिलता है?",
      answer: "पूजा धार्मिक आस्था और परंपरा का विषय है। किसी निश्चित आर्थिक, वैवाहिक, स्वास्थ्य या अन्य परिणाम की गारंटी नहीं दी जानी चाहिए।",
    },
    {
      id: "puja-participation",
      question: "पूजा के लिए कौन-कौन आ सकता है?",
      answer: "पूजा में सहभागिता पूजा के प्रकार, मंदिर की व्यवस्था और संबंधित अनुष्ठान की विधि के अनुसार निर्धारित की जाती है।",
    },
    {
      id: "visiting-ujjain",
      question: "क्या बाहर से उज्जैन आकर पूजा करा सकते हैं?",
      answer: "हाँ, पूजा की योजना पहले से बनाकर तिथि और व्यवस्था की पुष्टि की जा सकती है।",
    },
    {
      id: "online-kundli",
      question: "क्या ऑनलाइन कुंडली देखी जा सकती है?",
      answer: "कुंडली विश्लेषण के उपलब्ध माध्यम और प्रक्रिया के लिए सीधे संपर्क करें।",
    },
  ],
} as const;

export const footerData = {
  description: "श्रद्धा, परंपरा और आध्यात्मिकता का संगम।",
  backToTop: "ऊपर जाएँ",
} as const;
