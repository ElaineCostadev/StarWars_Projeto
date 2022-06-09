import React, { useContext } from 'react';
import FilterNumericContext from '../context/FilterNumericContext';

function FormInput() {
  const { column, setColumn,
    comparison, setComparison,
    value, setValue,
    filterByNumericValues, setFilterByNumericValues } = useContext(FilterNumericContext);

  const handleInputs = () => {
    const newObjFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newObjFilterByNumericValues]);
    console.log(filterByNumericValues, 'filterByNumericValues');
  };

  return (
    <nav>
      <form>
        <label
          htmlFor="column-filter"
        >
          Filtrar pela coluna
          <select
            data-testid="column-filter"
            id="column-filter"
            name="column-filter"
            value={ column }
            onChange={ ({ target }) => setColumn(target.value) }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>

        <label
          htmlFor="comparison"
        >
          Operador
          <select
            data-testid="comparison-filter"
            name="comparison"
            id="comparison"
            value={ comparison }
            onChange={ ({ target }) => setComparison(target.value) }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>

        <label
          htmlFor="value-filter"
        >
          Filtro Valor
          <input
            id="value-filter"
            type="number"
            name="value-filter"
            value={ value }
            data-testid="value-filter"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>

        <button
          type="button"
          onClick={ handleInputs }
          data-testid="button-filter"
        >
          Filtrar
        </button>

      </form>
      {
        filterByNumericValues.map((eachFilter, index) => (
          <h5
            key={ `${eachFilter.column}-${index}` }
          >
            { ` ${eachFilter.column} ${eachFilter.comparison}  ${eachFilter.value} ` }
          </h5>
        ))
      }
    </nav>
  );
}

export default FormInput;

/*   useEffect(() => {
    const resultNumericValues = filterByNumericValues
      .reduce((totalInfo, filtered) => totalInfo
        .filter((eachFilter) => {
          switch (filtered.comparison) {
          case MAIOR_QUE:
            return eachFilter[filtered.column] > filtered.value;
          case MENOR_QUE:
            return eachFilter[filtered.column] < filtered.value;
          case IGUAL_A:
            return eachFilter[filtered.column] === filtered.value;
          default:
            return true;
          }
        }), dataCopy);

    setDataCopy(resultNumericValues);
  }, [setDataCopy, filterByNumericValues]); */
