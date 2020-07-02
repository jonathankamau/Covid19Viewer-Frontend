import React from 'react';
import '../styles/countries.css';

const Countries = ({ countries }) => {
    
    return (
    
    <div>
        <center><h1>Countries</h1></center>
        <center>
            <select id='countries'>
                {countries.map((country) => <option key={country._id}>{country.name}</option>)}
            </select>
        </center>
    </div>
    )
}

export default Countries;
