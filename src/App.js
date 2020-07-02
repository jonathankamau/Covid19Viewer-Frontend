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

      <Countries countries={this.state.countries} />

      );
  }
}

export default App;
