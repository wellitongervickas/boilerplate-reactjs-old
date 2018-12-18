// @flow
import { call } from 'redux-saga/effects';

type Props = {
  service: any,
  payload?: any
};

export default function* middlewareSagasUpdate(props: Props): any {
  const request = yield call(props);
  return request;
}
