import React from 'react';

const FilterSearch = ({filterRegion, setFilterRegion, filterCountry, setFilterCountry}) => {
  const regionFilterHandler = (e) => {
    setFilterRegion(e.target.value);
  }

  const countryFilterHandler = (e) => {
    setFilterCountry(e.target.value)
  }

  return(
  <div className='filter'>
    <input  value={filterCountry} onChange={countryFilterHandler}
            className='filter__input' type='text' placeholder='Search for a country...'></input>
    <select value={filterRegion} onChange={regionFilterHandler}  className='filter__list'>
      <option>Filter by Region</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
  </div>
  )
}

export default FilterSearch;