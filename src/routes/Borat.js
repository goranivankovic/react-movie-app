import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import BT from '../img/borat.jpg'
import { Link  } from "react-router-dom";


export default class Borat extends Component {
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
                    <img style={widHeig} src ={BT}/>
                    <div className="x1">

                        <h1>Borat</h1>
                        
                        <div> 2006 | 16+ | 84min | Comedy</div>
                        <br></br>
                        <p>
                        Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.
                        

                        </p>
                      
                          <p>Starting:Sacha Baron Cohen, Ken Davitian, Luenell, Chester</p>
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
