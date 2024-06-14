// import { initScrollIntegration, initV1 } from "http://lib.digitaldevops.com.mx/v1.1.js";
// import { loadFrontend, navigate, scrollTo } from "../vendor/v2.js";

import { loadFrontend, navigate, scrollTo } from "http://lib.digitaldevops.com.mx/v2.js";


loadFrontend({
  layout: {
    breakpoint: 500,
    maxWidth: 1000,
    type: "web-layout-00"
  },
  contactInfo: {
    companyName: "Abril Saorte",
    email: "abrilsaorte@mail.com",
    phone: "(999) 999-9999",
    address: "Calle false 123",
    logo: "./assets/logo.png",
    openingHours: ["Lunes a Viernes 9:00 am a 6:00 pm", "Sábado 9:00 am a 2:00 pm"]
  },
  palette: {
    textColor: "#3e2723",                  // Café oscuro
    textSecondaryColor: "#6d4c41",         // Café medio
    primaryColor: "#fce4ec",               // Rosita claro
    secondaryColor: "#ffebee",             // Rosita más claro
    accentColor: "#ffab91",                // Salmón
    accentSecondaryColor: "#ff8a80",       // Rosado
    primaryGradient: "linear-gradient(90deg, rgba(255,204,188,1) 0%, rgba(255,236,179,1) 25%, rgba(255,255,224,1) 50%, rgba(248,187,208,1) 75%, rgba(244,143,177,1) 100%)", // Gradiente primario
    backgroundColor: "#f3e5f5",            // Lavanda claro
    backgroundSecondaryColor: "#d7ccc8",    // Café muy claro
    accentColor1: "#ffe0b2",               // Durazno
    accentColor2: "#ffccbc",               // Salmón claro
    accentColor3: "#d1c4e9",               // Lavanda medio
    titleTextColor: "#4e342e",             // Café oscuro
    subtitleTextColor: "#8d6e63",          // Café claro
  },
  
})

export { navigate, scrollTo }