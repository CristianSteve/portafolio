import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useLenguage from "../Hooks/useLenguage";
import AboutImg from "./../about.svg";

const Me = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.333fr 1fr;
  align-items: center;
  gap: 2rem;
  p {
    margin-left: 1.2rem;
    margin-bottom: 3rem;
    font-size: 1rem;
    text-align: justify;
  }

  @media (max-width: 700px) {
    gap: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Item = styled.div`
  padding: 0px 1.3rem;

  h3 {
    margin-bottom: 1.5rem;
  }
`;

const Image = styled.div`u
  width: 85%;
  background-color: #71d3f554;
  border-radius: 50%;
  justify-self: center;

  img {
    width: 100%;
    height: 80%;
  }

  @media (max-width: 700px) {
    width: 6  0%;
  }
`;

const About = () => {
  const { lenguage } = useLenguage();
  const [about, setAbout] = useState();

  useEffect(() => {
    if (lenguage) setAbout(lenguage.screenAbout);
  }, [lenguage]);

  return (
    <Me id="about" className="container">
      <div>
        <Item>
          <h3>{about?.title1}</h3>
          <p>{about?.text1}</p>
        </Item>
        <Item>
          <h3>{about?.title2}</h3>
          <p>{about?.text2}</p>
        </Item>
      </div>
      <Image>
        <img src={AboutImg} alt="about me" />
      </Image>
    </Me>
  );
};

export default About;
