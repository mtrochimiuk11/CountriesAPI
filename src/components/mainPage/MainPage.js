import React, {useState} from 'react';
import CountryCard from './countryCard';
import FilterSearch from './searchAndFilter';
import Header from '../header';

const MainPage = () => {
  const [filterCountry, setFilterCountry] = useState('');
  const [filterRegion, setFilterRegion] = useState('');

  return(
    <>
      <Header />
      <div className='mainPage'>
      <FilterSearch filterRegion={filterRegion} setFilterRegion={setFilterRegion}
                    filterCountry={filterCountry} setFilterCountry={setFilterCountry}/>
      <CountryCard filterRegion={filterRegion} filterCountry={filterCountry}/>
    </div>
    </>
  )
}


export default MainPage;