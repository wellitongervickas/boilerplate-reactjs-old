// @flow strict

import { call } from 'redux-saga/effects';
import { Props } from './interface';

export default function* middlewareSagasUpdate(props: Props): any {
  // Create your sagas configurations before do something
  const request = yield call(props);
  return request;
}
