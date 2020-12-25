import React from 'react'
import TitanicImg from '../img/titanic.jpg'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import NavBar from '../components/NavBar.js'
import { Link  } from "react-router-dom";

export default class Titanic extends React.Component {
    
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
                        <img style={widHeig} src ={TitanicImg}/>
                        <div className="x1">

                            <h1>Titanic</h1>
                            
                            <div> 1997 | 16+ | 194min | Drama Romance</div>
                            <br></br>
                            <p>84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, 
                             Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912,
                             on a ship called Titanic.</p>
                          
                              <p>Starting:Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates</p>
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
