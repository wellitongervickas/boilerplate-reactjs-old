// @flow strict
import Welcome from '../app/views/welcome';
import { RoutesInterface } from '../utils/interfaces/routes';

export default class AppRoutes {
  static getRoutes(): Array<RoutesInterface> {
    return [
      {
        key: 0,
        path: '/',
        exact: true,
        component: Welcome,
        name: 'home',
      },
    ];
  }

  static getUrl(name: string): Object {
    return this.getRoutes().map(item => item.name === name);
  }
}
