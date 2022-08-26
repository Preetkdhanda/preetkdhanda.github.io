import React from "react";
import { Link}from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

const Menu = styled.ul`


 { display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 10px;

  }`
  
 const MenuOptions = styled.li`
 {
    padding: 3px;
    text-decoration: none;
    color: #322f30;
    display: block;
    border: 2px solid lightgrey;}

    // &:hover {
    //     background-color: #322f30;
    //   }
   
`



    return(
        <Menu>
        <MenuOptions><Link to="/">Home</Link></MenuOptions>
        <MenuOptions><Link to="/aboutme">About Me</Link></MenuOptions>
        <MenuOptions><Link to="/projects">Projects</Link></MenuOptions>
        <MenuOptions><Link to="/contactme">Contact Me</Link></MenuOptions>
        </Menu>
    )
}

export default NavBar;