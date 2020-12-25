import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import LO from '../img/lost.jpg'
import { Link  } from "react-router-dom";



export default class Lost extends Component {
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
                    <img style={widHeig} src ={LO}/>
                    <div className="x1">

                        <h1>Lost In Space 2</h1>
                        
                        <div> 2018 | 12+ | 60min | Adventure Family Mystery Sci-Fi</div>
                        <br></br>
                        <p>
                        After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers
                       
                       

                        </p>
                      
                          <p>Starting:Molly Parker, Toby Stephens, Maxwell Jenkins, Taylor Russell</p>
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
