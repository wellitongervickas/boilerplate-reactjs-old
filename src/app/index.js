// @flow strict

import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { history } from '../store';
import config from '../config';
import { RoutesInterface } from '../utils/interfaces/routes';
import { Header, Footer, ContentLoading } from './components';
import { Props, State } from './interface';

class App extends React.Component<Props, State> {
  state = {
    routesList: config.routes.list,
  };

  renderRoutes = (): React.Node => {
    const { routesList } = this.state;
    return (
      <main>
        <Switch>
          {routesList.map((item: RoutesInterface) => (
            <Route key={item.key} {...item} />
          ))}
        </Switch>
      </main>
    );
  };

  renderSections = (): Array<any> => [
    <section key="header">
      <React.Suspense fallback={<ContentLoading />}>
        <Header />
      </React.Suspense>
    </section>,
    <section key="main">{this.renderRoutes()}</section>,
    <section key="footer">
      <React.Suspense fallback={<ContentLoading />}>
        <Footer />
      </React.Suspense>
    </section>,
  ];

  render = (): React.Node => (
    <ConnectedRouter history={history}>
      <div>{this.renderSections()}</div>
    </ConnectedRouter>
  );
}

export default App;
