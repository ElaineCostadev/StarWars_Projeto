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
  const [columnSort, setColumnSort] = useState('population');
  const [sort, setSort] = useState('ASC');
  const [order, setOrder] = useState({});

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
    columnSort,
    setColumnSort,
    sort,
    setSort,
    order,
    setOrder,
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
