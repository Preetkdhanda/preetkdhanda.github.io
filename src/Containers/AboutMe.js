import React from "react";
import NavBar from "../Components/NavBar";
import styled from "styled-components";


const AboutMe = () => {

    const Paragraph = styled.section`
    
    color: #322f30;
    font-size: 40px;
    display: flex;
    gap: 10px
    text-align:center;
    
    

    `

    const Title = styled.h1`
    
    text-align: center;
    font-size: 50px;
    color: dark grey;
    
    `
    const Seperate = styled.main`
    
    gap: 50px;

    `
    
    return(


        <div>
            <NavBar/>
            <Title><u>About Me</u></Title>
            <Seperate>
                <Paragraph>
                    Welcome to my page! My name is Harpreet Dhanda and this page is to showcase my work as a newly trained software developer.
                    I have alot to learn through this journey and would love any opportunity that could take my development skills to the next
                    level. I have trained with CodeClan based in Scotland and have completed their Professional Software Development Course. I have learned
                    three languages during the 16 week course such as Python, Java and JavaScript.
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFaC5qjRJhICA/profile-displayphoto-shrink_800_800/0/1653049211172?e=1666828800&v=beta&t=AaT3sA_qDz-Mc65Tov7Z0ctAscGLd8Eiu4b3-v0Osdk" alt="profile"/>
                </Paragraph>
            </Seperate>

        </div>
    )

    
    
}


export default AboutMe;