import React, { useEffect, useRef, useState } from "react";
import styledComponents from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Button = styledComponents.div`
    height: 3rem;
    width: 3rem;
    background-color: var(--bs-blue);
    position: fixed;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
`;

const ButtonTop = () => {
  const row = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const updateBottom = () => {
      if (window.scrollY > 50 && !show) {
        setShow(true);
      } else if (window.scrollY < 50 && show) {
        setShow(false);
      }
    };
    window.addEventListener("scroll", updateBottom);
    return () => {
      window.removeEventListener("scroll", updateBottom);
    };
  }, [show]);

  const handleUpPage = () => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      {show && (
        <Button ref={row} onClick={handleUpPage}>
          <ArrowUpwardIcon />
        </Button>
      )}
    </React.Fragment>
  );
};

export default ButtonTop;
