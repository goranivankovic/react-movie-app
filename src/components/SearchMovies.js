import React, { Component } from 'react'
import NavBar from './NavBar.js'
import { Container,Row ,Col,Form,FormGroup,FormControl,Button } from 'react-bootstrap'
import Axios from 'axios';
import {Link}  from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';



export default class SearchMovies extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:'',
            poster:'',
            title:'',
            year:'',
            runtime:'',
            genre:'',
            plot:'',
            actors:'',
            language:'',
            spanovi:' | ',
            textLanguage:'Language: ',
            textStarting:'Starting:  '


        }
  
        this.eraseInputVal=this.eraseInputVal.bind(this)
        this.getMovies =this.getMovies.bind(this)
    }
    componentDidMount(){
      this.setState({
          spanovi:'',
          textLanguage:'',
          textStarting:'',
        
      })

    }

   
          
           



    getMovies(e){
        this.setState({
            movie:e.target.value
        })

    }

    async eraseInputVal(e){
        e.preventDefault()
      
    
      
        try {
            let inputBox = document.getElementById('inputBox')
           
        
       
        
            
         

            const response = await Axios.get(`https://www.omdbapi.com/?t=${this.state.movie}&apikey=${process.env.REACT_APP_MOVIE_KEY}`);
   
       
    
         

           inputBox.value=''
           this.setState({
           
            poster:response.data.Poster,
            title:response.data.Title,
            year:response.data.Year,
            runtime:response.data.Runtime,
            genre:response.data.Genre,
            plot:response.data.Plot,
            actors:response.data.Actors,
            language:response.data.Language,
            spanovi:' | ',
            textLanguage:'Language: ',
            textStarting:'Starting: '
            
           })
       
        


          
          } catch (error) {

           
            let inputBox = document.getElementById('inputBox')
        
            inputBox.value=''

   this.setState({
                spanovi:'',
                textLanguage:'',
                textStarting:'',
              
            })

   
          
      

          

              
    
           
          }

 
           
    
    }
    
    
    


    render() {
        const w ={
            color:'white'
        }
        const h ={
            height:"70vh",
         
        }
      
   

        return (

            <div className="mainDiv3">
                <NavBar />
                <br></br>
                <Container>
                    <Row>
                        <Col>
                        <Form onChange={this.getMovies}>
                            <FormGroup >
                                <FormControl placeholder="  search movies.." id="inputBox" type="text"></FormControl>
                                
                            </FormGroup>
                            <Button className="float-right" onClick={this.eraseInputVal}>Search</Button>
                           
                        </Form>

                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <Row>
                        <Col className="col-md-6 col-sm-12 col-12 firstDiv" style={h}>
                        <img src={this.state.poster}/>
                        
                        </Col>
                        <Col className="col-md-6 col-sm-12 col-12 secondDiv" style={w}>
                        <h2><span id="titleText">{this.state.title}</span></h2><br></br>

                        <h5 > {this.state.year +' ' } <span>{this.state.spanovi}</span> { this.state.runtime} <span>{this.state.spanovi}</span> {this.state.genre}</h5><br></br>
         
           
         <p>{this.state.plot} </p><br></br>
         <p><span>{this.state.textStarting} </span> {this.state.actors} </p><br></br>
         <p><span>{this.state.textLanguage} </span>  {this.state.language} </p>
         
                       
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                        <Link to="/" ><Button className="float-right">Go Back</Button></Link>
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>
                
                
                
            </div>
        )
    }
}
