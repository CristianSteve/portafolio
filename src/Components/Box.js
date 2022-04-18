import React from 'react'
import styled from 'styled-components'
import CodeIcon from '@mui/icons-material/Code';

const Skill = styled.div`
    width: 140px;
    height:125px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.55rem;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 5px;
    position: relative;

    &::before{
        width: 0%;
        height: 4px;
        position: absolute;
        bottom: 0px;
        content: '';
        transition: width 0.3s ease;
        background-color: #1C0C5B;
    }

    &:hover{
        :before{
            width: 100%;
            background-color: #fff;
        }
        span{
            font-size: 1.4rem;
            font-weight: bold;
            color: #fff;
            cursor: context-menu;
        }
        color: #fff;
        background-color: rgb(0 0 0 / 61%);
    }

    svg{
        display: none;
    }
    @media (max-width: 700px) {
        svg{
            display: block;
        }
    }
    `;
    //box-shadow: 7px 7px 12px 1px rgba(0,0,0,0.29), 13px 16px 45px 3px rgba(0,0,0,0.32); 
    
const Text = styled.span`
    font-size: 1.3rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: #000;
    transition: all 0.3s ease;
`

const Box = ({text = ''}) => {
  return (
    <Skill>
        <CodeIcon fontSize='medium'/>
        <Text>{text}</Text>
    </Skill>
  )
}

export default Box