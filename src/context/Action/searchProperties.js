import { SEARCH_PROPERTIES } from "./types";

const searchProperties = (text)=>(dispatch) => {
    dispatch({
        type: SEARCH_PROPERTIES,
        payload: text
    })
}
export default searchProperties;