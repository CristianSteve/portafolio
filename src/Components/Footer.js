import React from "react";
import styledComponents from "styled-components";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterEnd = styledComponents.footer`
display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 10px 10px 0px 0px;
    p{
        font-size: 0.888rem;
        color: #fff;
        margin: 0px;
        width: 100%;
        text-align: center;
    }

    hr{
      width: 100%;
      margin-bottom: 1.5rem;
      color: #fff;
    }
`;

const Contanct = styledComponents.footer`
    display: flex;
    gap: 30px;
`;

const Link = styledComponents.a`
    color: #fff !important;
    svg{
      font-size: 2rem;
    }
`;

const Footer = () => {
  return (
    <FooterEnd>
      <p>
        Reservados todos los derechos. No se permite la reproducción total o
        parcial de esta obra, ni su incorporación a un sistema informático
      </p>
      <hr />
      <Contanct>
        <Link
          href="https://www.linkedin.com/in/cristian-steve-carrillo-soracipa-6a5a21186"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon /> - Linkedln
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=+573008688671"
          rel="noreferrer"
          target="_blank"
        >
          <WhatsAppIcon /> - WhatsApp
        </Link>
      </Contanct>
    </FooterEnd>
  );
};

export default Footer;
