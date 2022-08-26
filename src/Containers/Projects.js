import React from "react";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
const Projects = () => {

    
    const Title = styled.h1`
    
    text-align: center;
    font-size: 50px;
    color: dark grey;
    
    `

    return(


        <div>
            <NavBar/>
            <Title><b><u>Projects</u></b></Title>
            <main>
                <section>
                    Projects worked upon on
                </section>
            </main>

        </div>
    )

    
    
}


export default Projects;