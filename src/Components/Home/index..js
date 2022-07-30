import React from 'react'
import HomeWrapper from '../../styles/HomeWrapper'
import Filter from './Filter'
import Results from './Results'
const Home = () => {
  return (
    <HomeWrapper>
      
        <div className="home__header"> 
          <p className="home__subtitle">
           Search Properties To Rent
          </p>
          <div className="home__search">
            <input
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