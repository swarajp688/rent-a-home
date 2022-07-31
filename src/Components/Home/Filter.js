import React, { useEffect, useState } from "react";
import FilterWrapper from "../../styles/FilterWrapper";
import { useProperty } from "../../Hooks";
import filter from "../../context/Action/filterProperties";
const Filter = () => {
  const [location , setLocation] = useState("");
  const [type , setType] = useState("");
  const [price , setPrice] = useState("");
  const [moveIndate , setMoveIndate] = useState(null);
  const {propertiesDispatch,propertiesState} = useProperty();

  useEffect(()=>{
  },[location,type,price,moveIndate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    filter(location,type,price,moveIndate)(propertiesDispatch);
    console.log(propertiesState,'propertiesState')
  }
  return (
    <FilterWrapper>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="filter-div">
          <label>Location</label>
          <input type="text" placeholder="Location" onChange={(e)=> setLocation(e.target.value)}/>
        </div>
        <div className="filter-div">
          <label>When</label>
          <input type="date" placeholder="Select Move In Date" onChange={(e)=> setMoveIndate(e.target.value)}/>
        </div>
        <div className="filter-div">
          <label>Price</label>
        <select name="price" id="price" onChange={(e)=> setPrice(e.target.value)}>
            <option value="">Select Price</option>
            <option value="0-500">0-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000-2000">1000-2000</option>
            <option value="2000-5000">2000-5000</option>
            <option value="5000-20000">5000-20000</option>
          </select>
          
        </div>
        <div className="filter-div">
          <label>Property Type</label>
          <select name="price" id="cars" onChange={(e)=> setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Condo">Condo</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhouse">Townhouse</option>
            <option value="SingleFamily">Single Family</option>
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
