import React, { useEffect } from 'react'
import ResultWrapper from '../../styles/ResultWrapper'
import Card from './Card'
import getProperties from '../../context/Action/getProperties';
import { useProperty } from '../../Hooks/index';
const Results = () => {
  const value = useProperty();
  const {propertiesDispatch, propertiesState} = value;
  useEffect(() => {
    getProperties(propertiesDispatch);
  }
  , [])
  return (
    <ResultWrapper>
      {propertiesState.foundProperties.map(property => {
        return (
          <Card
            key={property.id}
            property={property}
          />
        )
      })}
    </ResultWrapper>
  )
}

export default Results