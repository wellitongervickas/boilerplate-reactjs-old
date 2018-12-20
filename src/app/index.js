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
    routesList: config.routes.list,
  };

  renderSections(): Array<any> {
    const { routesList } = this.state;
    return [
      <section key="header">
        <React.Suspense fallback={<ContentLoading />}>
          <Header />
        </React.Suspense>
      </section>,
      <section key="main">
        <main>
          <Switch>
            {routesList.map(item => (
              <Route key={item.key} {...item} />
            ))}
          </Switch>
        </main>
      </section>,
      <section key="footer">
        <React.Suspense fallback={<ContentLoading />}>
          <Footer />
        </React.Suspense>
      </section>,
    ];
  }

  render(): any {
    return (
      <ConnectedRouter history={history}>
        <div>{this.renderSections()}</div>
      </ConnectedRouter>
    );
  }
}

export default App;
