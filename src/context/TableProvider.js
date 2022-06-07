import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function TableProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL);
        const dataPlanets = await response.json();
        // console.log(dataPlanets);
        // console.log(dataPlanets.results);
        setData(dataPlanets.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <TableContext.Provider value={ contextValue }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableProvider;
