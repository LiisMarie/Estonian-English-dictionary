import React, {useState} from 'react';
import './App.css';

import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import EntryList from "./components/Entry/EntryList";
import Entry from "./components/Entry/Entry";

export default function App() {
  const marginTop = {
    marginTop:"20px"
  };

  return (
    <Router>
      <NavigationBar/>

      <Container style={marginTop}>

        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/entry" exact component={Entry}/>
          <Route path="/edit/:id" exact component={Entry}/>
          <Route path="/list" exact component={EntryList}/>
        </Switch>

      </Container>

      <Footer/>
    </Router>
  );
}

