// @flow
import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../store';
import config from '../config';
import { RoutesInterface } from '../utils/interfaces/routes';

type Props = {};

type State = {
  routesList: Array<RoutesInterface>
};

class App extends React.Component<Props, State> {
  state = {
    routesList: config.routes.getRoutes(),
  };

  render() {
    const { routesList } = this.state;

    return (
      <ConnectedRouter history={history}>
        <section>
          <main>
            <Switch>
              {routesList.map(item => (
                <Route key={item.key} {...item} />
              ))}
            </Switch>
          </main>
        </section>
      </ConnectedRouter>
    );
  }
}

export default App;
