import React from "react";
import NavBar from "../Components/NavBar";
import styled from "styled-components";

const Page = () =>{

const Paragraph = styled.p`

font-size: 60px;


`


    return (
        <div>
        <NavBar/>
        <div>
            
            <Paragraph>Junior Software Developer</Paragraph>
        </div>
        </div>
    )
}

export default Page;