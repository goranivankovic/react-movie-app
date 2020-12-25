import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import SB from '../img/superBad.jpg'
import { Link  } from "react-router-dom";



export default class SuperBad extends Component {
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
                    <img style={widHeig} src ={SB}/>
                    <div className="x1">

                        <h1>Superbad</h1>
                        
                        <div> 2007 | 15+ | 113min | Comedy</div>
                        <br></br>
                        <p>
                        Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry
                       

                        </p>
                      
                          <p>Starting:Jonah Hill, Michael Cera, Christopher Mintz-Plasse, Bill Hader</p>
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
