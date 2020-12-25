import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import ST from '../img/steel.jpg'
import { Link  } from "react-router-dom";


export default class ManStell extends Component {
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
                    <img style={widHeig} src ={ST}/>
                    <div className="x1">

                    <h1>Man of Steel</h1>
                        
                        <div> 2013 | 15+ | 143min | Action Adventure Thriller</div>
                        <br></br>
                        <p>
                        An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when other survivors of his home planet invade Earth.
                   
                      
                       

                        </p>
                      
                          <p>Starting:Henry Cavill, Amy Adams, Michael Shannon, Diane Lane</p>
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
