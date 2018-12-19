// @flow strict
import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../store';
import config from '../config';
import { RoutesInterface } from '../utils/interfaces/routes';
import { Header, Footer, ContentLoading } from './components';

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
        <div>
          <section>
            <React.Suspense fallback={<ContentLoading />}>
              <Header />
            </React.Suspense>
          </section>
          <section>
            <main>
              <Switch>
                {routesList.map(item => (
                  <Route key={item.key} {...item} />
                ))}
              </Switch>
            </main>
          </section>
          <section>
            <React.Suspense fallback={<ContentLoading />}>
              <Footer />
            </React.Suspense>
          </section>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
