import React from 'react';
import { Container,Row,Col,Button,Nav, NavbarBrand, NavLink, Navbar,Card, CardImg} from 'react-bootstrap'; 
import logo from '../logo.svg'
import Axios from 'axios';
import Img from '../images.js'
import NavBar from '../components/NavBar.js'
import {Link} from 'react-router-dom';
import Titanic from '../routes/Titanic';
import {FaInstagram,FaGithub,FaPhone} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

class Movie extends  React.Component{
constructor(props){
    super(props)

   

}

 


render(){

const padd10={
  paddingBottom:'10px'

}


    
    const navBar={
        backgroundColor:"#4d4d4d",
        color:"#aa0909",
    }
    const navIcons={
        display:"flex",
        justifyContent:"space-between",
       
      
    }

 

   


   


    return(
        <div className="mainDiv">
          <NavBar />



          
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col className="col-md-6 naslov">
                    <h3>MovieApp Originals</h3>
                    <br></br>
                    <p>MovieApp is the home of amazing original programming that you can’t find anywhere else.Movies, 
                        <br></br>
                      TV shows, specials and more, it’s all tailored specifically to you. Watch now for free</p>
                     
                    
                    
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
{/*Popular Moives*/}
            <Container fluid>
            <h3 className="naslov">Popular on MovieApp</h3>
            <br></br>
                <Row className="spaceBetwenImages">
                    <Col className="col-md-2 col-sm-7 col-9  d" style={padd10}>
                       

                   <Card>
                <Link to="/movies/titanic"> <Card.Img src={Img.titanic}
                        onMouseOver={(e)=>{
                          e.target.style.transition='1000ms'
                          e.target.style.transform='scale(0.95)'
                           }} onMouseOut={(b)=>{
                          b.target.style.transition='1000ms'
                          b.target.style.transform='scale(1)'
    
                        }}>

                          </Card.Img></Link>  
             

                       
                        
                         
                        
                      
                    </Card>  
                  
                    </Col>
                  <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                       <Card>
                  <Link to="/movies/wonderwomen"><Card.Img src={Img.wonderWomen}
                        onMouseOver={(e)=>{
                          e.target.style.transition='1000ms'
                          e.target.style.transform='scale(0.95)'
                           }} onMouseOut={(b)=>{
                          b.target.style.transition='1000ms'
                          b.target.style.transform='scale(1)'
    
                        }} >

                          </Card.Img></Link> 
                         
  
                           </Card>

                         </Col>
                         <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                           <Card>
                        <Link to="/movies/greenland"><Card.Img src={Img.grennLand}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}
                             >

                              </Card.Img></Link>
                            

                                </Card>

                                </Col>
                                <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                         <Card>
                       <Link to="/movies/tenet"><Card.Img src={Img.tenet}
                           onMouseOver={(e)=>{
                            e.target.style.transition='1000ms'
                            e.target.style.transform='scale(0.95)'
                             }} onMouseOut={(b)=>{
                            b.target.style.transition='1000ms'
                            b.target.style.transform='scale(1)'
      
                          }}>

                            </Card.Img></Link>
                     

                          </Card>

                      </Col>
                          <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                            <Card>
                          <Link to="/movies/extraction"><Card.Img src={Img.extraction}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}>

                               </Card.Img></Link> 
              
                                </Card>

                               </Col> 

                </Row>
            </Container>

            <br></br>
            <br></br>
            {/*Children Famliy */}
            <Container fluid>
            <h3 className="naslov">Children & Family TV</h3>
            <br></br>
                <Row className="spaceBetwenImages">
                    <Col className="col-md-2 col-sm-7 col-9  d" style={padd10}>
                       

                   <Card>
                  <Link to="/movies/lost"><Card.Img src={Img.lostInSpace}
                    onMouseOver={(e)=>{
                      e.target.style.transition='1000ms'
                      e.target.style.transform='scale(0.95)'
                       }} onMouseOut={(b)=>{
                      b.target.style.transition='1000ms'
                      b.target.style.transform='scale(1)'

                    }}></Card.Img></Link>

                       
                        
                       
                        
                      
                    </Card>  
                  
                    </Col>
                  <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                       <Card>
                     <Link to="/movies/boosbaby"><Card.Img src={Img.bossBaby}
                        onMouseOver={(e)=>{
                          e.target.style.transition='1000ms'
                          e.target.style.transform='scale(0.95)'
                           }} onMouseOut={(b)=>{
                          b.target.style.transition='1000ms'
                          b.target.style.transform='scale(1)'
    
                        }}>

                          </Card.Img></Link>
                          
  
                           </Card>

                         </Col>
                         <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                           <Card>
                         <Link to="/movies/captanpants"><Card.Img src={Img.captenPants}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}>

                              </Card.Img></Link>
                             

                                </Card>

                                </Col>
                                <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                         <Card>
                        <Link to="/movies/nextgen"><Card.Img src={Img.nextGen}
                           onMouseOver={(e)=>{
                            e.target.style.transition='1000ms'
                            e.target.style.transform='scale(0.95)'
                             }} onMouseOut={(b)=>{
                            b.target.style.transition='1000ms'
                            b.target.style.transform='scale(1)'
      
                          }}>

                            </Card.Img></Link>  
                      

                          </Card>

                      </Col>
                          <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                            <Card>
                          <Link to="/movies/lego"> <Card.Img src={Img.legoMovie}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}>

                               </Card.Img></Link>  
                               

                                </Card>

                               </Col> 

                </Row>
            </Container>
            <br></br>
            <br></br>

               {/*Comedy */}
            <Container fluid>
            <h3 className="naslov">Comedy</h3>
            <br></br>
                <Row className="spaceBetwenImages">
                    <Col className="col-md-2 col-sm-7 col-9  d" style={padd10}>
                       

                   <Card>
                 <Link to="/movies/superbad">  <Card.Img src={Img.superBad}
                    onMouseOver={(e)=>{
                      e.target.style.transition='1000ms'
                      e.target.style.transform='scale(0.95)'
                       }} onMouseOut={(b)=>{
                      b.target.style.transition='1000ms'
                      b.target.style.transform='scale(1)'

                    }}></Card.Img></Link> 

                       
                        
                         
                        
                      
                    </Card>  
                  
                    </Col>
                  <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                       <Card>
                     <Link to="/movies/jump21"> <Card.Img src={Img.jump21}
                        onMouseOver={(e)=>{
                          e.target.style.transition='1000ms'
                          e.target.style.transform='scale(0.95)'
                           }} onMouseOut={(b)=>{
                          b.target.style.transition='1000ms'
                          b.target.style.transform='scale(1)'
    
                        }}>

                          </Card.Img></Link>  
                        
  
                           </Card>

                         </Col>
                         <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                           <Card>
                         <Link to="/movies/hangover">  <Card.Img src={Img.hangOver}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}>

                              </Card.Img></Link>   
                             

                                </Card>

                                </Col>
                                <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                         <Card>
                    <Link to="/movies/borat"><Card.Img src={Img.borat}
                           onMouseOver={(e)=>{
                            e.target.style.transition='1000ms'
                            e.target.style.transform='scale(0.95)'
                             }} onMouseOut={(b)=>{
                            b.target.style.transition='1000ms'
                            b.target.style.transform='scale(1)'
      
                          }}>

                            </Card.Img></Link>   
                       

                          </Card>

                      </Col>
                          <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                            <Card>
                          <Link to="/movies/virgin40"> <Card.Img src={Img.virgin40}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}>

                               </Card.Img></Link>  
                               

                                </Card>

                               </Col> 

                </Row>
            </Container>           
            <br></br>
            <br></br>

                  {/*Action movies */}
                  <Container fluid>
            <h3 className="naslov">Action movies</h3>
            <br></br>
                <Row className="spaceBetwenImages">
                    <Col className="col-md-2 col-sm-7 col-9  d" style={padd10}>
                       

                   <Card>
                  <Link to="/movies/underground6"> <Card.Img src={Img.undeground6}
                    onMouseOver={(e)=>{
                      e.target.style.transition='1000ms'
                      e.target.style.transform='scale(0.95)'
                       }} onMouseOut={(b)=>{
                      b.target.style.transition='1000ms'
                      b.target.style.transform='scale(1)'

                    }}></Card.Img></Link> 

                       
                        
                         
                        
                      
                    </Card>  
                  
                    </Col>
                  <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                       <Card>
                     <Link to="/movies/ipman">   <Card.Img src={Img.ipMan}
                        onMouseOver={(e)=>{
                          e.target.style.transition='1000ms'
                          e.target.style.transform='scale(0.95)'
                           }} onMouseOut={(b)=>{
                          b.target.style.transition='1000ms'
                          b.target.style.transform='scale(1)'
    
                        }}>

                          </Card.Img></Link>
                         
  
                           </Card>

                         </Col>
                         <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                           <Card>
                          <Link to="/movies/blackpanter"> <Card.Img src={Img.blackPanter}
                             onMouseOver={(e)=>{
                              e.target.style.transition='1000ms'
                              e.target.style.transform='scale(0.95)'
                               }} onMouseOut={(b)=>{
                              b.target.style.transition='1000ms'
                              b.target.style.transform='scale(1)'
        
                            }}>

                              </Card.Img></Link>  
                       

                                </Card>

                                </Col>
                                <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                         <Card>
                         <Link to="/movies/casinoroyal"> <Card.Img src={Img.casinoRoyal}
                           onMouseOver={(e)=>{
                            e.target.style.transition='1000ms'
                            e.target.style.transform='scale(0.95)'
                             }} onMouseOut={(b)=>{
                            b.target.style.transition='1000ms'
                            b.target.style.transform='scale(1)'
      
                          }}>

                            </Card.Img></Link> 
                   

                          </Card>

                      </Col>
                          <Col className="col-md-2 col-sm-7 col-9" style={padd10}>

                            <Card>
                 <Link to ="/movies/manofstell"> <Card.Img src={Img.superman}
                    onMouseOver={(e)=>{
                      e.target.style.transition='1000ms'
                      e.target.style.transform='scale(0.95)'
                       }} onMouseOut={(b)=>{
                      b.target.style.transition='1000ms'
                      b.target.style.transform='scale(1)'

                    }}></Card.Img> </Link>  
                              

                                </Card>

                               </Col> 

                </Row>
            </Container>           

      <br></br>

      <Container className="footerPocetnaMain" >
                    <Row>
                        <Col className="col-12 text-right"> <h2><span className="text-primary navBrend l">gmi-computing </span></h2>
                        </Col>
                        <Col className="col-12">
                        <h5 className="text-light">Email:<MdEmail className="text-primary"/>   gogadesignweb@gmail.com</h5><br></br>
                        <h5  className="text-light">Github: <a href='https://github.com/goranivankovic'> <FaGithub /></a></h5><br></br>
                        <h5  className="text-light">Telephone:<FaPhone className="text-primary" />  +381/064-415-68-13</h5><br></br>
                        <h5  className="text-light">Instagram: <a href='https://www.instagram.com/'><FaInstagram /> </a>  </h5>
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>




        </div>

    )
}








}

export default Movie;