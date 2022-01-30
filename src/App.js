import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './style/style.css'

import MainPage from './components/mainPage/MainPage';
import CountryPage from './components/countryPage/CountryPage';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path=':name' element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;
