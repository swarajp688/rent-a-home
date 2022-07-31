import properties from "../../data";
import { GET_PROPERTIES } from "./types";

const getProperties = (dispatch) => {
    dispatch({
        type: GET_PROPERTIES,
        payload: [...properties]
    })
};
export default getProperties;
