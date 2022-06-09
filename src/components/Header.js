import React, { useState, useEffect, useContext } from 'react';
import FilterNumericContext from '../context/FilterNumericContext';
import TableContext from '../context/TableContext';

const MAIOR_QUE = 'maior que';
const MENOR_QUE = 'menor que';
const IGUAL_A = 'igual a';

function Header() {
  const [name, setName] = useState('');
  const { data, setDataCopy } = useContext(TableContext);
  const { filterByNumericValues } = useContext(FilterNumericContext);

  const handleInputSearch = ({ target }) => {
    // console.log('inputSerach');
    setName(target.value.toUpperCase());
  };

  /*  useEffect(() => {
    const filterPlanets = data.filter((eachPlanets) => eachPlanets.name
      .toUpperCase()
      .includes(name));
    setDataCopy(filterPlanets);
  }, [name, setDataCopy, data]); */

  useEffect(() => {
    const filterPlanets = data.filter((eachPlanets) => eachPlanets.name
      .toUpperCase()
      .includes(name));
    const resultNumericValues = filterByNumericValues
      .reduce((totalInfo, filtered) => totalInfo
        .filter((eachFilter) => {
          switch (filtered.comparison) {
          case MAIOR_QUE:
            return eachFilter[filtered.column] > Number(filtered.value);
          case MENOR_QUE:
            return eachFilter[filtered.column] < Number(filtered.value);
          case IGUAL_A:
            return eachFilter[filtered.column] === filtered.value;
          default:
            return true;
          }
        }), filterPlanets);

    setDataCopy(resultNumericValues);
  }, [name, setDataCopy, data, filterByNumericValues]);

  return (
    <div>
      <h1>Projeto Star Wars</h1>
      <label htmlFor="inputSearch">
        Busque por um planeta especifico
        <input
          value={ name }
          onChange={ handleInputSearch }
          id="inputSearch"
          type="text"
          placeholder="Digite um planeta"
          data-testid="name-filter"
        />
      </label>

    </div>
  );
}

export default Header;
