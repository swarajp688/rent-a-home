import React from "react";
import FilterWrapper from "../../styles/FilterWrapper";
const Filter = () => {
  return (
    <FilterWrapper>
      <form className="filter-form">
        <div className="filter-div">
          <label>Location</label>
          <input type="text" placeholder="Location" />
        </div>
        <div className="filter-div">
          <label>When</label>
          <input type="date" placeholder="Select Move In Date" />
        </div>
        <div className="filter-div">
          <label>Price</label>
        <select name="price" id="cars">
            <option value="">Select Price</option>
            <option value="volvo">0-500</option>
            <option value="saab">500-1000</option>
            <option value="opel">1000-2000</option>
            <option value="audi">2000-5000</option>
          </select>
          
        </div>
        <div className="filter-div">
          <label>Property Type</label>
          <select name="price" id="cars">
            <option value="">Select Type</option>
            <option value="volvo">0-500</option>
            <option value="saab">500-1000</option>
            <option value="opel">1000-2000</option>
            <option value="audi">2000-5000</option>
          </select>
        </div>
        <div className="btn-div">
          <button>Search</button>
        </div>
      </form>
    </FilterWrapper>
  );
};

export default Filter;
