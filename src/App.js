import React from 'react';
import Header from './Header'
import {
  BrowserRouter as Router, Route
}from 'react-router-dom'

const Home = () => {
  return <h1> Home </h1>
}

const Genres = () =>{
  return <h1> Genêros </h1>
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/generos" component={Genres}/>
      </div>
    </Router>
  );
}

export default App;
