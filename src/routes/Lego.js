import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import LG from '../img/lego.jpg'
import { Link  } from "react-router-dom";


export default class Lego extends Component {
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
                    <img style={widHeig} src ={LG}/>
                    <div className="x1">

                        <h1>Lego Movie</h1>
                        
                        <div> 2014 | 13+ | 100min | Animation Adventure Comedy Family</div>
                        <br></br>
                        <p>
                        The LEGO Movie is a 3D animated film which follows lead character, Emmet a completely ordinary LEGO mini-figure who is identified as the most extraordinary person and the key to saving the Lego universe. Emmet and his friends go on an epic journey to stop the evil tyrant, Lord Business.
                       

                        </p>
                      
                          <p>Starting:Will Arnett, Elizabeth Banks, Craig Berry, Alison Brie</p>
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
