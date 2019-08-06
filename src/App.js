import React,{ useState,useEffect } from 'react';
import Header from './Header';
import Genres from './Genres'
import NewGenres from './NewGenres'
import {
  BrowserRouter as Router, Route
}from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  return <h1> Home </h1>
}


function App() {
  const [data,setData] = useState({'teste':"teste"})
  
  useEffect(() =>{
    
    axios.get("/api")
    .then( (res) =>{
      setData(res.data)
    })
    .catch((error)=>{
        setData(error)
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/generos" exact component={Genres}/>
        <Route path="/generos/novo" exact component={NewGenres}/>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
