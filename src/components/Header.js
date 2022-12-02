import React, { useState, useEffect, useContext } from 'react';
import FilterNumericContext from '../context/FilterNumericContext';
import TableContext from '../context/TableContext';
// import Loading from './Loading';
import '../css/Header.css';

const MAIOR_QUE = 'maior que';
const MENOR_QUE = 'menor que';
const IGUAL_A = 'igual a';

function Header() {
  const [name, setName] = useState('');
  const { data, setDataCopy /* logoStars */ } = useContext(TableContext);
  const { filterByNumericValues, order } = useContext(FilterNumericContext);

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
  }, [name, setDataCopy, data, filterByNumericValues, order]);

  return (
    <div>
      (
      <div className="header-div">
        <h1>Projeto Star Wars</h1>
        <label htmlFor="inputSearch">
          Busque por um planeta especifico
          <input
            value={ name }
            onChange={ ({ target }) => setName(target.value.toUpperCase()) }
            id="inputSearch"
            type="text"
            placeholder="Digite um planeta"
            data-testid="name-filter"
          />
        </label>
      </div>
      )
    </div>
  );
}

export default Header;

// (
//   <div>
//     { logoStars ? <Loading /> : (
//       <div className="header-div">
//         <h1>Projeto Star Wars</h1>
//         <label htmlFor="inputSearch">
//           Busque por um planeta especifico
//           <input
//             value={ name }
//             onChange={ ({ target }) => setName(target.value.toUpperCase()) }
//             id="inputSearch"
//             type="text"
//             placeholder="Digite um planeta"
//             data-testid="name-filter"
//           />
//         </label>
//       </div>
//     )}
//   </div>
// );
