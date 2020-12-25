import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import BB from '../img/bossBaby2.jpg'
import { Link  } from "react-router-dom";


export default class BoosBaby extends Component {
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
                    <img style={widHeig} src ={BB}/>
                    <div className="x1">

                        <h1>Lost In Space 2</h1>
                        
                        <div> 2017| 12+ | 97min | Animation Adventure Comedy Family</div>
                        <br></br>
                        <p>
                        Seven-year-old Tim Templeton has always been a boy of an overactive imagination, and for the past seven years, life was all peaches for him, getting all the love and affection from his caring parents. However, life will never be the same and Tim won't be the centre of attention anymore as the arrival of an improbable new brother named Boss Baby, dressed in a black suit complete with a tie and a briefcase, will shortly rob him of all love, as he takes over the whole Templetons' house.
                     
                       

                        </p>
                      
                          <p>Starting:Alec Baldwin, Steve Buscemi, Jimmy Kimmel, Lisa Kudrow</p>
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
