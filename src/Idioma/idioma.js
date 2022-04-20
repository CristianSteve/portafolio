import col from "./../bandera-colombia.png";
import eeuu from "./../bandera-eeuu.png";

const idioma = [
  {
    id: 1,
    lenguage: "English",
    icono: eeuu,
    navList: [
      { id: "home", value: "Home" },
      { id: "aboutme", value: "About me" },
      { id: "skills", value: "Skills" },
      { id: "experience", value: "Experience" },
    ],
    index: {
      id: "home",
      title1: "¡Hello!",
      title2: "I'm Cristian Steve Carrillo",
      title3: "Developer Software",
    },
    screenAbout: {
      id: "aboutme",
      title1: "About me",
      text1:
        "Me llamo Cristian Steve Carrillo, soy de nacionalidad Colombiana y una persona apacionada por el analisis y desarrollo de aplicaciones.",
      title2: "My Professional profile",
      text2:
        "Ingeniero de Software en curso en onceavo semestre, con 5 años de experiencia en desarrollo de software, capaz de opinar y tomar decisiones, con capacidad de análisis y desarrollo para la optimización de actividades que requiera el negocio, compromiso, proactividad, facilidad de aprendizaje y responsabilidad en las actividades que desarrolle.",
    },
    skill: {
      id: "skills",
      title1: "My Skills",
    },
    experience: {
      id: "experience",
      title1: "My Experience",
    },
  },
  {
    id: 2,
    lenguage: "Español",
    icono: col,
    navList: [
      { id: "inicio", value: "Inicio" },
      { id: "acerca", value: "Acerca" },
      { id: "habilidades", value: "Habilidades" },
      { id: "experiencia", value: "Experiencia" },
    ],
    index: {
      id: "inicio",
      title1: "Hola!",
      title2: "Soy Cristian Steve Carrillo",
      title3: "Developer Software",
    },
    screenAbout: {
      id: "acerca",
      title1: "Acerca de",
      text1:
        "Me llamo Cristian Steve Carrillo, soy de nacionalidad Colombiana y una persona apacionada por el analisis y desarrollo de aplicaciones.",
      title2: "Perfil Profesional",
      text2:
        "Ingeniero de Software en curso en onceavo semestre, con 5 años de experiencia en desarrollo de software, capaz de opinar y tomar decisiones, con capacidad de análisis y desarrollo para la optimización de actividades que requiera el negocio, compromiso, proactividad, facilidad de aprendizaje y responsabilidad en las actividades que desarrolle.",
    },
    skill: {
      id: "habilidades",

      title1: "Mis Habilidades Tecnicas",
    },
    experience: {
      id: "experiencia",
      title1: "Mi Experiencia",
    },
  },
];

export default idioma;
