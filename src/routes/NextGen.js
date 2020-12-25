import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import NG from '../img/nextGen.jpg'
import { Link  } from "react-router-dom";


export default class NextGen extends Component {
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
                    <img style={widHeig} src ={NG}/>
                    <div className="x1">

                        <h1>Next Gen</h1>
                        
                        <div> 2018 | 13+ | 106min | Animation Adventure Comedy Family</div>
                        <br></br>
                        <p>
                        A friendship with a top-secret robot turns a lonely girl's life into a thrilling adventure as they take on bullies, evil bots and a scheming madman.
                       

                        </p>
                      
                          <p>Starting:John Krasinski, Charlyne Yi, Jason Sudeikis, Michael Peña</p>
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
