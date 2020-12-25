import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import GL from '../img/greenland.jpg'
import { Link  } from "react-router-dom";


export default class Greenland extends Component {
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
                        <img style={widHeig} src ={GL}/>
                        <div className="x1">

                            <h1>Greenland</h1>
                            
                            <div> 2020 | 15+ | 119 min | Action Drama Thriller</div>
                            <br></br>
                            <p>
                            A family struggles for survival in the face of a cataclysmic natural disaster.


                            </p>
                          
                              <p>Starting:Gerard Butler, Morena Baccarin, Roger Dale Floyd, Scott Glenn</p>
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
