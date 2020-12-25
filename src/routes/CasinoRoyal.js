import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import CR from '../img/casinoRoyal.jpg'
import { Link  } from "react-router-dom";



export default class CasinoRoyal extends Component {
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
                    <img style={widHeig} src ={CR}/>
                    <div className="x1">

                        <h1>Casino Royale</h1>
                        
                        <div> 2006 | 15+ | 144min | Action Adventure Thriller</div>
                        <br></br>
                        <p>
                        After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.
                   
                      
                       

                        </p>
                      
                          <p>Starting:Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench</p>
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
