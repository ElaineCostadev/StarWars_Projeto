import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterNumericContext from './FilterNumericContext';

function FilterNumericProvider({ children }) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const contextFilterNumericValue = {
    filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
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
