import React, { useContext } from 'react';
import FilterNumericContext from '../context/FilterNumericContext';
import TableContext from '../context/TableContext';

// mentoria com o Douglas para fazer esse array de options
const arryOptions = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

function FormInput() {
  const { column, setColumn,
    comparison, setComparison,
    value, setValue,
    filterByNumericValues, setFilterByNumericValues,
    options, setOptions,
    columnSort, setColumnSort,
    sort, setSort } = useContext(FilterNumericContext);

  const { dataCopy, setDataCopy } = useContext(TableContext);

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
  };

  const deleteAllFilters = () => {
    console.log('deletAllFilters');
    setFilterByNumericValues([]);
    setOptions(arryOptions);
    setColumn(arryOptions[0]);
  };

  const handleOrder = () => {
    // mentoria Summer - Carlos salvador de todos nós!
    // fazendo um filtro com toda a coluna sem o unknown
    const withoutUnknown = dataCopy
      .filter((eachPlanets) => eachPlanets[columnSort] !== 'unknown');
      // fazendo um filtro apenas com unknown
    const onlyUnknown = dataCopy
      .filter((eachPlanets) => eachPlanets[columnSort] === 'unknown');

    // ordenando com o sort
    withoutUnknown.sort((a, b) => {
      if (sort === 'DESC') {
        return Number(b[columnSort]) - Number(a[columnSort]);
      }
      if (sort === 'ASC') {
        return Number(a[columnSort]) - Number(b[columnSort]);
      }
      return true;
    });
    // fazendo o novo array com as informações separadas, para juntar corretamente
    const newDataCopy = [...withoutUnknown, ...onlyUnknown];
    // newDataCopy.forEach((eachPlanet) => console.log(eachPlanet[columnSort]));
    setDataCopy(newDataCopy);
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

      <label htmlFor="column-sort">
        Ordenar
        <select
          data-testid="column-sort"
          id="column-sort"
          name="column-sort"
          value={ columnSort }
          onChange={ ({ target }) => setColumnSort(target.value) }
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

      <label htmlFor="input-asc">
        Ascendente
        <input
          name="input-radio"
          type="radio"
          id="input-asc"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ ({ target }) => setSort(target.value) }
        />
      </label>
      <label htmlFor="input-desc">
        Descendente
        <input
          name="input-radio"
          type="radio"
          id="input-desc"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ ({ target }) => setSort(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleOrder }
      >
        Ordenar
      </button>

    </nav>
  );
}

export default FormInput;
