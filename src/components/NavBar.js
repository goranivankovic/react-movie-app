import React, { Component } from 'react'
import { Container,Row,Col,Navbar,NavbarBrand,NavLink,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
    
        const navBar={
            backgroundColor:"#4d4d4d",
            color:"#aa0909",
        }
        const navIcons={
            display:"flex",
            justifyContent:"space-between",
           
          
        }



        return (
            <div>
              
            <Container fluid style={navBar} >
            <Row >
                <Col>
                <Navbar style={navIcons}>
                    <NavbarBrand className="text-danger h3">MovieApp</NavbarBrand>
                 <Link to="/movies/search"> <Button className="btn btn-sm">Search Movie</Button></Link> 

                </Navbar>
                </Col>
            </Row>
        </Container>
       
            
        
           
        </div>



            
        )
    }
}
