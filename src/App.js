import React,{ useState,useEffect } from 'react';
import Header from './Header';
import {
  BrowserRouter as Router, Route
}from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  return <h1> Home </h1>
}

const Genres = () =>{
  return <h1> Genêros </h1>
}

function App() {
  var link = "https://my-series-list.herokuapp.com"
  useEffect(() =>{
    axios.get("/api").then( res =>{
      console.log(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/generos" exact component={Genres}/>
      </div>
    </Router>
  );
}

export default App;
