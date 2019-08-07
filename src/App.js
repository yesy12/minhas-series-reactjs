import React from 'react';
import Header from './Header';

import Genres from './Genres'
import NewGenres from './NewGenres'
import EditGenres from './EditGenres'

import Series from './Series'
import NewSeries from './NewSeries'
import InfoSeries from './InfoSeries'
import EditSeries from './EditSeries'

import {
  BrowserRouter as Router, Route, Switch
}from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  return <h1> Home </h1>
}


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/generos" exact component={Genres}/>
            <Route path="/generos/novo" exact component={NewGenres}/>
            <Route path="/generos/:id" exact component={EditGenres}/>
            
            <Route path="/series" exact component={Series}/>
            <Route path="/series/novo" exact component={NewSeries}/>
            <Route path="/series/info/:id" exact component={InfoSeries}/>
            <Route path="/series/editar/:id" exact component={EditSeries}/>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
