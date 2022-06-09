import React, { useContext } from 'react';
import FilterNumericContext from '../context/FilterNumericContext';

// mentoria com o Douglas para fazer esse array de options
const arryOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function FormInput() {
  const { column, setColumn,
    comparison, setComparison,
    value, setValue,
    filterByNumericValues, setFilterByNumericValues,
    options, setOptions } = useContext(FilterNumericContext);

  const handleInputs = () => {
    // console.log(options);
    const newObjFilterByNumericValues = {
      column,
      comparison,
      value,
    };
    // console.log(newObjFilterByNumericValues);
    setFilterByNumericValues([...filterByNumericValues, newObjFilterByNumericValues]);
    const filterOptions = options.filter((eachOptions) => eachOptions !== column);
    // filtro cada opção diferente do que está em column e seto o meu state Options
    setOptions(filterOptions);
    // seto tbm as columns com a primeira opção que tem disponivel no array filtrado
    setColumn(filterOptions[0]);
  /*     switch (column) {
    case POPULATION:
      return setBooleanPopulation(false);
    case ORBITAL_PERIOD:
      return setBooleanOrbital(false);
    case DIAMETER:
      return setBooleanDiameter(false);
    case ROTATION_PERIOD:
      return setBooleanRotation(false);
    case SURFACE_WATER:
      return setBooleanSurface(false);
    default:
      return true;
    } */
  };

  const deleteColumns = (columns) => {
    // recebo a coluna digitada por parametro
    // filtro dentro do array de objetos digitados e encontro o que for diferente do que foi recebido por parametro
    const filterColumnOptions = filterByNumericValues
      .filter((eachValues) => eachValues.column !== columns);
    // seto os valores com os valores que estao diferentes do que foi recebido
    setFilterByNumericValues(filterColumnOptions);
    // seto o meu array de options com tudo o que estava + o que foi recebido via parametro
    setOptions([...options, columns]);
  /*     switch (column) {
    case POPULATION:
      return setBooleanPopulation(true);
    case ORBITAL_PERIOD:
      return setBooleanOrbital(true);
    case DIAMETER:
      return setBooleanDiameter(true);
    case ROTATION_PERIOD:
      return setBooleanRotation(true);
    case SURFACE_WATER:
      return setBooleanSurface(true);
    default:
      return true;
    } */
  };

  const deleteAllFilters = () => {
    console.log('deletAllFilters');
    setFilterByNumericValues([]);
    setOptions(arryOptions);
    setColumn(arryOptions[0]);
  /* setBooleanPopulation(true);
    setBooleanOrbital(true);
    setBooleanDiameter(true);
    setBooleanRotation(true);
    setBooleanSurface(true); */
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
            { options.map((eachOption) => (
              <option
                key={ eachOption }
              >
                {eachOption}
              </option>
            ))}
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
          <div key={ `${eachFilter.column}-${index}` } data-testid="filter">
            <h5>
              {` ${eachFilter.column} ${eachFilter.comparison}  ${eachFilter.value} `}
            </h5>
            <button
              type="button"
              onClick={ () => deleteColumns(eachFilter.column) }
            >
              Delete
            </button>

          </div>
        ))
      }
      <button
        type="button"
        onClick={ deleteAllFilters }
        data-testid="button-remove-filters"
      >
        Remover filtros
      </button>
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

/*             { booleanPopulation && <option>population</option> }
            { booleanOrbital && <option>orbital_period</option> }
            { booleanDiameter && <option>diameter</option> }
            { booleanRotation && <option>rotation_period</option> }
            { booleanSurface && <option>surface_water</option> } */
