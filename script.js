function toggleTheme() {
  document.body.classList.toggle("dark");
}
function changeLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
}
const translations = {
  pt: {
    services: "Serviços",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    heroTitle: "Transformamos ideias em sites profissionais",
    heroText: "Criação de páginas modernas, responsivas e acessíveis para empresas e empreendedores.",
    cta: "Solicite um orçamento",
    service1: "Sites Institucionais",
    service1desc: "Design limpo e funcional para empresas.",
    service2: "Portfólios",
    service2desc: "Mostre seus trabalhos com estilo moderno.",
    service3: "Consultoria Digital",
    service3desc: "Suporte para sua presença online.",
    aboutText: "A Aurora Digital Solutions é especializada em criar sites modernos, responsivos e acessíveis.",
    send: "Enviar"
  },
  en: {
    services: "Services",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    heroTitle: "We turn ideas into professional websites",
    heroText: "Creating modern, responsive and accessible pages for businesses and entrepreneurs.",
    cta: "Request a quote",
    service1: "Institutional Websites",
    service1desc: "Clean and functional design for companies.",
    service2: "Portfolios",
    service2desc: "Showcase your work with modern style.",
    service3: "Digital Consulting",
    service3desc: "Support for your online presence.",
    aboutText: "Aurora Digital Solutions specializes in creating modern, responsive and accessible websites.",
    send: "Send"
  },
  es: {
    services: "Servicios",
    about: "Sobre",
    projects: "Proyectos",
    contact: "Contacto",
    heroTitle: "Transformamos ideas en sitios profesionales",
    heroText: "Creación de páginas modernas, responsivas y accesibles para empresas y emprendedores.",
    cta: "Solicite una cotización",
    service1: "Sitios Institucionales",
    service1desc: "Diseño limpio y funcional para empresas.",
    service2: "Portafolios",
    service2desc: "Muestra tu trabajo con estilo moderno.",
    service3: "Consultoría Digital",
    service3desc: "Soporte para tu presencia en línea.",
    aboutText: "Aurora Digital Solutions se especializa en crear sitios modernos, responsivos y accesibles.",
    send: "Enviar"
  }
};

function changeLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}