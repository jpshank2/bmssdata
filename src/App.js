import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import BMSSCPA from './Components/Pages/BMSSCPA';
import Abacus from './Components/Pages/Abacus';
import PBSPay from './Components/Pages/PBSPay';
import Wesson from './Components/Pages/BMSSWesson';
import Eversource from './Components/Pages/Eversource';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" render={() => (
        <Home />
      )} />
      <Route exact path="/bmsscpas" render={() => (
        <BMSSCPA />
      )} />
      <Route exact path="/abacusit" render={() => (
        <Abacus />
      )} />
      <Route exact path="/pbspay" render={()=> (
        <PBSPay />
      )} />
      <Route exact path="/bmsswesson" render={() => (
        <Wesson />
      )} />
      <Route exact path="/eversource" render={() => (
        <Eversource />
      )} />
    </Router>
  );
}

export default App;
