// @flow strict
import Welcome from '../app/views/welcome';
import { RoutesInterface } from '../utils/interfaces/routes';

export default class AppRoutes {
  static get list(): Array<RoutesInterface> {
    return [
      {
        key: 0,
        path: '/',
        exact: true,
        component: Welcome,
        name: 'welcome',
      },
    ];
  }

  static getUrl(name: string): Object {
    return this.list.map(item => item.name === name);
  }
}
