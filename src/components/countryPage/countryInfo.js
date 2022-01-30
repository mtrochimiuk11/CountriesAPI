import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import '../../style/countryPage/countryPage.css';

const CountryInfo = () => {
  let country = useParams();
  const [countryInfo, setCountryInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${country.name}`)
      .then(response => response.json()) 
      .then (data => setCountryInfo(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
      })
      .finally(() => setLoading(false))
    }, []);

  if (loading) return <div style={{paddingLeft: '35vw', paddingTop: '90px', fontSize: '1.5em'}}>Loading country...</div>;
  if(error) return <div style={{paddingLeft: '35vw'}}><p>Error!</p></div>;
  
  let countryLanguages = countryInfo[0].languages;
  let languagesNames = [];
  for (let language of countryLanguages) {
    languagesNames.push(` ${language.name}`);
  }
  
  let countryCurrencies = countryInfo[0].currencies
  let currenciesNames = [];
  for (let currency of countryCurrencies) {
    currenciesNames.push(` ${currency.name}`);
  }

  return(
    <>
    <button onClick={() => navigate(-1)} className='back__btn'><AiOutlineArrowLeft className='back__btn__icon'/>Back</button>

    {countryInfo.map(({flag, name, nativeName, population, region, subregion, capital, topLevelDomain, borders}) => 
  <div className='country' key={name}>
     
    <div className='country__wrapper' >
      <div className='country__flag'>
      <img class='country__flag__img' src={flag} alt={name}></img>
      </div>
      <div className='country__info'>
        <h1 className='country__info__name'>{name}</h1>
        <div className='country__info__details'>
          <div className='country__info__details--col1'>
            <p><span className='country__info__details--title'>Native Name:</span>{nativeName}</p>
            <p><span className='country__info__details--title'>Population:</span>{population}</p>
            <p><span className='country__info__details--title'>Region:</span>{region}</p>
            <p><span className='country__info__details--title'>Sub Region:</span>{subregion}</p>
          </div>
          <div className='country__info__details--col2'>
            <p><span className='country__info__details--title'>Capital:</span>{capital}</p>
            <p><span className='country__info__details--title'>Top Level Domain:</span>{topLevelDomain}</p>
            <p><span className='country__info__details--title'>Currencies:</span>{currenciesNames}</p>
            <p><span className='country__info__details--title'>Languages:</span>{`${languagesNames}`}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}
  </>
  )
}


export default CountryInfo;