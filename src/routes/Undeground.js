import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import  U6 from '../img/underground6.jpg'
import { Link  } from "react-router-dom";



export default class Undeground extends Component {
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
                    <img style={widHeig} src ={U6}/>
                    <div className="x1">

                        <h1>6 Underground</h1>
                        
                        <div> 2019 | 16+ | 128min | Action Thriller</div>
                        <br></br>
                        <p>
                        Meet a new kind of action hero. Six untraceable agents, totally off the grid. They've buried their pasts so they can change the future.

                       

                        </p>
                      
                          <p>Starting:Ryan Reynolds, Mélanie Laurent, Manuel Garcia-Rulfo, Ben Hardy</p>
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
