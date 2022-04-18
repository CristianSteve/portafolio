import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useLenguage from "../Hooks/useLenguage";
import Box from "./Box";

const mySkill = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "Java",
  "COBOL",
  "COBOL Mainframe",
  "RMCOBOL",
  "MFCOBOL",
  "Control-M",
  "JCL",
  "CICS",
  "Colas MQ",
  "ChangeMan",
  "DB2",
  "MYSQL",
  "Shell",
  "SCRUM",
  "React JS",
  "JSON",
  "Linux",
  "Unix",
];

/* const herramientas = [
  "Jira",
  "Postman",
  "SoapUI",
  "Insonmia",
  "Dimension",
  "Visual COBOL Eclipse",
]; */

const Lista = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
  margin-top: 3rem;
  justify-content: center;
  @media (max-width: 700px) {
    padding: 0px;
  }
`;

const Skills = () => {
  const { lenguage } = useLenguage();
  const [skill, setSkill] = useState();

  useEffect(() => {
    if (lenguage) setSkill(lenguage.skill);
  }, [lenguage]);

  return (
    <section id="skill">
      <h2>{skill?.title1}</h2>
      <Lista>
        {mySkill.map((skill, num) => (
          <Box key={num} text={skill} />
        ))}
      </Lista>
    </section>
  );
};

export default Skills;
