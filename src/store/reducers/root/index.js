// @flow
import { ActionInterface } from '../../../utils/interfaces/action';

type State = { root: string };

const DEFAULT_STATE = {
  root: '',
};

export default function root(
  state: State = DEFAULT_STATE,
  action: ActionInterface,
) {
  switch (action.type) {
    case 'RESET_ROOT_STATE':
      return { ...state, root: action.payload };

    case 'SET_ROOT_STATE':
      return { ...state, root: action.payload };

    default:
      return { ...state };
  }
}
