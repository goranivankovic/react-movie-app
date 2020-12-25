import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import HG from '../img/hangover.jpg'
import { Link  } from "react-router-dom";



export default class Hangover extends Component {
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
                    <img style={widHeig} src ={HG}/>
                    <div className="x1">

                        <h1>The Hangover</h1>
                        
                        <div> 2009 | 16+ | 100min | Comedy</div>
                        <br></br>
                        <p>
                        Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.
                        

                        </p>
                      
                          <p>Starting:Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha</p>
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
