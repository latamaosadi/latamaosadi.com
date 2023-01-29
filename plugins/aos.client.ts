import AOS from "aos";

import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({
      easing: "ease-in-out",
      duration: 800,
    });
  }
});
