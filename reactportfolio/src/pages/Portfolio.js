import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar/index.js"
import Footer from "../components/Footer/index.js"
import Project from "../components/Project/index.js"

function Portfolio(){
   return(
       <div>
           <Navbar/>
           <Container>
               <Row>
                   <Col size = "md-8">
                   <h3>Portfolio</h3>
                   </Col>
               </Row>
               <hr/>
               <Row>
                   <Col size = "md-6">
                    <Project src = "../../assets/images/Papyromancy.png" 
                    alt ="papyromancy_project" 
                    deployed = "https://dylandewey.github.io/Papyromancy/"
                    linkone = "Papyromancy"
                    repo = "https://github.com/dylandewey/Papyromancy.git"
                    linktwo = "Papyromancy Repository" />
                   </Col>
               </Row>
           </Container>
       </div>
   )
}

export default Portfolio