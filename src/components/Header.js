import React, { useState, useEffect, useContext } from 'react';
import TableContext from '../context/TableContext';

export default function Header() {
  const [name, setName] = useState('');
  const { data, setDataCopy } = useContext(TableContext);

  const handleInputSearch = ({ target }) => {
    // console.log('inputSerach');
    setName(target.value.toUpperCase());
  };

  useEffect(() => {
    setDataCopy(data.filter((eachPlanets) => eachPlanets.name
      .toUpperCase()
      .includes(name)));
  }, [name, setDataCopy, data]);

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
