import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import EX from '../img/extraction.jpg'
import { Link  } from "react-router-dom";



export default class Extraction extends Component {
    render() {
        const widHeig ={
            height:'90vh',
            width:'100%',
            zIndex:-10,
            opacity:0.4,
           
        }
        return (
            <div className="mainDiv2">
            <NavBar />
            
          
        
            
            <Container fluid>
                <Row>
                   
                    <Col className="col">
                    <img style={widHeig} src ={EX}/>
                    <div className="x1">

                        <h1>Extraction</h1>
                        
                        <div> 2020 | 15+ | 116min | Action  Thriller</div>
                        <br></br>
                        <p>
                        Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord
                       

                        </p>
                      
                          <p>Starting:Chris Hemsworth, Bryon Lerum, Ryder Lerum, Rudhraksh Jaiswal</p>
                          <Link to="/"><Button>Go Back</Button></Link>
                    </div>
                    
                       
                    
                    
                
                    
                        
                    </Col>
                </Row>
            </Container>
            

            <br></br>
            <br></br>
        </div>



            
        )
    }
  
}
