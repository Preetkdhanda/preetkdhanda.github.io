import React from "react";
import NavBar from "../Components/NavBar";
import "../App.css";
import styled from "styled-components";


const ContactMe = () => {
    const Title = styled.h1`
    
    text-align: center;
    font-size: 50px;
    color: dark grey;
    
    `

    const Paragraph = styled.div`
    
    color: #322f30;
    font-size: 20px;
    
    gap: 10px
    text-align:center;
    
    

    `


   


    return(


        <div>
            <NavBar/>
         
            <Title><b><u>Contact Details</u></b> </Title>
            <Paragraph>
            <main>
                <section>
                   <p> Name: Harpreet Dhanda </p>
                   <p>  Email: harpreet_h@hotmail.co.uk </p>
                   <p>  Mobile: 07710018910 </p>
                   <p> Based: UK - Flexible </p>

                    <div class="footer-social-icons">
    <h4 class="_14">Follow me on</h4>
    <ul class="social-icons">
        <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
        <li><a href="https://www.linkedin.com/in/harpreet-dhanda-12b46a11a/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
        <li><a href="https://github.com/Preetkdhanda" class="social-icon"> <i class="fa fa-github"></i></a></li>
    </ul>
</div>

                </section>
            </main>

        </Paragraph>
        </div>
    )

    
    
}


export default ContactMe;