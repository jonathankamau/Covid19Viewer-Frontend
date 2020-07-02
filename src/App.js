import React, { Component } from 'react';
import Countries from './components/countries';
import './App.css';

class App extends Component {

  state = {
    countries: [],
    countryDetails: []
  }
  
  componentDidMount() {
    
    fetch('http://localhost:3000/countries')
    
    .then(res => res.json())
    .then((data) => {
      
      this.setState({ countries: data })
      
    })
    
    .catch(console.log)
  }
  

  render() {
    
    return (
      <div>
      <Countries countries={this.state.countries} />
      </div>

      );
      
  }
  
}

export default App;
