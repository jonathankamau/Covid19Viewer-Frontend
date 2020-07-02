import React, { Component } from 'react';

class Countries extends Component {

    state = {
      countries: [],
      selectedCountry: ''
    }
    
    componentDidMount() {
      
      fetch('http://localhost:3000/countries')
      
      .then(res => res.json())
      .then((data) => {
        
        this.setState({ countries: data })
        
      })
      
      .catch(console.log)
    }

    render () {
    return (
        
        <div>
            <center><h1>Countries</h1></center>
            <center>
                <select id='countries' onChange={(e) => this.setState({selectedCountry: e.target.value})}>
                    {this.state.countries.map((country) => <option key={country._id}>{country.name}</option>)}
                </select>
                <p>The Selected Country is {this.state.selectedCountry}</p>
            </center>
            
        </div>
        )
    }
}

export default Countries;
