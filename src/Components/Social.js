import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styledComponents from "styled-components";
//import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Icon = styledComponents.div`
  padding-top: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  svg{
    font-size: 2rem;
  }
`;

const Linkend = styledComponents.div`
  color: #0a66c2;
`;

const Social = () => {
  return (
    <Icon>
      <Linkend>
        <LinkedInIcon />
        <span> - Linkeind</span>
      </Linkend>
    </Icon>
  );
};

export default Social;
