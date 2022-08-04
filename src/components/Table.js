import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import '../css/Table.css';

function Table() {
  const { dataCopy, logoStars } = useContext(TableContext);
  return (
    <div>
      { !logoStars && (
        <table className="table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Created</th>
              <th>Edited</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {
              dataCopy.map((eachPlanet) => (
                <tr key={ eachPlanet.name }>
                  <td data-testid="planet-name">{eachPlanet.name}</td>
                  <td>{eachPlanet.rotation_period}</td>
                  <td>{eachPlanet.orbital_period}</td>
                  <td>{eachPlanet.diameter}</td>
                  <td>{eachPlanet.climate}</td>
                  <td>{eachPlanet.gravity}</td>
                  <td>{eachPlanet.terrain}</td>
                  <td>{eachPlanet.surface_water}</td>
                  <td>{eachPlanet.population}</td>
                  <td>{eachPlanet.films.map((eachFilm) => eachFilm)}</td>
                  <td>{eachPlanet.created}</td>
                  <td>{eachPlanet.edited}</td>
                  <td>{eachPlanet.url}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      ) }

    </div>
  );
}

export default Table;
