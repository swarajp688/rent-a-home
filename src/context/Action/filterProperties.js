import { FILTER_PROPERTIES } from "./types";

const filter = (location,type,price,moveIndate)=>(dispatch)=>{
    const minPrice =parseInt(price.split("-")[0]) ;
    const maxPrice = parseInt(price.split("-")[1]);

    dispatch({
        type: FILTER_PROPERTIES,
        payload: {location,minPrice,maxPrice,moveIndate,type}
    })
}   
export default filter;