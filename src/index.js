import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import WonderWomen from './routes/WonderWomen.js'
import Greenland from './routes/Greenland.js'
import Tenet from './routes/Tenet.js'
import Extraction from './routes/Extraction.js'
import  Lost   from "./routes/Lost.js";
import BoosBaby from './routes/BoosBaby.js';
import CaptanPants from './routes/CaptanPants.js';
import NextGen from './routes/NextGen.js';
import Lego from './routes/Lego.js'
import SuperBad from './routes/SuperBad.js';
import Jump21 from './routes/Jump21.js';
import Hangover   from "./routes/Hangover.js";
import Borat from './routes/Borat.js';
import Virgin40 from './routes/Virgin40.js'
import Undeground from './routes/Undeground.js'
import Ipman from './routes/Ipman.js'
import BlackP from './routes/BlackP.js'
import CasinoRoyal from './routes/CasinoRoyal.js'
import ManStell from './routes/ManStell.js'
import Titanic from './routes/Titanic.js';
import {BrowserRouter  ,Switch,Route, BrowserRouter} from 'react-router-dom';
import Movie from './components/Movie';
import SearchMovies from './components/SearchMovies.js';




ReactDOM.render(
  <BrowserRouter>
  
    <Switch>



    <Route path="/" exact component ={Movie} />
    <Route  path="/movies/titanic" exact component ={Titanic} />
    <Route path="/movies/wonderwomen" exact component ={WonderWomen} />
    <Route path="/movies/greenland" exact component ={Greenland} />
    <Route path="/movies/tenet" exact component ={Tenet} />

    <Route path="/movies/extraction" exact component ={Extraction} />
    <Route path="/movies/lost" exact component ={Lost} />
    <Route path="/movies/boosbaby" exact component ={BoosBaby} />
    <Route path="/movies/captanpants" exact component ={CaptanPants} />
    <Route path="/movies/nextgen" exact component ={NextGen} />

    <Route path="/movies/lego" exact component ={Lego} />
    <Route path="/movies/superbad" exact component ={SuperBad} />
    <Route path="/movies/jump21" exact component ={Jump21} />
    <Route path="/movies/hangover" exact component ={Hangover} />
    <Route path="/movies/borat" exact component ={Borat} />

    <Route path="/movies/virgin40" exact component ={Virgin40} />
    <Route path="/movies/underground6" exact component ={Undeground} />
    <Route path="/movies/ipman" exact component ={Ipman} />
    <Route path="/movies/blackpanter" exact  component ={BlackP} />
    <Route path="/movies/casinoroyal" exact component ={CasinoRoyal} />
    <Route path="/movies/manofstell" exact component ={ManStell} />
    <Route path="/movies/search" exact component ={SearchMovies} />





</Switch>

   </BrowserRouter > 
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
