import React, { Component } from 'react';
import Countries from './components/countries';
import Search from './components/search';
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div>
      <Countries/>
      <Search/>
      </div>
      

      );
      
  }
  
}

export default App;
