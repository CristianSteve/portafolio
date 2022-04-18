import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import second from "./../photo.png";
import styled from "styled-components";
import Mouse from "./Mouse";
import Social from "./Social";
import useLenguage from "../Hooks/useLenguage";

const Article = styled.article`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 5rem;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  }
`;

const Portada = () => {
  const { lenguage } = useLenguage();
  const [ portada, setPortada ] = useState();

  useEffect(() => {
    setPortada(lenguage?.index)
  }, [lenguage])
  

  return (
    <Article>
      <Container>
        <Item>
          <Avatar
            alt="Cristian Steve Carrillo"
            src={second}
            sx={{ width: 180, height: 180 }}
          />
          <Social />
        </Item>
        <Item>
          <h2>{portada?.title1}</h2>
          <h3>{portada?.title2}</h3>
          <h4>{`-{ ${portada?.title3} }-`}</h4>
        </Item>
      </Container>
      <Mouse />
    </Article>
  );
};

export default Portada;
