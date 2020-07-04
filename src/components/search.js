import React from 'react';
import CovidViewer from './covidviewer'

class Search extends CovidViewer {
    
    componentDidMount() {
      
      fetch('http://localhost:3000/searchcountry?search='+this.state.selectedCountry)
      
      .then(res => res.json())
      .then((data) => {
        
        this.setState({ searchCountry: data })
        console.log(this.state.searchCountry)
        
        
      })
      
      .catch(console.log)
    }

    render () {
      if (this.state.searchCountry.region !== "") {
    return (
        
        <div>
            <center><h1>{this.state.selectedCountry} Stats</h1></center>
            <center>
                
                <p>Total Confirmed Cases: {this.state.searchCountry.total_confirmed_cases}</p>
                <p>Total Deaths: {this.state.searchCountry.total_deaths}</p>
                <p>Total Recovered: {this.state.searchCountry.total_recovered}</p>

            </center>
            
        </div>
       
        )
      }
    }
}

export default Search;
