import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import React from 'react';

const CountryCard = ({filterRegion, filterCountry}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('https://restcountries.com/v2/all')
    .then(response => response.json()) 
    .then (data => setCountries(data))
    .catch((error) => {
      console.error('Error fetching data:', error);
      setError(error);
    })
    .finally(() => setLoading(false))
  }, []);

  if (loading) return <div style={{paddingLeft: '35vw', paddingTop: '90px', fontSize: '1.5em'}}>Loading countries...</div>;
  if(error) return <div style={{paddingLeft: '40vw'}}><p>Error!</p></div>;

  if((!filterRegion || filterRegion==='Filter by Region') && !filterCountry) {
  return(
    <div className='card'>
    {countries.map(({flag, name, population, region, capital}) => 
      <div className='card__wrapper' key={name}>
        <img className="card__flag" src={flag} alt={name}></img>
        <Link to={`${name.toLowerCase()}`} className='card__name'>{name}</Link>
        <div className='card__info'>
          <p><span className='card__info--title'>Population: </span>{population}</p>
          <p><span className='card__info--title'>Region: </span>{region}</p>
          <p><span className='card__info--title'>Capital: </span>{capital}</p>
        </div>
      </div>)}
    </div>
  
  )} else if (filterCountry && (!filterRegion || filterRegion==='Filter by Region')) {
    return(
      <div className='card'>
      {countries
      .filter((country) => {return(country.name.toLowerCase().startsWith(filterCountry))})
      .map(({flag, name, population, region, capital}) => 
      <div className='card__wrapper' key={name}>
        <img className="card__flag" src={flag} alt={name}></img>
        <Link to={`${name.toLowerCase()}`} className='card__name'>{name}</Link>
        <div className='card__info'>
          <p><span className='card__info--title'>Population: </span>{population}</p>
          <p><span className='card__info--title'>Region: </span>{region}</p>
          <p><span className='card__info--title'>Capital: </span>{capital}</p>
        </div>
      </div>
      )}
      </div>)
  } else {
    return(
    <div className='card'>
    {countries
    .filter((country) => {return(country.region == filterRegion)})
    .filter((country) => {return(country.name.toLowerCase().startsWith(filterCountry))})
    .map(({flag, name, population, region, capital}) => 
    <div className='card__wrapper' key={name}>
      <img className="card__flag" src={flag} alt={name}></img>
      <Link to={`${name.toLowerCase()}`} className='card__name'>{name}</Link>
      <div className='card__info'>
        <p><span className='card__info--title'>Population: </span>{population}</p>
        <p><span className='card__info--title'>Region: </span>{region}</p>
        <p><span className='card__info--title'>Capital: </span>{capital}</p>
      </div>
    </div>
    )}
    </div>)
  }
}

export default CountryCard;