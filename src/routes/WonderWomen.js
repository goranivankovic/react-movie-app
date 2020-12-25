import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import WW from '../img/wonderWomen.jpg'
import { Link  } from "react-router-dom";


export default class WonderWomen extends Component {
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
                        <img style={widHeig} src ={WW}/>
                        <div className="x1">

                            <h1>Wonder Woman 1984</h1>
                            
                            <div> 2020 | 14+ | 151min | Action Adventure Fantasy</div>
                            <br></br>
                            <p>
                            Fast forward to the 1980s as Wonder Woman's next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah


                            </p>
                          
                              <p>Starting:Pedro Pascal, Gal Gadot, Connie Nielsen, Chris Pine</p>
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
