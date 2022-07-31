import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";
export const useProperty = ()=> {
    return useContext(PropertyContext);
}