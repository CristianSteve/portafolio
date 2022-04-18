import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const Found = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap");
  font-family: "Dancing Script", cursive;
  text-align: center;

  h2 {
    margin-top: 3rem;
    font-size: 12rem !important;
  }
  h3 {
    margin: 1.55rem;
    font-size: 4rem !important;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <Found>
      <h2>404</h2>
      <h3>OOPS! Page not Found</h3>
      <Button
        color="primary"
        variant="contained"
        startIcon={<HomeIcon />}
        onClick={handleHome}
      >
        Ir Pagina Principal
      </Button>
    </Found>
  );
};

export default NotFound;
