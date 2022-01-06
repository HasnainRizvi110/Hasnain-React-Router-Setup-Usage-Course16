import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <>
  

<Router>
<Navbar title="NavHome" />
   <div className="container my-3">
   <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
      <TextForm  heading="Enter the text to analyze"/>
      </Route>
    </Switch>
</div>
</Router>


  </>
  );
}

export default App;