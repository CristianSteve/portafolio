import React from 'react'
import styled from 'styled-components';


const Scroll = styled.div`
    display: block;
    position: absolute;
    height: 45px;
    width: 25px;
    border-radius: 20px;
    border: 2px solid #161853;
    bottom: 60px;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    animation: mouse alternate 0.8s infinite ;
   
  :after {
    position: absolute;
    border-radius: 2px;
    width: 2px;
    height: 0px;
    content: '';
    background: #161853;
    margin-left: 10px;
    margin-top: 5px;
    animation: mouse-bola alternate 0.8s infinite;
   
  }
   
  @keyframes mouse-bola {
    0% {
      height: 0px;
    }
    100% {
      height: 10px;
    }
  }
   
  @keyframes mouse {
    0% {
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    100% {
      -webkit-transform: translate(-50%, calc(-50% + 20px));
      transform: translate(-50%, calc(-50% + 20px));
    }
  }
`


const Mouse = () => {
  return (
    <Scroll />
  )
}

export default Mouse