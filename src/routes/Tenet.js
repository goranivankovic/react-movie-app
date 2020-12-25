import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import TN from '../img/tenet.jpg'
import { Link  } from "react-router-dom";


export default class Tenet extends Component {
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
                    <img style={widHeig} src ={TN}/>
                    <div className="x1">

                        <h1>Tenet</h1>
                        
                        <div> 2020 | 15+ | 150min | Action Sci-Fi</div>
                        <br></br>
                        <p>
                        Armed with only one word, Tenet, and fighting for the survival of the entire world, 
                        a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time


                        </p>
                      
                          <p>Starting:Juhan Ulfsak, Jefferson Hall, Ivo Uukkivi, Andrew Howard</p>
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
