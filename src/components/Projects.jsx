import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ProjObject } from '../constants';
import InfoComponent from './InfoComponent';

export default function({ match }) {
  const projArray = Object.keys(ProjObject);
  return (
    <>
      <h2>PROJECTS:</h2>
      <hr />
      <ul>
        {projArray.map(i => (
          <li key={i}>
            <Link to={match.url + i}>
              <InfoComponent message={ProjObject[i]} />
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Switch>
        {projArray.map(i => (
          <Route
            exact
            path={match.url + i}
            render={() => <InfoComponent message={ProjObject[i]} />}
            key={i}
          />
        ))}
        <Route render={() => <>Pick a project to view!</>} />
      </Switch>
    </>
  );
}
