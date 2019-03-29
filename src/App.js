import React, {Component} from 'react';
import Landing from "./container/Landing";
import Dashboard from './container/dashboard/Dashboard';
import Persentase from './container/persentase/Persentase';
import {BrowserRouter} from 'react-router-dom';

class App extends Component{
  render(){

    return(
      <BrowserRouter>
      <Dashboard>
      </Dashboard>
      </BrowserRouter>
    )
  }

  
}

export default App;