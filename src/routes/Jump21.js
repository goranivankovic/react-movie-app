import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import JP from '../img/jump21.jpg'
import { Link  } from "react-router-dom";



export default class Jump21 extends Component {
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
                    <img style={widHeig} src ={JP}/>
                    <div className="x1">

                        <h1>21 Jump Street</h1>
                        
                        <div> 2012 | 15+ | 109min |Action Comedy</div>
                        <br></br>
                        <p>
                        A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring

                        </p>
                      
                          <p>Starting:Jonah Hill, Channing Tatum, Brie Larson, Dave Franco</p>
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
    
