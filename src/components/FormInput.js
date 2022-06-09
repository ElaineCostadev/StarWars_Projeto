import React, { useContext } from 'react';
import FilterNumericContext from '../context/FilterNumericContext';

function FormInput() {
  const { column, setColumn,
    comparison, setComparison,
    value, setValue,
    filterByNumericValues, setFilterByNumericValues,
    booleanPopulation, setBooleanPopulation,
    booleanOrbital, setBooleanOrbital,
    booleanDiameter, setBooleanDiameter,
    booleanRotation, setBooleanRotation,
    booleanSurface, setBooleanSurface } = useContext(FilterNumericContext);

  const handleInputs = () => {
    const newObjFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    setFilterByNumericValues([...filterByNumericValues, newObjFilterByNumericValues]);
    switch (column) {
    case 'population':
      return setBooleanPopulation(false);
    case 'orbital_period':
      return setBooleanOrbital(false);
    case 'diameter':
      return setBooleanDiameter(false);
    case 'rotation_period':
      return setBooleanRotation(false);
    case 'surface_water':
      return setBooleanSurface(false);
    default:
      return true;
    }
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
            { booleanPopulation && <option>population</option> }
            { booleanOrbital && <option>orbital_period</option> }
            { booleanDiameter && <option>diameter</option> }
            { booleanRotation && <option>rotation_period</option> }
            { booleanSurface && <option>surface_water</option> }
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
