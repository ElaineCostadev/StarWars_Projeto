import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterNumericContext from './FilterNumericContext';

function FilterNumericProvider({ children }) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [booleanPopulation, setBooleanPopulation] = useState(true);
  const [booleanOrbital, setBooleanOrbital] = useState(true);
  const [booleanDiameter, setBooleanDiameter] = useState(true);
  const [booleanRotation, setBooleanRotation] = useState(true);
  const [booleanSurface, setBooleanSurface] = useState(true);

  const contextFilterNumericValue = { filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    booleanPopulation,
    setBooleanPopulation,
    booleanOrbital,
    setBooleanOrbital,
    booleanDiameter,
    setBooleanDiameter,
    booleanRotation,
    setBooleanRotation,
    booleanSurface,
    setBooleanSurface,
  };
  return (
    <FilterNumericContext.Provider value={ contextFilterNumericValue }>
      { children }
    </FilterNumericContext.Provider>

  );
}

FilterNumericProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilterNumericProvider;
