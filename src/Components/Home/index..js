import React, { useEffect, useState } from 'react'
import HomeWrapper from '../../styles/HomeWrapper'
import Filter from './Filter'
import Results from './Results'
import { useProperty } from '../../Hooks/index';
import searchProperties from '../../context/Action/searchProperties';
const Home = () => {
  const [search,setSearch] =useState("");
  const value = useProperty();
  useEffect(()=>{
    searchProperties(search)(value.propertiesDispatch);
  },[search]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  return (
    <HomeWrapper>
      
        <div className="home__header"> 
          <p className="home__subtitle">
           Search Properties To Rent
          </p>
          <div className="home__search">
            <input
              value={search}
              onChange={handleChange}
              className="search-input"
              type="text"
              placeholder="Search..."
            />
        </div>
        </div>
        <Filter />
        <Results />
    </HomeWrapper>
  )
}

export default Home