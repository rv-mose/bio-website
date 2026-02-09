let currentLang = "en";

const seoData = {
  en: {
    title: "Professional Website for Business | ₹2999 Website Design",
    desc: "Get a professional business website for just ₹2999. Mobile friendly, SEO optimized, responsive design, and WhatsApp integration.",
    key: "business website design, cheap website india, professional website, website for small business"
  },
  ta: {
    title: "உங்கள் வணிகத்திற்கு தொழில்முறை இணையதளம் | ₹2999 மட்டும்",
    desc: "₹2999க்கு உங்கள் வணிகத்திற்கு தொழில்முறை இணையதளம். மொபைல் நட்பு, SEO அமைப்பு, மற்றும் WhatsApp இணைப்பு.",
    key: "வணிக இணையதளம், குறைந்த விலையில் இணையதளம், தொழில்முறை இணையதளம், சிறு வணிக இணையதளம்"
  }
};

function toggleLang(){
  const elements = document.querySelectorAll("[data-en]");
  const btn = document.querySelector(".lang-btn");

  currentLang = currentLang === "en" ? "ta" : "en";

  // Change page text
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  // Change SEO meta tags
  document.getElementById("meta-title").textContent = seoData[currentLang].title;
  document.getElementById("meta-desc").setAttribute("content", seoData[currentLang].desc);
  document.getElementById("meta-key").setAttribute("content", seoData[currentLang].key);
  document.documentElement.lang = currentLang;

  btn.textContent = currentLang === "en" ? "தமிழ்" : "EN";
}