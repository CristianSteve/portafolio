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
        "My name is Cristian Steve Carrillo, I am of Colombian nationality and a person passionate about the analysis and development of applications.",
      title2: "My Professional profile",
      text2:
        "Software Engineer in course in eleventh semester with 5 years of experience in software development, capable of giving opinions and making decisions, with analysis and development capacity for the optimization of activities required by the business, commitment, proactivity, ease of learning and responsibility in the activities carried out.",
    },
    skill: {
      id: "skills",
      title1: "Skills",
      title2: "Development Tools",
    },
    experience: {
      id: "experience",
      title1: "Experience",
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
      title1: "¡Hola!",
      title2: "Soy Cristian Steve Carrillo",
      title3: "Developer Software",
    },
    screenAbout: {
      id: "acerca",
      title1: "Acerca de",
      text1:
        "Me llamo Cristian Steve Carrillo, soy de nacionalidad Colombiana y una persona apasionada por el análisis y desarrollo de aplicaciones.",
      title2: "Perfil Profesional",
      text2:
        "Ingeniero de Software en curso en onceavo semestre, con 5 años de experiencia en desarrollo de software, capaz de opinar y tomar decisiones, con capacidad de análisis y desarrollo para la optimización de actividades que requiera el negocio, compromiso, proactividad, facilidad de aprendizaje y responsabilidad en las actividades que desarrolle.",
    },
    skill: {
      id: "habilidades",
      title1: "Habilidades Tecnicas",
      title2: "Herramientas Desarrollo",
    },
    experience: {
      id: "experiencia",
      title1: "Experiencia",
    },
  },
];

export default idioma;
