// @flow
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
      },
    ];
  }

  static getUrl(name: string): string {
    return name;
  }
}
