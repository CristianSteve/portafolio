import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";

const Card = styledComponents.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const Item = styledComponents.div`
    display: flex;
    background-color: #fff;
    width: 55%;
    padding: 1.5rem;
    column-gap: 1.5rem;
    padding-top: ${(props) => (props.line ? "0px" : "1.5rem")};
    
    @media (max-width: 700px) {
        width: 100%;
    }
`;

const ContainerImg = styledComponents.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 100%;
    }
`;

const ContainerLine = styledComponents.div`
    width: 20%;
    position: relative;

    &::before{
        content: '';
        background-color: #ccc;
        border-radius: 50%;
        width:10px;
        height:10px;
        position: absolute;
        left: calc(50% - 5px);
    }
    &::after{
        content: '';
        background-color: #ccc;
        left: calc(50% - 1px);
        border-radius: 50%;
        width:2px;
        height:100%;
        position: absolute;
    }
`;

const Information = styledComponents.div`
    display: flex;
    flex-direction : column;
    width: 80%;

    p{
        color: #000;
        font-weight: 500;
    }
`;

const Experence = ({ linkSrc, title, company, date, city, positions = [] }) => {
  const [primary, setPrimary] = useState(false);

  useEffect(() => {
    if (positions.length > 1) setPrimary(true);
  }, [positions.length]);

  return (
    <Card>
      <Item>
        <ContainerImg>
          <img src={linkSrc} alt={title} />
        </ContainerImg>
        <Information>
          {primary ? (
            <>
              <p>{company}</p>
              <span>{date}</span>
            </>
          ) : (
            <>
              <p>{positions[0].id}</p>
              <span>{company}</span>
              <span>{date}</span>
              <span>{city}</span>
            </>
          )}
        </Information>
      </Item>
      {primary &&
        positions.map((e, n) => (
          <Item key={n} line>
            <ContainerLine></ContainerLine>
            <Information line>
              <p>{e.id}</p>
              <span>{e.date}</span>
              <span>{e.country}</span>
            </Information>
          </Item>
        ))}
    </Card>
  );
};

export default Experence;
