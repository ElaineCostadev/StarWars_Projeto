import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterNumericContext from './FilterNumericContext';

const arryOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function FilterNumericProvider({ children }) {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [options, setOptions] = useState(arryOptions);

  const contextFilterNumericValue = { filterByNumericValues,
    setFilterByNumericValues,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    options,
    setOptions,
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
