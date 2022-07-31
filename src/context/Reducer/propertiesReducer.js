import { SEARCH_PROPERTIES , GET_PROPERTIES , FILTER_PROPERTIES } from "../Action/types";
import moment from 'moment';
const properties = (state, { payload, type }) => {
    switch (type) {
      case GET_PROPERTIES: {
        return {
          ...state,
          foundProperties: payload,
        };
      }
      case SEARCH_PROPERTIES: {
        const searchText = payload.toLowerCase();
        return {
          ...state,
          isSearchActive: !!payload.length > 0 || false,
          foundProperties: state.properties.filter((property)=>{
              try {
                return (
                  property.name.toLowerCase().search(searchText) !== -1 ||
                  property.formattedAddress.toLowerCase().search(searchText) !== -1 
                );
              } catch (error) {
                return []
              }
          })
        };
      }
      case FILTER_PROPERTIES: { 
        return {
          ...state,  
          foundProperties: state.properties.filter((property)=>{
            if(payload.moveIndate){
                    return moment(payload.moveIndate) > moment(property.movieIndate)  ? true : false
                }else {
                  return true;
                }
              }
          ).filter((property)=>{
              if(payload.location){
              try {
                return (
                  property.name.toLowerCase().search(payload.location.toLowerCase()) !== -1 ||
                  property.formattedAddress.toLowerCase().search(payload.location.toLowerCase()) !== -1 
                );
              } catch (error) {
                return []
              }
            }else {
              return true
            }
          }
          ).filter((property)=>{
              if(payload.minPrice && payload.maxPrice){
              try {
                return (
                  property.price >= payload.minPrice &&
                  property.price <= payload.maxPrice
                );
              } catch (error) {
                return []
              }
            }else {
              return true;
            }
          }
          ).filter((property)=>{
              if(payload.type){
              try {
                return (
                  property.propertyType === payload.type
                );
              } catch (error) {
                return []
              }
            }else {
              return true;
            }
          }
          )
        };
      }
      default:
        return state;
    }
  };
  
  export default properties;
  