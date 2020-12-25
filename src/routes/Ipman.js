import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import  IM from '../img/ipMan.jpg'
import { Link  } from "react-router-dom";



export default class Ipman extends Component {
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
                    <img style={widHeig} src ={IM}/>
                    <div className="x1">

                        <h1>Ip Man</h1>
                        
                        <div> 2008 | 16+ | 106min | Biography Drama History</div>
                        <br></br>
                        <p>
                        During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive
                       

                        </p>
                      
                          <p>Starting:Donnie Yen, Simon Yam, Lynn Xiong, Hiroyuki Ikeuchi</p>
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
