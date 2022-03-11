import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {BsCheck2Circle } from "react-icons/bs";


export const Nav  = styled.nav`
    background: #fff;
    height: 80px;
    display:flex;
    justify-content: space-between;
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoratiom: none;
    padding: 0 1rem;
    cursor: pointer;
`

export const CheckIcon = styled(BsCheck2Circle)`
    color: #1dbe63;
    font-size: 1.8rem;
`


export const Bars = styled(FaBars)`

    display: none;
    color: #000;
    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        right: 0;
        margin-right:10px;  
        margin-top:10px ;
        transform: translated(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

`

export const NavMenu = styled.div`

    
    
`

// display:flex;
//     align-items: center;
//     margin-right: -24px;



export const NavBtn = styled.nav`

    display:flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 760px){
        display:none;
    }

`



export const NavBtnLink = styled(Link)`

    border-radius: 4px;
    background: #3fbbc0;
    padding: 8px 15px;
    color: #fff;
    outline: none;
    border: none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #66dade;
        color: #010606;
    }

` 











