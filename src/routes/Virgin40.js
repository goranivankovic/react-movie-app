import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import VG from '../img/virgin.jpg'
import { Link  } from "react-router-dom";



export default class Virgin40 extends Component {
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
                    <img style={widHeig} src ={VG}/>
                    <div className="x1">

                        <h1>40 Year-old Virgin</h1>
                        
                        <div> 2005 | 14+ | 116min | Romance Comedy</div>
                        <br></br>
                        <p>
                        Goaded by his buddies, a nerdy guy who's never \"done the deed\" only finds the pressure mounting when he meets a single mother
                       
                        

                        </p>
                      
                          <p>Starting:Steve Carell, Catherine Keener, Paul Rudd, Romany Malco</p>
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
