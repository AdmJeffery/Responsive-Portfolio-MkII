import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar/index.js"

function About(){
    return(
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col size = "md-8">
                        <h3>About Me</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About