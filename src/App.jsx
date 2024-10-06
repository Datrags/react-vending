import { useState } from 'react';
import Candy from "./snacks/Candy"
import Chocolate from "./snacks/Chocolate"
import Chips from "./snacks/Chips"
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Router} from "react-router-dom"
import './App.css';
import Navbar from './Navbar';

function App() {


  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <h1>React "Vending Machine"</h1>
          <Route exact path="/"><VendingMachine /></Route>
          <Route path="/candy"> <Candy /></Route>
          <Route path="/chocolate"><Chocolate /></Route> 
          <Route path="/chips"><Chips /></Route> 
      </BrowserRouter>
      
      
    </>
  )
}

export default App
