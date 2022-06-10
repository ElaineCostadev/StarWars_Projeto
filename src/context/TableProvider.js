import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataCopy, setDataCopy] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(URL);
        const dataPlanets = await response.json();
        const one = 1;
        // console.log(dataPlanets);
        // console.log(dataPlanets.results);
        /*        dataPlanets.results
          .sort((a, b) => ((a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)); */
        const orderDataPlanets = dataPlanets.results.sort((a, b) => {
          if (a.name < b.name) {
            return -one;
          } if (a.name > b.name) {
            return one;
          }
          return 0;
        });
        setData(orderDataPlanets);
        setDataCopy(orderDataPlanets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlanets();
  }, []);

  const contextTableValue = {
    data,
    dataCopy,
    setDataCopy,
  };

  return (
    <TableContext.Provider value={ contextTableValue }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableProvider;
