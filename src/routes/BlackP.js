import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import BP from '../img/blackPanter.jpg'
import { Link  } from "react-router-dom";



export default class BlackP extends Component {
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
                    <img style={widHeig} src ={BP}/>
                    <div className="x1">

                        <h1>Black Panter</h1>
                        
                        <div> 2018 | 14+ | 134min | Action Adventure Sci-Fi</div>
                        <br></br>
                        <p>
                        T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past
                       

                        </p>
                      
                          <p>Starting:Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira</p>
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
