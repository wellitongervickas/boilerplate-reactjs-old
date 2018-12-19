// @flow strict
import { call } from 'redux-saga/effects';

type Props = {
  service: Function,
  payload?: any
};

export default function* middlewareSagasUpdate(props: Props): any {
  // Create your sagas configurations before do something
  const request = yield call(props);
  return request;
}
