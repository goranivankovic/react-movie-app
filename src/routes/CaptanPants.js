import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import CU from '../img/captainUnderPants2.jpg'
import { Link  } from "react-router-dom";


export default class CaptanPants extends Component {
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
                    <img style={widHeig} src ={CU}/>
                    <div className="x1">

                        <h1>Lost In Space 2</h1>
                        
                        <div> 2017 | 12+ | 89min | Animation Adventure Comedy Family</div>
                        <br></br>
                        <p>
                        Two overly imaginative pranksters named George and Harold hypnotize their principal into thinking he's a ridiculously enthusiastic, incredibly dimwitted superhero named Captain Underpants
                       

                        </p>
                      
                          <p>Starting:Kevin Hart, Ed Helms, Nick Kroll, Thomas Middleditch</p>
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
