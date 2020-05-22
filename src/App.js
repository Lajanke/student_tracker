import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Students from './components/Students';
import Blocks from './components/Blocks';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Router>
        <Students path='/students'/>
        <Students path='/students/:graduated'/>
        <Students path='/students/current'/>
        <Blocks path='/blocks'/>
        <Blocks path='/blocks/:block'/>
      </Router>
    </div>
  );
}

export default App;
