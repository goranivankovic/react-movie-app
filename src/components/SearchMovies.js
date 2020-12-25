import React, { Component } from 'react'
import NavBar from './NavBar.js'
import { Container,Row ,Col,Form,FormGroup,FormControl,Button } from 'react-bootstrap'
import Axios from 'axios';
import {Link}  from 'react-router-dom';



export default class SearchMovies extends Component {
    constructor(props){
        super(props)
        this.state={
            movie:''
        }
  
        this.eraseInputVal=this.eraseInputVal.bind(this)
        this.getMovies =this.getMovies.bind(this)
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
            let firstDiv = document.querySelector('.firstDiv')
            let secondDiv =document.querySelector('.secondDiv')
            
           
          

            const response = await Axios.get(`https://www.omdbapi.com/?t=${this.state.movie}&apikey=${process.env.REACT_APP_MOVIE_KEY}`);

            firstDiv.innerHTML=`<img src="${response.data.Poster}".jpg>`;
            secondDiv.innerHTML=`
            <h2><span id="titleText">${response.data.Title}</span></h2><br></br>
            <h5> ${response.data.Year} | ${response.data.Runtime} | ${response.data.Genre}</h5><br></br>
         
           
            <p>${response.data.Plot} </p><br></br>
            <p>Starting: ${response.data.Actors} </p><br></br>
            <p>Language:${response.data.Language} </p>



            
            `
            
            
            

           inputBox.value=''
           this.setState({
               movie:''
           })
          
          } catch (error) {
            console.error(error);
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
                        
                        </Col>
                        <Col className="col-md-6 col-sm-12 col-12 secondDiv" style={w}>
                       
                        
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
