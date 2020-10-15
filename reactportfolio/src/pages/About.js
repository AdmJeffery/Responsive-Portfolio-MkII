import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar/index.js"
import Footer from "../components/Footer/index.js"

function About(){
    return(
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col size = "md-8">
                        <h3>About Me</h3>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12" >
                       <img size = "m-1" src = "../assets/images/Family_Picture.jpg" alt = "MyMug" width= "200" height="200"/>
                       <p>Hello! I'm currently a freelance writer living in Provo, UT, with my wife and daughter. I graduated with a Bachelor's of Arts in English from Utah Valley University. I currently work as a freelance writer. </p>
                        <p>I'm currently learning to become a programmer in order to switch careers and make a better life for me and my family. My interests include learning more about WWI history, reading, writing fiction, and gaming with friends.</p>
                    </Col>
                    <br/>
                </Row>
                <Row>
                    <Col size = "md-12">
                    <h4 id="link-title">Links</h4>
              <hr/>
              <p>Learn more about me by viewing my: </p>
            <ul size="float-left">
              <li> <a href="https://www.facebook.com/ammon.jeffery">Facebook</a></li>
              <li><a href="https://mobile.twitter.com/amphibagoat/media">Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/ammon-jeffery-2b51b9165/">LinkedIn</a></li>
              <li><a href="https://docs.google.com/document/d/1mYXi7oKkqpVGQX2Cs72Q7uDiB7kYidUBK1Llflhz9p0/edit?usp=sharing">Resume</a></li>
            </ul>  
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About