import React, { useEffect, useState } from "react";
import Experence from "./Experence";
import siiLogo from "./../sii.svg";
import tataLogo from "./../tata.png";
import gfiLogo from "./../gfi.jpg";
import homesentryLogo from "./../homesentry.jpg";
import styledComponents from "styled-components";
import useLenguage from "../Hooks/useLenguage";

const listCompany = [
  {
    id: 1,
    company: "Sii Group Colombia",
    link: "",
    time: "2 años 3 meses",
    logo: siiLogo,
    positions: [
      {
        id: "Technical Specialist I COBOL",
        date: "feb. de 2022",
        country: "Bogotá D.C - Colombia",
      },
      {
        id: "Developer III COBOL",
        date: "feb. de 2020",
        country: "Bogotá D.C - Colombia",
      },
    ],
  },
  {
    id: 2,
    company: "Tata Consultancy Services",
    link: "",
    time: "2 años 3 meses",
    logo: tataLogo,
    positions: [
      {
        id: "Developer COBOL",
        date: "ene. de 2020 - feb. de 2020",
        country: "Bogotá D.C - Colombia",
      },
    ],
  },
  {
    id: 3,
    company: "GFI Informatica Colombia",
    link: "",
    time: "1 año 5 meses",
    logo: gfiLogo,
    positions: [
      {
        id: "Programador STAFF COBOL",
        date: "sept. de 2018 - ene. de 2020",
        country: "Bogotá D.C - Colombia",
      },
    ],
  },
  {
    id: 4,
    company: "Home Sentry - Mecanelectro S.A.S",
    link: "",
    time: "5 años",
    logo: homesentryLogo,
    positions: [
      {
        id: "Desarrollador COBOL",
        date: "feb. de 2017 - sept. de 2018",
        country: "Bogotá D.C - Colombia",
      },
      {
        id: "Operador de Sistemas",
        date: "oct. de 2013 - feb. de 2017",
        country: "Bogotá D.C - Colombia",
      },
    ],
  },
];

const List = styledComponents.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

const Professional = () => {
  const { lenguage } = useLenguage();
  const [ experience, setExperience ] = useState();

  useEffect(() => {
    if(lenguage)
      setExperience(lenguage.experience)
  }, [lenguage]);

  return (
    <section id={experience?.id}>
      <h3>{experience?.title1}</h3>
      <List>
        {listCompany.map((e) => (
          <Experence
            key={e.id}
            city={"Bogotá D.C"}
            company={e.company}
            date={e.time}
            linkSrc={e.logo}
            positions={e.positions}
          />
        ))}
      </List>
    </section>
  );
};

export default Professional;
